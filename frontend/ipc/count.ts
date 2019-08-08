import _ from "lodash";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {ipc} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["count"] = {
  item_class(count): void {
    this.setState(_.merge({}, this.state, {data_size: {item_class: count}} as Global.State));
    ipc.send("message", "initialize", "item_class", []);
  },
  item_affix(count): void {
    this.setState(_.merge({}, this.state, {data_size: {item_affix: count}} as Global.State));
    ipc.send("message", "initialize", "item_affix", []);
  },
  base_type(count): void {
    this.setState(_.merge({}, this.state, {data_size: {base_type: count}} as Global.State));
    ipc.send("message", "initialize", "base_type", []);
  },
  unique(count): void {
    this.setState(_.merge({}, this.state, {data_size: {unique: count}} as Global.State));
    ipc.send("message", "initialize", "unique", []);
  },
  prophecy(count): void {
    this.setState(_.merge({}, this.state, {data_size: {prophecy: count}} as Global.State));
    ipc.send("message", "initialize", "prophecy", []);
  },
};

export default Methods;
