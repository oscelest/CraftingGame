import IPC from "../../typings/IPC";
import BaseType from "../entity/BaseType";

const Methods: IPC.Backend.Handlers["base_type"] = {
  async findByItemClass(item_class: string): Promise<BaseType[]> {
    return BaseType.findByItemClass(item_class);
  },
};

export default Methods;
