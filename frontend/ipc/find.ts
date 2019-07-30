import _ from "lodash";
import BaseType from "../../backend/entity/BaseType";
import ItemClass from "../../backend/entity/ItemClass";
import Prophecy from "../../backend/entity/Prophecy";
import Unique from "../../backend/entity/Unique";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";

const Methods: IPC.Frontend.Handlers["find"] = {
  base_type(base_types: BaseType[]): void {
    this.setState(_.merge({}, this.state, {
      ready: {find: {base_type: base_types.length > 0}},
      data:  {base_type: _.reduce(base_types, (r, v) => _.set(r, v.item_class.name, [...r[v.item_class.name] || [], v]), this.state.data.base_type)},
    } as Global.State));
  },
  item_class(item_classes: ItemClass[]): void {
    this.setState(_.merge({}, this.state, {data: {item_class: item_classes}, ready: {find: {item_class: item_classes.length > 0}}} as Global.State));
  },
  prophecy(prophecies: Prophecy[]): void {
    this.setState(_.merge({}, this.state, {data: {prophecy: prophecies}, ready: {find: {prophecy: prophecies.length > 0}}} as Global.State));
  },
  unique(uniques: Unique[]): void {
    this.setState(_.merge({}, this.state, {
      ready: {find: {unique: uniques.length > 0}},
      data:  {unique: _.reduce(uniques, (r, v) => _.set(r, v.base_type.name, [...r[v.base_type.name] || [], v]), this.state.data.unique)},
    } as Global.State));
  },
};

export default Methods;
