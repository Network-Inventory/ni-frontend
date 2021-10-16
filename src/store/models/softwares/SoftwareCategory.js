import { Model } from "@vuex-orm/core";

export default class SoftwareCategory extends Model {
  static entity = "softwarecategorys";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("softwarecategorys", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`softwarecategorys/${id}`);
  }
  static remove(id) {
    return this.api().delete(`softwarecategorys/${id}`, { delete: id });
  }
}
