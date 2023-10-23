import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { BASE_URL } from "./constants";

import { Timestamp } from "./proto/google/protobuf/timestamp";

import {
  notification,
  capitalizeFirstLetter,
  removeKeystoneIds,
} from "@tkcrm/ui";

export type convertModelParams = {
  key: string;
  model?: any;
  fn?: (params: any) => any;
};

export type setParamsOptions = {
  convert_keystone_models?: convertModelParams[];
  convert_to_pb?: convertModelParams[];
  without_method?: boolean;
  remove_ks_ids?: boolean;
};

export const setParams = (
  target: any,
  params: any,
  options?: setParamsOptions
) => {
  try {
    if (options?.remove_ks_ids) {
      params = removeKeystoneIds(params);
    }
    for (const [key, value] of Object.entries<any>(params || {})) {
      const method = "set" + capitalizeFirstLetter(key);

      if (!options?.without_method && !(method in target)) {
        continue;
      }

      let _value = value;
      if (value?.seconds !== undefined) {
        _value = Timestamp.toDate(value).toISOString();
      }
      if (value instanceof Date) {
        _value = Timestamp.fromDate(value);
      }

      const convert_keystone_model = options?.convert_keystone_models?.find(
        (item) => item.key == key
      );
      if (convert_keystone_model) {
        _value = convert_keystone_model.fn
          ? convert_keystone_model.fn(_value)
          : new convert_keystone_model.model(_value);
      }

      const convert_to_pb = options?.convert_to_pb?.find(
        (item) => item.key == key
      );
      if (convert_to_pb) {
        if (convert_to_pb.fn) {
          _value = convert_to_pb.fn(_value);
        } else {
          const res = new convert_to_pb.model();
          setParams(res, _value);
          _value = res;
        }
      }

      if (options?.without_method) {
        target[key] = _value;
      } else {
        target[method](_value);
      }
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export const getMetaData = () => {
  const meta_data: Record<string, string> = {};
  if (localStorage.getItem("accessToken")) {
    meta_data.authorization = `bearer ${localStorage.getItem("accessToken")}`;
  }
  return meta_data;
};

export const getServiceOptions = () => ({ meta: getMetaData() });

export const handleError = (error: Error) => {
  notification.error(null, error.message, {
    duration: 3000,
  });
};

export const handleRequest = <T>(
  serviceMethod: any,
  request: any
): Promise<T> => {
  return new Promise((r, j) => {
    serviceMethod(request, getMetaData(), (err: Error, response: any) => {
      if (err) {
        handleError(err);
        return j(err);
      }
      return r(response.toObject());
    });
  });
};

export const grpcWebTransport = new GrpcWebFetchTransport({
  baseUrl: BASE_URL,
});
