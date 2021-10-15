import { Model } from "@vuex-orm/core";

export default class Customer extends Model {
  static entity = "customers";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("customers", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`customers/${id}`);
  }
  static remove(id) {
    return this.api().delete(`customers/${id}`, { delete: id });
  }
}