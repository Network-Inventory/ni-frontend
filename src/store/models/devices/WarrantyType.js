import { Model } from "@vuex-orm/core";

export default class WarrantyType extends Model {
  static entity = "warranty-types";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      description: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("warranty-types", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`warranty-types/${id}`);
  }
  static remove(id) {
    return this.api().delete(`warranty-types/${id}`, { delete: id });
  }
}

