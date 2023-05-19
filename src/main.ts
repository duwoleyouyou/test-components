import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// 完整引入组件库
import TestDesign from '../packages/index' // 可以配置alias

const app = createApp(App)

app.use(TestDesign).mount('#app')