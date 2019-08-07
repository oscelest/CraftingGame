import _ from "lodash";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {ipc} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["database"] = {
  connect(state: boolean): void {
    setTimeout(() => {
      this.setState(_.merge({}, this.state, {connections: {database: state}} as Global.State));
      ipc.send("message", "count", "item_class", []);
    }, 1000)
  },
};

export default Methods;
