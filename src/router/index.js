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
import AuthorBoxesOverviewPage from "@/components/tailwindcss/blocks/authorboxes/AuthorBoxesOverviewPage";
import ButtonsBlocksOverviewPage from "@/components/tailwindcss/blocks/buttonblocks/ButtonsBlocksOverviewPage";
import AppsOverviewPage from "@/apps/AppsOverviewPage";
import DarkMovieToggle1 from "@/apps/darkmovietoggles/DarkMovieToggle1";
import ParallaxDepthCards from "@/apps/parallaxdepthcards/ParallaxDepthCards";
import BackgroundColorPicker from "@/apps/backgroundcolorpicker/BackgroundColorPicker";
import TimeComparison from "@/apps/timecomparison/TimeComparison";
import CardBlockOverviewPage from "@/components/tailwindcss/blocks/cardblocks/CardBlockOverviewPage";
import CardBlockWeatherWidget1 from "@/apps/weatherwidgets/CardBlockWeatherWidget1";
import LandingPagesOverview from "@/components/tailwindcss/pages/landingpages/LandingPagesOverview";
import NewsTemplatePagesOverview from "@/components/tailwindcss/pages/newstemplatepages/NewsTemplatePagesOverview";
import ContactFormPagesOverview from "@/components/tailwindcss/pages/contactformpages/ContactFormPagesOverview";
import LandingPage1 from "@/components/tailwindcss/pages/landingpages/LandingPage1";
import LandingPage2 from "@/components/tailwindcss/examples/pages/LandingPage2";
import LandingPage12 from "@/components/tailwindcss/pages/landingpages/LandingPage12";
import LandingPage11 from "@/components/tailwindcss/pages/landingpages/LandingPage11";
import LandingPage10 from "@/components/tailwindcss/pages/landingpages/LandingPage10";
import LandingPage9 from "@/components/tailwindcss/pages/landingpages/LandingPage9";
import LandingPage8 from "@/components/tailwindcss/pages/landingpages/LandingPage8";
import LandingPage5 from "@/components/tailwindcss/pages/landingpages/LandingPage5";
import LandingPage6 from "@/components/tailwindcss/pages/landingpages/LandingPage6";
import LandingPage7 from "@/components/tailwindcss/pages/landingpages/LandingPage7";
import LandingPage4 from "@/components/tailwindcss/pages/landingpages/LandingPage4";
import LandingPage3 from "@/components/tailwindcss/pages/landingpages/LandingPage3";
import ScheduleSectionsOverviewPage
    from "@/components/tailwindcss/blocks/schedulesections/ScheduleSectionsOverviewPage";
import FooterBlocksOverviewPage from "@/components/tailwindcss/blocks/footerblocks/FooterBlocksOverviewPage";

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
        path: "/apps",
        name: "Apps",
        component: AppsOverviewPage,
        children: [
            {path: 'DarkMovieToggle1', component: DarkMovieToggle1},
            {path: 'ParallaxDepthCards', component: ParallaxDepthCards},
            {path: 'BackgroundColorPicker', component: BackgroundColorPicker},
            {path: 'TimeComparison', component: TimeComparison},
            {path: 'CardBlockWeatherWidget1', component: CardBlockWeatherWidget1},
        ]
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
        path: "/authorboxesoverview",
        name: "AuthorBoxesOverviewPage",
        component: AuthorBoxesOverviewPage
    },

    {
        path: "/ButtonsBlocksOverviewPage",
        name: "ButtonsBlocksOverviewPage",
        component: ButtonsBlocksOverviewPage
    },

    {
        path: "/CardBlockOverviewPage",
        name: "CardBlockOverviewPage",
        component: CardBlockOverviewPage
    },
    {
        path: "/FooterBlocksOverviewPage",
        name: "FooterBlocksOverviewPage",
        component: FooterBlocksOverviewPage
    },
    {
        path: "/ScheduleSectionsOverviewPage",
        name: "ScheduleSectionsOverviewPage",
        component: ScheduleSectionsOverviewPage
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
            {path: 'singleblogpage5', name: SingleBlogPage5, component: SingleBlogPage5},
            {path: 'singleblogpage6', name: SingleBlogPage6, component: SingleBlogPage6},
            {path: 'singleblogpage7', name: SingleBlogPage7, component: SingleBlogPage7},
            {path: 'singleblogpage8', name: SingleBlogPage8, component: SingleBlogPage8},
            {path: 'singleblogpage9', name: SingleBlogPage9, component: SingleBlogPage9},
            {path: 'singleblogpage10', name: SingleBlogPage10, component: SingleBlogPage10},
            {path: 'singleblogpage11', name: SingleBlogPage11, component: SingleBlogPage11},
            {path: 'singleblogpage12', name: SingleBlogPage12, component: SingleBlogPage12},
            // {path: 'singleblogpage13', name: SingleBlogPage13,component: SingleBlogPage13},
            // {path: 'singleblogpage14', name: SingleBlogPage14,component: SingleBlogPage14},
            // {path: 'singleblogpage15', name: SingleBlogPage15,component: SingleBlogPage15},
            // {path: 'singleblogpage16', name: SingleBlogPage16,component: SingleBlogPage16},
            // {path: 'singleblogpage17', name: SingleBlogPage17,component: SingleBlogPage17},
            // {path: 'singleblogpage18', name: SingleBlogPage18,component: SingleBlogPage18},
            // {path: 'singleblogpage19', name: SingleBlogPage19,component: SingleBlogPage19},
        ]
    },

    {
        path: "/landingpages",
        name: "LandingPages",
        component: LandingPagesOverview,
        children: [
            {path: 'LandingPage1', name: LandingPage1, component: LandingPage1},
            {path: 'LandingPage2', name: LandingPage2, component: LandingPage2},
            {path: 'LandingPage3', name: LandingPage3, component: LandingPage3},
            {path: 'LandingPage4', name: LandingPage4, component: LandingPage4},
            {path: 'LandingPage5', name: LandingPage5, component: LandingPage5},
            {path: 'LandingPage6', name: LandingPage6, component: LandingPage6},
            {path: 'LandingPage7', name: LandingPage7, component: LandingPage7},
            {path: 'LandingPage8', name: LandingPage8, component: LandingPage8},
            {path: 'LandingPage9', name: LandingPage9, component: LandingPage9},
            {path: 'LandingPage10', name: LandingPage10, component: LandingPage10},
            // {path: 'LandingPage11', name: LandingPage11,component: LandingPage11},
            // {path: 'LandingPage12', name: LandingPage12,component: LandingPage12},

        ]
    },

    {
        path: "/contactformpages",
        name: "ContactFormPages",
        component: ContactFormPagesOverview,
        children: [
            {path: 'singleblogpage1', name: SingleBlogPage1, component: SingleBlogPage1},
            {path: 'singleblogpage2', name: SingleBlogPage2, component: SingleBlogPage2},
            {path: 'singleblogpage3', name: SingleBlogPage3, component: SingleBlogPage3},
            {path: 'singleblogpage4', name: SingleBlogPage4, component: SingleBlogPage4},
            {path: 'singleblogpage5', name: SingleBlogPage5, component: SingleBlogPage5},
            {path: 'singleblogpage6', name: SingleBlogPage6, component: SingleBlogPage6},
            {path: 'singleblogpage7', name: SingleBlogPage7, component: SingleBlogPage7},
            {path: 'singleblogpage8', name: SingleBlogPage8, component: SingleBlogPage8},
            {path: 'singleblogpage9', name: SingleBlogPage9, component: SingleBlogPage9},
            {path: 'singleblogpage10', name: SingleBlogPage10, component: SingleBlogPage10},
            {path: 'singleblogpage11', name: SingleBlogPage11, component: SingleBlogPage11},
            {path: 'singleblogpage12', name: SingleBlogPage12, component: SingleBlogPage12},
        ]
    },


    {
        path: "/newstemplatepages",
        name: "NewsTemplatePages",
        component: NewsTemplatePagesOverview,
        children: [
            {path: 'singleblogpage1', name: SingleBlogPage1, component: SingleBlogPage1},
            {path: 'singleblogpage2', name: SingleBlogPage2, component: SingleBlogPage2},
            {path: 'singleblogpage3', name: SingleBlogPage3, component: SingleBlogPage3},
            {path: 'singleblogpage4', name: SingleBlogPage4, component: SingleBlogPage4},
            {path: 'singleblogpage5', name: SingleBlogPage5, component: SingleBlogPage5},
            {path: 'singleblogpage6', name: SingleBlogPage6, component: SingleBlogPage6},
            {path: 'singleblogpage7', name: SingleBlogPage7, component: SingleBlogPage7},
            {path: 'singleblogpage8', name: SingleBlogPage8, component: SingleBlogPage8},
            {path: 'singleblogpage9', name: SingleBlogPage9, component: SingleBlogPage9},
            {path: 'singleblogpage10', name: SingleBlogPage10, component: SingleBlogPage10},
            {path: 'singleblogpage11', name: SingleBlogPage11, component: SingleBlogPage11},
            {path: 'singleblogpage12', name: SingleBlogPage12, component: SingleBlogPage12},
            // {path: 'singleblogpage13', name: SingleBlogPage13,component: SingleBlogPage13},
            // {path: 'singleblogpage14', name: SingleBlogPage14,component: SingleBlogPage14},
            // {path: 'singleblogpage15', name: SingleBlogPage15,component: SingleBlogPage15},
            // {path: 'singleblogpage16', name: SingleBlogPage16,component: SingleBlogPage16},
            // {path: 'singleblogpage17', name: SingleBlogPage17,component: SingleBlogPage17},
            // {path: 'singleblogpage18', name: SingleBlogPage18,component: SingleBlogPage18},
            // {path: 'singleblogpage19', name: SingleBlogPage19,component: SingleBlogPage19},
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
