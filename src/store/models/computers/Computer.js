//import { Model } from "@vuex-orm/core";

import { Device } from "../devices";

export default class Computer extends Device {
  static entity = "computers";
  //static baseEntity = "devices";
  static fields() {
    return {
      ...super.fields(),
      os: this.number(null),
      allocated_space: this.number(null),
      host_id: this.number(null),
      cpu_ids: this.attr([]),
      ram_ids: this.attr([]),
      gpu_ids: this.attr([]),
      disk_ids: this.attr([]),
      software_ids: this.attr([]),
    };
  }
  static fetch() {
    return this.api().get("computers", {
      // dataKey: "results",
      dataTransformer: ({ data }) => {
        const result = [];
        data["results"].forEach((computer) => {
          computer.cpu_ids = computer.cpu;
          computer.ram_ids = computer.ram;
          computer.gpu_ids = computer.gpu;
          computer.disk_ids = computer.disks;
          computer.software_ids = computer.software;
          result.push(computer);
        });
        return result;
      },
    });
  }
  static getById(id) {
    return this.api().get(`computers/${id}`);
  }
  static remove(id) {
    return this.api().delete(`computers/${id}`, { delete: id });
  }
}
