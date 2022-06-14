import Vue from "vue";
import VueRouter from "vue-router";

function Route(path, name, component, ext = "vue") {
  return {
    path,
    name,
    component: () => import(`../views/${component}.${ext}`),
  };
}

Vue.use(VueRouter);

const routes = [
  new Route("/", "home", "HomeView"),
  new Route("/about", "about", "AboutView"),
  new Route("/contacts", "contacts", "contacts/ContactsView"),
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
