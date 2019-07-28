import BaseType from "../backend/entity/BaseType";
import ItemClass from "../backend/entity/ItemClass";

export namespace Global {
  
  export interface Props {
    global: State
  }
  
  export interface State {
    ready: boolean
    flag_maximized: boolean
    item_classes: ItemClass[]
    base_types: {[item_class: string]: BaseType[]}
  }
  
}
