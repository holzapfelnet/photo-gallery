import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import App from './App.vue';
import router from './router'

createApp(App).use(router).use(VueLazyLoad, {}).mount('#app');
