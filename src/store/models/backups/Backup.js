import { Model } from "@vuex-orm/core";

export default class Backup extends Model {
  static entity = "backups";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
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
