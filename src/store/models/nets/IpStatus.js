import { Model } from "@vuex-orm/core";

export default class IpStatus extends Model {
  static entity = "ip-status";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("ip-status", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`ip-status/${id}`);
  }
  static remove(id) {
    return this.api().delete(`ip-status/${id}`, { delete: id });
  }
}
