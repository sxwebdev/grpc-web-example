import { HelloServiceClient } from "./proto/hello.client";
import { HelloRequest, HelloResponse } from "./proto/hello";
import { grpcWebTransport, getServiceOptions } from "./utils";

const service = new HelloServiceClient(grpcWebTransport);

export interface IHello {
  hello(params: HelloRequest): Promise<HelloResponse>;
}

export default (): IHello => ({
  async hello(params) {
    const { response } = await service.hello(params, getServiceOptions());
    return response;
  },
});
