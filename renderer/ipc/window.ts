import {IPC} from "../../typings/IPC";

const Methods: IPC.WindowRendererMethods = {
  minimize(this: any, flag_minimized: boolean): void {
    console.log(this);
    this.setState(Object.assign(this.state, {flag_minimized: flag_minimized}))
  },
  maximize(this: any, flag_maximized: boolean): void {
    console.log(this);
    this.setState(Object.assign(this.state, {flag_maximized: flag_maximized}))
  },
  restore(this: any, flag_maximized: boolean): void {
    console.log(this);
    this.setState(Object.assign(this.state, {flag_maximized: flag_maximized}))
  },
};

export default Methods;
