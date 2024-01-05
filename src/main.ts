import { createApp } from 'vue';
// import { createVuetify } from 'vuetify';


import App from '@/App.vue';

import '@/registerServiceWorker';
import '@/assets/style/main.scss';
import '@/config/fa.config';

import router from '@/router';
import VueGtag from 'vue-gtag-next';
import VueScrollTo from 'vue-scrollto';
import { vClickOutside } from '@/directives';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Chart } from "vue-chartjs";
import { META_MANAGER, VUE_GTAG_OPTIONS, VUE_SCROLLTO_OPTIONS } from '@/config';

const app = createApp(App)
  .use(router)
  .use(META_MANAGER)
  .use(VueGtag, VUE_GTAG_OPTIONS)
  .use(VueScrollTo, VUE_SCROLLTO_OPTIONS)
  .directive('click-outside', vClickOutside)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('chart',Chart);

app.mount('#app');
