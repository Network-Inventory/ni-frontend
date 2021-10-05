<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ data.computer?.name }}</div>
      </q-card-section>
      <q-card-section>{{ data.computer?.description }}</q-card-section>
      <q-card-actions>
        <q-btn label="Back" color="primary" @click="$router.go(-1)" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  props: ["computerId"],
  setup(props) {
    const $store = useStore();
    const data = reactive({ computer: {} });

    $store
      .dispatch("computers/computerDetails", props.computerId)
      .then(function (computer) {
        data.computer = computer;
      });

    return {
      data,
    };
  },
};
</script>

<style scoped></style>
