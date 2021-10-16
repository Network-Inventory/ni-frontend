import { Model } from "@vuex-orm/core";

import { Customer } from "../customers";
import { AdGroup } from ".";
import { MailGroup } from ".";
import { UserInAdGroup } from ".";
import { UserInMailGroup } from ".";

export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      first_name: this.attr(""),
      ad_login: this.attr(""),
      ad_pw: this.attr(""),
      primary_mail: this.attr(""),
      mail_pw: this.attr(""),
      enabled: this.boolean(true),
      description: this.attr(""),
      customer_id: this.number(null),
      // relationships
      customer: this.belongsTo(Customer, "customer_id"),
      //ad_groups: this.ManyToManyField(AdGroup, UserInAdGroup, "group_id", "user_id"),
      //mail_groups: this.ManyToManyField(MailGroup, UserInMailGroup, "group_id", "user_id")
    };
  }
  static fetch() {
    return this.api().get("users", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`users/${id}`);
  }
  static remove(id) {
    return this.api().delete(`users/${id}`, { delete: id });
  }
}
