import { Model } from "@vuex-orm/core";

export default class Gpu extends Model {
  static entity = "gpus";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("gpus", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`gpus/${id}`);
  }
  static remove(id) {
    return this.api().delete(`gpus/${id}`, { delete: id });
  }
}
