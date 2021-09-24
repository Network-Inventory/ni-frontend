import axios from "../../scripts/axios-api";
import getId from "../../scripts/get-id-from-url";

export async function loadCustomers(context) {
  try {
    const response = await axios.get("/customers");
    const responseData = response.data.results;
    const customers = [];
    for (const key in responseData) {
      const customer = {
        id: getId(responseData[key].url),
        name: responseData[key].name,
        description: responseData[key].description,
        url: responseData[key].url,
      };
      customers.push(customer);
      context.commit("setCustomers", customers);
    }
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
    context.commit("addNewCustomer", response.data);
  } catch (err) {
    const error = new Error(err.message || "Failed to post!");
    throw error;
  }
}
