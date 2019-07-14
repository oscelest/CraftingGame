import File from "../main/entity/File";
import Folder from "../main/entity/Folder";
import Tag from "../main/entity/Tag";

export namespace Global {
  
  export interface Props {
    global: State
  }
  
  export interface State {
    ready: boolean
    tags: {[tag_id: string]: Tag}
    files: {
      catalogued: {[folder_id: string]: {[file_id: string]: File}}
      uncatalogued: {[folder_id: string]: {[file_id: string]: File}}
    }
    folders: {[folder_id: string]: Folder}
    flag_maximized: boolean
  }
  
}
