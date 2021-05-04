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
  data() {
    return {
      computer: {},
      error: false,
    };
  },
  created() {
    axios
      .get("computers/" + this.$route.params.computerId)
      .then((response) => {
        this.computer = response.data;
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
