const MainLayout = () => import("layouts/MainLayout.vue");
const TheCustomers = () => import("../components/customers/TheCustomers.vue");
const CustomerDetails = () =>
  import("../components/customers/CustomerDetails.vue");
const ComputerDetails = () =>
  import("../components/computers/ComputerDetails.vue");
const TheComputers = () => import("../components/computers/TheComputers.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: TheCustomers }],
  },
  {
    name: "customer-details",
    path: "/customers/:customerId",
    component: CustomerDetails,
    props: true,
  },
  {
    name: "computers",
    path: "/computers",
    component: MainLayout,
    children: [{ path: "", component: TheComputers }],
  },
  {
    name: "computer-details",
    path: "/computers/:computerId",
    component: MainLayout,
    children: [{ path: "", component: ComputerDetails, props: true }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
