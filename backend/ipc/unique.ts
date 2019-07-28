import IPC from "../../typings/IPC";
import Unique from "../entity/Unique";

const Methods: IPC.Backend.Handlers["unique"] = {
  async initialize(): Promise<boolean> {
    return !!await (await import("../data/Unique")).default;
  },
  async find(): Promise<Unique[]> {
    return await Unique.find();
  },
};

export default Methods;
