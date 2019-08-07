import IPC from "../../typings/IPC";
import ItemClasses from "../data/ItemClass";
import ItemAffixes from "../data/ItemAffix";
import BaseTypes from "../data/BaseType";
import Prophecies from "../data/Prophecy";
import Uniques from "../data/Unique";

const Methods: IPC.Backend.Handlers["count"] = {
  async item_class() {
    return ItemClasses.length;
  },
  async item_affix() {
    return ItemAffixes.length;
  },
  async base_type() {
    return BaseTypes.length;
  },
  async prophecy() {
    return Prophecies.length;
  },
  async unique() {
    return Uniques.length;
  },

};

export default Methods;
