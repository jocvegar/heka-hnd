/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueFirestore from "vue-firestore";
import "./assets/css/app.css";

Vue.config.productionTip = false;

Vue.use(VueFirestore);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
