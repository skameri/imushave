import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/Home.vue")
const dashboard = () => import("../views/Dashboard.vue")
const profile = () => import("../views/Profile.vue")

const NameInfo = () => import("../views/Infopage.vue")
const testi = () => import("../views/testi.vue")
const routes = [
    {path: "/", component: home},
    {
        path: "/dashboard", component:dashboard,
        children: [
            {
                path: "profile", component: profile,
            },



        ]
    },

    {path: "/testi", component: testi},

    {
        path: '/users/:id',
        name: 'UserPage',
        component: NameInfo,
        props: true
    }



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
