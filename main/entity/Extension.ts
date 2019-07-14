import * as TypeORM from "typeorm";
import File from "./File";

@TypeORM.Entity()
@TypeORM.Unique(["name"])
@TypeORM.Unique(["mime"])
export default class Extension {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  public id: string;
  
  @TypeORM.Column()
  public name: string;
  
  @TypeORM.Column()
  public mime: string;
  
  @TypeORM.OneToMany(() => File, image => image.extension)
  public images: File[];
  
  @TypeORM.CreateDateColumn()
  public readonly time_created: Date;
  
  @TypeORM.UpdateDateColumn()
  public readonly time_updated: Date;
  
}
