<template>
  <base-card>
    <header>
      <h1>{{ customer.name }}</h1>
    </header>
    <p>{{ customer.description }}</p>
    <p v-if="error">Couldn't fetch the customer details.</p>
    <base-button @click="$router.go(-1)">
      Back
    </base-button>
  </base-card>
</template>

<script>
import axios from "../scripts/axios-api";
export default {
  props: ["customerId"],
  data() {
    return {
      customer: {},
      error: false,
    };
  },
  methods: {
    getCustomer(customerId) {
      axios
        .get("customers/" + customerId)
        .then((response) => {
          this.customer = response.data;
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
  },
  created() {
    this.getCustomer(this.customerId);
  },
};
</script>

<style scoped></style>
