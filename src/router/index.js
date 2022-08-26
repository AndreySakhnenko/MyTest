import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../components/MyTestContent.vue";
import Test from "../components/TestLink.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/test",
    name: "test",
    component: Test,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory("/MyTest/"),
  routes,
});

export default router
