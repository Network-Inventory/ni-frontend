export function setDevices(state, payload) {
  state.devices = payload;
}
export function addNewDevice(state, payload) {
  state.devices.push(payload);
}
export function setDeviceManufcaturers(state, payload) {
  state.device_manfucaturers = payload;
}
export function addNewDeviceManufacturer(state, payload) {
  state.device_manfucaturers.push(payload);
}
export function setDeviceCategories(state, payload) {
  state.device_categories = payload;
}
export function addNewDeviceCategory(state, payload) {
  state.device_categories.push(payload);
}
