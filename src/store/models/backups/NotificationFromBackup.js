import { Model } from "@vuex-orm/core";

import { Backup } from ".";
import { Notification } from ".";

export default class NotificationFromBackup extends Model {
  static entity = "notifications-from-backup";

  static fields() {
    return {
      id: this.number(null),
      backup_id: this.number(null),
      notification_id: this.number(null),
      // relationships
      backup: this.belongsTo(Backup, "backup_id"),
      notification: this.belongsTo(Notification, "notification_id"),
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
