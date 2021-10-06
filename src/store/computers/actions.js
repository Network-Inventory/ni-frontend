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
