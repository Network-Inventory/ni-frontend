<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ data?.name }}</div>
      </q-card-section>

      <div class="q-pa-md">
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label overline>Description</q-item-label>
              <q-item-label>{{ data?.description }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Serialnumber</q-item-label>
              <q-item-label>{{ data?.serialnumber }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Installation Date</q-item-label>
              <q-item-label>{{ data?.installation_date }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Category</q-item-label>
              <q-item-label>{{ data?.category.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Owner</q-item-label>
              <q-item-label>{{ data?.owner.name }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label overline>Customer</q-item-label>
              <q-item-label>{{ data?.customer.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Manufacturer</q-item-label>
              <q-item-label>{{ data?.manufacturer.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Model</q-item-label>
              <q-item-label>{{ data?.model.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Location</q-item-label>
              <q-item-label>{{ data?.location.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>User</q-item-label>
              <q-item-label>{{ data?.user.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label overline>Nets</q-item-label>
              <div v-if="data?.net">
                <q-item
                  v-for="net in data?.net"
                  :key="net.id"
                  :to="{
                    name: 'computer-details',
                    params: { computerId: net.url },
                  }"
                  >{{ net.name }}</q-item
                >
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <q-card-actions>
        <q-btn label="Back" color="primary" @click="$router.go(-1)" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import getId from "../../scripts/get-id-from-url";

export default {
  props: ["computerId"],
  setup(props) {
    const $store = useStore();
    const data = ref(null);

    $store
      .dispatch("computers/computerDetails", props.computerId)
      .then(function (computer) {
        data.value = computer;
      });

    return {
      data,
      getId,
    };
  },
};
</script>

<style scoped></style>
