import axios from "../../scripts/axios-api";

export async function loadCustomers(context) {
  try {
    const response = await axios.get("/customers");
    const customers = response.data.results;
    context.commit("setCustomers", customers);
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}

export async function addCustomer(context, data) {
  const customer = {
    name: data.name,
    description: data.description,
  };
  try {
    const response = await axios.post("/customers", customer);
    const responseCustomer = response.data;
    context.commit("addNewCustomer", responseCustomer);
  } catch (err) {
    const error = new Error(err.message || "Failed to post!");
    throw error;
  }
}
export async function customerDetails(_, id) {
  try {
    const response = await axios.get("/customers/" + id);
    const responseData = response.data;
    return responseData;
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}
