(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54251dd8"],{"158c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("van-cell-group",[e("van-cell",{attrs:{title:"联系客服",isLink:""},on:{click:function(e){t.showKefu=!0}}}),e("van-cell",{attrs:{title:"意见反馈",to:"/user/feedback",isLink:""}}),e("van-cell",{attrs:{title:"常见问题",to:"/user/help",isLink:""}})],1),e("van-popup",{model:{value:t.showKefu,callback:function(e){t.showKefu=e},expression:"showKefu"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"项目名称",value:"litemall"}}),e("van-cell",{attrs:{title:"项目地址",value:"Github",url:"https://github.com/linlinjava/litemall"}}),e("van-cell",{attrs:{title:"项目地址",value:"Gitee",url:"https://gitee.com/linlinjava/litemall"}}),e("van-cell",{attrs:{title:"联系电话",value:"021-xxxx-xxxx"}}),e("van-cell",{attrs:{title:"联系QQ",value:"738696120"}}),e("van-cell",{attrs:{title:"当前版本",value:"V1.0"}}),e("van-cell",{attrs:{title:"开源协议",value:"MIT"}})],1)],1)],1)},i=[],o=n("ade3"),l=(n("0653"),n("34e9")),s=(n("c194"),n("7744")),c=(n("7f7f"),n("8a58"),n("e41f")),r={data:function(){return{showKefu:!1}},components:Object(o["a"])(Object(o["a"])(Object(o["a"])({},c["a"].name,c["a"]),s["a"].name,s["a"]),l["a"].name,l["a"])},u=r,f=(n("a81c"),n("2877")),v=Object(f["a"])(u,a,i,!1,null,"7f16f9ca",null);e["default"]=v.exports},"8a58":function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75")},a81c:function(t,e,n){"use strict";n("e49e")},e41f:function(t,e,n){"use strict";var a=n("d282"),i=n("a142"),o=n("6605"),l=n("ad06"),s=Object(a["a"])("popup"),c=s[0],r=s[1];e["a"]=c({mixins:[Object(o["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},methods:{onClickCloseIcon:function(t){this.$emit("click-close-icon",t),this.close()}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,a=this.position,o=this.duration,s="center"===a,c=this.transition||(s?"van-fade":"van-popup-slide-"+a),u={};if(Object(i["c"])(o)){var f=s?"animationDuration":"transitionDuration";u[f]=o+"s"}return e("transition",{attrs:{appear:this.transitionAppear,name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:u,class:r((t={round:n},t[a]=a,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(l["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:r("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}}})},e49e:function(t,e,n){}}]);