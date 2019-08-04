import * as TypeORM from "typeorm";
import ItemClass from "./ItemClass";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class ItemAffix {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.ManyToMany(() => ItemClass, item_class => item_class.item_affixes)
  @TypeORM.JoinTable({name: "item_class_affix"})
  item_classes: ItemClass[];
  
  constructor(name: string, item_classes: ItemClass[]) {
    this.name = name;
    this.item_classes = item_classes;
  }
  
}
