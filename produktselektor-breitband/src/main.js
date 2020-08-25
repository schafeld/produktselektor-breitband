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
      environment: process.env.NODE_ENV
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
