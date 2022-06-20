import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  new Route("/", "home", "HomeView"),
  new Route("/about", "about", "AboutView"),
  new Route("/contacts", "contacts", "contacts/ContactsView", {
    alias: ["/my-contacts", "/contacts-list"],
    props: (route) => {
      const search = route.query.search;
      return search ? { found: search } : {};
    },
    children: [
      //Routes order matters inside children property.
      new Route(":id(\\d+)", "contactDetails", "contacts/ContactDetailsView", {
        props: getIdParam,
        // props: { //This is used when you want the prop be constant
        //   id: 10,
        // },
      }),
      new Route(":id(\\d+)/edit", "contactEdit", "", {
        alias: ":id(\\d+)/change",
        beforeEnter(to, from, next) {
          console.log("beforeEnter", to.path, from.path);
          next();
        },
        components: {
          default: new ViewImport("contacts/ContactEditView"),
          contactDetailsRV: new ViewImport("contacts/ContactDetailsView"),
        },
        props: {
          default: getIdParam,
          contactDetailsRV: getIdParam,
        },
      }),
      new Route("", "contactsHome", "contacts/ContactsHomeView"),
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

const router = new VueRouter({
  linkActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//Global guards
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to.path, from.path);
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("beforeResolve");
  next();
});

router.afterEach((to, from) => {
  console.log("afterEach", to.path, from.path);
});

router.onError((error) => {
  console.log(error);
});

export default router;

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

function getIdParam(route) {
  return { id: +route.params.id };
}
