import { ServiceClient } from "./proto/example.client";
import { RpcRequest, RpcResponse } from "./proto/example";
import { grpcWebTransport, getServiceOptions } from "./utils";

export const helloService = new ServiceClient(grpcWebTransport);

export interface IHello {
  hello(params: RpcRequest): Promise<RpcResponse>;
}

export default (): IHello => ({
  async hello(params) {
    const { response } = await helloService.rpc(params, getServiceOptions());
    return response;
  },
});
