import { Model } from "@vuex-orm/core";

export class HoursInDay extends Model {
  static entity = "hours-in-day";

  static fields() {
    return {
      id: this.number(null),
      name: this.number(null),
    };
  }
}

export class MinutesInHour extends Model {
  static entity = "minutes-in-hour";

  static fields() {
    return {
      id: this.number(null),
      name: this.number(null),
    };
  }
}
