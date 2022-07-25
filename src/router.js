import Vue from "vue";
import VueRouter from "vue-router";

// Because Vue is not global we tie Vue
// and VueRouter together manually
Vue.use(VueRouter);

// Initialize router
const router = new VueRouter({
  base: "",
  mode: "history", // the hash works for slugging on prod, for now
  routes: [
    {
      path: "",
      component: () => import("./components/MeetsList.vue"),
    },
    {
      path: "/:slug",
      component: () => import("./components/MeetsPage.vue"),
    },
  ],
});

export default router;
