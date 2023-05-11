import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/views/dashboard/app-main.vue')

/** 常驻路由 */
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/doc',
    component: () => import('@/views/doc/index.vue'),
    redirect: '/doc/report',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'report',
        component: () => import('@/views/doc/report/index.vue'),
        name: 'Report',
        meta: {
          title: '报告',
          icon: 'dashboard',
          affix: true,
          hidden: true
        }
      },
      {
        path: 'correct',
        component: () => import('@/views/doc/correct/index.vue'),
        name: 'Correct',
        meta: {
          title: '批注',
          icon: 'dashboard',
          affix: true,
          hidden: true
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // 必须将 'ErrorPage' 路由放在最后, Must put the 'ErrorPage' route at the end
    component: () => import('@/views/error-page/404.vue'),
    name: 'ErrorPage',
    meta: {
      title: '错误页面',
      icon: '404',
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器，不过体验不是很好
    window.location.reload()
  }
}

export default router
