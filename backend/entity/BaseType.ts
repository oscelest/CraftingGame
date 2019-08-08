import * as TypeORM from "typeorm";
import Entity from "../classes/Entity";
import ItemClass from "./ItemClass";
import Unique from "./Unique";

@TypeORM.Entity()
@TypeORM.Unique("name", ["name"])
export default class BaseType extends Entity {
  
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
    super();
    this.name = name;
    this.item_class = item_class;
  }
  
  public static async find(): Promise<BaseType[]> {
    return await TypeORM.getManager().find(BaseType, {relations: ["item_class"]});
  }
  
  public static async findOneByName(name: string) {
    return TypeORM.getManager().findOneOrFail(BaseType, {where: {name: name}});
  }
  
}
