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
    },
    meta: {
        title: 'Trang chủ'
    }
}, {
    path: "/login",
    name: "login",
    components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
    },
    meta: {
        title: 'Đăng nhập'
    }
}, {
    path: "/register",
    name: "register",
    components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
    },
    meta: {
        title: 'Đăng ký'
    }
}, {
    path: "/profile",
    name: "profile",
    components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
    },
    meta: {
        title: 'Thông tin cá nhân'
    }
}]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    }
});
var pjson = require('../package.json');
router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = pjson.name + " - " + (toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Trang chủ');
    next();
})
export default router;