import IPC from "../../typings/IPC";
import ItemClass from "../entity/ItemClass";

const Methods: IPC.Backend.Handlers["item_class"] = {
  async find(): Promise<ItemClass[]> {
    return ItemClass.find();
  },
};

export default Methods;
