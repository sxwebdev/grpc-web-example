// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies
// @generated from protobuf file "hello.proto" (package "hello", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * Hello
 *
 * @generated from protobuf message hello.HelloRequest
 */
export interface HelloRequest {
  /**
   * @generated from protobuf field: string text = 1;
   */
  text: string;
}
/**
 * @generated from protobuf message hello.HelloResponse
 */
export interface HelloResponse {
  /**
   * @generated from protobuf field: string response = 1;
   */
  response: string;
  /**
   * @generated from protobuf field: google.protobuf.Timestamp date = 11;
   */
  date?: Timestamp;
}
// @generated message type with reflection information, may provide speed optimized methods
class HelloRequest$Type extends MessageType<HelloRequest> {
  constructor() {
    super("hello.HelloRequest", [
      { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<HelloRequest>): HelloRequest {
    const message = { text: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<HelloRequest>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: HelloRequest
  ): HelloRequest {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string text */ 1:
          message.text = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: HelloRequest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string text = 1; */
    if (message.text !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.text);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message hello.HelloRequest
 */
export const HelloRequest = new HelloRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HelloResponse$Type extends MessageType<HelloResponse> {
  constructor() {
    super("hello.HelloResponse", [
      { no: 1, name: "response", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 11, name: "date", kind: "message", T: () => Timestamp },
    ]);
  }
  create(value?: PartialMessage<HelloResponse>): HelloResponse {
    const message = { response: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<HelloResponse>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: HelloResponse
  ): HelloResponse {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string response */ 1:
          message.response = reader.string();
          break;
        case /* google.protobuf.Timestamp date */ 11:
          message.date = Timestamp.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.date
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: HelloResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string response = 1; */
    if (message.response !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.response);
    /* google.protobuf.Timestamp date = 11; */
    if (message.date)
      Timestamp.internalBinaryWrite(
        message.date,
        writer.tag(11, WireType.LengthDelimited).fork(),
        options
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message hello.HelloResponse
 */
export const HelloResponse = new HelloResponse$Type();
/**
 * @generated ServiceType for protobuf service hello.HelloService
 */
export const HelloService = new ServiceType("hello.HelloService", [
  { name: "Hello", options: {}, I: HelloRequest, O: HelloResponse },
]);