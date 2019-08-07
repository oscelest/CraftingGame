import IPC from "../../typings/IPC";
import ItemClasses from "../data/ItemClass";
import ItemAffixes from "../data/ItemAffix";
import BaseTypes from "../data/BaseType";
import Prophecies from "../data/Prophecy";
import Uniques from "../data/Unique";
import BaseType from "../entity/BaseType";
import ItemAffix from "../entity/ItemAffix";
import ItemClass from "../entity/ItemClass";
import Prophecy from "../entity/Prophecy";
import Unique from "../entity/Unique";

const Methods: IPC.Backend.Handlers["initialize"] = {
  async item_class() {
    const element = ItemClasses.pop() as (() => Promise<ItemClass>);
    return element ? await element() : null;
  },
  async base_type() {
    const element = BaseTypes.pop() as (() => Promise<BaseType>);
    return element ? await element() : null;
  },
  async prophecy() {
    const element = Prophecies.pop() as (() => Promise<Prophecy>);
    return element ? await element() : null;
  },
  async unique() {
    const element = Uniques.pop() as (() => Promise<Unique>);
    return element ? await element() : null;
  },
  async item_affix() {
    const element = ItemAffixes.pop() as (() => Promise<ItemAffix>);
    return element ? await element() : null;
  },
};

export default Methods;
