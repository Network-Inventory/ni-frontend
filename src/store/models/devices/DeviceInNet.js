import { Model } from "@vuex-orm/core";

import { Device } from ".";

export default class DeviceInNet extends Model {
  static entity = "device-in-nets";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      device_id: this.number(null),
      net_id: this.number(null),
      ip: this.attr(""),
      nic: this.attr(""),
      mac_address: this.attr(""),
      ip_status_id: this.number(null),
      // relationships
      device: this.belongsTo(Device, "device_id"),
      net: this.belongsTo(Net, "net_id"),
      ip_status: this.belongsTo(IpStatus, "ip_status_id"),
    };
  }
  static fetch() {
    return this.api().get("device-in-nets", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`device-in-nets/${id}`);
  }
  static remove(id) {
    return this.api().delete(`device-in-nets/${id}`, { delete: id });
  }
}
