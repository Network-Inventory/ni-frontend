export function setcomputers(state, payload) {
  state.computers = payload;
}
export function addNewComputer(state, payload) {
  state.computers.push(payload);
}
