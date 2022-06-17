import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  new Route("/", "home", "HomeView"),
  new Route("/about", "about", "AboutView"),
  new Route("/contacts", "contacts", "contacts/ContactsView", {
    children: [
      new Route(":id", "contactDetails", "contacts/ContactDetailsView"),
      new Route(":id/edit", "contactEdit", "contacts/", {
        components: {
          default: new ViewImport("contacts/ContactEditView"),
          contactDetailsRV: new ViewImport("contacts/ContactDetailsView"),
        },
      }),
      new Route("", "contactsHome", "contacts/ContactsHomeView"),
    ],
  }),
];

export default new VueRouter({
  linkActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function Route(path, name, component, options = {}) {
  const ext = component.match(/.vue|.js/);
  return {
    path,
    name,
    component: () =>
      import(`../views/${component}.${ext !== null || options.ext || "vue"}`),
    ...options,
  };
}

function ViewImport(componentName, ext = "vue") {
  const fileExt = componentName.match(/.vue|.js/);
  return () => import(`../views/${componentName}.${fileExt !== null || ext}`);
}
