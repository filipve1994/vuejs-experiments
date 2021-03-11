import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/components",
    name: "Components",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Components.vue")
  },
  {
    path: "/components2",
    name: "Components2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Components2.vue")
  },

  // {
  //   path: "/jetstreamwelcomepage",
  //   name: "JetStreamWelcomePage",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/examples/JetStreamWelcomePage.vue")
  // },
  // {
  //   path: "/BlogPage1",
  //   name: "BlogPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/BlogPage1.vue"
  //           )
  // },
  // {
  //   path: "/ECommerceProductListingPage1",
  //   name: "ECommerceProductListingPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/ECommerceProductListingPage1.vue"
  //           )
  // },
  // {
  //   path: "/ECommerceProductPage1",
  //   name: "ECommerceProductPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/ECommerceProductPage1.vue"
  //           )
  // },
  // {
  //   path: "/ECommerceHomepage1",
  //   name: "ECommerceHomepage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/ECommerceHomepage1.vue"
  //           )
  // },
  // {
  //   path: "/ECommerceCheckoutPage1",
  //   name: "ECommerceCheckoutPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/ECommerceCheckoutPage1.vue"
  //           )
  // },
  // {
  //   path: "/Dashboard1",
  //   name: "Dashboard1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/Dashboard1.vue"
  //           )
  // },
  // {
  //   path: "/DeveloperPortfolio1",
  //   name: "DeveloperPortfolio1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/DeveloperPortfolio1.vue"
  //           )
  // },
  // {
  //   path: "/AppSidebar1",
  //   name: "AppSidebar1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/AppSidebar1.vue"
  //           )
  // },
  // {
  //   path: "/SchoolThemedLandingPage1",
  //   name: "SchoolThemedLandingPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/SchoolThemedLandingPage1.vue"
  //           )
  // },
  // {
  //   path: "/BusinessPage1",
  //   name: "BusinessPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/BusinessPage1.vue"
  //           )
  // },
  // {
  //   path: "/NatureLandingPage1",
  //   name: "NatureLandingPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/NatureLandingPage1.vue"
  //           )
  // },
  // {
  //   path: "/RecruitingStrategy1",
  //   name: "RecruitingStrategy1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/RecruitingStrategy1.vue"
  //           )
  // },
  // {
  //   path: "/RunningPage1",
  //   name: "RunningPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/RunningPage1.vue"
  //           )
  // },
  // {
  //   path: "/SpecialPromo1",
  //   name: "SpecialPromo1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/SpecialPromo1.vue"
  //           )
  // },
  // {
  //   path: "/TeamworkPage1",
  //   name: "TeamworkPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/TeamworkPage1.vue"
  //           )
  // },





  // {
  //   path: "/BlogPage1",
  //   name: "BlogPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/BlogPage1.vue"
  //           )
  // },
  // {
  //   path: "/BlogPage1",
  //   name: "BlogPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/BlogPage1.vue"
  //           )
  // },
  // {
  //   path: "/BlogPage1",
  //   name: "BlogPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/BlogPage1.vue"
  //           )
  // },
  // {
  //   path: "/BlogPage1",
  //   name: "BlogPage1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //       import(
  //           /* webpackChunkName: "about" */ "../views/examples/BlogPage1.vue"
  //           )
  // },

  {
    path: "/blogpostlist1",
    name: "BlogPostList1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/blogpostlists/BlogPostList1.vue"
      )
  },
  {
    path: "/blogpostlist2",
    name: "BlogPostList2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/blogpostlists/BlogPostList2.vue"
      )
  },
  {
    path: "/blogpost1",
    name: "BlogPost1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/blogposts/BlogPost1.vue")
  },
  {
    path: "/blogpost2",
    name: "BlogPost2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/blogposts/BlogPost2.vue")
  }
];

export const routesNav = routes;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
