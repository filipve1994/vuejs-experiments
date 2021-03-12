import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComingSoonPagesOverview from "@/components/tailwindcss/pages/comingsoon/ComingSoonPagesOverview";
import SingleBlogPagesOverview from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPagesOverview";
import SingleBlogPage1 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage1";
import SingleBlogPage2 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage2";
import SingleBlogPage3 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage3";
import SingleBlogPage4 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage4";
import SingleBlogPage5 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage5";
import SingleBlogPage6 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage6";
import SingleBlogPage7 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage7";
import SingleBlogPage8 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage8";
import SingleBlogPage9 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage9";
import SingleBlogPage10 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage10";
import SingleBlogPage11 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage11";
import SingleBlogPage12 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage12";
import SingleBlogPage13 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage13";
import SingleBlogPage14 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage14";
import SingleBlogPage15 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage15";
import SingleBlogPage16 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage16";
import SingleBlogPage17 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage17";
import SingleBlogPage18 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage18";
import SingleBlogPage19 from "@/components/tailwindcss/pages/singleblogpages/SingleBlogPage19";
import ComingSoonPage1 from "@/components/tailwindcss/pages/comingsoon/ComingSoonPage1";
import ComingSoonPage2 from "@/components/tailwindcss/pages/comingsoon/ComingSoonPage2";
import AboutSectionOverviewPage from "@/components/tailwindcss/blocks/aboutsections/AboutSectionOverviewPage";

Vue.use(VueRouter);

// const routes = [
export const routes = [
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

    // {
    //   path: "/components2",
    //   name: "Components2",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //       import(/* webpackChunkName: "about" */ "../views/Components2.vue")
    // },

    {
        path: "/aboutsectionsoverview",
        name: "AboutSectionOverviewPage",
        component: AboutSectionOverviewPage
    },

    {
        path: "/comingsoonpages",
        name: "ComingSoonPages",
        component: ComingSoonPagesOverview,
        children: [
            {path: 'comingsoonpage1', component: ComingSoonPage1},
            {path: 'comingsoonpage2', component: ComingSoonPage2},
        ]
    },

    {
        path: "/singleblogpages",
        name: "SingleBlogPages",
        component: SingleBlogPagesOverview,
        children: [
            {path: 'singleblogpage1', name: SingleBlogPage1, component: SingleBlogPage1},
            {path: 'singleblogpage2', name: SingleBlogPage2, component: SingleBlogPage2},
            {path: 'singleblogpage3', name: SingleBlogPage3, component: SingleBlogPage3},
            {path: 'singleblogpage4', name: SingleBlogPage4, component: SingleBlogPage4},
            {path: 'singleblogpage5', name: SingleBlogPage5,component: SingleBlogPage5},
            {path: 'singleblogpage6', name: SingleBlogPage6,component: SingleBlogPage6},
            {path: 'singleblogpage7', name: SingleBlogPage7,component: SingleBlogPage7},
            {path: 'singleblogpage8', name: SingleBlogPage8,component: SingleBlogPage8},
            {path: 'singleblogpage9', name: SingleBlogPage9,component: SingleBlogPage9},
            {path: 'singleblogpage10', name: SingleBlogPage10,component: SingleBlogPage10},
            {path: 'singleblogpage11', name: SingleBlogPage11,component: SingleBlogPage11},
            {path: 'singleblogpage12', name: SingleBlogPage12,component: SingleBlogPage12},
            {path: 'singleblogpage13', name: SingleBlogPage13,component: SingleBlogPage13},
            {path: 'singleblogpage14', name: SingleBlogPage14,component: SingleBlogPage14},
            {path: 'singleblogpage15', name: SingleBlogPage15,component: SingleBlogPage15},
            {path: 'singleblogpage16', name: SingleBlogPage16,component: SingleBlogPage16},
            {path: 'singleblogpage17', name: SingleBlogPage17,component: SingleBlogPage17},
            {path: 'singleblogpage18', name: SingleBlogPage18,component: SingleBlogPage18},
            {path: 'singleblogpage19', name: SingleBlogPage19,component: SingleBlogPage19},
        ]
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


    // {
    //   path: "/blogpostlist1",
    //   name: "BlogPostList1",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ "../views/blogpostlists/BlogPostList1.vue"
    //     )
    // },
    // {
    //   path: "/blogpostlist2",
    //   name: "BlogPostList2",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ "../views/blogpostlists/BlogPostList2.vue"
    //     )
    // },
    // {
    //   path: "/blogpost1",
    //   name: "BlogPost1",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/blogposts/BlogPost1.vue")
    // },
    // {
    //   path: "/blogpost2",
    //   name: "BlogPost2",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/blogposts/BlogPost2.vue")
    // }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
