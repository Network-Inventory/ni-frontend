import { Model } from "@vuex-orm/core";

export default class Disk extends Model {
  static entity = "disks";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("disks", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`disks/${id}`);
  }
  static remove(id) {
    return this.api().delete(`disks/${id}`, { delete: id });
  }
}
