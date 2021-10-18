import { Model } from "@vuex-orm/core";

export default class LicenseWithUser extends Model {
  static entity = "licenses-with-user";

  static fields() {
    return {
      id: this.number(null),
      user_id: this.number(null),
      license_id: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("licenses-with-user", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`licenses-with-user/${id}`);
  }
  static remove(id) {
    return this.api().delete(`licenses-with-user/${id}`, { delete: id });
  }
}
