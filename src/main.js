import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
require("typeface-open-sans");

Vue.config.productionTip = false;

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
