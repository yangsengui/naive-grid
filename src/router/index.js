import * as VueRouter from 'vue-router'

import HelloWorld from "../components/HelloWorld.vue"
import page from "../components/page.vue";

const routes = [
    {path: '/', component: HelloWorld},
    {path: "/page", component: page}
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router
