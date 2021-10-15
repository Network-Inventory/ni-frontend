import { Model } from "@vuex-orm/core";

export default class Weekday extends Model {
  static entity = "weekdays";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      value: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("weekdays", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`weekdays/${id}`);
  }
  static remove(id) {
    return this.api().delete(`weekdays/${id}`, { delete: id });
  }
}
