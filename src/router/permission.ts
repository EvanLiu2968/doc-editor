import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { whiteList } from '@/config/white-list'
import { getToken } from '@/utils/cookies'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  NProgress.start()
  // 判断该用户是否登录
  if (getToken()) {
    if (to.path === '/login') {
      // 如果登录，并准备进入 login 页面，则重定向到主页
      // next({ path: '/' })
      // NProgress.done()
      next()
    } else {
      // 检查用户是否已获得其权限角色
      next()
    }
  } else {
    // 如果没有 token
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果在免登录的白名单中，则直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
