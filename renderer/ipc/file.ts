import _ from "lodash";
import File from "../../main/entity/File";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";

const Methods: IPC.Frontend.Handlers["file"] = {
  find(files: File[]): void {
    this.setState(_.merge({}, this.state, {files: {catalogued: _.reduce(files, (result, file) => _.set(result, [file.folder.id, file.id], file) && result, {})}} as Global.State));
  },
  findUncatalogued(files: File[]): void {
    this.setState(_.merge({}, this.state, {files: {uncatalogued: _.reduce(files, (result, file) => _.set(result, [file.folder.id, file.id], file) && result, {})}} as Global.State));
  },
};

export default Methods;
