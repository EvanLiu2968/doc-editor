import { getToken } from '@/utils/token';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: 'Home Page',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/views/Index.vue'),
    },
    {
        path: '/doc',
        name: 'Doc',
        meta: {
            title: 'Doc',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/views/doc/index.vue'),
        children: [
            {
                path: '/doc/report',
                name: 'Report',
                meta: {
                    title: 'Report',
                    keepAlive: true,
                    requireAuth: false,
                },
                component: () => import('@/views/doc/report/index.vue'),
            },
            {
                path: '/doc/correct',
                name: 'Correct',
                meta: {
                    title: 'Correct',
                    keepAlive: true,
                    requireAuth: false,
                },
                component: () => import('@/views/doc/correct/index.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    // const token = getToken();
    // if (!token && to.name !== 'Index') {
    //     return { name: 'Index' };
    // }
});

export { router };
