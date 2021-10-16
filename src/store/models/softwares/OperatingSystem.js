import { Model } from "@vuex-orm/core";

import { SoftwareArchitecture } from ".";

export default class OperatingSystem extends Model {
  static entity = "operating-systems";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      architecture_id: this.number(null),
      // relationships
      architecture: this.belongsTo(SoftwareArchitecture, "architecture_id"),
    };
  }
  static fetch() {
    return this.api().get("operating-systems", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`operating-systems/${id}`);
  }
  static remove(id) {
    return this.api().delete(`operating-systems/${id}`, { delete: id });
  }
}
