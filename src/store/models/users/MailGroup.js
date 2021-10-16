import { Model } from "@vuex-orm/core";

import { Customer } from "../customers";

export default class MailGroup extends Model {
  static entity = "mail-groups";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      customer_id: this.number(null),
      mail_adress: this.attr(""),
      // relationships
      customer: this.belongsTo(Customer, "customer_id"),
    };
  }
  static fetch() {
    return this.api().get("mail-groups", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`mail-groups/${id}`);
  }
  static remove(id) {
    return this.api().delete(`mail-groups/${id}`, { delete: id });
  }
}
