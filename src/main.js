import { createApp } from 'vue';
import MainMenu from './components/MainMenu.vue';
import router from './router/index.js';

import './assets/main.css';

const app = createApp(MainMenu); 
app.use(router);
app.mount('#app');
