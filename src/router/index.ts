import { About, Services, Home, Trends, NotFound, Login, Crud } from "@/views";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import store from "@/store";

// import App from "@/App.vue"; // Import App.vue
const DESC_SUFFIX = "description - length <= 160 chars.";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      transition: "fade",
      title: "Home",
      description: `Home ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      transition: "fade",
      title: "About",
      description: `About ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    meta: {
      transition: "fade",
      title: "Υπηρεσίες",
      description: `Σχετικά με εμάς ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/trends",
    name: "Trends",
    component: Trends,
    meta: {
      transition: "fade",
      title: "Τάσεις",
      description: `Πορεία τιμής βασικών δημητριακών ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  //admin

  {
    path: "/admin",
    name: "Admin",
    component: Login,
    meta: {
      transition: "fade",
      title: "logon",
      description: "login",
      isAdmin: true,
    },
  },
  {
    path: "/admin/crud",
    name: "Crud",
    component: Crud,
    meta: {
      transition: "fade",
      title: "Crud",
      description: "Crud",
      isAdmin: true,
    },
  },
];

function scrollBehavior() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ left: 0, top: 0 });
    }, 250);
  });
}

// Create new instance of vue-router
const router = createRouter({
  routes,
  scrollBehavior,
  linkExactActiveClass: "is-active",
  history: createWebHistory(process.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  const isAdminRoute = to.matched.some((record) => record.meta.isAdmin);

  if (isAdminRoute) {
    store.commit("setIsAdmin", true);
  } else {
    store.commit("setIsAdmin", false);
  }

  next();
});

export default router;
