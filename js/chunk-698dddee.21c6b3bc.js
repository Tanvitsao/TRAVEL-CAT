(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-698dddee"],{"2fdb":function(t,a,e){"use strict";var s=e("5ca1"),i=e("d2c8"),c="includes";s(s.P+s.F*e("5147")(c),"String",{includes:function(t){return!!~i(this,t,c).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,a,e){var s=e("2b4c")("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(e){try{return a[s]=!1,!"/./"[t](a)}catch(i){}}return!0}},"58c2":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("AlertMessage"),e("div",{staticClass:"bg-light pb-5"},[e("div",{staticClass:"container"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.text))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"list-group sticky-top"},[e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"全部地區"===t.text},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeText("全部地區")}}},[e("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("全部地區")]),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"本州"===t.text},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeText("本州")}}},[e("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("本州")]),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"北海道"===t.text},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeText("北海道")}}},[e("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("北海道")]),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"四國"===t.text},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeText("四國")}}},[e("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("四國")]),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"九州"===t.text},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeText("九州")}}},[e("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("九州")]),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"沖繩"===t.text},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeText("沖繩")}}},[e("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("沖繩")])])]),e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"row"},t._l(t.filterData,function(a){return e("div",{key:a.id,staticClass:"col-md-6 mb-4"},[e("div",{staticClass:"card border-0 shadow-sm h-100 animated"},[e("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),e("div",{staticClass:"card-body"},[e("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),e("h5",{staticClass:"card-title"},[e("i",{staticClass:"fas fa-paw"}),e("a",{staticClass:"h5 text-dark",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getProduct(a.id)}}},[t._v(t._s(a.title))])]),e("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),e("div",{staticClass:"text-right align-items-baseline"},[a.price?t._e():e("div",{staticClass:"h5 text-secondary"},[t._v("NT$ "+t._s(a.origin_price))]),a.price?e("del",{staticClass:"h6 text-secondary"},[t._v("NT$ "+t._s(a.origin_price))]):t._e(),a.price?e("div",{staticClass:"h5"},[t._v("NT$ "+t._s(a.price))]):t._e()])]),e("div",{staticClass:"card-footer d-flex bg-dark"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){t.getProduct(a.id)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                                        查看更多\n                                    ")]),e("button",{staticClass:"btn btn-outline-primary btn-sm ml-auto",attrs:{type:"button"},on:{click:function(e){t.addtoCart(a.id)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                                        加到購物車\n                                    ")])])])])}),0)])])])])],1)},i=[],c=(e("6762"),e("2fdb"),e("be94")),r=(e("cadf"),e("551c"),e("097d"),e("1157"),e("2f62")),n={data:function(){return{product:{},status:{loadingItem:""},isLoading:!1}},methods:Object(c["a"])({},Object(r["b"])(["getProducts"]),{getProduct:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/product/").concat(t),e=this;e.status.loadingItem=t,this.$http.get(a).then(function(t){console.log(t.data),e.$router.push("/itemdata/".concat(t.data.product.id)),e.status.loadingItem=""})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/cart"),s=this;s.status.loadingItem=t;var i={product_id:t,qty:a};this.$http.post(e,{data:i}).then(function(t){console.log(t.data),s.status.loadingItem="",s.$bus.$emit("message:push","已新增至購物車","success")})},changeText:function(t){this.$store.dispatch("changeText",t)}}),computed:Object(c["a"])({filterData:function(){var t=this;return"全部地區"!==t.$store.state.searchText?t.products.filter(function(a){var e=a.category.includes(t.$store.state.searchText);return e}):this.products}},Object(r["c"])(["text","products"])),created:function(){this.getProducts()}},o=n,l=e("2877"),u=Object(l["a"])(o,s,i,!1,null,null,null);u.options.__file="Categories.vue";a["default"]=u.exports},6762:function(t,a,e){"use strict";var s=e("5ca1"),i=e("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")("includes")},aae3:function(t,a,e){var s=e("d3f4"),i=e("2d95"),c=e("2b4c")("match");t.exports=function(t){var a;return s(t)&&(void 0!==(a=t[c])?!!a:"RegExp"==i(t))}},ade3:function(t,a,e){"use strict";function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.d(a,"a",function(){return s})},be94:function(t,a,e){"use strict";e.d(a,"a",function(){return i});var s=e("ade3");function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(a){Object(s["a"])(t,a,e[a])})}return t}},d2c8:function(t,a,e){var s=e("aae3"),i=e("be13");t.exports=function(t,a,e){if(s(a))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}}}]);
//# sourceMappingURL=chunk-698dddee.21c6b3bc.js.map