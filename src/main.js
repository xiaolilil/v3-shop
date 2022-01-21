import { createApp } from 'vue'
import App from './App.vue'

// 引入上面新建的路由文件
import router from './router/index.js'

const app = createApp(App)

//使用路由
app.use(router)


app.mount('#app')
