import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import axios from "axios";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";

import computers from "./computers";
import Customer from "models/Customer";

VuexORM.use(VuexORMAxios, {
  axios,
});
const database = new VuexORM.Database();
database.register(Customer);

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
