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
    ready: boolean
    connections: {
      database: boolean | null
    }
    data_size: {
      item_class: number
      prophecy: number
      base_type: number
      unique: number
      item_affix: number
    }
    data: {
      item_class: ItemClass[]
      prophecy: Prophecy[]
      base_type: BaseType[]
      unique: Unique[]
      item_affix: ItemAffix[]
    }
    configuration: {
      maximized: boolean
    },
  }
  
}
