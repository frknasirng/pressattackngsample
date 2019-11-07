require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import { base } from './mixins/base'
import router from './router';
import store from './store.js';

Vue.mixin(base);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
