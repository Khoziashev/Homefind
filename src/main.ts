import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";

import App from "./App.vue";
import i18n from "./i18n";

import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).use(i18n).mount("#app");
