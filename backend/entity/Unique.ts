import * as TypeORM from "typeorm";
import Entity from "../classes/Entity";
import BaseType from "./BaseType";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class Unique extends Entity {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.ManyToOne(() => BaseType, base_type => base_type.uniques)
  @TypeORM.JoinColumn({name: "base_type"})
  base_type: BaseType;
  
  constructor(name: string, base_type: BaseType) {
    super();
    this.name = name;
    this.base_type = base_type;
  }
  
  public static async find() {
    return await TypeORM.getManager().find(Unique, {relations: ["base_type"]});
  }
  
}
