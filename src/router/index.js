"use strict";

import { createRouter, createWebHistory } from "vue-router";

import TheCustomers from "../components/customers/TheCustomers";
import CustomerDetails from "../components/customers/CustomerDetails";
import ComputerDetails from "../components/computers/ComputerDetails";
import TheComputers from "../components/computers/TheComputers";

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

export default router;
