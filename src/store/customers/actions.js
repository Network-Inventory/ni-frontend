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
