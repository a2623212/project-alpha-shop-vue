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
    redirect: "/checkout",
  },
  {
    path: "/checkout",
    name: "check-out",
    component: CheckOut,
    children: [
      {
        path: "info",
        name: "1",
        component: FormInfo,
      },
      {
        path: "delivery",
        name: "2",
        component: () => import("../components/FormDelivery.vue"),
      },
      {
        path: "payment",
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
