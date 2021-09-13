<template>
  <base-card>
    <header>
      <h1>{{ data.response?.name }}</h1>
    </header>
    <p>{{ data.response?.description }}</p>
    <p v-if="!allGood">Couldn't fetch the computer details.</p>
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
    console.log(isLoading);
    getData("computers", props.computerId);
    return {
      data,
      allGood,
    };
  },
};
</script>

<style scoped></style>
