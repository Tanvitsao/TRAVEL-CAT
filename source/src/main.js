// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

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
import App from './App';
import router from './router';
import './bus';
import AlertMessage from "@/components/AlertMessage";
import pagination from '@/components/pagination';
import currencyFilter from '@/filters/Currency';
import dateFilter from '@/filters/date';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

Vue.use(VeeValidate);
VeeValidate.Validator.localize('zg_TW', zhTWValidate);

//載入全域元件
Vue.component('Loading', Loading);
Vue.component('pagination', pagination);
Vue.component('AlertMessage', AlertMessage);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log('to',to,'from', from,'next', next)
  if(to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    console.log(axios)
    axios.post(api).then((response) => {
      console.log(response.data)
      if(response.data.success){
        next();
      }else{
        next({
          path: '/login',
        });
      }
    })
  }else{
    next();
  }
})