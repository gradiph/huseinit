import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import store from './store'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

const DEFAULT_TITLE = 'Husein IT'
const ROUTE_PREFIX = '/huseinit'

const ROUTES = [
    {
        path: '/',
        component: Home,
        meta: { title: 'Home | ' + DEFAULT_TITLE },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: { title: '404 Not Found | ' + DEFAULT_TITLE },
    },
]

const ROUTER = createRouter({
    history: createWebHistory(ROUTE_PREFIX),
    routes: ROUTES,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } {
            return { top: 0 }
        }
    },
})

ROUTER.afterEach((to, from) => {
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE
    })
})

export default ROUTER
