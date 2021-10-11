import axios from "../../scripts/axios-api";

export async function loadDevices(context) {
  try {
    const response = await axios.get("/devices");
    const devices = response.data.results;
    context.commit("setDevices", devices);
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}
export async function loadDeviceCategories(context) {
  try {
    const response = await axios.get("/device-categories");
    const categories = response.data.results;
    context.commit("setDeviceCategories", categories);
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}
export async function addDeviceCategory(context, data) {
  const category = {
    name: data.name,
  };
  try {
    const response = await axios.post("/device-categories", category);
    const responseCategory = response.data;
    context.commit("addNewDeviceCategory", responseCategory);
  } catch (err) {
    const error = new Error(err.message || "Failed to post!");
    throw error;
  }
}
export async function loadDeviceManufacturers(context) {
  try {
    const response = await axios.get("/device-manufacturers");
    const manufacturers = response.data.results;
    context.commit("setDeviceManufacturers", manufacturers);
  } catch (err) {
    const error = new Error(err.message || "Failed to fetch!");
    throw error;
  }
}
export async function addDeviceManufacturer(context, data) {
  const manufacturer = {
    name: data.name,
    description: data.description,
  };
  try {
    const response = await axios.post("/device-manufacturer", manufacturer);
    const responseManufacturer = response.data;
    context.commit("addNewDeviceManufacturer", responseManufacturer);
  } catch (err) {
    const error = new Error(err.message || "Failed to post!");
    throw error;
  }
}
