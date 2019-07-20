import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import Filter from "../classes/Filter";
import _ from "lodash";

const Methods: IPC.Frontend.Handlers["filter"] = {
  load(filter: string): void {
    this.setState(_.merge({}, this.state, {filter: new Filter(filter)}) as Global.State)
  },
};

export default Methods;
