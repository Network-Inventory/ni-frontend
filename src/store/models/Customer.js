import { Model } from "@vuex-orm/core";

export default class Customer extends Model {
  static entity = "customers";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      description: this.attr(""),
    };
  }
}
