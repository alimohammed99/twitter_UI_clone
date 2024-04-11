import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fontawesome-free/css/all.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')