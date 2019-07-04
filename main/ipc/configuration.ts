import {IPC} from "../../typings/IPC";

const Methods: IPC.ConfigurationMainMethods = {
  load(bool: boolean): void {
    console.log(bool);
  },
  save(num: number): void {
    console.log(num);
  },

};

export default Methods;
