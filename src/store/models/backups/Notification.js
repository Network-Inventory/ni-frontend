import { Model } from "@vuex-orm/core";

import { NotificationType } from ".";

export default class Notification extends Model {
  static entity = "notifications";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
      recipient: this.attr(""),
      notification_type_id: this.number(null),
      notification_type: this.belongsTo(
        NotificationType,
        "notification_type_id"
      ),
    };
  }
  static fetch() {
    return this.api().get("notifications", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`notifications/${id}`);
  }
  static remove(id) {
    return this.api().delete(`notifications/${id}`, { delete: id });
  }
}
