<template>
  <v-app-bar color="primary" prominent>
    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>

    <template #append>
      <language-picker />
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LanguagePicker from "@/components/pickers/LanguagePicker.vue";

export default defineComponent({
  name: "MainToolbar",

  components: {
    LanguagePicker,
  },

  data() {
    return {
      title: "HomeFind",
    };
  },
});
</script>
