import _ from "lodash";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {application} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["initialize"] = {
  base_type(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {base_type: state}}} as Global.State));
    application.prepare.resources();
  },
  item_class(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {item_class: state}}} as Global.State));
    application.prepare.resources();
  },
  prophecy(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {prophecy: state}}} as Global.State));
    application.prepare.resources();
  },
  unique(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {unique: state}}} as Global.State));
    application.prepare.resources();
  },
};

export default Methods;
