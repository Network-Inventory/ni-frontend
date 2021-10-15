import { Model } from "@vuex-orm/core";

export default class TargetDevice extends Model {
  static entity = "target-devices";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("target-devices", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`target-devices/${id}`);
  }
  static remove(id) {
    return this.api().delete(`target-devices/${id}`, { delete: id });
  }
}
