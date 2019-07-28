import ItemClass from "../../backend/entity/ItemClass";
import {Global} from "../../typings/Global";
import IPC from "../../typings/IPC";
import _ from "lodash";

const Methods: IPC.Frontend.Handlers["item_class"] = {
  find(item_classes: ItemClass[]): void {
    this.setState(_.merge({}, this.state, {item_classes: item_classes}) as Global.State)
  },
};

export default Methods;
