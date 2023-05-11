import store from '@/store'
import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { accountLogin, getUserInfo } from '@/api/login'
import { RouteRecordRaw } from 'vue-router'

interface IUserState {
  token: string
  userInfo: any | null
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => {
    return {
      token: getToken() || '',
      userInfo: null
    }
  },
  actions: {
    /** 登录 */
    login(userInfo: { username: string, password: string }) {
      return new Promise((resolve, reject) => {
        resolve(true)
        // accountLogin({
        //   username: userInfo.username.trim(),
        //   password: userInfo.password
        // })
        //   .then((res: any) => {
        //     setToken(res.data.accessToken)
        //     this.token = res.data.accessToken
        //     resolve(true)
        //   })
        //   .catch((error) => {
        //     reject(error)
        //   })
      })
    },
    /** 获取用户详情 */
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res: any) => {
            const user:IUserState = res.data.user
            this.userInfo = user
            resolve(user)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /** 登出 */
    logout() {
      removeToken()
      this.token = ''
      this.userInfo = null
      resetRouter()
    },
    /** 重置 token */
    resetToken() {
      removeToken()
      this.token = ''
      this.userInfo = null
    }
  }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
