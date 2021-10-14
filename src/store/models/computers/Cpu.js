import { Model } from "@vuex-orm/core";

export class Cpu extends Model {
  static entity = "cpus";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("cpus", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`cpus/id`);
  }
  static remove(id) {
    return this.api().delete(`cpus/id`, { delete: id });
  }
}
