import BaseType from "../backend/entity/BaseType";
import ItemAffix from "../backend/entity/ItemAffix";
import ItemClass from "../backend/entity/ItemClass";
import Prophecy from "../backend/entity/Prophecy";
import Unique from "../backend/entity/Unique";

export namespace Global {
  
  export interface Props {
    global: State
  }
  
  export interface State {
    ready: {
      connect: {
        database: boolean
      }
      initialize: {
        item_class: boolean
        base_type: boolean
        unique: boolean
        prophecy: boolean
        item_affix: boolean
      }
      find: {
        item_class: boolean
        base_type: boolean
        unique: boolean
        prophecy: boolean
        item_affix: boolean
      }
    }
    configuration: {
      maximized: boolean
    },
    data: {
      item_class: ItemClass[]
      prophecy: Prophecy[]
      base_type: {[item_class: string]: BaseType[]}
      unique: {[base_type: string]: Unique[]}
      item_affix: ItemAffix[]
    }
  }
  
}
