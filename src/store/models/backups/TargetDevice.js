import { Model } from "@vuex-orm/core";

import { Computer } from "../computers";
import { Backup } from ".";

export default class TargetDevice extends Model {
  static entity = "target-devices";

  static fields() {
    return {
      id: this.number(null),
      device_id: this.number(null),
      backup_id: this.number(null),
      target_path: this.attr(""),
      // relationships
      device: this.belongsTo(Computer, "device_id"),
      backup: this.belongsTo(Backup, "backup_id"),
    };
  }
  static fetch() {
    return this.api().get("target-devices", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`target-devices/${id}`);
  }
  static remove(id) {
    return this.api().delete(`target-devices/${id}`, { delete: id });
  }
}
