import { Model } from "@vuex-orm/core";

export default class LicenseWithComputer extends Model {
  static entity = "licenses-with-computer";

  static fields() {
    return {
      id: this.number(null),
      computer_id: this.number(null),
      license_id: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("licenses-with-computer", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`licenses-with-computer/${id}`);
  }
  static remove(id) {
    return this.api().delete(`licenses-with-computer/${id}`, { delete: id });
  }
}
