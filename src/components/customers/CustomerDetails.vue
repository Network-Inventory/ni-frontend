<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ data?.name }}</div>
      </q-card-section>
      <q-card-section>{{ data?.description }}</q-card-section>
      <q-card-actions>
        <q-btn label="Back" color="primary" @click="$router.go(-1)" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["customerId"],
  setup(props) {
    const $store = useStore();
    const data = ref(null);
    $store
      .dispatch("customers/customerDetails", props.customerId)
      .then(function (customer) {
        data.value = customer;
      });

    return {
      data,
    };
  },
};
</script>

<style scoped></style>
