import { request } from '@/utils/service'

interface IUserRequestData {
  loginNameForLogin: string
  passWordForLogin: string
  veriryCode: string
  type?: string
}

/** 登录，返回 token */
export function accountLogin(data: IUserRequestData) {
  return request({
    url: '/loginAction/login.do',
    method: 'post',
    data
  })
}
// 校验登录验证码
export function verifyLoginCode(code: string) {
  return request({
    url: '/kaptchaAction/imgvrifyControllerDefaultKaptcha.do',
    method: 'post',
    data: {
      vrifyCode: code
    }
  })
}
/** 获取用户详情 */
export function getUserInfo() {
  return request({
    url: '/users/info',
    method: 'post'
  })
}
