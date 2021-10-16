import { Model } from "@vuex-orm/core";

import { Customer } from "../customers";

export default class AdGroup extends Model {
  static entity = "ad-groups";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      customer_id: this.number(null),
      // relationships
      customer: this.belongsTo(Customer, "customer_id"),
    };
  }
  static fetch() {
    return this.api().get("ad-groups", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`ad-groups/${id}`);
  }
  static remove(id) {
    return this.api().delete(`ad-groups/${id}`, { delete: id });
  }
}
