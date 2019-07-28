import _ from "lodash";
import BaseType from "../../backend/entity/BaseType";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";

const Methods: IPC.Frontend.Handlers["base_type"] = {
  findByItemClass(base_types: BaseType[]): void {
    const set = {} as {[item_class: string]: BaseType[]};
    _.each(base_types, base_type => {
      if (!set[base_type.item_class.name]) set[base_type.item_class.name] = [];
      set[base_type.item_class.name].push(base_type);
    });
    this.setState(_.merge({}, this.state, {base_types: set}) as Global.State);
  },
};

export default Methods;
