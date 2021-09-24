export function setCustomers(state, payload) {
  state.customers = payload;
}

export function addNewCustomer(state, payload) {
  state.customers.push(payload);
}
