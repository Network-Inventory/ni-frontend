<template>
  <add-customer-dialog
    v-if="addCustomerDialogVisible"
    @ok="addCustomer"
    @cancel="closeDialog"
  ></add-customer-dialog>

  <div class="q-pa-md" v-if="allGood">
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="Add Customer" @click="openAddCustomer()" />
    </div>

    <q-table
      @row-click="openDetails"
      title="Customers"
      :rows="data.response"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <q-btn
              flat
              round
              color="red"
              icon="delete"
              @click.stop="deleteCustomer(props.row.url)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>

  <p v-else>Couldn't fetch the computer details.</p>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true
  },
  {
    name: "nets",
    label: "Nets",
    field: "nets",
    sortable: true
  },
  {
    name: "computers",
    label: "Computers",
    field: "computers",
    sortable: true
  },
  {
    name: "devices",
    label: "Devices",
    field: "devices",
    sortable: true
  },
  {
    name: "backups",
    label: "Backups",
    field: "backups",
    sortable: true
  },
  {
    name: "licenses",
    label: "Licenses",
    field: "licenses",
    sortable: true
  },
  {
    name: "users",
    label: "Users",
    field: "users",
    sortable: true
  },
  {
    name: "actions",
    label: "Actions",
    sortable: true
  }
];
import { ref } from "vue";
import { useRouter } from "vue-router";
import getAPI from "../../scripts/axios-api";
import { useGetObjects } from "../../hooks/GetData";
import getId from "../../scripts/get-id-from-url";
import AddCustomerDialog from "./AddCustomer.vue";

export default {
  components: {
    AddCustomerDialog
  },
  setup() {
    const addCustomerDialogVisible = ref(false);

    const router = useRouter();
    const { isLoading, data, allGood, getData } = useGetObjects("/customers");

    function openDetails(_, row) {
      const id = getId(row.url);
      router.push({
        name: "customer-details",
        params: { customerId: id }
      });
    }
    function deleteCustomer(url) {
      getAPI
        .delete(url)
        .then(() => {
          getData();
        })
        .catch(err => {
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
      openDetails,
      columns
    };
  }
};
</script>
