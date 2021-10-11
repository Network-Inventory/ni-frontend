import { Model } from "@vuex-orm/core";
import { ApiUrl } from "src/scripts/ApiUrl";

export default class Customer extends Model {
  static entity = "customers";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      description: this.attr(""),
    };
  }
  static apiConfig = {
    baseURL: ApiUrl + "customers",
  };
}
