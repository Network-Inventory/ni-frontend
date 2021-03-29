<template>
  <base-card>
    <div v-if="customer">
      <header>
        <h1>{{ customer.name }}</h1>
      </header>
      <p>{{ customer.description }}</p>
    </div>
    <p v-if="error">Couldn't fetch the customer details.</p>
    <router-link to="/">
      Return to Customers
    </router-link>
  </base-card>
</template>

<script>
import axios from "../scripts/axios-api";
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
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

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
