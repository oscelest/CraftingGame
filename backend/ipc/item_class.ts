import IPC from "../../typings/IPC";
import ItemClass from "../entity/ItemClass";

const Methods: IPC.Backend.Handlers["item_class"] = {
  async initialize(): Promise<boolean> {
    return !!await (await import("../data/ItemClass")).default;
  },
  async find(): Promise<ItemClass[]> {
    return ItemClass.find();
  },
};

export default Methods;
