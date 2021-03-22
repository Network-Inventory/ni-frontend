import axios from "axios";
import Config from "../../config.json";

const getAPI = axios.create({
  baseURL: Config.NI_BASE_URL,
  timeout: 1000,
});

export default getAPI;
