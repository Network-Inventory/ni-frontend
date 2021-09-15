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
    <p v-else>Couldn't fetch the computer details.</p>
    <base-button @click="$router.go(-1)">
      Back
    </base-button>
  </base-card>
</template>

<script>
import { useGetSingleObject } from "../../hooks/GetData";
export default {
  props: ["computerId"],
  data(props) {
    const { isLoading, data, allGood, getData } = useGetSingleObject();
    getData("computers", props.computerId);
    return {
      isLoading,
      data,
      allGood,
    };
  },
};
</script>

<style scoped></style>
