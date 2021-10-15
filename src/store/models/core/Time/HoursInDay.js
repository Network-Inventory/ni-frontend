import { Model } from "@vuex-orm/core";

export default class HoursInDay extends Model {
  static entity = "hours-in-day";

  static fields() {
    return {
      id: this.number(null),
      name: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("hours-in-day", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`hours-in-day/${id}`);
  }
  static remove(id) {
    return this.api().delete(`hours-in-day/${id}`, { delete: id });
  }
}
