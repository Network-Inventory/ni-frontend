<template>
  <base-card>
    <div v-if="customer">
      <header>
        <h1>{{ customer.name }}</h1>
      </header>
      <p>{{ customer.description }}</p>
    </div>
    <p v-if="error">Couldn't fetch the customer details.</p>
    <base-router-button to="/">
      Return to Customers
    </base-router-button>
  </base-card>
</template>

<script>
import axios from "../scripts/axios-api";
export default {
  data() {
    return {
      customer: {},
      error: false,
    };
  },
  created() {
    axios
      .get("customers/" + this.$route.params.customerId + "/")
      .then((response) => {
        this.customer = response.data;
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
