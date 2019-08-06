import _ from "lodash";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {application, ipc} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["initialize"] = {
  item_class(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {item_class: state}}} as Global.State));
    ipc.send("message", "initialize", "base_type", []);
    ipc.send("message", "initialize", "item_affix", []);
  },
  base_type(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {base_type: state}}} as Global.State));
    ipc.send("message", "initialize", "unique", []);
    ipc.send("message", "initialize", "prophecy", []);
  },
  prophecy(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {prophecy: state}}} as Global.State));
    application.prepare.resources();
  },
  unique(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {unique: state}}} as Global.State));
    application.prepare.resources();
  },
  item_affix(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {item_affix: state}}} as Global.State));
    application.prepare.resources();
  },
};

export default Methods;
