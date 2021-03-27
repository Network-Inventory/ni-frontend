<template>
  <customer-details
    v-if="showCustomerDetails"
    :customer-url="customerUrl"
    @hide-details="hideDetails"
  ></customer-details>

  <add-customer
    v-if="addCustomerDialogVisible"
    @ok="addCustomer"
    @cancel="closeDialog"
  ></add-customer>

  <div v-if="!showCustomerDetails" class="card">
    <header><h1>Customers</h1></header>
    <base-button @click="openAddCustomer()">Add Customer</base-button>
    <table class="table table-hover table-bordered">
      <tr>
        <th class="orderable">Name</th>
        <th>Nets</th>
        <th>Computers</th>
        <th>Devices</th>
        <th>Backups</th>
        <th>Licenses</th>
        <th>Users</th>
        <th>Actions</th>
      </tr>

      <tr v-for="customer in customers" :key="customer.url">
        <td>
          <a href="#" @click="showDetails(customer)">{{ customer.name }}</a>
        </td>
        <td><a :href="customer.url">Nets</a></td>
        <td><a :href="customer.url">Computers</a></td>
        <td><a :href="customer.url">Devices</a></td>
        <td><a :href="customer.url">Backups</a></td>
        <td><a :href="customer.url">Licenses</a></td>
        <td><a :href="customer.url">Users</a></td>
        <td>
          <a href="#" @click="deleteCustomer(customer.url)">delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import getAPI from "../scripts/axios-api";
//import BaseButton from "../UI/BaseButton.vue";
import AddCustomer from "./AddCustomer.vue";
import CustomerDetails from "./CustomerDetails.vue";

export default {
  components: {
    AddCustomer,
    CustomerDetails,
    //   BaseButton,
  },
  data() {
    return {
      customers: [],
      addCustomerDialogVisible: false,
      showCustomerDetails: false,
      customerUrl: "",
    };
  },
  methods: {
    deleteCustomer(url) {
      getAPI
        .delete(url)
        .then(() => {
          this.customers = this.customers.filter(
            (customer) => customer.url !== url
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openAddCustomer() {
      this.addCustomerDialogVisible = true;
    },
    closeDialog() {
      this.addCustomerDialogVisible = false;
    },
    addCustomer(customer) {
      this.customers.unshift(customer);
      this.addCustomerDialogVisible = false;
    },
    showDetails(customer) {
      this.customerUrl = customer.url;
      this.showCustomerDetails = true;
    },
    hideDetails() {
      this.showCustomerDetails = false;
    },
  },
  created() {
    getAPI
      .get("/customers/")
      .then((response) => {
        this.customers = response.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
