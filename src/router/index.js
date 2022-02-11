import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import CheckOut from "../views/CheckOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/checkout",
  },
  {
    path: "/checkout",
    name: "check-out",
    component: CheckOut,
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
