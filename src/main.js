"use strict";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";

import BaseButton from "./components/UI/BaseButton";
import BaseCard from "./components/UI/BaseCard";
import BaseDialog from "./components/UI/BaseDialog";
import BaseRouterButton from "./components/UI/BaseRouterButton";
import BaseTable from "./components/UI/BaseTable";

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-router-button", BaseRouterButton);
app.component("base-table", BaseTable);
app.use(router);
app.mount("#app");

if (module.hot) {
  module.hot.accept();
  module.hot.addStatusHandler((status) => {
    if (status === "prepare") console.clear();
  });
}
