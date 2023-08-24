<template>
  <v-container class="pa-0">
    <v-row align="start">
      <v-col v-for="n in 30" :key="n">
        <v-sheet
          class="pa-2 ma-2"
          style="min-width: 250px; min-height: 250px; background-color: green"
        >
          .align-start
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RentingPage",
});
</script>
