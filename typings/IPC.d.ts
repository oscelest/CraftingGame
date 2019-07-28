import BaseType from "../backend/entity/BaseType";
import ItemClass from "../backend/entity/ItemClass";
import {Global} from "./Global";

declare namespace IPC {
  
  export type MessageType = "message" | "error"
  
  export interface Backend {
    on<Handler extends keyof IPC.Backend.Handlers, Method extends keyof IPC.Backend.Handlers[Handler]>(
      type: MessageType,
      listener: (event: IPC.Backend.Event, handler: Handler, method: Method, params: Parameters<IPC.Backend.Handlers[Handler][Method]>) => void
    ): this
  }
  
  export interface Frontend {
    send<Handler extends keyof IPC.Backend.Handlers, Method extends keyof IPC.Backend.Handlers[Handler]>(
      type: MessageType,
      handler: Handler,
      method: Method,
      params: Parameters<IPC.Backend.Handlers[Handler][Method]>
    ): void
    on<Handler extends keyof IPC.Frontend.Handlers, Method extends keyof IPC.Frontend.Handlers[Handler]>(
      type: MessageType,
      listener: (event: IPC.Frontend.Event, handler: Handler, method: Method, params: Parameters<IPC.Frontend.Handlers[Handler][Method]>) => void
    ): this
  }
  
  export namespace Backend {
    
    export interface Handlers {
      [key: string]: {[key: string]: any}
      base_type: {
        findByItemClass(this: IPC.Backend.This, item_class: string): Promise<BaseType[]>
      }
      item_class: {
        find(this: IPC.Backend.This): Promise<ItemClass[]>
      }
      filter: {
        load(this: IPC.Backend.This): void
      }
    }
    
    export interface Event {
      preventDefault: Function
      sender: Electron.WebContents
      frameId: number
      reply: Function
    }
    
    export interface This extends Event {
    
    }
    
  }
  
  export namespace Frontend {
    export interface Handlers {
      [key: string]: {[key: string]: any}
      base_type: {
        findByItemClass(this: IPC.Frontend.This, base_types: BaseType[]): void
      }
      item_class: {
        find(this: IPC.Frontend.This, item_classes: ItemClass[]): void
      }
      filter: {
        load(this: IPC.Frontend.This, filter: string): void
      }
    }
    
    export interface Event {
      sender: Pick<IPC.Frontend, "send">
      senderId: number
    }
    
    export interface This {
      state: Global.State,
      setState: (state: Global.State) => void
    }
  }
  
}

declare global {
  namespace NodeJS {
    interface Global {
      ipc: any
    }
  }
}

export default IPC;
