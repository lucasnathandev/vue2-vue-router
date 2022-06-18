import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  new Route("/", "home", "HomeView"),
  new Route("/about", "about", "AboutView"),
  new Route("/contacts", "", "contacts/ContactsView", {
    alias: ["/my-contacts", "/contacts-list"],
    props: (route) => {
      const search = route.query.search;
      return search ? { found: search } : {};
    },
    children: [
      //Routes order matters inside children property.
      new Route(":id", "contactDetails", "contacts/ContactDetailsView", {
        props: (route) => ({ id: +route.params.id }),
        // props: { //This is used when you want the prop be constant
        //   id: 10,
        // },
      }),
      new Route(":id/edit", "contactEdit", "", {
        alias: ":id/change",
        components: {
          default: new ViewImport("contacts/ContactEditView"),
          contactDetailsRV: new ViewImport("contacts/ContactDetailsView"),
        },
        props: {
          default: true,
          contactDetailsRV: true,
        },
      }),
      new Route("", "contacts", "contacts/ContactsHomeView"),
    ],
  }),
  // new Route("/", "redirectContacts", "", { redirect: "/contacts", }),
  new Route("/home", "redirectHome", "", {
    redirect: (to) => {
      to;
      // return "/contacts";
      return {
        name: "home", //Route target name property
      };
    },
  }),
  new Route("/contacts*", "", "contacts/ContactNotFoundView"),
  // Not found route treatment
  new Route("*", "404NotFound", "NotFoundView"),
];

export default new VueRouter({
  linkActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Functions
function Route(path, name, component, options = {}) {
  const ext = component.match(/.vue|.js/);
  return {
    path,
    name,
    component: () => {
      if (ext !== null) return import(`../views/${component}`);
      return import(`../views/${component}.${options.ext || "vue"}`);
    },
    ...options,
  };
}

function ViewImport(componentName, ext = "vue") {
  const fileExt = componentName.match(/.vue|.js/);
  return () => {
    if (fileExt !== null) return import(`../views/${componentName}`);
    return import(`../views/${componentName}.${ext}`);
  };
}
