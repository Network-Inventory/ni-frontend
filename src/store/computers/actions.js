import axios from "../../scripts/axios-api";

export async function loadAllComputers(context) {
  try {
    const response = await axios.get("/computers");
    const computers = response.data.results;
    context.commit("setcomputers", computers);
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}
export async function addComputer(context, data) {
  const computer = {
    name: data.name,
    description: data.description,
    customer: data.customer,
  };
  try {
    console.log(computer);
    const response = await axios.post("/computers", computer);
    const responseComputer = response.data;
    context.commit("addNewComputer", responseComputer);
  } catch (err) {
    const error = new Error(err.message || "Failed to post!");
    throw error;
  }
}
export async function computerDetails(_, id) {
  try {
    const response = await axios.get("/computers/" + id);
    const responseData = response.data;
    return responseData;
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}
