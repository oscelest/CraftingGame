import BaseType from "../backend/entity/BaseType";
import ItemClass from "../backend/entity/ItemClass";
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
      }
      find: {
        item_class: boolean
        base_type: boolean
        unique: boolean
      }
    }
    configuration: {
      maximized: boolean
    },
    data: {
      item_class:  ItemClass[]
      base_type: {[item_class: string]: BaseType[]}
      unique: {[base_type: string]: Unique[]}
    }
  }
  
}
