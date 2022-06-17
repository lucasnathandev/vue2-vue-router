import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  new Route("/about", "about", "AboutView"),
  new Route("/contacts", "", "contacts/ContactsView", {
    children: [
      //Routes order matters inside children property.
      new Route(":id", "contactDetails", "contacts/ContactDetailsView"),
      new Route(":id/edit", "contactEdit", "", {
        components: {
          default: new ViewImport("contacts/ContactEditView"),
          contactDetailsRV: new ViewImport("contacts/ContactDetailsView"),
        },
      }),
      new Route("", "contacts", "contacts/ContactsHomeView"),
    ],
  }),
  new Route("/home", "home", "HomeView"),
  // new Route("/", "redirectContacts", "", { redirect: "/contacts", }),
  new Route("/", "redirectContacts", "", {
    redirect: (to) => {
      to;
      // return "/contacts";
      return {
        name: "contacts",
      };
    },
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
