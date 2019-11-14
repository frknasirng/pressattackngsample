import Vue from 'vue';
import Router from 'vue-router';

import store from './../store.js';

import routes from './routes';

Vue.use(Router);

const router = new Router({
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
	store.dispatch('loadAuthUser');
    next();
});

export default router;