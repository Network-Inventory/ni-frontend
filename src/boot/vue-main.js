import { boot } from "quasar/wrappers";
import { defineAsyncComponent } from "vue";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do

  const BaseButton = defineAsyncComponent(() =>
    import("../components/UI/BaseButton")
  );

  const BaseCard = defineAsyncComponent(() =>
    import("../components/UI/BaseCard")
  );

  const BaseDialog = defineAsyncComponent(() =>
    import("../components/UI/BaseDialog")
  );

  const BaseRouterButton = defineAsyncComponent(() =>
    import("../components/UI/BaseRouterButton")
  );

  const BaseSpinner = defineAsyncComponent(() =>
    import("../components/UI/BaseSpinner")
  );

  const BaseTable = defineAsyncComponent(() =>
    import("../components/UI/BaseTable")
  );
  app.component("base-card", BaseCard);
  app.component("base-button", BaseButton);
  app.component("base-dialog", BaseDialog);
  app.component("base-router-button", BaseRouterButton);
  app.component("base-spinner", BaseSpinner);
  app.component("base-table", BaseTable);
});
