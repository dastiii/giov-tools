import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import "./main.scss";
import routes from './routes';
import axios from 'axios';
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$BASE_URL = process.env == "production" ? "https://giov.restaurant/" : "http://giov.test/";

new Vue({
  render: h => h(App),
  router: new VueRouter(routes),
}).$mount("#app");
