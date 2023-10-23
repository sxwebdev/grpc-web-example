import Hello, { IHello } from "./hello";

interface IAPI {
  Hello: IHello;
}

const API: IAPI = {
  Hello: Hello(),
};

export default API;
