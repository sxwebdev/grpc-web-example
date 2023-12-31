// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies
// @generated from protobuf file "example.proto" (package "hello", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Service } from "./example";
import type { StreamResponse } from "./example";
import type { StreamRequest } from "./example";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { RpcResponse } from "./example";
import type { RpcRequest } from "./example";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service hello.Service
 */
export interface IServiceClient {
  /**
   * @generated from protobuf rpc: Rpc(hello.RpcRequest) returns (hello.RpcResponse);
   */
  rpc(
    input: RpcRequest,
    options?: RpcOptions
  ): UnaryCall<RpcRequest, RpcResponse>;
  /**
   * @generated from protobuf rpc: Stream(hello.StreamRequest) returns (stream hello.StreamResponse);
   */
  stream(
    input: StreamRequest,
    options?: RpcOptions
  ): ServerStreamingCall<StreamRequest, StreamResponse>;
}
/**
 * @generated from protobuf service hello.Service
 */
export class ServiceClient implements IServiceClient, ServiceInfo {
  typeName = Service.typeName;
  methods = Service.methods;
  options = Service.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * @generated from protobuf rpc: Rpc(hello.RpcRequest) returns (hello.RpcResponse);
   */
  rpc(
    input: RpcRequest,
    options?: RpcOptions
  ): UnaryCall<RpcRequest, RpcResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<RpcRequest, RpcResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * @generated from protobuf rpc: Stream(hello.StreamRequest) returns (stream hello.StreamResponse);
   */
  stream(
    input: StreamRequest,
    options?: RpcOptions
  ): ServerStreamingCall<StreamRequest, StreamResponse> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<StreamRequest, StreamResponse>(
      "serverStreaming",
      this._transport,
      method,
      opt,
      input
    );
  }
}
