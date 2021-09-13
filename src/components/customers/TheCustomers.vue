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
    <base-table v-if="allGood">
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

      <tr v-for="customer in data.response" :key="customer.url">
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
import { ref } from "vue";
import getAPI from "../scripts/axios-api";
import { useGetObjects } from "../../hooks/GetData";
import getId from "../scripts/get-id-from-url";
import AddCustomerDialog from "./AddCustomer.vue";

export default {
  components: {
    AddCustomerDialog,
  },
  setup() {
    const addCustomerDialogVisible = ref(false);

    const { isLoading, data, allGood, getData } = useGetObjects("/customers");

    function deleteCustomer(url) {
      getAPI
        .delete(url)
        .then(() => {
          getData();
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
    function addCustomer() {
      getData();
      addCustomerDialogVisible.value = false;
    }
    getData();

    return {
      addCustomerDialogVisible,
      isLoading,
      deleteCustomer,
      openAddCustomer,
      closeDialog,
      addCustomer,
      getId,
      allGood,
      data,
    };
  },
};
</script>
