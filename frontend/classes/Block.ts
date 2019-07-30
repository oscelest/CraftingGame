import _ from "lodash";

export default class Block {
  
  public visibility: BlockValueCondition<boolean> = {value: false};
  public drop_level: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public item_level: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public quality: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public rarity: BlockIntervalCondition<string> = {lte: "", gte: ""};
  public item_class: BlockListCondition<string> = {values: []};
  public base_type: BlockListCondition<string> = {values: []};
  public prophecy: BlockListCondition<string> = {values: []};
  public sockets: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public linked_sockets: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public socket_group: BlockValueCondition<string> = {value: ""};
  public width: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public height: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public affixes: BlockListCondition<string> = {values: []};
  public enchanted: BlockValueCondition<boolean> = {value: false};
  public stack_size: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public gem_level: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public identified: BlockValueCondition<boolean> = {value: false};
  public corrupted: BlockValueCondition<boolean> = {value: false};
  public shaper_item: BlockValueCondition<boolean> = {value: false};
  public elder_item: BlockValueCondition<boolean> = {value: false};
  public fractured_item: BlockValueCondition<boolean> = {value: false};
  public synthesized_item: BlockValueCondition<boolean> = {value: false};
  public map_tier: BlockIntervalCondition<number> = {lte: 0, gte: 0};
  public shaped_map: BlockValueCondition<boolean> = {value: false};
  
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
