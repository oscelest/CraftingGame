import _ from "lodash";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {application} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["database"] = {
  connect(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {connect: {database: state}}} as Global.State));
    application.prepare.initializations();
  },
};

export default Methods;
