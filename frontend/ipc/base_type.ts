import _ from "lodash";
import BaseType from "../../backend/entity/BaseType";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {application} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["base_type"] = {
  initialize(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {base_type: state}}} as Global.State));
    application.prepare.resources();
  },
  
  find(base_types: BaseType[]): void {
    this.setState(_.merge({}, this.state, {
      ready: {find: {base_type: base_types.length > 0}},
      data:  {base_type: _.reduce(base_types, (r, v) => _.set(r, v.item_class.name, [...r[v.item_class.name] || [], v]), this.state.data.base_type)},
    } as Global.State));
  },
};

export default Methods;
