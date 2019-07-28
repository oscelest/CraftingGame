import _ from "lodash";
import ItemClass from "../../backend/entity/ItemClass";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import {application} from "../pages/_app";

const Methods: IPC.Frontend.Handlers["item_class"] = {
  initialize(state: boolean): void {
    this.setState(_.merge({}, this.state, {ready: {initialize: {item_class: state}}} as Global.State));
    application.prepare.resources();
  },
  
  find(item_classes: ItemClass[]): void {
    this.setState(_.merge({}, this.state, {data: {item_class: item_classes}, ready: {find: {item_class: item_classes.length > 0}}} as Global.State));
  },
};

export default Methods;
