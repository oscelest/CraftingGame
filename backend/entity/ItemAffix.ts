import * as TypeORM from "typeorm";
import Entity from "../classes/Entity";
import ItemClass from "./ItemClass";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class ItemAffix extends Entity {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: string;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.Column()
  description: string;
  
  @TypeORM.ManyToMany(() => ItemClass, item_class => item_class.item_affixes, {cascade: ["insert", "update"]})
  @TypeORM.JoinTable({name: "item_class_affix"})
  item_classes: ItemClass[];
  
  constructor(name: string, description: string, item_classes: ItemClass[]) {
    super();
    this.name = name;
    this.description = description;
    this.item_classes = item_classes;
  }
  
  public static async find(): Promise<ItemAffix[]> {
    return await TypeORM.getManager().find(ItemAffix, {relations: ["item_classes"]});
  }
  
}
