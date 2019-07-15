import * as TypeORM from "typeorm";
import Weapon from "./Weapon";
import WeaponModType from "./WeaponModType";

/*
 * Mastercraft, Runeforge, Gem-Encrust, Blessing, Enchantment
 */

@TypeORM.Entity()
@TypeORM.Unique(["name"])
export default class WeaponType {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  public id: string;
  
  @TypeORM.Column()
  public name: string;
  
  @TypeORM.CreateDateColumn()
  public readonly time_created: Date;
  
  @TypeORM.UpdateDateColumn()
  public readonly time_updated: Date;
  
  @TypeORM.ManyToOne(() => Weapon)
  public items: Weapon[];
  
  @TypeORM.ManyToMany(() => WeaponModType)
  public mod_types: WeaponModType[];
  
}
