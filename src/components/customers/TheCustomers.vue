<template>
  <add-customer
    v-if="addCustomerDialogVisible"
    @ok="addCustomer"
    @cancel="closeDialog"
  ></add-customer>

  <base-card>
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
          <a href="http://google.com" @click="showDetails(customer)">{{
            customer.name
          }}</a>
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
  </base-card>
</template>

<script>
import getAPI from "../scripts/axios-api";
//import BaseButton from "../UI/BaseButton.vue";
import AddCustomer from "./AddCustomer.vue";

export default {
  components: {
    AddCustomer,
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
