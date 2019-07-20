import _ from "lodash";

export default class Filter {
  
  public name: string;
  public version: string;
  public categories: Category[];
  
  constructor(serialized: string) {
    const {header, content} = _.merge({header: "", content: ""}, (serialized.match(/(?<header>^[\s\w#!.]*(?=(?:#!category)|Show|Hide))(?<content>(?:\n|.)*$)/) || {groups: {}}).groups);
    this.deserializeHeader(header);
    this.deserializeContent(content);
    console.log(this);
  }
  
  private deserializeHeader(header: string) {
    const headers = header.replace(/(?:^\n)|(?:\n(?=\n))|(?:\s*#[^!]*(?:\s+|$))/g, "").split("\n");
    _.each(headers, header => {
      const {key, value} = _.merge({key: "", value: ""}, (header.match(/#!(?<key>[\w_]+)\s*(?<value>[^\n]+)/) || {groups: {}}).groups);
      if (!key) return true;
      if (key === "name") return this.name = value;
      if (key === "version") return this.version = value;
    });
  }
  
  private deserializeContent(content: string) {
    this.categories = content.split(/(?=#!category)/g).map(category => new Category(category));
  }
  
}

class Category {
  
  public name: string;
  public blocks: Block[];
  
  constructor(serialized: string) {
    const {header, content} = _.merge({header: "", content: ""}, (serialized.match(/\s*(?<header>(?:(?:#[^\n]*\n)|\s*)*)(?<content>(?:\n|.)*)/) || {groups: {}}).groups);
    
    this.deserializeHeader(header);
    this.deserializeContent(content);
  }
  
  private deserializeHeader(header: string) {
    const headers = header.match(/(?<=\n|^)(#![\w]*)\s+[^\n]*\n?/g) || [];
    _.each(headers, header => {
      const {key, value} = _.merge({key: "", value: ""}, (header.match(/#!(?<key>[\w_]+)\s*(?<value>[^\n]+)/) || {groups: {}}).groups);
      if (!key) return true;
      if (key === "category") return this.name = value;
    });
    if (!this.name) this.name = "Unnamed";
  }
  
  private deserializeContent(content: string) {
    this.blocks = content.split(/(?<!#[^\n]*\n*)(?=(?:#[^\n]*)|(?:Show|Hide))/g).map(block => new Block(block));
  }
  
}

class Block {
  
  public visibility: boolean;
  public rarity: RarityCondition;
  public quality: NumberCondition;
  public item_level: NumberCondition;
  public drop_level: NumberCondition;
  
  public comments: string[];
  
  constructor(serialized: string) {
    const {comments, block} = _.merge({comments: "", block: ""}, (serialized.match(/(?<comments>(?:#[^\n]*(?:\n|$))+)?\s*(?<block>(?:Show|Hide)\n(?: {4}[^\n]+(?:\n|$))+)?/) || {groups: {}}).groups);
    
    this.deserializeComments(comments);
    this.deserializeBlock(block);
  }
  
  
  private deserializeComments(comments: string) {
    this.comments = comments.match(/(?<=#)([^\n]*)/g) || [];
  }
  
  private deserializeBlock(block: string) {
    console.log("Block", block);
    this.visibility = !!block.match(/^\s*Show/);
    
    _.each(block.match(/(?<= {4})[^\n]*(?=\n|$)/g) || [], line => {
      console.log(line);
      const {key, operator, value} = _.merge({key: "", operator: "", value: ""}, (line.match(/(?<key>\w+) ?(?<operator>[<=>]{1,2})? ?(?<value>[\w "]+)/) || {groups: {}}).groups);
      if (!key) return true;
      if (key === "Rarity") return this.rarity = {operator, value} as RarityCondition;
      if (key === "DropLevel") return this.drop_level = {operator, value: +value} as NumberCondition;
      if (key === "ItemLevel") return this.item_level = {operator, value: +value} as NumberCondition;
      if (key === "Quality") return this.quality = {operator, value: +value} as NumberCondition;
      
    });
  }
  
}

interface RarityCondition extends OperationCondition {
  value: Rarity
}

interface NumberCondition extends OperationCondition {
  value: number
}

interface OperationCondition {
  operator: Operator
  
}

enum Operator {
  "=" = "=",
  "<=" = "<=",
  ">=" = ">=",
  "!=" = "!=",
}

enum Rarity {
  Normal = "Normal",
  Magic = "Magic",
  Rare = "Rare",
  Unique = "Unique",
}
