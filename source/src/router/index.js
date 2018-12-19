import Vue from 'vue';
import Router from 'vue-router';
// 引入後台頁面
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import CustomerOrders from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';

//引入前台頁面
import CustomerPages from '@/components/pages/CustomerPages';
import Allproduct from '@/components/pages/Allproduct';
import Honshu from '@/components/pages/Honshu';
import Hokkaido from '@/components/pages/Hokkaido';
import Shikoku from '@/components/pages/Shikoku';
import Kyushu from '@/components/pages/Kyushu';
import Okinawa from '@/components/pages/Okinawa';
import Itemdata from '@/components/pages/Itemdata';
import OrderInfo from '@/components/pages/OrderInfo';
import Payment from '@/components/pages/Payment';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_orders',
          name: 'CustomerOrders',
          component: CustomerOrders,
        },
        // {
        //   path: 'customer_checkout/:orderId',
        //   name: 'CustomerCheckout',
        //   component: CustomerCheckout,
        // },
      ]
    },
    {
      path: '/',
      name: 'CustomerPages',
      component: CustomerPages,
      children: [
        {
          path: '/',
          name: 'Allproduct',
          component: Allproduct,
        },
        {
          path: 'honshu',
          name: 'Honshu',
          component: Honshu,
        },
        {
          path: 'hokkaido',
          name: 'Hokkaido',
          component: Hokkaido,
        },
        {
          path: 'shikoku',
          name: 'Shikoku',
          component: Shikoku,
        },
        {
          path: 'kyushu',
          name: 'Kyushu',
          component: Kyushu,
        },
        {
          path: 'okinawa',
          name: 'Okinawa',
          component: Okinawa,
        },
        {
          path: 'itemdata/:itemId',
          name: 'Itemdata',
          component: Itemdata,
        },
      ]
    },
    {
      path: '/customer_checkout',
      name: 'CustomerCheckout',
      component: CustomerCheckout,
      children: [
        {
          path: '',
          name: 'OrderInfo',
          component: OrderInfo,
        },
        {
          path: 'payment/:orderId',
          name: 'Payment',
          component: Payment,
        },
      ]
    },
    
  ]
})
