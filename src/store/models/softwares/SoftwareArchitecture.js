import { Model } from "@vuex-orm/core";

export default class SoftwareArchitecture extends Model {
  static entity = "software-architectures";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("software-architectures", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`software-architectures/${id}`);
  }
  static remove(id) {
    return this.api().delete(`software-architectures/${id}`, { delete: id });
  }
}
