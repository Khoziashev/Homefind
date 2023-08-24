<template>
  <v-menu location="bottom" transition="slide-x-transition">
    <template v-slot:activator="{ props }">
      <v-btn flat rounded="0" v-bind="props" height="64px">
        <img :src="require(`@/assets/flags/${currentLocale}.png`)" />
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in getLanguages"
        :key="i"
        :value="item"
        color="primary"
        @click="this.changeLocale(item.locale)"
      >
        <template v-slot:prepend>
          <img :src="require(`@/assets/flags/${item.locale}.png`)" />
        </template>

        <v-list-item-title class="pl-2">
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { languages } from "@/i18n";

export default defineComponent({
  name: "LanguagePicker",

  data() {
    return {
      currentLocale: this.$i18n.locale,
    };
  },

  computed: {
    getLanguages() {
      return languages;
    },
  },

  methods: {
    changeLocale(locale: string) {
      this.currentLocale = locale;
      this.$i18n.locale = locale;
      this.$vuetify.locale.current = this.$i18n.locale;
      document.cookie = `lang=${locale};path=/`;
    },
  },
});
</script>
