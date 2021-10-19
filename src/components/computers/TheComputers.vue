<template>
  <div class="q-pa-md">
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Add Computer" color="primary" @click="showDialog" />
    </div>
    <q-table
      @row-click="openDetails"
      title="Computers"
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
              @click.stop="deleteComputer(props.row.id)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { computed } from "vue";
import AddComputerDialog from "./AddComputer.vue";

import { Computer } from "models/computers";

export default {
  setup() {
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
        name: "serialnumber",
        align: "center",
        label: "Serialnumber",
        field: "serialnumber",
        sortable: true,
      },
      {
        name: "installation-date",
        label: "Installation date",
        field: "installation_date",
        sortable: true,
      },
      {
        name: "category",
        label: "Category",
        field: (row) => row.category?.name,
        sortable: true,
      },
      {
        name: "owner",
        label: "Owner",
        field: (row) => row.owner?.name,
        sortable: true,
      },
      {
        name: "manufacturer",
        label: "Manufacturer",
        field: (row) => row.manufacturer?.name,
        sortable: true,
      },
      {
        name: "model",
        label: "Model",
        field: (row) => row.model?.name,
        sortable: true,
      },
      {
        name: "location",
        label: "Location",
        field: (row) => row.location?.name,
        sortable: true,
      },
      {
        name: "user",
        label: "User",
        field: (row) => row.user?.name,
        sortable: true,
      },
      {
        name: "os",
        label: "OS",
        field: (row) => row.os?.name,
        sortable: true,
      },
      {
        name: "host",
        label: "Host",
        field: (row) => row.host?.name,
        sortable: true,
      },
      {
        name: "actions",
        label: "Actions",
        sortable: true,
      },
    ];

    const $q = useQuasar();
    const router = useRouter();
    const data = computed(() => Computer.all());

    function openDetails(_, row) {
      router.push({
        name: "computer-details",
        params: { computerId: row.id },
      });
    }

    function dateColour(inputDate) {
      const currentDate = new Date();
      const installation_date = new Date(inputDate);
      if (installation_date < currentDate) {
        return { "red-background": true };
      } else {
        return { "white-background": true };
      }
    }
    function deleteComputer(id) {
      Computer.remove(id);
    }

    function showDialog() {
      $q.dialog({
        component: AddComputerDialog,
      });
    }
    Computer.fetch();
    return {
      dateColour,
      deleteComputer,
      data,
      columns,
      openDetails,
      showDialog,
    };
  },
};
</script>
<style scoped>
.red-background {
  background-color: red;
}
</style>
