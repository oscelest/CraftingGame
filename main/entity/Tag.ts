import * as TypeORM from "typeorm";
import File from "./File";

@TypeORM.Entity()
@TypeORM.Unique(["name"])
export default class Tag {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  public id: string;
  
  @TypeORM.Column()
  public name: string;
  
  @TypeORM.ManyToMany(() => File )
  @TypeORM.JoinTable()
  public images: File[];
  
  @TypeORM.CreateDateColumn()
  public readonly time_created: Date;
  
  @TypeORM.UpdateDateColumn()
  public readonly time_updated: Date;
  
}
