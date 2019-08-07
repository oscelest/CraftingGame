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
    removeAllListeners(channel: string): void
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
    removeAllListeners(channel: string): void
  }
  
  export namespace Backend {
    
    export interface Handlers {
      [key: string]: {[key: string]: any}
      database: {
        connect(this: IPC.Backend.This): Promise<boolean>
      }
      count: {
        item_class(this: IPC.Backend.This): Promise<number>
        item_affix(this: IPC.Backend.This): Promise<number>
        base_type(this: IPC.Backend.This): Promise<number>
        unique(this: IPC.Backend.This): Promise<number>
        prophecy(this: IPC.Backend.This): Promise<number>
      }
      initialize: {
        item_class(this: IPC.Backend.This): Promise<ItemClass | null>
        item_affix(this: IPC.Backend.This): Promise<ItemAffix | null>
        base_type(this: IPC.Backend.This): Promise<BaseType | null>
        unique(this: IPC.Backend.This): Promise<Unique | null>
        prophecy(this: IPC.Backend.This): Promise<Prophecy | null>
      }
      filter: {
        load(this: IPC.Backend.This): void
      }
    }
    
    export interface InitializationResult {
      index: number
      length: number
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
      count: {
        item_class(this: IPC.Frontend.This, count: number): void
        item_affix(this: IPC.Frontend.This, count: number): void
        base_type(this: IPC.Frontend.This, count: number): void
        unique(this: IPC.Frontend.This, count: number): void
        prophecy(this: IPC.Frontend.This, count: number): void
      }
      initialize: {
        item_class(this: IPC.Frontend.This, state: ItemClass | null): void
        item_affix(this: IPC.Frontend.This, state: ItemAffix | null): void
        base_type(this: IPC.Frontend.This, result: BaseType | null): void
        unique(this: IPC.Frontend.This, state: Unique | null): void
        prophecy(this: IPC.Frontend.This, state: Prophecy | null): void
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
