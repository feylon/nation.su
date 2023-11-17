import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import { createRouter,createWebHashHistory } from 'vue-router';
import head from "./components/head.vue";
// componentlar
const router = createRouter({
    history:createWebHashHistory(),
    routes:
    [
        {path: "/", component: head}
    ]
})



const app = createApp(App);
app.use(router)
app.mount('#app')
