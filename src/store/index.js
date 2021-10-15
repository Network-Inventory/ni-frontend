import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import axios from "axios";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";

import { ApiUrl } from "src/scripts/ApiUrl";

import computers from "./computers";
import {
  Weekday,
  DayOfMonth,
  Month,
  HoursInDay,
  MinutesInHour,
} from "models/core";
import {
  BackupMethod,
  NotificationType,
  Notification,
  TargetDevice,
} from "models/backups";
import { Computer, Cpu, Disk, Gpu, Raid, Ram } from "models/computers";
import { Customer, Location, Owner } from "models/customers";

VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: ApiUrl,
});
const database = new VuexORM.Database();
database.register(Weekday);
database.register(DayOfMonth);
database.register(Month);
database.register(HoursInDay);
database.register(MinutesInHour);

database.register(BackupMethod);
database.register(NotificationType);
database.register(Notification);
database.register(TargetDevice);

database.register(Computer);
database.register(Cpu);
database.register(Disk);
database.register(Gpu);
database.register(Raid);
database.register(Ram);

database.register(Customer);
database.register(Location);
database.register(Owner);

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      computers,
    },
    plugins: [VuexORM.install(database)],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
