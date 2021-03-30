<template>
  <base-card>
    <header>
      <h1>{{ computer.name }}</h1>
    </header>
    <p>{{ computer.description }}</p>
    <p v-if="error">Couldn't fetch the computer details.</p>
    <base-button @click="$router.go(-1)">
      Back
    </base-button>
  </base-card>
</template>

<script>
import axios from "../scripts/axios-api";
export default {
  props: ["computerId"],
  data() {
    return {
      computer: {},
      error: false,
    };
  },
  methods: {
    getComputer(computerId) {
      axios
        .get("computers/" + computerId + "/")
        .then((response) => {
          this.computer = response.data;
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
  },
  created() {
    this.getComputer(this.computerId);
  },
};
</script>

<style scoped></style>
