<template>
  <v-navigation-drawer :rail="rail" permanent @click="rail = false">
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template #append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        />
      </template>
    </v-list-item>

    <v-divider />

    <v-list density="compact" nav>
      <div v-for="(item, idx) in getNavIcons" :key="idx">
        <v-list-item
          :title="item.title"
          :value="item.value"
          :to="`/${item.value}`"
        >
          <template #prepend>
            <v-icon :icon="item.icon" class="pl-4 pr-0" />
          </template>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",

  data() {
    return {
      rail: false,
      isOwner: true,
    };
  },

  computed: {
    getNavIcons() {
      const icons = [
        {
          icon: "mdi-cog",
          title: this.$t("mainNav.settings"),
          value: "settings",
        },
      ];

      if (this.isOwner) {
        icons.unshift(
          {
            icon: "mdi-home-edit",
            title: this.$t("mainNav.forSale"),
            value: "forSale",
          },
          {
            icon: "mdi-home-clock",
            title: this.$t("mainNav.renting"),
            value: "renting",
          }
        );
      } else {
        icons.unshift(
          {
            icon: "mdi-home-edit",
            title: this.$t("mainNav.buying"),
            value: "buying",
          },
          {
            icon: "mdi-home-clock",
            title: this.$t("mainNav.forRent"),
            value: "forRent",
          }
        );
      }

      return icons;
    },
  },
});
</script>
