import * as TypeORM from "typeorm";
import WeaponModType from "./WeaponModType";

@TypeORM.Entity()
export default class WeaponMod {
  
  @TypeORM.PrimaryGeneratedColumn("uuid")
  public id: string;
  
  @TypeORM.Column()
  public name: string;
  
  @TypeORM.CreateDateColumn()
  public readonly time_created: Date;
  
  @TypeORM.UpdateDateColumn()
  public readonly time_updated: Date;
  
  @TypeORM.OneToMany(() => WeaponModType, weapon_mod_type => weapon_mod_type.mods)
  public mod_type: WeaponModType;
  
}
