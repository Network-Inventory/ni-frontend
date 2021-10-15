import { Model } from "@vuex-orm/core";

export default class BackupMethod extends Model {
  static entity = "backup-methods";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("backup-methods", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`backup-methods/${id}`);
  }
  static remove(id) {
    return this.api().delete(`backup-methods/${id}`, { delete: id });
  }
}
