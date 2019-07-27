import * as TypeORM from "typeorm";
import BaseType from "./BaseType";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class Unique {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.ManyToOne(type => BaseType, base_type => base_type.uniques)
  @TypeORM.JoinColumn({name: "base_type"})
  base_type: BaseType;
  
  constructor(name: string, base_type: BaseType) {
    this.name = name;
    this.base_type = base_type;
  }
  
}
