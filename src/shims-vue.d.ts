import "vuex";
import "vuetify";
import VueI18n from "vue-i18n";
import { Route, RawLocation } from "vue-router";
import "vue-class-component/hooks";

type i18nD = typeof VueI18n.prototype.d;
type i18nT = typeof VueI18n.prototype.t;

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  // 3. Declare augmentation for Vue
  interface Vue {
    $t: i18nT;
    $d: i18nD;
    $duration: { (value: number | null, format: string): string | null };

    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void;
    beforeRouteLeave?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void;
    beforeRouteUpdate?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void;
  }
}

declare module "vue-meta/types/vue-meta" {
  interface MetaInfo {
    fillHeight?: boolean;
    title?: string;
  }
}
