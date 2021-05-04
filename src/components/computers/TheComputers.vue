<template>
  <base-card>
    <header><h1>Computers</h1></header>
    <table>
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

      <tr v-for="computer in computers" :key="computer.url">
        <td>
          <router-link
            :to="{
              name: 'computer-details',
              params: { computerId: getId(computer.url) },
            }"
            >{{ computer.name }}</router-link
          >
        </td>
        <td>{{ computer.serialnumber }}</td>
        <td>{{ computer.installation_date }}</td>
        <td>{{ computer.category }}</td>
        <td>{{ computer.owner }}</td>
        <td>{{ computer.customer }}</td>
        <td>{{ computer.manufacturer }}</td>
        <td>{{ computer.model }}</td>
        <td>{{ computer.location }}</td>
        <td>{{ computer.users }}</td>
        <td>{{ computer.os }}</td>
        <td>{{ computer.host }}</td>
        <td>
          <a href="#" @click="deleteComputer(computer.url)">delete</a>
        </td>
      </tr>
    </table>
  </base-card>
</template>

<script>
import getAPI from "../scripts/axios-api";
import getId from "../scripts/get-id-from-url";

export default {
  components: {},
  data() {
    return {
      computers: [],
    };
  },
  methods: {
    deleteComputer(url) {
      getAPI
        .delete(url)
        .then(() => {
          this.computers = this.computers.filter(
            (computer) => computer.url !== url
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getId,
  },
  created() {
    getAPI
      .get("/computers")
      .then((response) => {
        this.computers = response.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
