import * as TypeORM from "typeorm";
import WeaponMod from "./WeaponMod";
import WeaponType from "./WeaponType";

@TypeORM.Entity()
export default class Weapon {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  public id: string;
  
  @TypeORM.Column()
  public name: string;
  
  @TypeORM.CreateDateColumn()
  public readonly time_created: Date;
  
  @TypeORM.UpdateDateColumn()
  public readonly time_updated: Date;
  
  @TypeORM.OneToMany(() => WeaponType, item_type => item_type.items)
  public type: WeaponType;
  
  @TypeORM.ManyToMany(() => WeaponMod)
  public mods: WeaponMod[];
  
}
