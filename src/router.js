import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import MentorDetail from './pages/mentores/MentorDetail.vue';
import MentoresList from './pages/mentores/MentoresList.vue';
import MentorRegistration from './pages/mentores/MentorRegistration.vue';
import ContactMentor from './pages/pedidos/ContactMentor.vue';
import PedidosRecebido from './pages/pedidos/PedidosRecebido.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/mentores'},
        { path: '/mentores', component: MentoresList},
        { path: '/mentores/:id', component: MentorDetail, 
            children: [
                { path: 'contact', component: ContactMentor}, //mentores/p1/contact
            ]
        },
        { path: '/register', component: MentorRegistration},
        { path: '/pedidos', component: PedidosRecebido},
        { path: '/:notFound(.*)', component: NotFound}
    ]
});

export default router;