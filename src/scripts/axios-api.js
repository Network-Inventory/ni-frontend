import axios from "axios";

const getAPI = axios.create({
  baseURL: location.protocol + "//" + location.hostname + "/api/",
  timeout: 1000,
});

export default getAPI;
