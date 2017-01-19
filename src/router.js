import enter from './views/enter/enter.vue';
import message from './views/message/message.vue';

const routers = {
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/enter'
        },
        {
            path: '/enter',
            component: enter
        },
        {
            path: '/message',
            component: message
        }
    ]
}

export default routers;