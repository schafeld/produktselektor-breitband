import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/styles/index.css";

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      environment: process.env.NODE_ENV,
      EXPERIENCE_VERSION: window.FLAG_EXPERIENCE_VERSION
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
