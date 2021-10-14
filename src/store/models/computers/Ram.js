import { Model } from "@vuex-orm/core";

export class Ram extends Model {
  static entity = "rams";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("rams", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`rams/id`);
  }
  static remove(id) {
    return this.api().delete(`rams/id`, { delete: id });
  }
}
