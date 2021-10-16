import { Model } from "@vuex-orm/core";

export default class DeviceCategory extends Model {
  static entity = "device-categories";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("device-categories", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`device-categories/${id}`);
  }
  static remove(id) {
    return this.api().delete(`device-categories/${id}`, { delete: id });
  }
}
