<template>
  <base-dialog @cancel="$emit('cancel')" title="Add Customer">
    <form @submit.prevent="addCustomer">
      <label for="customer-name">Name</label>
      <input type="text" v-model.trim="customerName" id="customer-name" />
      <label id="customer-description">Description</label>
      <textarea
        v-model.trim="customerDescription"
        id="customer-description"
      ></textarea>
      <div v-if="errorMessage">
        <p>You need to fill out both inputs.</p>
      </div>
      <base-button>Save</base-button>
    </form>
  </base-dialog>
</template>

<script>
import { ref } from "vue";
import getAPI from "../../scripts/axios-api";

export default {
  setup(_, context) {
    const customerName = ref("");
    const customerDescription = ref("");
    const errorMessage = ref(false);

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
        getAPI
          .post("/customers", {
            name: customerName.value,
            description: customerDescription.value,
          })
          .then((response) => {
            context.emit("ok", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    return {
      customerName,
      customerDescription,
      errorMessage,
      addCustomer,
    };
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
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
</style>
