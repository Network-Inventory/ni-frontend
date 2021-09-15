const TheCustomers = () => import("../components/customers/TheCustomers.vue");
const CustomerDetails = () =>
  import("../components/customers/CustomerDetails.vue");
const ComputerDetails = () =>
  import("../components/computers/ComputerDetails.vue");
const TheComputers = () => import("../components/computers/TheComputers.vue");

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  { name: "customers", path: "/customers", component: TheCustomers },
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
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
