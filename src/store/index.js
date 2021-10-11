import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import VuexORM from "@vuex-orm/core";

import computers from "./computers";
import customers from "./customers";
import Customer from "models/Customer";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// Create a new instance of Database.
const database = new VuexORM.Database();
database.register(Customer);

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      computers,
      customers,
    },
    plugins: [VuexORM.install(database)],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
