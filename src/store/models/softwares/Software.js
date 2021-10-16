import { Model } from "@vuex-orm/core";

import SoftwareCategory from "./SoftwareCategory";

export default class Software extends Model {
  static entity = "softwares";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      category_id: this.number(null),
      // relationships
      category: this.belongsTo(SoftwareCategory, "category_id")
    };
  }
  static fetch() {
    return this.api().get("softwares", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`softwares/${id}`);
  }
  static remove(id) {
    return this.api().delete(`softwares/${id}`, { delete: id });
  }
}
