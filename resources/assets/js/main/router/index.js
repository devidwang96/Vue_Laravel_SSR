import VueRouter from 'vue-router';

const routes = [
    {
        path: '/:locale(' + Laravel.locales_chars.join('|') + ')?',
        name: 'app-index',
        component : process.BROWSER
            ? (resolve) => {
                require(['../components/Pages/Index.vue'], resolve)
            }
            : require('../components/Pages/Index.vue'),
        children : [
            {
                path: 'home',
                name: 'home',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Home.vue'], resolve)
                    }
                    : require('../components/Pages/Home.vue'),
            },
        ]
    },
    {
        path: '*',
        name: 'not_found',
        component: process.BROWSER
            ? (resolve) => {
                require(['../components/Pages/404.vue'], resolve)
            }
            : require('../components/Pages/404.vue')
    },
];

export const router = new VueRouter({
    routes,
    linkActiveClass : 'active',
    mode : 'history',
    base : '/'
});