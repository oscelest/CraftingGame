import * as TypeORM from "typeorm";
import Entity from "../classes/Entity";
import BaseType from "./BaseType";
import ItemAffix from "./ItemAffix";
import Prophecy from "./Prophecy";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class ItemClass extends Entity{
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.OneToMany(() => BaseType, base_type => base_type.item_class)
  base_types: BaseType[];
  
  @TypeORM.OneToMany(() => Prophecy, prophecy => prophecy.item_class)
  prophecies: Prophecy[];
  
  @TypeORM.ManyToMany(() => ItemAffix, item_affix => item_affix.item_classes, {cascade: ["insert", "update"]})
  item_affixes: ItemAffix[];
  
  constructor(name: string) {
    super();
    this.name = name;
  }
  
  public static async find() {
    return TypeORM.getManager().find(ItemClass, {relations: ["item_affixes"]});
  }
  
}
