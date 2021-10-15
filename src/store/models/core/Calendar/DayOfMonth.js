import { Model } from "@vuex-orm/core";

export default class DayOfMonth extends Model {
  static entity = "days-of-month";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("days-of-month", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`days-of-month/${id}`);
  }
  static remove(id) {
    return this.api().delete(`days-of-month/${id}`, { delete: id });
  }
}
