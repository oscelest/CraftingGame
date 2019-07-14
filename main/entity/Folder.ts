import * as Electron from "electron";
import * as _ from "lodash";
import * as TypeORM from "typeorm";
import File from "./File";

@TypeORM.Entity()
@TypeORM.Unique("full_path", ["path", "name"])
export default class Folder {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  public id: string;
  
  @TypeORM.Column()
  public name: string;
  
  @TypeORM.Column()
  public path: string;
  
  @TypeORM.OneToMany(() => File, image => image.extension)
  public images: File[];
  
  @TypeORM.CreateDateColumn()
  public readonly time_created: Date;
  
  @TypeORM.UpdateDateColumn()
  public readonly time_updated: Date;
  
  public static async find(): Promise<Folder[]> {
    return await TypeORM.getManager().find(Folder);
  }
  
  public static async findById(folder_id: string): Promise<Folder | void> {
    return await TypeORM.getManager().findOne(Folder, {where: {id: folder_id}, relations: ["images"]}) || undefined;
  }
  
  public static async create(frame_id: number): Promise<Folder[] | void> {
    const folder_paths = Electron.dialog.showOpenDialog(Electron.BrowserWindow.fromId(frame_id), {
      title:       "Select folder to add",
      defaultPath: Electron.app.getPath("home"),
      properties:  ["openDirectory", "multiSelections", "createDirectory"],
    });
    if (folder_paths) {
      return _.filter(await Promise.all(folder_paths.map(async path => {
        const folder = new Folder();
        folder.path = path;
        folder.name = (path.match(/[\\/][^\\\/]+$/) || [path])[0];
        try {
          return await TypeORM.getManager().save(Folder, folder);
        }
        catch (e) {
          return undefined;
        }
      }))) as Folder[];
    }
    return undefined;
  }
  
  public static async remove(folder_id: string): Promise<string | void> {
    return await TypeORM.getManager().remove(await TypeORM.getManager().findOne(Folder, {where: {id: folder_id}})) ? folder_id : undefined;
  }
  
}
