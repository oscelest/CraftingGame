import IPC from "../../typings/IPC";
import BaseType from "../entity/BaseType";

const Methods: IPC.Backend.Handlers["base_type"] = {
  async initialize(): Promise<boolean> {
    return !!await (await import("../data/BaseType")).default;
  },
  async find(): Promise<BaseType[]> {
    return BaseType.find();
  },
};

export default Methods;
