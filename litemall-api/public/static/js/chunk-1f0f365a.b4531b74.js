(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f0f365a"],{"02de":function(t,i,e){"use strict";function n(t){var i=window.getComputedStyle(t),e="none"===i.display,n=null===t.offsetParent&&"fixed"!==i.position;return e||n}e.d(i,"a",(function(){return n}))},"09fe":function(t,i,e){},"1a8c":function(t,i){function e(t){var i=typeof t;return null!=t&&("object"==i||"function"==i)}t.exports=e},2994:function(t,i,e){"use strict";e("68ef"),e("e3b3"),e("c0c2")},"2bdd":function(t,i,e){"use strict";var n=e("d282"),r=e("02de"),o=e("a8c1"),a=e("5fbe"),s=e("543e"),c=Object(n["a"])("list"),l=c[0],d=c[1],u=c[2];i["a"]=l({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(o["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var i,e=t.$el,n=t.scroller,o=t.offset,a=t.direction;i=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var s=i.bottom-i.top;if(!s||Object(r["a"])(e))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?i.top-l.top<=o:l.bottom-i.bottom<=o,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:d("loading")},[this.slots("loading")||t(s["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var i=this.slots("finished")||this.finishedText;if(i)return t("div",{class:d("finished-text")},[i])}},genErrorText:function(){var t=this.$createElement;if(this.error){var i=this.slots("error")||this.errorText;if(i)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[i])}}},render:function(){var t=arguments[0],i=t("div",{ref:"placeholder",key:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():i,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():i])}})},"408c":function(t,i,e){var n=e("2b3e"),r=function(){return n.Date.now()};t.exports=r},"44bf":function(t,i,e){"use strict";var n=e("2638"),r=e.n(n),o=e("d282"),a=e("a142"),s=e("ea8e"),c=e("ad06"),l=Object(o["a"])("image"),d=l[0],u=l[1];i["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["c"])(this.width)&&(t.width=Object(s["a"])(this.width)),Object(a["c"])(this.height)&&(t.height=Object(s["a"])(this.height)),Object(a["c"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(s["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&a["b"]&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var i=t.el;i===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var i=t.el;i!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(c["a"],{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(c["a"],{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,i={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",r()([{ref:"image",directives:[{name:"lazy",value:this.src}]},i])):t("img",r()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},i]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}})},"4cef":function(t,i){var e=/\s/;function n(t){var i=t.length;while(i--&&e.test(t.charAt(i)));return i}t.exports=n},"66fd":function(t,i,e){"use strict";var n=e("2638"),r=e.n(n),o=e("d282"),a=e("a142"),s=e("ba31"),c=e("a3e2"),l=e("44bf"),d=Object(o["a"])("card"),u=d[0],f=d[1];function h(t,i,e,n){var o,d=i.thumb,u=e.num||Object(a["c"])(i.num),h=e.price||Object(a["c"])(i.price),g=e["origin-price"]||Object(a["c"])(i.originPrice),p=u||h||g||e.bottom;function v(t){Object(s["a"])(n,"click-thumb",t)}function m(){if(e.tag||i.tag)return t("div",{class:f("tag")},[e.tag?e.tag():t(c["a"],{attrs:{mark:!0,type:"danger"}},[i.tag])])}function b(){if(e.thumb||d)return t("a",{attrs:{href:i.thumbLink},class:f("thumb"),on:{click:v}},[e.thumb?e.thumb():t(l["a"],{attrs:{src:d,width:"100%",height:"100%",fit:"cover","lazy-load":i.lazyLoad}}),m()])}function y(){return e.title?e.title():i.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[i.title]):void 0}function x(){return e.desc?e.desc():i.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[i.desc]):void 0}function k(){var e=i.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[i.currency]),t("span",{class:f("price-integer")},[e[0]]),".",t("span",{class:f("price-decimal")},[e[1]])])}function L(){if(h)return t("div",{class:f("price")},[e.price?e.price():k()])}function w(){if(g){var n=e["origin-price"];return t("div",{class:f("origin-price")},[n?n():i.currency+" "+i.originPrice])}}function S(){if(u)return t("div",{class:f("num")},[e.num?e.num():"x"+i.num])}function $(){if(e.footer)return t("div",{class:f("footer")},[e.footer()])}return t("div",r()([{class:f()},Object(s["b"])(n,!0)]),[t("div",{class:f("header")},[b(),t("div",{class:f("content",{centered:i.centered})},[t("div",[y(),x(),null==e.tags?void 0:e.tags()]),p&&t("div",{class:"van-card__bottom"},[null==(o=e["price-top"])?void 0:o.call(e),L(),w(),S(),null==e.bottom?void 0:e.bottom()])])]),$()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},i["a"]=u(h)},"8d74":function(t,i,e){var n=e("4cef"),r=/^\s+/;function o(t){return t?t.slice(0,n(t)+1).replace(r,""):t}t.exports=o},"9b7e":function(t,i,e){},"9cb7":function(t,i,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("09fe"),e("9b7e"),e("ea82")},a3e2:function(t,i,e){"use strict";var n=e("2638"),r=e.n(n),o=e("d282"),a=e("ba31"),s=e("ad06"),c=Object(o["a"])("tag"),l=c[0],d=c[1];function u(t,i,e,n){var o,c=i.type,l=i.mark,u=i.plain,f=i.color,h=i.round,g=i.size,p=i.textColor,v=u?"color":"backgroundColor",m=(o={},o[v]=f,o);u?(m.color=p||f,m.borderColor=f):(m.color=p,m.background=f);var b={mark:l,plain:u,round:h};g&&(b[g]=g);var y=i.closeable&&t(s["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(n,"close")}}});return t("transition",{attrs:{name:i.closeable?"van-fade":null}},[t("span",r()([{key:"content",style:m,class:d([b,c])},Object(a["b"])(n,!0)]),[null==e.default?void 0:e.default(),y])])}u.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},i["a"]=l(u)},b047:function(t,i,e){var n=e("1a8c"),r=e("408c"),o=e("b4b0"),a="Expected a function",s=Math.max,c=Math.min;function l(t,i,e){var l,d,u,f,h,g,p=0,v=!1,m=!1,b=!0;if("function"!=typeof t)throw new TypeError(a);function y(i){var e=l,n=d;return l=d=void 0,p=i,f=t.apply(n,e),f}function x(t){return p=t,h=setTimeout(w,i),v?y(t):f}function k(t){var e=t-g,n=t-p,r=i-e;return m?c(r,u-n):r}function L(t){var e=t-g,n=t-p;return void 0===g||e>=i||e<0||m&&n>=u}function w(){var t=r();if(L(t))return S(t);h=setTimeout(w,k(t))}function S(t){return h=void 0,b&&l?y(t):(l=d=void 0,f)}function $(){void 0!==h&&clearTimeout(h),p=0,l=g=d=h=void 0}function j(){return void 0===h?f:S(r())}function O(){var t=r(),e=L(t);if(l=arguments,d=this,g=t,e){if(void 0===h)return x(g);if(m)return clearTimeout(h),h=setTimeout(w,i),y(g)}return void 0===h&&(h=setTimeout(w,i)),f}return i=o(i)||0,n(e)&&(v=!!e.leading,m="maxWait"in e,u=m?s(o(e.maxWait)||0,i):u,b="trailing"in e?!!e.trailing:b),O.cancel=$,O.flush=j,O}t.exports=l},b4b0:function(t,i,e){var n=e("8d74"),r=e("1a8c"),o=e("ffd6"),a=NaN,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(o(t))return a;if(r(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=r(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var e=c.test(t);return e||l.test(t)?d(t.slice(2),e?2:8):s.test(t)?a:+t}t.exports=u},b62c:function(t,i,e){"use strict";e("e112")},bcd1:function(t,i,e){"use strict";e.r(i);e("7f7f");var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"goods_new"},[t._m(0),i("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了"},on:{load:t.getNewtList},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,(function(e,n){return i("van-card",{key:n,attrs:{desc:e.brief,title:e.name,thumb:e.picUrl,price:e.retailPrice,"origin-price":e.counterPrice},on:{click:function(i){return t.itemClick(e.id)}}})})),1)],1)},r=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"banner"},[i("div",{staticClass:"title"},[t._v("新品首发")])])}],o=e("ade3"),a=(e("9cb7"),e("66fd")),s=(e("2994"),e("2bdd")),c=e("2909"),l=e("4ec3"),d=e("e76c"),u={mixins:[d["a"]],data:function(){return{list:[],page:0,limit:10,loading:!1,finished:!1}},created:function(){this.init()},methods:{init:function(){this.page=0,this.list=[],this.getNewtList()},getNewtList:function(){var t=this;this.page++,Object(l["I"])({isNew:!0,page:this.page,limit:this.limit}).then((function(i){var e;(e=t.list).push.apply(e,Object(c["a"])(i.data.data.list)),t.loading=!1,t.finished=i.data.data.page>=i.data.data.pages}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:Object(o["a"])(Object(o["a"])({},s["a"].name,s["a"]),a["a"].name,a["a"])},f=u,h=(e("b62c"),e("2877")),g=Object(h["a"])(f,n,r,!1,null,"54e4a896",null);i["default"]=g.exports},c0c2:function(t,i,e){},e112:function(t,i,e){},e76c:function(t,i,e){"use strict";var n=e("b047"),r=e.n(n);i["a"]={data:function(){return{scrollTop:0}},mounted:function(){var t=this;t.$el.addEventListener("scroll",r()((function(){t.scrollTop=t.$el.scrollTop}),50))},activated:function(){this.$el.scrollTop=this.scrollTop}}},ea82:function(t,i,e){},ffd6:function(t,i,e){var n=e("3729"),r=e("1310"),o="[object Symbol]";function a(t){return"symbol"==typeof t||r(t)&&n(t)==o}t.exports=a}}]);