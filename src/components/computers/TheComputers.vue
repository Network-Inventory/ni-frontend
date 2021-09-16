<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div class="q-pa-md" v-if="allGood">
    <q-table
      title="Computers"
      :rows="data.response"
      :columns="columns"
      row-key="url"
    />
  </div>

  <p v-else>Couldn't fetch the computer details.</p>
</template>

<script>
import { computed } from "vue";
import getAPI from "../../scripts/axios-api";
import { useGetObjects } from "../../hooks/GetData";
import getId from "../../scripts/get-id-from-url";

export default {
  setup() {
    const columns = [
      {
        name: "name",
        required: true,
        label: "Name",
        align: "left",
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: "Serialnumber",
        align: "center",
        label: "Serialnumber",
        field: "serialnumber",
        sortable: true
      },
      {
        name: "Installation date",
        label: "Installation date",
        field: "installation_date",
        sortable: true
      },
      {
        name: "Category",
        label: "Category",
        field: row => row.category?.name,
        sortable: true
      },
      {
        name: "Owner",
        label: "Owner",
        field: row => row.owner?.name,
        sortable: true
      },
      {
        name: "Manufacturer",
        label: "Manufacturer",
        field: row => row.manufacturer?.name,
        sortable: true
      },
      {
        name: "Model",
        label: "Model",
        field: row => row.model?.name,
        sortable: true
      },
      {
        name: "Location",
        label: "Location",
        field: row => row.location?.name,
        sortable: true
      },
      {
        name: "User",
        label: "User",
        field: row => row.user?.name,
        sortable: true
      },
      {
        name: "OS",
        label: "OS",
        field: row => row.os?.name,
        sortable: true
      },
      {
        name: "Host",
        label: "Host",
        field: row => row.host?.name,
        sortable: true
      },
      {
        name: "Actions",
        label: "Actions",
        field: "actions",
        sortable: true
      }
    ];

    const { isLoading, data, allGood, getData } = useGetObjects("/computers");

    function dateColour(inputDate) {
      const currentDate = new Date();
      const installation_date = new Date(inputDate);
      if (installation_date < currentDate) {
        return { "red-background": true };
      } else {
        return { "white-background": true };
      }
    }
    function deleteComputer(url) {
      getAPI
        .delete(url)
        .then(() => {
          getData();
        })
        .catch(err => {
          console.log(err);
        });
    }

    getData();
    return {
      dateColour,
      deleteComputer,
      getId,
      isLoading,
      allGood,
      data,
      columns
    };
  }
};
</script>
<style scoped>
.red-background {
  background-color: red;
}
</style>
