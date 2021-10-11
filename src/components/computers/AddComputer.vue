<template>
  <q-dialog ref="dialogRef" @hide="isShowing = false">
    <q-card class="q-dialog-plugin">
      <q-toolbar>
        <q-toolbar-title>New Computer</q-toolbar-title>
      </q-toolbar>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            label="Computer name"
            type="text"
            v-model.trim="computerName"
            id="computer-name"
          />
          <q-input
            label="Description"
            v-model="computerDescription"
            filled
            type="textarea"
          />

          <q-select
            v-model="selectedCustomer"
            :options="customers"
            option-label="name"
            option-value="id"
            label="Customer"
          />
          <q-select
            v-model="selectedCategory"
            :options="categories"
            option-label="name"
            option-value="id"
            label="Category"
          />
          <div v-if="errorMessage">
            <p>You need to fill out both inputs.</p>
          </div>
        </q-form>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn flat label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from "quasar";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  emits: [...useDialogPluginComponent.emits],
  setup(_, context) {
    const $store = useStore();
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    const computerName = ref("");
    const computerDescription = ref("");
    const selectedCustomer = ref(null);
    const selectedCategory = ref(null);
    const errorMessage = ref(false);
    dialogRef.value = false;

    const customers = computed(() => $store.getters["customers/customers"]);
    const categories = computed(
      () => $store.getters["devices/deviceCategories"]
    );

    function validateInput() {
      if (computerName.value === "") {
        errorMessage.value = true;
        return false;
      } else {
        return true;
      }
    }

    function addComputer() {
      if (validateInput()) {
        const payload = {
          name: computerName.value,
          description: computerDescription.value,
          customer: selectedCustomer.value.id,
        };
        $store.dispatch("computers/addComputer", payload);
      }
    }

    return {
      computerName,
      computerDescription,
      selectedCustomer,
      selectedCategory,
      customers,
      categories,
      errorMessage,
      dialogRef,
      onDialogHide,
      onOKClick() {
        addComputer();
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },
};
</script>
