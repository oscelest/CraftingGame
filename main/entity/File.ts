import * as fileType from "file-type";
import * as fs from "fs-extra";
import * as _ from "lodash";
import * as path from "path";
import * as TypeORM from "typeorm";
import Extension from "./Extension";
import Folder from "./Folder";
import Tag from "./Tag";

@TypeORM.Entity()
export default class File {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  public id: string;
  
  @TypeORM.Column()
  public name: string;
  
  @TypeORM.ManyToOne(() => Folder, path => path.images)
  @TypeORM.JoinColumn({name: "folder"})
  public folder: Folder;
  
  @TypeORM.ManyToOne(() => Extension, extension => extension.images)
  @TypeORM.JoinColumn({name: "extension"})
  public extension: Extension;
  
  @TypeORM.ManyToMany(() => Tag)
  @TypeORM.JoinTable()
  public tags: Tag[];
  
  @TypeORM.CreateDateColumn()
  public readonly time_created: Date;
  
  @TypeORM.UpdateDateColumn()
  public readonly time_updated: Date;
  
  public static async findUncatalogued(folder_id: string, start: number) {
    const folder = await TypeORM.getManager().findOne(Folder, {where: {id: folder_id}});
    
    if (!folder) return [];
    const files = await Promise.all((await fs.readdir(folder.path)).map(async file => {
      
      const stats = await fs.stat(path.resolve(folder.path, file));
      if (!stats.isFile() || stats.size < fileType.minimumBytes) return null;
      
      const file_type = (await fileType.stream(fs.createReadStream(path.resolve(folder.path, file)))).fileType || {mime: "", ext: ""};
      if (!file_type.mime.match(/^(?:image|video)/)) return null;
      
      let extension = await TypeORM.getManager().findOne(Extension, {where: {name: file_type.ext, mime: file_type.mime}});
      if (!extension) {
        const extension = new Extension();
        extension.name = file_type.ext;
        extension.mime = file_type.mime;
        await TypeORM.getManager().save(Extension, extension);
      }
      
      return {id: file, folder: folder, extension: extension} as File;
    }));
    return _.drop(_.filter(files), start);
  }
  
}
