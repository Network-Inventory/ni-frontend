import { Model } from "@vuex-orm/core";

export default class NotificationFromBackup extends Model {
  static entity = "notifications-from-backup";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("notifications-from-backup", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`notifications-from-backup/${id}`);
  }
  static remove(id) {
    return this.api().delete(`notifications-from-backup/${id}`, { delete: id });
  }
}
