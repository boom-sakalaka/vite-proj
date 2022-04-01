/*
 * @Date: 2022-03-31 14:03:50
 * @LastEditTime: 2022-04-01 15:59:49
 * @FilePath: \Vite-demo\vite-admin-project\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/login.vue'),
    },
    {
        path: '/',
        name: 'homepage',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/homepage.vue'),
    },
    {
        path: '/',
        name: 'vueuse',
        meta: {
            title: 'vueuse测试',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/vueuse.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
