import IPC from "../../typings/IPC";

const Methods: IPC.Backend.Handlers["initialize"] = {
  async base_type(): Promise<boolean> {
    return !!await (await import("../data/BaseType")).default;
  },
  async item_class(): Promise<boolean> {
    return !!await (await import("../data/ItemClass")).default;
  },
  async prophecy(): Promise<boolean> {
    return !!await (await import("../data/Prophecy")).default;
  },
  async unique(): Promise<boolean> {
    return !!await (await import("../data/Unique")).default;
  },
  async item_affix(): Promise<boolean> {
    return !!await (await import("../data/ItemAffix")).default;
  },
};

export default Methods;
