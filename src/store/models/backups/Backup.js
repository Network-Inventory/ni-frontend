import { Model } from "@vuex-orm/core";

export class BackupMethod extends Model {
  static entity = "backup-methods";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("backup-methods", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`backup-methods/${id}`);
  }
  static remove(id) {
    return this.api().delete(`backup-methods/${id}`, { delete: id });
  }
}
export class Backup extends Model {
  static entity = "backups";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("backups", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`backups/${id}`);
  }
  static remove(id) {
    return this.api().delete(`backups/${id}`, { delete: id });
  }
}

export class TargetDevice extends Model {
  static entity = "target-devices";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("target-devices", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`target-devices/${id}`);
  }
  static remove(id) {
    return this.api().delete(`target-devices/${id}`, { delete: id });
  }
}

export class NotificationFromBackup extends Model {
  static entity = "notifications-from-backup";

  static fields() {
    return {
      id: this.number(null),
      name: this.attr(""),
    };
  }
  static fetch() {
    return this.api().get("notifications-from-backup", {
      dataKey: "results",
    });
  }
  static getById(id) {
    return this.api().get(`notifications-from-backup/${id}`);
  }
  static remove(id) {
    return this.api().delete(`notifications-from-backup/${id}`, { delete: id });
  }
}
