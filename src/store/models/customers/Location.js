import { Model } from "@vuex-orm/core";

import { Customer } from ".";

export default class Location extends Model {
  static entity = "locations";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      customer_id: this.number(null),
      customer: this.belongsTo(Customer, "customer_id"),
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
