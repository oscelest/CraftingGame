import _ from "lodash";

export default class Block {
  
  public visibility: boolean = true;
  public drop_level: BlockIntervalCondition<number> = {};
  public item_level: BlockIntervalCondition<number> = {};
  public quality: BlockIntervalCondition<number> = {};
  public rarity: BlockIntervalCondition<string> = {};
  public socket_group: BlockValueCondition<string> = {};
  
  constructor() {
  
  }
  
  print() {
    const conditions: string[] = [];
    conditions.push(this.visibility ? "Show" : "Hide");
    _.each(Block.printNumberIntervalCondition("ItemLevel", this.item_level), v => conditions.push(v));
    _.each(Block.printNumberIntervalCondition("DropLevel", this.drop_level), v => conditions.push(v));
    _.each(Block.printNumberIntervalCondition("Quality", this.quality), v => conditions.push(v));
    
    return _.join(_.filter(conditions), "\n    ");
  }
  
  private static printNumberIntervalCondition(condition: string, interval: BlockIntervalCondition<number>) {
    const conditions: string[] = [];
    if (interval.gte && interval.lte && interval.gte === interval.lte) conditions.push(`${condition} = ${interval.gte}`);
    else {
      if (interval.gte) conditions.push(`${condition} >= ${interval.gte}`);
      if (interval.lte) conditions.push(`${condition} <= ${interval.lte}`);
    }
    return conditions;
  }
  
}

export interface BlockIntervalCondition<T> {
  lte?: T
  gte?: T
}

export interface BlockValueCondition<T> {
  value?: T
}
