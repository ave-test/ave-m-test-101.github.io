(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MyChats"],{"7f35":function(e,t,n){"use strict";n("c3da")},c2e6:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),a=function(e){return Object(o["pushScopeId"])("data-v-fda7013c"),e=e(),Object(o["popScopeId"])(),e},i={class:"myChat-container"},c={action:"/"},r=["onClick"],s={class:"center"},l={key:0,class:"icon-svg icon-renzheng","aria-hidden":"true"},d=a((function(){return Object(o["createElementVNode"])("use",{"xlink:href":"#icon-renzheng"},null,-1)})),h=[d],u={class:"center-bottom"},m={class:"right"},f={key:0},b={key:1,class:"tag"};function p(e,t,a,d,p,g){var j=Object(o["resolveComponent"])("van-nav-bar"),O=Object(o["resolveComponent"])("van-search"),v=Object(o["resolveComponent"])("van-sticky"),k=Object(o["resolveComponent"])("van-image"),y=Object(o["resolveComponent"])("van-button"),C=Object(o["resolveComponent"])("van-swipe-cell"),$=Object(o["resolveComponent"])("van-empty"),w=Object(o["resolveComponent"])("van-list");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",i,[Object(o["createVNode"])(j,{"left-text":"","left-arrow":"",onClickLeft:g.back,fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("myChats")},null,8,["onClickLeft","title"]),Object(o["createVNode"])(v,{"offset-top":"1rem"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("form",c,[Object(o["createVNode"])(O,{modelValue:p.keyword,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.keyword=e}),modelModifiers:{trim:!0},background:"#fff",shape:"round",placeholder:e.$t("search1"),onSearch:g.onSearch},null,8,["modelValue","placeholder","onSearch"])])]})),_:1}),Object(o["createElementVNode"])("ul",null,[Object(o["createVNode"])(w,{loading:p.loading,"onUpdate:loading":t[1]||(t[1]=function(e){return p.loading=e}),finished:p.finished,error:p.error,"onUpdate:error":t[2]||(t[2]=function(e){return p.error=e}),"error-text":e.$t("errorText"),onLoad:g.getMyChats,"loading-text":e.$t("loading"),"finished-text":e.$t("noMore"),"immediate-check":!1},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(p.chats,(function(t,a){return Object(o["openBlock"])(),Object(o["createBlock"])(C,{key:a},{right:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(y,{square:"",type:"danger",text:e.$t("exitChat"),onClick:Object(o["withModifiers"])((function(e){return g.leaveChatGroup(t)}),["stop"])},null,8,["text","onClick"])]})),default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("li",{class:"li-item",onClick:Object(o["withModifiers"])((function(e){return g.goChat(t)}),["stop"])},[Object(o["createVNode"])(k,{round:"",width:"0.96rem",height:"0.96rem","icon-size":"0.96rem","lazy-load":"","show-loading":"",src:(null===t||void 0===t?void 0:t.image)||e.$f.formatIcon(t.id),"error-icon":n("aecc")},null,8,["src","error-icon"]),Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",null,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.nickname||t.name)+" ",1),null!==t&&void 0!==t&&t.provider_count&&(null===t||void 0===t?void 0:t.provider_count)>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("svg",l,h)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",u,Object(o["toDisplayString"])(t.total_members)+" "+Object(o["toDisplayString"])(e.$t("members")),1)]),Object(o["createElementVNode"])("div",m,[t.lastchated?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,Object(o["toDisplayString"])(g.formatCalendar(t.lastchated)),1)):Object(o["createCommentVNode"])("",!0),(null===t||void 0===t?void 0:t.unreadmsg_count)>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",b,Object(o["toDisplayString"])(t.unreadmsg_count>99?"99+":t.unreadmsg_count),1)):Object(o["createCommentVNode"])("",!0)])],8,r)]})),_:2},1024)})),128)),Object(o["withDirectives"])(Object(o["createVNode"])($,{class:"empty",image:e.emptyNoDataLight,description:e.$t("emptyData")},null,8,["image","description"]),[[o["vShow"],p.chats&&0===p.chats.length&&!p.loading]])]})),_:1},8,["loading","finished","error","error-text","onLoad","loading-text","finished-text"])])])}n("d81d"),n("b64b"),n("d3b7"),n("99af");var g=n("365c"),j=null,O={name:"MyChats",data:function(){return{pageNO:0,pageSize:10,keyword:"",chats:[],total:0,loading:!1,finished:!1,error:!1}},watch:{"$store.state.chat.loginVisible":function(e){!e&&this.$store.state.chat.chatToken&&this.init()},"$store.state.chat.setPasswordVisible":function(e){!e&&this.$store.state.chat.chatToken&&this.init()},keyword:function(e){var t=this;j&&clearTimeout(j),e?j=setTimeout((function(){t.init()}),1e3):this.init()}},activated:function(){this.init()},methods:{init:function(){this.pageNO=0,this.finished=!1,this.error=!1,this.getMyChats()},getMyChats:function(){var e=this;this.loading=!0;var t=this.$store.state.currentAccount,n=this.$store.getters.netId,o="";t&&n&&(o=t+"-"+n);var a=[],i=this.$store.state.chat.chatLastMsgTimeObj[o];o&&i&&(a=Object.keys(i).map((function(e){return{groupId:e,time:i[e]}}))),Object(g["db"])(this.pageNO,this.pageSize,this.keyword,a).then((function(t){0===e.pageNO&&(e.chats=[]),e.total=t.total,e.chats=e.chats.concat(t.groups),e.chats.length>=e.total||t.groups.length<e.pageSize?e.finished=!0:e.pageNO++})).catch((function(){e.error=!0})).finally((function(){setTimeout((function(){e.loading=!1}),1e3)}))},onSearch:function(){j&&clearTimeout(j),this.init()},goChat:function(e){this.$router.push({name:"Chat",params:{id:e.id}})},leaveChatGroup:function(e){var t=this;this.$dialog.confirm({message:this.$t("confirmLeaveChat"),allowHtml:!1,messageAlign:"center",closeOnPopstate:!0,confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then((function(){var n=t.$toast.loading({forbidClick:!0,duration:0});Object(g["Xb"])(e.id).then((function(e){n.clear(),t.init()})).catch((function(e){t.$toast({message:e,position:"top"})}))})).catch((function(){t.$store.state.chat.checkAuthVisible=!1}))},formatCalendar:function(e){var t=this.$dayjs(1e3*e).isToday();if(t)return this.$dayjs(1e3*e).format("HH:mm");var n=this.$dayjs(1e3*e).isYesterday();if(n)return this.$t("yesterday")+" "+this.$dayjs(1e3*e).format("HH:mm");var o=(new Date).getFullYear()===new Date(1e3*e).getFullYear();return o?this.$dayjs(1e3*e).format("MM-DD HH:mm"):this.$dayjs(1e3*e).format("YYYY-MM-DD HH:mm")},back:function(){var e,t,n;null!==(e=this.$f.androidGlobal())&&void 0!==e&&e.back?null===(t=this.$f.androidGlobal())||void 0===t||null===(n=t.back)||void 0===n||n.call(t):this.$f.goBack()}}},v=(n("7f35"),n("6b0d")),k=n.n(v);const y=k()(O,[["render",p],["__scopeId","data-v-fda7013c"]]);t["default"]=y},c3da:function(e,t,n){}}]);