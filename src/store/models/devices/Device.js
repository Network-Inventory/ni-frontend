import { Model } from "@vuex-orm/core";

export default class Device extends Model {
  static entity = "devices";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
      serialnumber: this.attr(""),
      category_id: this.number(null),
      owner_id: this.number(null),
      customer_id: this.number(null),
      manufacturer_id: this.number(null),
      model_id: this.number(null),
      location_id: this.number(null),
      user_id: this.number(null),
      installation_date: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("devices", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`devices/${id}`);
  }
  static remove(id) {
    return this.api().delete(`devices/${id}`, { delete: id });
  }
}

