import { Model } from "@vuex-orm/core";

export class HoursInDay extends Model {
  static entity = "hours-in-day";

  static fields() {
    return {
      id: this.number(null),
      name: this.number(null),
    };
  }
  static fetch() {
    return this.api().get("hours-in-day", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`hours-in-day/${id}`);
  }
  static remove(id) {
    return this.api().delete(`hours-in-day/${id}`, { delete: id });
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
  static fetch() {
    return this.api().get("minutes-in-hour", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`minutes-in-hour/${id}`);
  }
  static remove(id) {
    return this.api().delete(`minutes-in-hour/${id}`, { delete: id });
  }
}
