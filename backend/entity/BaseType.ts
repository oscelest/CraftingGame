import * as TypeORM from "typeorm";
import ItemClass from "./ItemClass";
import Unique from "./Unique";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class BaseType {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.ManyToOne(type => ItemClass, item_class => item_class.base_types)
  @TypeORM.JoinColumn({name: "item_class"})
  item_class: ItemClass;
  
  @TypeORM.OneToMany(type => Unique, unique => unique.base_type)
  uniques: Unique[];
  
  constructor(name: string, item_class: ItemClass) {
    this.name = name;
    this.item_class = item_class;
  }
  
  public static async findByItemClass(item_class: string): Promise<BaseType[]> {
    const item_class_entity = await TypeORM.getManager().findOne(ItemClass, {where: {name: item_class}})
    if (!item_class_entity) throw new Error("Item Class doesn't exist.");
    return await TypeORM.getManager().find(BaseType, {where: {item_class: item_class_entity}, relations: ["item_class"]});
  }
  
}
