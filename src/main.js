import { createApp } from 'vue'
import App from './App.vue'

import ErrorVue from './pages/ErrorVue'
import HomeVue from './pages/HomeVue'
import CatalogVue from './pages/CatalogVue'
import FaqVue from './pages/FaqVue'
import SuscribeVue from './pages/SuscribeVue'


import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:"/", component: HomeVue
    },
    {
        path:"/catalog", component: CatalogVue
    },
    {
        path:"/faq", component: FaqVue
    },
    {
        path:"/suscribirse", component: SuscribeVue
    },
    {
        path: '/:pathMatch(.*)*', component: ErrorVue
    },

] 

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });


const app = createApp(App).use(router);

app.use(router);

app.mount("#app");


