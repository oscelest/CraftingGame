import IPC from "../../typings/IPC";

const Methods: IPC.Frontend.Handlers["window"] = {
  minimize(flag_minimized: boolean): void {
    this.setState(Object.assign({}, this.state, {flag_minimized: flag_minimized}))
  },
  maximize(flag_maximized: boolean): void {
    this.setState(Object.assign({}, this.state, {flag_maximized: flag_maximized}))
  },
  restore(flag_maximized: boolean): void {
    this.setState(Object.assign({}, this.state, {flag_maximized: flag_maximized}))
  },
};

export default Methods;
