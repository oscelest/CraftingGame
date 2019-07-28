import * as TypeORM from "typeorm";
import BaseType from "./BaseType";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class ItemClass {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.OneToMany(type => BaseType, unique => unique.item_class)
  base_types: BaseType[];
  
  constructor(name: string) {
    this.name = name;
  }
  
  public static find() {
    return TypeORM.getManager().find(ItemClass);
  }
  
}
