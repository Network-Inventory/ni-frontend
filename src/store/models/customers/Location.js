import { Model } from "@vuex-orm/core";

export default class Location extends Model {
  static entity = "locations";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("locations", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`locations/${id}`);
  }
  static remove(id) {
    return this.api().delete(`locations/${id}`, { delete: id });
  }
}
