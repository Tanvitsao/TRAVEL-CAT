(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab565"],{"159d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.orders,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",[t._v(t._s(e.user.email))]),a("td",t._l(e.products,function(e){return a("ul",{key:e.id},[a("li",{staticClass:"mb-2"},[t._v(t._s(e.product.title)+" : "+t._s(e.qty)+t._s(e.product.unit))])])}),0),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",[e.is_paid?a("span",{staticClass:"text-success"},[t._v("已付款")]):a("span",[t._v("未付款")])])])}),0)]),a("pagination",{staticClass:"d-flex justify-content-center mb-4",attrs:{"page-data":t.pagination},on:{changePage:t.getOrders}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col",width:"160"}},[t._v("購買時間")]),a("th",{attrs:{scope:"col",width:"200"}},[t._v("Email")]),a("th",{attrs:{scope:"col"}},[t._v("購買商品")]),a("th",{staticClass:"text-center",attrs:{scope:"col",width:"160"}},[t._v("應付金額")]),a("th",{attrs:{scope:"col",width:"160"}},[t._v("是否付款")])])])}],i=(a("1157"),{data:function(){return{orders:[],tempOrder:{},pagination:{}}},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/admin/orders?page=").concat(t),a=this;a.$store.dispatch("updateLoading",!0),this.$http.get(e).then(function(t){console.log(t.data),a.$store.dispatch("updateLoading",!1),a.orders=t.data.orders,a.pagination=t.data.pagination})}},created:function(){this.getOrders()}}),r=i,o=a("2877"),c=Object(o["a"])(r,s,n,!1,null,null,null);c.options.__file="Orders.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ab565.45e272f0.js.map