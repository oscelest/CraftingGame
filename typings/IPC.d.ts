declare global {
  namespace NodeJS {
    interface Global {
      ipc: IPC.Renderer
    }
  }
}

export namespace IPC {
  
  export type MessageType = "message" | "error"
  
  export interface Main {
    on<Handler extends MainHandler, Method extends MainMethod<Handler>>(type: MessageType, listener: MainListener<Handler, Method>): this;
    once<Handler extends MainHandler, Method extends MainMethod<Handler>>(type: MessageType, listener: MainListener<Handler, Method>): this;
    
    removeListener<Handler extends MainHandler, Method extends MainMethod<Handler>>(type: MessageType, listener: MainListener<Handler, Method>): this;
    removeAllListeners(type: MessageType): this;
  }
  
  type MainHandler = keyof MainHandlers;
  type MainMethod<Handler extends MainHandler> = keyof MainHandlers[Handler]
  type MainParameters<Handler extends MainHandler, Method extends MainMethod<Handler>> = Parameters<MainHandlers[Handler][Method]>
  type MainListener<Handler extends MainHandler, Method extends MainMethod<Handler>> = (event: MainEvent, handler: Handler, method: Method, params: MainParameters<Handler, Method>) => void
  
  interface MainHandlers {
    [key: string]: {[key: string]: (...args: any) => any}
    
    window: WindowMainMethods
    configuration: ConfigurationMainMethods
  }
  
  export interface WindowMainMethods {
    [key: string]: (...args: any) => any
    
    minimize(): void
    maximize(): void
    restore(): void
    close(): void
  }
  
  export interface ConfigurationMainMethods {
    [key: string]: (...args: any) => any
    
    load(bool: boolean): void
    save(num: number): void
  }
  
  export interface MainEvent {
    preventDefault: Function;
    sender: Electron.WebContents
    frameId: number;
    reply: Function;
  }
  
  export interface Renderer extends RendererSender {
    on<Handler extends RendererHandler, Method extends RendererMethod<Handler>>(type: MessageType, listener: RendererListener<Handler, Method>): this;
    once(channel: string, listener: Function): this;
    
    removeListener(channel: string, listener: Function): this;
    removeAllListeners(channel: string): this;
  }
  
  interface RendererSender {
    send<Handler extends MainHandler, Method extends MainMethod<Handler>>(type: MessageType, handler: Handler, method: Method, params: MainParameters<Handler, Method>): void;
    sendSync<Handler extends MainHandler, Method extends MainMethod<Handler>>(type: MessageType, handler: Handler, method: Method, params: MainParameters<Handler, Method>): void;
    sendTo<Handler extends MainHandler, Method extends MainMethod<Handler>>(frame_id: number, type: MessageType, handler: Handler, method: Method, params: MainParameters<Handler, Method>): void;
    sendToHost<Handler extends MainHandler, Method extends MainMethod<Handler>>(type: MessageType, handler: Handler, method: Method, params: MainParameters<Handler, Method>): void;
  }
  
  type RendererHandler = keyof RendererHandlers;
  type RendererMethod<Handler extends RendererHandler> = keyof RendererHandlers[Handler]
  type RendererParameters<Handler extends RendererHandler, Method extends RendererMethod<Handler>> = Parameters<RendererHandlers[Handler][Method]>
  type RendererListener<Handler extends RendererHandler, Method extends RendererMethod<Handler>> = (sender: RendererEvent, handler: Handler, method: Method, params: RendererParameters<Handler, Method>) => void
  
  interface RendererHandlers {
    [key: string]: {[key: string]: (...args: any) => any}
    
    window: WindowRendererMethods
  }
  
  export interface WindowRendererMethods {
    [key: string]: (...args: any) => any
    
    minimize(flag_minimized: boolean): void
    maximize(flag_maximized: boolean): void
    restore(flag_maximized: boolean): void
  }
  
  export interface RendererEvent {
    sender: RendererSender
    senderId: number
  }
  
}
