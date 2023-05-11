import { createApp, Directive } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { loadAllPlugins } from './plugins'
import '@/styles/index.scss'
import 'normalize.css'
import '@/router/permission'

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)

app.use(store).use(router).mount('#app')
