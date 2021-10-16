import { Model } from "@vuex-orm/core";

import { Customer } from "../customers";
import { Software } from "../softwares";

export default class UserLicense extends Model {
  static entity = "user-licenses";

  static fields() {
    return {
      id: this.number(null),
      customer_id: this.number(null),
      key: this.attr(""),
      software_id: this.number(null),
      max_allowed_users: this.number(null),
      // relationships
      customer: this.belongsTo(Customer, "customer_id"),
      software: this.belongsTo(Software, "software_id"),
    };
  }
  static fetch() {
    return this.api().get("user-licenses", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`user-licenses/${id}`);
  }
  static remove(id) {
    return this.api().delete(`user-licenses/${id}`, { delete: id });
  }
}
