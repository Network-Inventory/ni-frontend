<template>
  <div class="q-pa-md">
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Add Customer" color="primary" @click="showDialog" />
    </div>

    <q-table
      @row-click="openDetails"
      title="Customers"
      :rows="data"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <q-btn
              flat
              round
              color="red"
              icon="delete"
              @click.stop="deleteCustomer(props.row.id)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "nets",
    label: "Nets",
    field: "nets",
    sortable: true,
  },
  {
    name: "computers",
    label: "Computers",
    field: "computers",
    sortable: true,
  },
  {
    name: "devices",
    label: "Devices",
    field: "devices",
    sortable: true,
  },
  {
    name: "backups",
    label: "Backups",
    field: "backups",
    sortable: true,
  },
  {
    name: "licenses",
    label: "Licenses",
    field: "licenses",
    sortable: true,
  },
  {
    name: "users",
    label: "Users",
    field: "users",
    sortable: true,
  },
  {
    name: "actions",
    label: "Actions",
    sortable: true,
  },
];
import { useQuasar } from "quasar";
import { computed } from "vue";
import { useRouter } from "vue-router";

import AddCustomerDialog from "./AddCustomer.vue";

import Customer from "models/Customer";

export default {
  setup() {
    const $q = useQuasar();

    const router = useRouter();
    const data = computed(() => Customer.all());

    function openDetails(_, customer) {
      router.push({
        name: "customer-details",
        params: { customerId: customer.id },
      });
    }
    function deleteCustomer(id) {
      const customerId = id.toString();
      Customer.api().delete(customerId, { delete: customerId });
    }

    function showDialog() {
      $q.dialog({
        component: AddCustomerDialog,
      });
    }

    Customer.api().get();

    return {
      deleteCustomer,
      data,
      openDetails,
      columns,
      showDialog,
    };
  },
};
</script>
