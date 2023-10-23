// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies
// @generated from protobuf file "hello.proto" (package "hello", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { HelloService } from "./hello";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HelloResponse } from "./hello";
import type { HelloRequest } from "./hello";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service hello.HelloService
 */
export interface IHelloServiceClient {
  /**
   * @generated from protobuf rpc: Hello(hello.HelloRequest) returns (hello.HelloResponse);
   */
  hello(
    input: HelloRequest,
    options?: RpcOptions
  ): UnaryCall<HelloRequest, HelloResponse>;
}
/**
 * @generated from protobuf service hello.HelloService
 */
export class HelloServiceClient implements IHelloServiceClient, ServiceInfo {
  typeName = HelloService.typeName;
  methods = HelloService.methods;
  options = HelloService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * @generated from protobuf rpc: Hello(hello.HelloRequest) returns (hello.HelloResponse);
   */
  hello(
    input: HelloRequest,
    options?: RpcOptions
  ): UnaryCall<HelloRequest, HelloResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<HelloRequest, HelloResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
}