import _ from "lodash";

export default class Block {
  
  public visibility: boolean = true;
  public drop_level: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public item_level: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public quality: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public rarity: BlockIntervalCondition<string> = {lte: "", gte: ""};
  public socket_group: BlockValueCondition<string> = {value: ""};
  public base_type: BlockListCondition<string> = {values: []};
  public item_class: BlockListCondition<string> = {values: []};
  
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
  lte: T
  gte: T
}

export interface BlockListCondition<T> {
  values: T[]
}


export interface BlockValueCondition<T> {
  value: T
}
