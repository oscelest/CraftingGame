import * as TypeORM from "typeorm";
import ItemClass from "./ItemClass";
import Unique from "./Unique";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class Prophecy {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.ManyToOne(() => ItemClass, item_class => item_class.base_types)
  @TypeORM.JoinColumn({name: "item_class"})
  item_class: ItemClass;
  
  @TypeORM.OneToMany(() => Unique, unique => unique.base_type)
  uniques: Unique[];
  
  constructor(name: string, item_class: ItemClass) {
    this.name = name;
    this.item_class = item_class;
  }
  
  public static async find(): Promise<Prophecy[]> {
    return await TypeORM.getManager().find(Prophecy, {relations: ["item_class"]});
  }
  
}
