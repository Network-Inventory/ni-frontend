import { Model } from "@vuex-orm/core";

export class NotificationType extends Model {
  static entity = "notifications-type";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("notifications-type", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`notifications-type/${id}`);
  }
  static remove(id) {
    return this.api().delete(`notifications-type/${id}`, { delete: id });
  }
}
export class Notification extends Model {
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
