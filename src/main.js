import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "tailwindcss/tailwind.css";

import Toasted from "vue-toasted";
let options = {
  position: "bottom-right",
  duration: "1000",
};

Vue.config.productionTip = false;

Vue.use(Toasted, options);
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
