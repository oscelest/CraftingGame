import BaseType from "../backend/entity/BaseType";
import ItemAffix from "../backend/entity/ItemAffix";
import ItemClass from "../backend/entity/ItemClass";
import Prophecy from "../backend/entity/Prophecy";
import Unique from "../backend/entity/Unique";
import {Global} from "./Global";

declare namespace IPC {
  
  export type MessageType = "message" | "error"
  
  export interface Backend {
    on<Handler extends keyof IPC.Backend.Handlers, Method extends keyof IPC.Backend.Handlers[Handler]>(
      type: MessageType,
      listener: (event: IPC.Backend.Event, handler: Handler, method: Method, params: Parameters<IPC.Backend.Handlers[Handler][Method]>) => void,
    ): this
  }
  
  export interface Frontend {
    send<Handler extends keyof IPC.Backend.Handlers, Method extends keyof IPC.Backend.Handlers[Handler]>(
      type: MessageType,
      handler: Handler,
      method: Method,
      params: Parameters<IPC.Backend.Handlers[Handler][Method]>,
    ): void
    on<Handler extends keyof IPC.Frontend.Handlers, Method extends keyof IPC.Frontend.Handlers[Handler]>(
      type: MessageType,
      listener: (event: IPC.Frontend.Event, handler: Handler, method: Method, params: Parameters<IPC.Frontend.Handlers[Handler][Method]>) => void,
    ): this
  }
  
  export namespace Backend {
    
    export interface Handlers {
      [key: string]: {[key: string]: any}
      database: {
        connect(this: IPC.Backend.This): Promise<boolean>
      }
      initialize: {
        base_type(this: IPC.Backend.This): Promise<boolean>
        item_class(this: IPC.Backend.This): Promise<boolean>
        unique(this: IPC.Backend.This): Promise<boolean>
        prophecy(this: IPC.Backend.This): Promise<boolean>
        item_affix(this: IPC.Backend.This): Promise<boolean>
      },
      find: {
        base_type(this: IPC.Backend.This): Promise<BaseType[]>
        item_class(this: IPC.Backend.This): Promise<ItemClass[]>
        unique(this: IPC.Backend.This): Promise<Unique[]>
        prophecy(this: IPC.Backend.This): Promise<Prophecy[]>
        item_affix(this: IPC.Backend.This): Promise<ItemAffix[]>
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
    
    export interface This extends Event {}
  }
  
  export namespace Frontend {
    export interface Handlers {
      [key: string]: {[key: string]: any}
      database: {
        connect(this: IPC.Frontend.This, state: boolean): void
      }
      initialize: {
        base_type(this: IPC.Frontend.This, state: boolean): void
        item_class(this: IPC.Frontend.This, state: boolean): void
        unique(this: IPC.Frontend.This, state: boolean): void
        prophecy(this: IPC.Frontend.This, state: boolean): void
        item_affix(this: IPC.Frontend.This, state: boolean): void
      }
      find: {
        base_type(this: IPC.Frontend.This, base_types: BaseType[]): void
        item_class(this: IPC.Frontend.This, item_classes: ItemClass[]): void
        unique(this: IPC.Frontend.This, uniques: Unique[]): void
        prophecy(this: IPC.Frontend.This, prophecies: Prophecy[]): void
        item_affix(this: IPC.Frontend.This, item_affixes: ItemAffix[]): void
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
