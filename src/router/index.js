import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import productCategory from "../views/productCategory.vue"
import singleproduct from "../views/singleproduct.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/productCategory",
        name: "productCategory",
        component: () =>
            import ( /* webpackChunkName: "productCategory" */ "../views/productCategory.vue"),
    },
    {
        path: "/:id",
        name: "singleproduct",
        component: singleproduct,
        props: true
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;