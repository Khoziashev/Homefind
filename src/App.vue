<template>
  <v-app>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <toolbar-component />

    <nav-component />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <footer-component />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ToolbarComponent from "@/components/ToolbarComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "App",

  components: {
    ToolbarComponent,
    NavComponent,
    FooterComponent,
  },
});
</script>
