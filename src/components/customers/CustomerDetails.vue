<template>
  <base-card>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div v-if="allGood">
      <header>
        <h1>{{ data.response.name }}</h1>
      </header>
      <p>{{ data.response.description }}</p>
    </div>
    <p v-else>Couldn't fetch the customer details.</p>
    <base-button @click="$router.go(-1)">
      Back
    </base-button>
  </base-card>
</template>

<script>
import { useGetSingleObject } from "../../hooks/GetData";

export default {
  props: ["customerId"],
  setup(props) {
    const { isLoading, data, allGood, getData } = useGetSingleObject();

    getData("customers", props.customerId);

    return {
      isLoading,
      data,
      allGood,
      getData,
    };
  },
};
</script>

<style scoped></style>
