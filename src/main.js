"use strict";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton";
import BaseCard from "./components/UI/BaseCard";
import BaseDialog from "./components/UI/BaseDialog";
import TheCustomers from "./components/customers/TheCustomers";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheCustomers,
    },
    {
      path: "/customers",
      component: TheCustomers,
    },
  ],
});

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.use(router);
app.mount("#app");

if (module.hot) {
  module.hot.accept();
  module.hot.addStatusHandler((status) => {
    if (status === "prepare") console.clear();
  });
}
