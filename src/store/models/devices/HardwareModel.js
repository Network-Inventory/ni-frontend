import { Model } from "@vuex-orm/core";

import { DeviceManufacturer } from ".";

export default class HardwareModel extends Model {
  static entity = "hardware-models";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      manufacturer_id: this.number(null),
      // relationships
      manufacturer: this.belongsTo(DeviceManufacturer, "manufacturer_id"),
    };
  }
  static fetch() {
    return this.api().get("hardware-models", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`hardware-models/${id}`);
  }
  static remove(id) {
    return this.api().delete(`hardware-models/${id}`, { delete: id });
  }
}
