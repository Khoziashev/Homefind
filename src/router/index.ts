import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ForSalePage from "../pages/ForSalePage.vue";
import RentingPage from "../pages/RentingPage.vue";
import BuyingPage from "../pages/BuyingPage.vue";
import ForRentPage from "../pages/ForRentPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/forSale",
    name: "ForSalePage",
    component: ForSalePage,
  },
  {
    path: "/renting",
    name: "RentingPage",
    component: RentingPage,
  },
  {
    path: "/buying",
    name: "BuyingPage",
    component: BuyingPage,
  },
  {
    path: "/forRent",
    name: "ForRentPage",
    component: ForRentPage,
  },
  {
    path: "/settings",
    name: "SettingsPage",
    component: SettingsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
