import { Model } from "@vuex-orm/core";

export default class UserInMailGroup extends Model {
  static entity = "users-in-mail-group";

  static fields() {
    return {
      id: this.number(null),
      user_id: this.number(null),
      group_id: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("users-in-mail-group", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`users-in-mail-group/${id}`);
  }
  static remove(id) {
    return this.api().delete(`users-in-mail-group/${id}`, { delete: id });
  }
}
