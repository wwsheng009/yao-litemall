(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-160d4691"],{"09fe":function(t,e,n){},3739:function(t,e,n){},3852:function(t,e,n){var r=n("96f3"),i=n("e2c0");function o(t,e){return null!=t&&i(t,e,r)}t.exports=o},"3b42":function(t,e,n){},"44bf":function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),o=n("d282"),a=n("a142"),c=n("ea8e"),s=n("ad06"),l=Object(o["a"])("image"),d=l[0],u=l[1];e["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["c"])(this.width)&&(t.width=Object(c["a"])(this.width)),Object(a["c"])(this.height)&&(t.height=Object(c["a"])(this.height)),Object(a["c"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(c["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&a["b"]&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(s["a"],{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(s["a"],{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",i()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",i()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}})},"66fd":function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),o=n("d282"),a=n("a142"),c=n("ba31"),s=n("a3e2"),l=n("44bf"),d=Object(o["a"])("card"),u=d[0],f=d[1];function h(t,e,n,r){var o,d=e.thumb,u=n.num||Object(a["c"])(e.num),h=n.price||Object(a["c"])(e.price),p=n["origin-price"]||Object(a["c"])(e.originPrice),g=u||h||p||n.bottom;function b(t){Object(c["a"])(r,"click-thumb",t)}function m(){if(n.tag||e.tag)return t("div",{class:f("tag")},[n.tag?n.tag():t(s["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function v(){if(n.thumb||d)return t("a",{attrs:{href:e.thumbLink},class:f("thumb"),on:{click:b}},[n.thumb?n.thumb():t(l["a"],{attrs:{src:d,width:"100%",height:"100%",fit:"cover","lazy-load":e.lazyLoad}}),m()])}function y(){return n.title?n.title():e.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0}function O(){return n.desc?n.desc():e.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[e.desc]):void 0}function S(){var n=e.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[e.currency]),t("span",{class:f("price-integer")},[n[0]]),".",t("span",{class:f("price-decimal")},[n[1]])])}function I(){if(h)return t("div",{class:f("price")},[n.price?n.price():S()])}function x(){if(p){var r=n["origin-price"];return t("div",{class:f("origin-price")},[r?r():e.currency+" "+e.originPrice])}}function _(){if(u)return t("div",{class:f("num")},[n.num?n.num():"x"+e.num])}function j(){if(n.footer)return t("div",{class:f("footer")},[n.footer()])}return t("div",i()([{class:f()},Object(c["b"])(r,!0)]),[t("div",{class:f("header")},[v(),t("div",{class:f("content",{centered:e.centered})},[t("div",[y(),O(),null==n.tags?void 0:n.tags()]),g&&t("div",{class:"van-card__bottom"},[null==(o=n["price-top"])?void 0:o.call(n),I(),x(),_(),null==n.bottom?void 0:n.bottom()])])]),j()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=u(h)},"96f3":function(t,e){var n=Object.prototype,r=n.hasOwnProperty;function i(t,e){return null!=t&&r.call(t,e)}t.exports=i},"9b7e":function(t,e,n){},"9cb7":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("09fe"),n("9b7e"),n("ea82")},a3e2:function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),o=n("d282"),a=n("ba31"),c=n("ad06"),s=Object(o["a"])("tag"),l=s[0],d=s[1];function u(t,e,n,r){var o,s=e.type,l=e.mark,u=e.plain,f=e.color,h=e.round,p=e.size,g=e.textColor,b=u?"color":"backgroundColor",m=(o={},o[b]=f,o);u?(m.color=g||f,m.borderColor=f):(m.color=g,m.background=f);var v={mark:l,plain:u,round:h};p&&(v[p]=p);var y=e.closeable&&t(c["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(r,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",i()([{key:"content",style:m,class:d([v,s])},Object(a["b"])(r,!0)]),[null==n.default?void 0:n.default(),y])])}u.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=l(u)},b084:function(t,e,n){"use strict";n("3739")},be39:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b"),n("3b42")},be7f:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04"),n("1146")},c292:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order_detail"},[e("div",{staticClass:"order-goods"},[t._l(t.orderGoods,(function(t){return e("van-card",{key:t.id,attrs:{title:t.goodsName,desc:"暂无描述",num:t.number,price:t.price+".00",thumb:t.picUrl}})})),e("van-cell-group",[e("van-cell",{attrs:{title:"商品金额"}},[e("span",{staticClass:"red"},[t._v(t._s(t._f("yuan")(100*t.orderInfo.goodsPrice)))])]),e("van-cell",{attrs:{title:"快递费用"}},[e("span",{staticClass:"red"},[t._v(t._s(t._f("yuan")(100*t.orderInfo.freightPrice)))])])],1)],2),e("van-cell-group",{staticStyle:{"margin-top":"20px"}},[e("van-cell",{attrs:{icon:"dingwei",title:"".concat(t.orderInfo.consignee,"  ").concat(t.orderInfo.mobile),label:t.orderInfo.address}})],1),e("van-cell-group",{staticStyle:{"margin-top":"20px"}},[e("van-cell",{attrs:{title:"下单时间"}},[e("span",[t._v(t._s(t.orderInfo.addTime))])]),e("van-cell",{attrs:{title:"订单编号"}},[e("span",[t._v(t._s(t.orderInfo.orderSn))])]),e("van-cell",{attrs:{title:"订单备注"}},[e("span",[t._v(t._s(t.orderInfo.remark))])]),e("van-cell",{attrs:{title:"实付款："}},[e("span",{staticClass:"red"},[t._v(t._s(t._f("yuan")(100*t.orderInfo.actualPrice)))])]),e("van-cell",[t.handleOption.cancel?e("van-button",{staticStyle:{float:"right"},attrs:{size:"small",round:"",type:"danger"},on:{click:function(e){return t.cancelOrder(t.orderInfo.id)}}},[t._v("取消订单")]):t._e(),t.handleOption.pay?e("van-button",{staticStyle:{float:"right"},attrs:{size:"small",round:"",type:"danger"},on:{click:function(e){return t.payOrder(t.orderInfo.id)}}},[t._v("去支付")]):t._e(),t.handleOption.delete?e("van-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"danger"},on:{click:function(e){return t.deleteOrder(t.orderInfo.id)}}},[t._v("删除订单")]):t._e(),t.handleOption.confirm?e("van-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"danger"},on:{click:function(e){return t.confirmOrder(t.orderInfo.id)}}},[t._v("确认收货")]):t._e(),t.handleOption.refund?e("van-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"danger"},on:{click:function(e){return t.refundOrder(t.orderInfo.id)}}},[t._v("退款")]):t._e()],1)],1),t.showExp()?e("van-cell-group",{staticStyle:{"margin-top":"20px"}},[e("van-cell",{attrs:{title:"快递公司"}},[e("span",[t._v(t._s(t.orderInfo.expCode))])]),e("van-cell",{attrs:{title:"快递编号"}},[e("span",[t._v(t._s(t.orderInfo.expNo))])])],1):t._e()],1)},i=[],o=n("ade3"),a=(n("be7f"),n("565f")),c=(n("9cb7"),n("66fd")),s=(n("be39"),n("efa0")),l=(n("66b9"),n("b650")),d=(n("c194"),n("7744")),u=(n("0653"),n("34e9")),f=(n("7f7f"),n("e17f"),n("2241")),h=n("3852"),p=n.n(h),g=n("4ec3"),b={data:function(){return{isSubmit:!1,isDisabled:!1,orderInfo:{},orderGoods:[],handleOption:{},expressInfo:{}}},created:function(){this.init()},methods:{showExp:function(){return p()(this.orderInfo,"expNo")},deleteOrder:function(t){var e=this;this.$dialog.confirm({message:"确定要删除该订单吗?"}).then((function(){Object(g["N"])({orderId:t}).then((function(){e.$toast("已删除订单"),e.$router.go(-1)}))})).catch((function(){}))},cancelOrder:function(t){var e=this;this.$dialog.confirm({message:"确定要取消该订单吗?"}).then((function(){Object(g["N"])({orderId:t}).then((function(){e.init(),e.$toast("已取消该订单")}))})).catch((function(){}))},confirmOrder:function(t){var e=this;this.$dialog.confirm({message:"请确认收到货物, 确认收货后无法撤销!"}).then((function(){Object(g["M"])({orderId:t}).then((function(){e.init(),e.$toast("已确认收货")}))})).catch((function(){}))},refundOrder:function(t){var e=this;this.$dialog.confirm({message:"确定要申请退款吗?"}).then((function(){Object(g["S"])({orderId:t}).then((function(){e.init(),e.$toast("已申请订单退款")}))})).catch((function(){}))},commentOrder:function(t){},toPay:function(t){this.$router.push({name:"payment",params:{orderId:t}})},init:function(){var t=this,e=this.$route.query.orderId;Object(g["O"])({orderId:e}).then((function(e){var n=e.data.data;t.orderInfo=n.orderInfo,t.orderGoods=n.orderGoods,t.handleOption=n.orderInfo.handleOption,t.expressInfo=n.expressInfo}))}},components:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},f["a"].name,f["a"]),u["a"].name,u["a"]),d["a"].name,d["a"]),l["a"].name,l["a"]),s["a"].name,s["a"]),c["a"].name,c["a"]),a["a"].name,a["a"])},m=b,v=(n("b084"),n("2877")),y=Object(v["a"])(m,r,i,!1,null,"59c9c86e",null);e["default"]=y.exports},ea82:function(t,e,n){},efa0:function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),o=n("d282"),a=n("ba31"),c=n("ad06"),s=n("b650"),l=Object(o["a"])("submit-bar"),d=l[0],u=l[1],f=l[2];function h(t,e,n,r){var o=e.tip,l=e.price,d=e.tipIcon;function h(){if("number"===typeof l){var n=(l/100).toFixed(e.decimalLength).split("."),r=e.decimalLength?"."+n[1]:"";return t("div",{style:{textAlign:e.textAlign?e.textAlign:""},class:u("text")},[t("span",[e.label||f("label")]),t("span",{class:u("price")},[e.currency,t("span",{class:u("price","integer")},[n[0]]),r]),e.suffixLabel&&t("span",{class:u("suffix-label")},[e.suffixLabel])])}}function p(){if(n.tip||o)return t("div",{class:u("tip")},[d&&t(c["a"],{class:u("tip-icon"),attrs:{name:d}}),o&&t("span",{class:u("tip-text")},[o]),n.tip&&n.tip()])}return t("div",i()([{class:u({unfit:!e.safeAreaInsetBottom})},Object(a["b"])(r)]),[n.top&&n.top(),p(),t("div",{class:u("bar")},[n.default&&n.default(),h(),n.button?n.button():t(s["a"],{attrs:{round:!0,type:e.buttonType,text:e.loading?"":e.buttonText,color:e.buttonColor,loading:e.loading,disabled:e.disabled},class:u("button",e.buttonType),on:{click:function(){Object(a["a"])(r,"submit")}}})])])}h.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,textAlign:String,buttonText:String,buttonColor:String,suffixLabel:String,safeAreaInsetBottom:{type:Boolean,default:!0},decimalLength:{type:[Number,String],default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}},e["a"]=d(h)}}]);