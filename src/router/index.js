import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import CheckOut from "../views/CheckOut.vue";
import FormInfo from "../components/FormInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/checkout/1",
  },
  {
    path: "/checkout",
    name: "check-out",
    component: CheckOut,
    children: [
      {
        path: "1",
        name: "1",
        component: FormInfo,
      },
      {
        path: "2",
        name: "2",
        component: () => import("../components/FormDelivery.vue"),
      },
      {
        path: "3",
        name: "3",
        component: () => import("../components/FormPayment.vue"),
      },
    ],
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
