import { Model } from "@vuex-orm/core";

import { Customer } from "../customers";
import { Software } from "../softwares";

export default class ComputerLicense extends Model {
  static entity = "computer-licenses";

  static fields() {
    return {
      id: this.number(null),
      key: this.attr(""),
      customer_id: this.number(null),
      software_id: this.number(null),
      max_allowed_computers: this.number(null),
      // relationships
      customer: this.belongsTo(Customer, "customer_id"),
      software: this.belongsTo(Software, "software_id"),
    };
  }
  static fetch() {
    return this.api().get("computer-licenses", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`computer-licenses/${id}`);
  }
  static remove(id) {
    return this.api().delete(`computer-licenses/${id}`, { delete: id });
  }
}
