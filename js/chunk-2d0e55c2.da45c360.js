(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e55c2"],{"93c5":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("div",{staticClass:"bg-light pb-5"},[i("div",{staticClass:"container"},[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("北海道")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3"},[i("div",{staticClass:"list-group sticky-top"},[i("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/honshu","data-toggle":"list"}},[i("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("本州")]),i("router-link",{staticClass:"list-group-item list-group-item-action active",attrs:{to:"/hokkaido","data-toggle":"list"}},[i("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("北海道")]),i("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/shikoku","data-toggle":"list"}},[i("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("四國")]),i("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/kyushu"}},[i("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("九州")]),i("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/okinawa"}},[i("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("沖繩")])],1)]),i("div",{staticClass:"col-md-9"},[i("HokkaidoCard")],1)])])])],1)},o=[],c=(i("cadf"),i("551c"),i("097d"),i("1157"),function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("AlertMessage"),i("div",{staticClass:"row"},t._l(t.hokkaidoProducts,function(a){return i("div",{key:a.id,staticClass:"col-md-6 mb-4"},[i("div",{staticClass:"card border-0 shadow-sm h-100 animated"},[i("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),i("div",{staticClass:"card-body"},[i("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),i("h5",{staticClass:"card-title"},[i("i",{staticClass:"fas fa-paw"}),i("a",{staticClass:"h5 text-dark",attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.getProduct(a.id)}}},[t._v(t._s(a.title))])]),i("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),i("div",{staticClass:"text-right align-items-baseline"},[a.price?t._e():i("div",{staticClass:"h5 text-secondary"},[t._v("NT$ "+t._s(a.origin_price))]),a.price?i("del",{staticClass:"h6 text-secondary"},[t._v("NT$ "+t._s(a.origin_price))]):t._e(),a.price?i("div",{staticClass:"h5"},[t._v("NT$ "+t._s(a.price))]):t._e()])]),i("div",{staticClass:"card-footer d-flex bg-dark"},[i("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(i){t.getProduct(a.id)}}},[t.status.loadingItem===a.id?i("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        查看更多\n                    ")]),i("button",{staticClass:"btn btn-outline-primary btn-sm ml-auto",attrs:{type:"button"},on:{click:function(i){t.addtoCart(a.id)}}},[t.status.loadingItem===a.id?i("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        加到購物車\n                    ")])])])])}),0)],1)}),e=[],n={data:function(){return{hokkaidoProducts:[],product:{},status:{loadingItem:""},isLoading:!1}},methods:{getProducts:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/TRAVEL-CAT/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/TRAVEL-CAT/"}).VUE_APP_CUSTOMPATH,"/products/all"),a=this;a.isLoading=!0,this.$http.get(t).then(function(t){console.log(t.data),a.isLoading=!1,a.hokkaidoProducts=t.data.products.filter(function(t){return"北海道"==t.category}),console.log(a.hokkaidoProducts)})},getProduct:function(t){var a="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/TRAVEL-CAT/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/TRAVEL-CAT/"}).VUE_APP_CUSTOMPATH,"/product/").concat(t),i=this;i.status.loadingItem=t,this.$http.get(a).then(function(t){console.log(t.data),i.$router.push("/itemdata/".concat(t.data.product.id)),i.status.loadingItem=""})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/TRAVEL-CAT/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/TRAVEL-CAT/"}).VUE_APP_CUSTOMPATH,"/cart"),s=this;s.status.loadingItem=t;var o={product_id:t,qty:a};this.$http.post(i,{data:o}).then(function(t){console.log(t.data),s.status.loadingItem="",s.$bus.$emit("message:push","加到購物車囉！","success")})}},created:function(){this.getProducts()}},r=n,l=i("2877"),d=Object(l["a"])(r,c,e,!1,null,null,null);d.options.__file="HokkaidoCard.vue";var u=d.exports,_={data:function(){return{isLoading:!1}},components:{HokkaidoCard:u}},g=_,p=Object(l["a"])(g,s,o,!1,null,null,null);p.options.__file="Hokkaido.vue";a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0e55c2.da45c360.js.map