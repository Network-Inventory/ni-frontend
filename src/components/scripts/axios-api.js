import axios from "axios";
import Config from "../../config.json";

function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost/api/";
  } else if (Config.NI_MODE === "development") {
    console.log(Config.NI_HOST);
    return "http://" + Config.NI_HOST + "/api/";
  } else {
    console.log(Config.NI_HOST);
    return "https://" + Config.NI_HOST + "/api/";
  }
}

const apiURL = getBaseUrl();

console.log("Connected to API at: " + apiURL);

const getAPI = axios.create({
  baseURL: apiURL,
  timeout: 1000,
});

export default getAPI;
