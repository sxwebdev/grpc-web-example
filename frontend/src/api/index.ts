import Hello, { IHello } from "./grpc";

interface IAPI {
  Hello: IHello;
}

const API: IAPI = {
  Hello: Hello(),
};

export default API;
