import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: () => import("../src/pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../src/pages/About.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../src/pages/Portfolio.vue"),
    },
    {
      path: "/:notFound(.*)",
      component: () => import("../src/pages/NotFound.vue"),
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../src/pages/Blogs.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../src/pages/Contact.vue"),
    },
  ],
});

export default router;
