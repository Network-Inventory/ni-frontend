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
  <base-table v-if="allGood">
    <tr>
      <th class="orderable">Name</th>
      <th>Serialnumber</th>
      <th>Installation Date</th>
      <th>Category</th>
      <th>Owner</th>
      <th>Customer</th>
      <th>Manufacturer</th>
      <th>Model</th>
      <th>Location</th>
      <th>Users</th>
      <th>OS</th>
      <th>Host</th>
      <th>Actions</th>
    </tr>

    <tr v-for="computer in data.response" :key="computer.url">
      <td>
        <router-link
          :to="{
            name: 'computer-details',
            params: { computerId: getId(computer.url) }
          }"
          >{{ computer.name }}</router-link
        >
      </td>
      <td>{{ computer.serialnumber }}</td>
      <td :class="dateColour(computer.installation_date)">
        {{ computer.installation_date }}
      </td>
      <td>{{ computer.category?.name }}</td>
      <td>{{ computer.owner?.name }}</td>
      <td>{{ computer.customer?.name }}</td>
      <td>{{ computer.manufacturer?.name }}</td>
      <td>{{ computer.model?.name }}</td>
      <td>{{ computer.location?.name }}</td>
      <td>{{ computer.users }}</td>
      <td>{{ computer.os?.name }}</td>
      <td>{{ computer.host?.name }}</td>
      <td>
        <a href="#" @click="deleteComputer(computer.url)">delete</a>
      </td>
    </tr>
  </base-table>

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
