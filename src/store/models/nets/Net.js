import { Model } from "@vuex-orm/core";

import { Customer } from "../customers";

export default class Net extends Model {
  static entity = "nets";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      ip_range: this.attr(""),
      dhcp_range: this.attr(""),
      description: this.attr(""),
      customer_id: this.number(null),
      // relationships
      customer: this.belongsTo(Customer, "customer_id"),
    };
  }
  static fetch() {
    return this.api().get("nets", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`nets/${id}`);
  }
  static remove(id) {
    return this.api().delete(`nets/${id}`, { delete: id });
  }
}
