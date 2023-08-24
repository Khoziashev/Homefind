<template>
  <v-app-bar color="primary" prominent>
    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>

    <template #append> </template>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainToolbar",

  data() {
    return {
      title: "HomeFind",
    };
  },
});
</script>
