import IPC from "../../typings/IPC";
import Prophecy from "../entity/Prophecy";
import Unique from "../entity/Unique";
import ItemClass from "../entity/ItemClass";
import BaseType from "../entity/BaseType";

const Methods: IPC.Backend.Handlers["find"] = {
  async base_type(): Promise<BaseType[]> {
    return BaseType.find();
  },
  async item_class(): Promise<ItemClass[]> {
    return ItemClass.find();
  },
  async prophecy(): Promise<Prophecy[]> {
    return Prophecy.find();
  },
  async unique(): Promise<Unique[]> {
    return Unique.find();
  },
};

export default Methods;
