/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueFirestore from "vue-firestore";
import "./assets/css/app.css";
import LoadScript from "vue-plugin-load-script";

Vue.config.productionTip = false;

Vue.use(VueFirestore);
Vue.use(LoadScript);
Vue.loadScript("./js/jquery.min.js");
Vue.loadScript("./js/jquery.scrollex.min.js");
Vue.loadScript("./js/jquery.scrolly.min.js");
Vue.loadScript("./js/browser.min.js");
Vue.loadScript("./js/breakpoints.min.js");
Vue.loadScript("./js/util.js");
Vue.loadScript("./js/main.js");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
