import * as TypeORM from "typeorm";

export default class Entity {
  
  constructor() {
  
  }
  
  public async save(flag_catch?: boolean) {
    return await TypeORM.getManager().save(this).catch(e => !flag_catch ? Promise.resolve(this) : Promise.reject(e));
  }
  
}
