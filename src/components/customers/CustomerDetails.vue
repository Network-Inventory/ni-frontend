<template>
  <dialog open>
    <div v-if="customer">
      <header>
        <h1>{{ customer.name }}</h1>
      </header>
      <p>{{ customer.description }}</p>
    </div>
    <p v-if="error">Couldn't fetch the customer details.</p>
    <base-button @click="$emit('hide-details', true)">
      Return to Customers
    </base-button>
  </dialog>
</template>

<script>
import axios from "../scripts/axios-api";
export default {
  props: {
    customerUrl: {
      type: String,
      required: true,
    },
  },
  emits: ["hide-details"],
  data() {
    return {
      customer: {},
      error: false,
    };
  },
  created() {
    axios
      .get("customers")
      .then((response) => {
        this.customer = response.data.results[0];
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
