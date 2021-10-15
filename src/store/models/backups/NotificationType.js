import { Model } from "@vuex-orm/core";

export default class NotificationType extends Model {
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
