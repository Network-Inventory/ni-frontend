import { Model } from "@vuex-orm/core";

import User from "./User";

export default class MailAlias extends Model {
  static entity = "mail-alias";

  static fields() {
    return {
      id: this.number(null),
      email_address: this.attr(""),
      user_id: this.number(null),
      // relationships
      user: this.belongsTo(User, "user_id"),
    };
  }
  static fetch() {
    return this.api().get("mail-alias", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`mail-alias/${id}`);
  }
  static remove(id) {
    return this.api().delete(`mail-alias/${id}`, { delete: id });
  }
}
