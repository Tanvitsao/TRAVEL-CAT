// 引入第三方套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';

// 引入自定義套件
import App from './App.vue';
import router from './router';
import './bus';
import AlertMessage from "@/components/AlertMessage.vue";
import pagination from '@/components/Pagination.vue';
import currencyFilter from '@/filters/currency.js';
import dateFilter from '@/filters/date.js';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zg_TW', zhTWValidate);

//載入全域元件
Vue.component('Loading', Loading);
Vue.component('AlertMessage', AlertMessage);
Vue.component('pagination', pagination);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
