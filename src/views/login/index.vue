<template>
  <div class="login-container">
    <div class="login-card">
      <div class="title">
        <img src="@/assets/layout/logo-text-2.png">
      </div>
      <div class="content">
        <el-form
          ref="loginFormDom"
          :model="loginForm"
          :rules="loginRules"
          @keyup.enter="handleLogin"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="用户名"
              type="text"
              tabindex="1"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="密码"
              type="password"
              tabindex="2"
              :prefix-icon="Lock"
              size="large"
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model="loginForm.code"
              placeholder="验证码"
              type="text"
              tabindex="3"
              :prefix-icon="Key"
              maxlength="4"
              size="large"
            />
            <span class="show-code">
              <img :src="codeUrl" @click="createCode">
            </span>
          </el-form-item>
          <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin">
            登 录
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { User, Lock, Key } from '@element-plus/icons-vue'
import { verifyLoginCode, accountLogin } from '@/api/login'
import { setToken } from '@/utils/cookies'

interface ILoginForm {
  /** admin 或 editor */
  username: string
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
}

const router = useRouter()

const loading = ref<boolean>(false)
const loginFormDom = ref<any>()
const codeUrl = ref<string>(process.env.VUE_APP_BASE_API + '/kaptchaAction/defaultKaptcha.do')
const loginForm = reactive<ILoginForm>({
  username: '15799937439',
  password: '123456',
  code: ''
})
const loginRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ]
})
const handleLogin = () => {
  loginFormDom.value.validate((valid: boolean) => {
    if (valid) {
      loading.value = true
      verifyLoginCode(loginForm.code).then(res => {
        accountLogin({
          type: 'bklw',
          loginNameForLogin: loginForm.username,
          passWordForLogin: loginForm.username,
          veriryCode: loginForm.code
        }).then(() => {
          setToken('gezida-pro')
          loading.value = false
          router.push({ path: '/doc' }).catch((err) => {
            console.warn(err)
          })
        }).catch(() => {
          loading.value = false
          createCode()
        })
        // useUserStore().login({
        //   username: loginForm.username,
        //   password: loginForm.password
        // }).then(() => {
        //   loading.value = false
        //   router.push({ path: '/doc' }).catch((err) => {
        //     console.warn(err)
        //   })
        // }).catch(() => {
        //   loading.value = false
        //   createCode()
        // })
      })
    } else {
      return false
    }
  })
}
/** 创建验证码 */
const createCode: () => void = () => {
  // 先清空验证码的输入
  loginForm.code = ''
  // 替换地址
  codeUrl.value = process.env.VUE_APP_BASE_API + `/kaptchaAction/defaultKaptcha.do?d=${new Date().getTime()}`
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        height: 100%;
      }
    }
    .content {
      padding: 20px 50px 50px 50px;
      .show-code {
        position: absolute;
        right: 0px;
        top: 0px;
        cursor: pointer;
        user-select: none;
        img {
          width: 100px;
          height: 40px;
          border-radius: 4px;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
