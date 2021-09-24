import axios from "../../scripts/axios-api";
import getId from "../../scripts/get-id-from-url";

export async function loadAllComputers(context) {
  try {
    const response = await axios.get("/computers");
    const responseData = response.data.results;
    const computers = [];
    for (const key in responseData) {
      const computer = responseData[key];
      computer.id = getId(computer.url);
      computers.push(computer);
      context.commit("setcomputers", computers);
    }
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}
