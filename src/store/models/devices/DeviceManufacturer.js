import { Model } from "@vuex-orm/core";

export default class DeviceManufacturer extends Model {
  static entity = "device-manufacturers";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
      phone_number: this.attr(""),
      email_address: this.attr(""),
      website: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("device-manufacturers", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`device-manufacturers/${id}`);
  }
  static remove(id) {
    return this.api().delete(`device-manufacturers/${id}`, { delete: id });
  }
}
