<template>
  <q-dialog ref="dialogRef" @hide="isShowing = false">
    <q-card class="q-dialog-plugin">
      <q-toolbar>
        <q-toolbar-title>New Customer</q-toolbar-title>
      </q-toolbar>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            label="Customer name"
            type="text"
            v-model.trim="customerName"
            id="customer-name"
          />
          <q-input
            label="Description"
            v-model="customerDescription"
            filled
            type="textarea"
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
import { ref } from "vue";

import Customer from "models/Customer";

export default {
  emits: [...useDialogPluginComponent.emits],
  setup(_, context) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    const customerName = ref("");
    const customerDescription = ref("");
    const errorMessage = ref(false);
    dialogRef.value = false;

    function validateInput() {
      if (customerName.value === "") {
        errorMessage.value = true;
        return false;
      } else {
        return true;
      }
    }

    function addCustomer() {
      if (validateInput()) {
        Customer.api().post("", {
          name: customerName.value,
          description: customerDescription.value,
        });
      }
    }

    return {
      customerName,
      customerDescription,
      errorMessage,
      dialogRef,
      onDialogHide,
      onOKClick() {
        addCustomer();
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
