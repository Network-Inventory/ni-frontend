import { Model } from "@vuex-orm/core";
import { BackupMethod } from ".";

import { Computer } from "../computers";
import { Weekday } from "../core";
import { Software } from "../softwares";
import { TargetDevice } from ".";

export default class Backup extends Model {
  static entity = "backups";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
      computer_id: this.number(null),
      backup_method_id: this.number(null),
      software_id: this.number(null),
      source_path: this.attr(""),
      exec_time: this.attr(""),
      weekday_ids: this.attr([]),
      target_device_ids: this.attr([]),
      // relationships
      computer: this.belongsTo(Computer, "computer_id"),
      software: this.belongsTo(Software, "software_id"),
      method: this.belongsTo(BackupMethod, "backup_method_id"),
      //weekdays: this.hasManyBy(Weekday, "weekday_ids"),
    };
  }
  static fetch() {
    return this.api().get("backups", {
      //dataKey: "results",
      dataTransformer: ({ data }) => {
        const result = [];
        data["results"].forEach((backup) => {
          backup.weekday_ids = backup.exec_days;
          result.
        });
        //console.log(transformedData);
        return data;
      },
    });
  }
  static getById(id) {
    return this.api().get(`backups/${id}`);
  }
  static remove(id) {
    return this.api().delete(`backups/${id}`, { delete: id });
  }
}
