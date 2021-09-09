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
import { reactive } from "vue";
import axios from "../scripts/axios-api";

export default {
  props: ["customerId"],
  setup(props) {
    const customer = reactive({
      name: "",
      description: "",
    });
    let error = null;

    function getCustomer() {
      axios
        .get("customers/" + props.customerId)
        .then((response) => {
          customer.name = response.data.name;
          customer.description = response.data.description;
        })
        .catch((axiosError) => {
          error = axiosError;
          console.log(error);
        });
    }

    getCustomer();

    return {
      customer,
      error,
    };
  },
};
</script>

<style scoped></style>
