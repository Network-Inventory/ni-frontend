"use strict";

import { createRouter, createWebHistory } from "vue-router";

const TheCustomers = () => import("../components/customers/TheCustomers");
const CustomerDetails = () => import("../components/customers/CustomerDetails");
const ComputerDetails = () => import("../components/computers/ComputerDetails");
const TheComputers = () => import("../components/computers/TheComputers");

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
