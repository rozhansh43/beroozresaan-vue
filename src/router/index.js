import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../components/homepage'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "homepage",
        component: homepage,
    },
    {
        path: "/productCategory",
        name: "productCategory",
        component: () => import ( /* webpackChunkName: "productCategory" */ "../components/productCategory.vue")
    },
    {
        path: "/:id",
        name: "singleProduct",
        component: () => import ( /* webpackChunkName: "singleProduct" */ "../components/singleProduct/singleProduct"),
        props: true
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router