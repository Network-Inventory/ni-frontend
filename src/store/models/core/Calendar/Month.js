import { Model } from "@vuex-orm/core";

export default class Month extends Model {
  static entity = "months";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      value: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("months", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`months/${id}`);
  }
  static remove(id) {
    return this.api().delete(`months/${id}`, { delete: id });
  }
}
