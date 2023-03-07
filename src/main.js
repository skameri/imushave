import { createApp } from 'vue'
import store from "./store"
import App from './App.vue'
import router from "./routes"
import "./assets/style.css"

createApp(App).use(router).use(store).mount('#app')
