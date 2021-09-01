import { createWebHistory, createRouter } from 'vue-router'
import AppHeader from './layout/AppHeader'
import AppFooter from './layout/AppFooter'
import Index from './views/Index.vue'
import Login from './views/pages/Login.vue'
import Register from './views/pages/Register.vue'
import Profile from './views/pages/Profile.vue'

const routes = [{
    path: "/",
    name: "index",
    components: {
        header: AppHeader,
        default: Index,
        footer: AppFooter
    }
}, {
    path: "/login",
    name: "login",
    components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
    }
}, {
    path: "/register",
    name: "register",
    components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
    }
}, {
    path: "/profile",
    name: "profile",
    components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
    }
}]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    }
});

export default router;