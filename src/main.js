"use strict";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton";
import BaseCard from "./components/UI/BaseCard";
import BaseDialog from "./components/UI/BaseDialog";
import BaseRouterButton from "./components/UI/BaseRouterButton";
import BaseTable from "./components/UI/BaseTable";
import TheCustomers from "./components/customers/TheCustomers";
import CustomerDetails from "./components/customers/CustomerDetails";
import ComputerDetails from "./components/computers/ComputerDetails";
import TheComputers from "./components/computers/TheComputers";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "customers", path: "/", component: TheCustomers },
    {
      name: "customer-details",
      path: "/customers/:customerId",
      component: CustomerDetails,
      props: true,
    },
    { name: "computers", path: "/computers", component: TheComputers },
    {
      name: "computer-details",
      path: "/computers/:computerId",
      component: ComputerDetails,
      props: true,
    },
    { path: "/:notFound(.*)", component: TheCustomers },
  ],
  linkActiveClass: "active",
  srollBehaviour(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-router-button", BaseRouterButton);
app.component("base-table", BaseTable);
app.use(router);
app.mount("#app");

if (module.hot) {
  module.hot.accept();
  module.hot.addStatusHandler((status) => {
    if (status === "prepare") console.clear();
  });
}
