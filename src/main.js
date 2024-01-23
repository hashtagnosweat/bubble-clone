import '../src/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper(App);

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(swiper);

app.mount('#app');
