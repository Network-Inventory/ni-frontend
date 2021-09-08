<template>
  <add-customer-dialog
    v-if="addCustomerDialogVisible"
    @ok="addCustomer"
    @cancel="closeDialog"
  ></add-customer-dialog>

  <base-card>
    <header><h1>Customers</h1></header>
    <base-button @click="openAddCustomer()">Add Customer</base-button>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <base-table v-else-if="hasCustomers">
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
          <router-link
            :to="{
              name: 'customer-details',
              params: { customerId: getId(customer.url) },
            }"
            >{{ customer.name }}</router-link
          >
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
    </base-table>
  </base-card>
</template>

<script>
import { ref, computed } from "vue";
import getAPI from "../scripts/axios-api";
import getId from "../scripts/get-id-from-url";
import AddCustomerDialog from "./AddCustomer.vue";

export default {
  components: {
    AddCustomerDialog,
  },
  setup() {
    const customers = ref([]);
    const addCustomerDialogVisible = ref(false);
    const isLoading = ref(true);

    const hasCustomers = computed(function() {
      //return isLoading.value && customers.value;
      //return isLoading.value;
      return !isLoading.value && customers.value;
    });

    function deleteCustomer(url) {
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
    }

    function openAddCustomer() {
      addCustomerDialogVisible.value = true;
    }
    function closeDialog() {
      addCustomerDialogVisible.value = false;
    }
    function addCustomer(customer) {
      customers.value.unshift(customer);
      addCustomerDialogVisible.value = false;
    }

    getAPI
      .get("/customers")
      .then((response) => {
        customers.value = response.data.results;
        isLoading.value = false;
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      customers,
      addCustomerDialogVisible,
      isLoading,
      hasCustomers,
      deleteCustomer,
      openAddCustomer,
      closeDialog,
      addCustomer,
      getId,
    };
  },
};
</script>
