import { createApp } from 'vue'
import './common.css'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import ShaoyhUI from "shaoyh-ui"
import "shaoyh-ui/style.css"
import router from './router/index'

import itemCard from '@/components/itemCard.vue'
import itemTitle from '@/components/itemTitle.vue'
import itemBody from '@/components/itemBody.vue'


const app = createApp(App)
app.use(router)
app.use(ShaoyhUI)
app.use(ElementPlus)
app.component('itemCard', itemCard)
app.component('itemTitle', itemTitle)
app.component('itemBody', itemBody)
app.mount("#app")