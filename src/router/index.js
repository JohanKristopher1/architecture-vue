import { createRouter, createWebHistory } from 'vue-router'


import MyTravelPage from '@/pages/MyTravelPage.vue'
import HomePage from '@/pages/HomePage.vue'
import PerfilPage from '@/pages/PerfilPage.vue'



const routes = [
    {path: '/', component: HomePage, meta: { title: 'Travelgram' }},
    {path: '/my-travel', component: MyTravelPage, meta: { title: 'Minhas viagens' }},
    {path: '/profile', component: PerfilPage, meta: { title: 'Meu perfil' }},
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

router.beforeEach((to, from, next) => {
    const defaultTitle = 'Travelgram';
    document.title = to.meta.title || defaultTitle;
    next();
}
)
export default router