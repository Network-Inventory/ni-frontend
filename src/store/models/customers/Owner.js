import { Model } from "@vuex-orm/core";

export default class Owner extends Model {
  static entity = "owners";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("owners", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`owners/${id}`);
  }
  static remove(id) {
    return this.api().delete(`owners/${id}`, { delete: id });
  }
}
