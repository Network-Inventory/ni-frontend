import { Model } from "@vuex-orm/core";

export class Weekday extends Model {
  static entity = "weekdays";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      value: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("weekdays", {
      dataKey: "results",
    });
  }
}

export class DayOfMonth extends Model {
  static entity = "days-of-month";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("days-of-month", {
      dataKey: "results",
    });
  }
}

export class Month extends Model {
  static entity = "months";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      value: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("months", {
      dataKey: "results",
    });
  }
}
