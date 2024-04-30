import { createApp } from "vue";

import App from "@/App.vue";

import "@/registerServiceWorker";
import "@/assets/style/main.scss";
import "@/config/fa.config";

import router from "@/router";
import store from "@/store"; // import the Vuex stor
import VueGtag from "vue-gtag-next";
import VueScrollTo from "vue-scrollto";
import { vClickOutside } from "@/directives";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Chart } from "vue-chartjs";
import { META_MANAGER, VUE_GTAG_OPTIONS, VUE_SCROLLTO_OPTIONS } from "@/config";

import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";

const vuetify = createVuetify();

import axios from "axios";
const app = createApp(App)
  .use(router)
  .use(vuetify)
  .use(META_MANAGER)
  .use(VueGtag, VUE_GTAG_OPTIONS)
  .use(VueScrollTo, VUE_SCROLLTO_OPTIONS)
  .use(store)
  .directive("click-outside", vClickOutside)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("chart", Chart);

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

app.config.globalProperties.$axios = axiosInstance;
app.mount("#app");
