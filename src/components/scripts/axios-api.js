import axios from "axios";
import Config from "../../config.json";

function getBaseUrl() {
  if (Config.NI_BASE_URL === "$NI_BASE_URL") {
    return "http://" + process.env.NI_BASE_URL;
  } else if (Config.NI_MODE === "development") {
    return "http://" + Config.NI_BASE_URL;
  } else {
    return "https://" + Config.NI_BASE_URL;
  }
}

const apiURL = getBaseUrl();

const getAPI = axios.create({
  baseURL: apiURL,
  timeout: 1000,
});

export default getAPI;
