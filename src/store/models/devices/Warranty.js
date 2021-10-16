import { Model } from "@vuex-orm/core";

import { Customer } from "../customers";
import { Device } from ".";
import { WarrantyType } from ".";

export default class Warranty extends Model {
  static entity = "warranties";

  static fields() {
    return {
      id: this.number(null),
      customer_id: this.number(null),
      device_id: this.number(null),
      valid_from: this.attr(""),
      valid_until: this.attr(""),
      warranty_type_id: this.number(null),
      // relationships
      customer: this.belongsTo(Customer, "customer_id"),
      device: this.belongsTo(Device, "device_id"),
      warranty_type: this.belongsTo(WarrantyType, "warranty_type_id"),
    };
  }
  static fetch() {
    return this.api().get("warranties", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`warranties/${id}`);
  }
  static remove(id) {
    return this.api().delete(`warranties/${id}`, { delete: id });
  }
}
