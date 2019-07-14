import IPC from "../../typings/IPC";
import Folder from "../entity/Folder";
import * as Electron from "electron";

const Methods: IPC.Backend.Handlers["folder"] = {
  async open(path: string): Promise<void> {
    Electron.shell.openItem(path);
  },
  async find(): Promise<Folder[]> {
    return await Folder.find();
  },
  async findById(folder_id: string): Promise<Folder | void> {
    return await Folder.findById(folder_id);
  },
  async create(): Promise<Folder[] | void> {
    return await Folder.create(this.frameId);
  },
  async remove(folder_id: string): Promise<string | void> {
    return await Folder.remove(folder_id);
  },
  //
  // async findUncataloguedFiles(folder_id: string): Promise<File[]> {
  //   return await Folder.findUncataloguedFiles(folder_id);
  // },
};

export default Methods;
