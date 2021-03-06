import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Add from "../views/Add.vue";
import Update from "../views/Update.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
  { name: "CatchAll", path: "/:catchAll(.*)", component: Login },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// GOOD
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem("user-info");
  if (user !== null && (to.name === "Login" || to.name === "SignUp" || to.name === "CatchAll")) next({ name: "Home" });
  else if (user === null && to.name !== "Login" && to.name !== "SignUp") next({ name: "Login" });
  else next();
});

export default router;
