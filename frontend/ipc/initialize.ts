import _ from "lodash";
import BaseType from "../../backend/entity/BaseType";
import ItemAffix from "../../backend/entity/ItemAffix";
import ItemClass from "../../backend/entity/ItemClass";
import Prophecy from "../../backend/entity/Prophecy";
import Unique from "../../backend/entity/Unique";
import IPC from "../../typings/IPC";
import {ipc} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["initialize"] = {
  item_class(element: ItemClass): void {
    if (!element) return ipc.send("message", "count", "item_affix", []);
    this.setState(_.merge({}, this.state, {data: {item_class: _.concat(this.state.data.item_class || [], element)}}));
    ipc.send("message", "initialize", "item_class", []);
  },
  item_affix(element: ItemAffix): void {
    if (!element) return ipc.send("message", "count", "base_type", []);
    this.setState(_.merge({}, this.state, {data: {item_affix: _.concat(this.state.data.item_affix || [], element)}}));
    ipc.send("message", "initialize", "item_affix", []);
  },
  base_type(element: BaseType): void {
    if (!element) {
      ipc.send("message", "count", "unique", []);
      ipc.send("message", "count", "prophecy", []);
      return;
    }
    this.setState(_.merge({}, this.state, {data: {base_type: _.concat(this.state.data.base_type || [], element)}}));
    ipc.send("message", "initialize", "base_type", []);
  },
  unique(element: Unique): void {
    if (!element) return;
    this.setState(_.merge({}, this.state, {data: {unique: _.concat(this.state.data.unique || [], element)}}));
    ipc.send("message", "initialize", "unique", []);
  },
  prophecy(element: Prophecy): void {
    if (!element) return;
    this.setState(_.merge({}, this.state, {data: {prophecy: _.concat(this.state.data.prophecy || [], element)}}));
    ipc.send("message", "initialize", "prophecy", []);
  },
  
  
};

export default Methods;
