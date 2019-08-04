import * as TypeORM from "typeorm";
import BaseType from "./BaseType";
import ItemAffix from "./ItemAffix";
import Prophecy from "./Prophecy";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class ItemClass {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  id: number;
  
  @TypeORM.Column()
  name: string;
  
  @TypeORM.OneToMany(() => BaseType, base_type => base_type.item_class)
  base_types: BaseType[];
  
  @TypeORM.OneToMany(() => Prophecy, prophecy => prophecy.item_class)
  prophecies: Prophecy[];
  
  @TypeORM.ManyToMany(() => ItemAffix, item_affix => item_affix.item_classes)
  item_affixes: ItemAffix[];
  
  constructor(name: string) {
    this.name = name;
  }
  
  public static async find() {
    return TypeORM.getManager().find(ItemClass);
  }
  
}
