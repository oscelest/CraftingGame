import _ from "lodash";
import Folder from "../../main/entity/Folder";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";

const Methods: IPC.Frontend.Handlers["folder"] = {
  find(folders: Folder[]): void {
    this.setState(_.merge({}, this.state, {folders: _.reduce(folders, (result, folder) => _.set(result, folder.id, folder), {})} as Global.State));
  },
  create(folders: Folder[]): void {
    this.setState(_.merge({}, this.state, {folders: _.reduce(folders, (result, folder) => _.set(result, folder.id, folder), {})} as Global.State));
  },
  remove(id: string): void {
    console.log(this.state.folders, _.omit(this.state.folders, id));
    this.setState(_.assign({}, this.state, {folders: _.omit(this.state.folders, id)} as Global.State));
  },
};

export default Methods;
