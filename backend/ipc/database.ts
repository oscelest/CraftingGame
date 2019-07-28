import * as electron from "electron";
import * as path from "path";
import * as TypeORM from "typeorm";
import IPC from "../../typings/IPC";

const Methods: IPC.Backend.Handlers["database"] = {
  async connect(): Promise<boolean> {
    try {
      return TypeORM.getConnectionManager().get("default").isConnected;
    }
    catch {
      return !!await TypeORM.createConnection({
        type:        "sqlite",
        database:    path.resolve(electron.app.getPath("userData"), "master.sqlite3"),
        entities:    [path.resolve(__dirname, "../", "entity", "*.js")],
        synchronize: true,
      });
    }
  },
};

export default Methods;
