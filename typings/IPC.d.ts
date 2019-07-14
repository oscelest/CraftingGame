import Folder from "../main/entity/Folder";
import File from "../main/entity/File";
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
      file: {
        // find(this: Event, folder_id: string): Promise<File[]>
        // findUncatalogued(this: Event, folder_id: string, start: number): Promise<File[]>
      }
      folder: {
        open(this: Event, path: string): Promise<void>
        find(this: Event): Promise<Folder[]>
        findCataloguedFiles(this: Event, folder_id: string): Promise<File[]>
        findUncataloguedFiles(this: Event, folder_id: string): Promise<File[]>
        create(this: Event): Promise<Folder[] | void>
        remove(this: Event, id: string): Promise<string | void>
      }
      window: {
        minimize(this: Event): void
        maximize(this: Event): void
        restore(this: Event): void
        close(this: Event): void
      }
    }
    
    export interface Event {
      preventDefault: Function
      sender: Electron.WebContents
      frameId: number
      reply: Function
    }
    
  }
  
  export namespace Frontend {
    export interface Handlers {
      [key: string]: {[key: string]: any}
      file: {
        find(this: This, images: File[]): void
        findUncatalogued(this: This, images: File[]): void
      }
      folder: {
        find(this: This, folders: Folder[]): void
        create(this: This, folder: Folder[]): void
        remove(this: This, id: string): void
      }
      window: {
        minimize(this: This, flag_minimized: boolean): void
        maximize(this: This, flag_maximized: boolean): void
        restore(this: This, flag_maximized: boolean): void
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
