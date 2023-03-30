import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import i18n from './i18n/i18n';

import '@/assets/styles/index.pcss';

const pinia = createPinia();
const app = createApp(App);

i18n.setup();

app
  .use(i18n.vueI18n)
  .use(router)
  .use(pinia);

app.mount('#app');
