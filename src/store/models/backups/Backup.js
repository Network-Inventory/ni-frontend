import { Model } from "@vuex-orm/core";

import { Computer } from "../computers";

export default class Backup extends Model {
  static entity = "backups";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      computer_id: this.number(null),
      // relationships
      computer: this.belongsTo(Computer, "computer_id"),
    };
  }
  static fetch() {
    return this.api().get("backups", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`backups/${id}`);
  }
  static remove(id) {
    return this.api().delete(`backups/${id}`, { delete: id });
  }
}
