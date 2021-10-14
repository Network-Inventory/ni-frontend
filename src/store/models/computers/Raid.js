import { Model } from "@vuex-orm/core";

export default class Raid extends Model {
  static entity = "raids";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("raids", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`raids/${id}`);
  }
  static remove(id) {
    return this.api().delete(`raids/${id}`, { delete: id });
  }
}
