import Vue from "vue";
import VueRouter from "vue-router";

function Route(path, name, component, options = {}) {
  const ext = component.match(/.vue|.js/);
  console.log(ext);
  return {
    path,
    name,
    component: () =>
      import(`../views/${component}.${ext !== null || options.ext || "vue"}`),
    ...options,
  };
}

Vue.use(VueRouter);

const routes = [
  new Route("/", "home", "HomeView"),
  new Route("/about", "about", "AboutView"),
  new Route("/contacts", "contacts", "contacts/ContactsView", {
    children: [
      new Route(":id", "contactDetails", "contacts/ContactDetailsView"),
      new Route("", "contactsHome", "contacts/ContactsHomeView"),
    ],
  }),
];

const router = new VueRouter({
  linkActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
