import _ from "lodash";

export default class Block {
  
  public visibility: boolean = true;
  public drop_level: {lte?: number, gte?: number} = {};
  public item_level: {lte?: number, gte?: number} = {};
  
  constructor() {
  
  }
  
  print() {
    const conditions: string[] = [];
    conditions.push(this.visibility ? "Show" : "Hide");
  
    if (this.drop_level.gte && this.drop_level.lte && this.drop_level.gte === this.drop_level.lte) conditions.push(`ItemLevel = ${this.drop_level.gte}`);
    else {
      if (this.drop_level.gte) conditions.push(`ItemLevel >= ${this.drop_level.gte}`);
      if (this.drop_level.lte) conditions.push(`ItemLevel <= ${this.drop_level.lte}`);
    }
    
    if (this.item_level.gte && this.item_level.lte && this.item_level.gte === this.item_level.lte) conditions.push(`ItemLevel = ${this.item_level.gte}`);
    else {
      if (this.item_level.gte) conditions.push(`ItemLevel >= ${this.item_level.gte}`);
      if (this.item_level.lte) conditions.push(`ItemLevel <= ${this.item_level.lte}`);
    }
    
    return _.join(_.filter(conditions), "\n    ");
  }
  
  
}
