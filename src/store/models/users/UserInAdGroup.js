import { Model } from "@vuex-orm/core";

export default class UserInAdGroup extends Model {
  static entity = "users-in-ad-group";

  static fields() {
    return {
      id: this.number(null),
      user_id: this.number(null),
      group_id: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("users-in-ad-group", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`user-in-ad-group/${id}`);
  }
  static remove(id) {
    return this.api().delete(`user-in-ad-group/${id}`, { delete: id });
  }
}
