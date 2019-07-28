import _ from "lodash";
import Unique from "../../backend/entity/Unique";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {application} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["unique"] = {
  initialize(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {unique: state}}} as Global.State));
    application.prepare.resources();
  },
  
  find(uniques: Unique[]): void {
    this.setState(_.merge({}, this.state, {
      ready: {find: {unique: uniques.length > 0}},
      data:  {unique: _.reduce(uniques, (r, v) => _.set(r, v.base_type.name, [...r[v.base_type.name] || [], v]), this.state.data.unique)},
    } as Global.State));
  },
};

export default Methods;
