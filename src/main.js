"use strict";

import { createApp } from "vue";

import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton";

const app = createApp(App);
app.mount("#app");
app.component("base-button", BaseButton);

if (module.hot) {
  module.hot.accept();
  module.hot.addStatusHandler((status) => {
    if (status === "prepare") console.clear();
  });
}
