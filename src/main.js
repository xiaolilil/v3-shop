import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入上面新建的路由文件
import router from './router/index.js'

const app = createApp(App)

//使用路由
app.use(router)
app.use(ElementPlus)


app.mount('#app')
