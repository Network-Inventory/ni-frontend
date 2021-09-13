"use strict";

import { createApp, defineAsyncComponent } from "vue";

import App from "./App.vue";
import router from "./router";

const BaseButton = defineAsyncComponent(() =>
  import("./components/UI/BaseButton")
);

const BaseCard = defineAsyncComponent(() => import("./components/UI/BaseCard"));

const BaseDialog = defineAsyncComponent(() =>
  import("./components/UI/BaseDialog")
);

const BaseRouterButton = defineAsyncComponent(() =>
  import("./components/UI/BaseRouterButton")
);

const BaseSpinner = defineAsyncComponent(() =>
  import("./components/UI/BaseSpinner")
);

const BaseTable = defineAsyncComponent(() =>
  import("./components/UI/BaseTable")
);

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-router-button", BaseRouterButton);
app.component("base-spinner", BaseSpinner);
app.component("base-table", BaseTable);

app.use(router);
app.mount("#app");

if (module.hot) {
  module.hot.accept();
  module.hot.addStatusHandler((status) => {
    if (status === "prepare") console.clear();
  });
}
