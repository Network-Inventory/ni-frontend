import { Model } from "@vuex-orm/core";

export default class Computer extends Model {
  static entity = "computers";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("computers", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`computers/${id}`);
  }
  static remove(id) {
    return this.api().delete(`computers/${id}`, { delete: id });
  }
}
