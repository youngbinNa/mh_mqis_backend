(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14be59d2"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var i=a("ade3"),n=a("5530"),s=(a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function d(t,e){return l.reduce((function(a,i){return a[t+Object(o["H"])(i)]=e(),a}),{})}var u=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:u}})),f=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},v=d("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(h),justify:Object.keys(v),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var i=b[t];if(null!=a){if(e){var n=e.replace(t,"");i+="-".concat(n)}return i+="-".concat(a),i.toLowerCase()}}var _=new Map;e["a"]=s["default"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var a=e.props,n=e.data,s=e.children,o="";for(var l in a)o+=String(a[l]);var c=_.get(o);return c||function(){var t,e;for(e in c=[],m)m[e].forEach((function(t){var i=a[t],n=y(e,t,i);n&&c.push(n)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(i["a"])(t,"align-".concat(a.align),a.align),Object(i["a"])(t,"justify-".concat(a.justify),a.justify),Object(i["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),_.set(o,c)}(),t(a.tag,Object(r["a"])(n,{staticClass:"row",class:c}),s)}})},"169a":function(t,e,a){"use strict";a("7db0"),a("caad"),a("45fc"),a("a9e3"),a("2532"),a("498a");var i=a("5530"),n=a("2909"),s=a("ade3"),r=(a("368e"),a("480e")),o=a("4ad4"),l=a("b848"),c=a("75eb"),d=a("e707"),u=a("e4d3"),h=a("21be"),f=a("f2e7"),v=a("a293"),p=a("58df"),g=a("d9bd"),m=a("80d2"),b=Object(p["a"])(o["a"],l["a"],c["a"],d["a"],u["a"],h["a"],f["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===m["z"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(n["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(m["h"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["h"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1f09":function(t,e,a){},"1f4f":function(t,e,a){"use strict";a("a9e3");var i=a("5530"),n=(a("8b37"),a("80d2")),s=a("7560"),r=a("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(i["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},3129:function(t,e,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var i=a("3835"),n=a("5530"),s=(a("1f09"),a("c995")),r=a("24b2"),o=a("7560"),l=a("58df"),c=a("80d2");e["a"]=Object(l["a"])(s["a"],r["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),n=Object(i["a"])(a,2),s=n[0],r=n[1],o=function(){return e.genStructure(s)};return Array.from({length:r}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["t"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"368e":function(t,e,a){},"38c0":function(t,e,a){},"4ca6":function(t,e,a){"use strict";a("a9e3");var i=a("15fd"),n=a("5530"),s=(a("ff44"),a("132d")),r=a("a9ad"),o=a("7560"),l=a("f2e7"),c=a("f40d"),d=a("fe6c"),u=a("58df"),h=a("80d2");e["a"]=Object(u["a"])(r["a"],Object(d["b"])(["left","bottom"]),o["a"],l["a"],c["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(n["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(h["h"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),a=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",a,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent:function(){if(!this.dot){var t=Object(h["t"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(s["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],a=[Object(h["t"])(this)],n=this.$attrs,s=(n["aria-atomic"],n["aria-label"],n["aria-live"],n.role,n.title,Object(i["a"])(n,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?a.unshift(e):a.push(e),t("span",{staticClass:"v-badge",attrs:s,class:this.classes},a)}})},"615b":function(t,e,a){},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var i=a("ade3"),n=a("5530"),s=(a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["offset"+Object(o["H"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["order"+Object(o["H"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(c),offset:Object.keys(d),order:Object.keys(u)};function f(t,e,a){var i=t;if(null!=a&&!1!==a){if(e){var n=e.replace(t,"");i+="-".concat(n)}return"col"!==t||""!==a&&!0!==a?(i+="-".concat(a),i.toLowerCase()):i.toLowerCase()}}var v=new Map;e["a"]=s["default"].extend({name:"v-col",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,n=e.data,s=e.children,o=(e.parent,"");for(var l in a)o+=String(a[l]);var c=v.get(o);return c||function(){var t,e;for(e in c=[],h)h[e].forEach((function(t){var i=a[t],n=f(e,t,i);n&&c.push(n)}));var n=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!n||!a.cols},Object(i["a"])(t,"col-".concat(a.cols),a.cols),Object(i["a"])(t,"offset-".concat(a.offset),a.offset),Object(i["a"])(t,"order-".concat(a.order),a.order),Object(i["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),v.set(o,c)}(),t(a.tag,Object(r["a"])(n,{class:c}),s)}})},"7b1e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-container",{staticStyle:{padding:"0"},attrs:{app:""}},[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.getDateFormat(t.apprItems.WORK_DATE))+" "+t._s(t.$route.query.jgcd)+" 단위 검사를"),a("br"),t._v("결재 하시겠습니까?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"font-weight-bold",attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("취소")]),a("v-btn",{staticClass:"font-weight-bold",attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("확인")]),a("v-spacer")],1)],1)],1)],1),a("div",[a("v-toolbar",{attrs:{dense:"",flat:""}},[a("v-toolbar-title",[t._v(t._s(t.$route.query.jgcd)+" 단위 검사")]),a("v-col",{staticClass:"ma-0 pa-0 justify-end",staticStyle:{"text-align":"right"}},[a("v-btn",{staticClass:"text-h6",attrs:{outlined:"",tile:"",color:"primary",link:"",to:{path:"/SW/approval/wait"}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-format-list-bulleted")]),t._v(" 목록")],1),t.isApproved?[a("v-btn",{staticClass:"ml-5 text-h6",attrs:{outlined:"",tile:"",color:"success"},on:{click:function(e){t.dialogDelete=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-draw")]),t._v(" 승인")],1)]:t._e()],2)],1)],1),a("div",[a("v-card-text",{staticClass:"pt-0 mt-0 pb-0"},[a("v-row",[a("v-col",{staticClass:"px-3"},[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticClass:"text-h6"},[t._v("검사일")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.getDateFormat(t.apprItems.WORK_DATE)))])]),a("tr",[a("td",{staticClass:"text-h6"},[t._v("완료")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.$route.query.ok)+" 라인")])]),a("tr",[a("td",{staticClass:"text-h6"},[t._v("미완료")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.$route.query.yet)+" 라인")])]),a("tr",[a("td",{staticClass:"text-h6"},[t._v("불합격")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.$route.query.def)+" 항목")])])])]},proxy:!0}])})],1),a("v-divider",{attrs:{vertical:""}}),a("v-col",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticClass:"text-h6"},[t._v("상태")]),t.isApproved?[a("td",[a("v-chip",{staticClass:"ml-2 text-h6",attrs:{outlined:"",color:"error"}},[t._v("결재중")])],1)]:[a("td",[a("v-chip",{staticClass:"ml-2 text-h6",attrs:{outlined:"",color:"success"}},[t._v("승인됨")])],1)]],2),a("tr",[a("td",{staticClass:"text-h6"},[t._v("결재일")]),t.isApproved?[a("td")]:[a("td",{staticClass:"text-h6"},[t._v(t._s(t.getDateFormat(t.formatDate2(t.apprItems.APPR_DATE))))])]],2),a("tr",[a("td",{staticClass:"text-h6"},[t._v("결재자")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.apprItems.kname)+" "+t._s(t.apprItems.rank_name))])])])]},proxy:!0}])})],1)],1)],1)],1),t.loading?a("v-container",{staticStyle:{"padding-top":"5px","padding-bottom":"5px","padding-left":"12px","padding-right":"12px"},attrs:{"grid-list-md":"","text-xs-center":"",fluid:""}},[a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1),a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1),a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1),a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1)],1):t._l(t.filteredTables,(function(e,i){return a("v-container",{key:e.INDEX_KEY,staticClass:"pt-1 pb-1 pl-3 pr-3",attrs:{"grid-list-md":"","text-xs-center":"",fluid:"",app:""}},[a("v-card",{staticClass:"mx-auto",style:{borderLeft:t.getLeftColor[i]},attrs:{outlined:"",elevation:"2"}},[a("v-list-item",{staticClass:"pa-0 ma-0",attrs:{"two-line":""}},[a("v-list-item-content",[a("v-row",{staticClass:"pa-0 ma-0 justify-center"},[a("v-col",{staticClass:"pa-0 mx-4",attrs:{md:"3"}},[a("v-col",{staticStyle:{"text-align":"center"}},[a("v-badge",{attrs:{color:"grey",left:"",value:i+1,content:i+1}},[a("v-progress-circular",{attrs:{rotate:"270",size:"100",value:100*t.getNum(e.IS_DONE/e.TOTAL),width:"8",color:"#479cc8"}},[t._v("완료: "+t._s(Math.round(100*t.getNum(e.IS_DONE/e.TOTAL)))+"%"),a("br"),t._v(t._s(e.IS_DONE)+" / "+t._s(e.TOTAL)+" ")])],1)],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticStyle:{width:"100%"}},[a("v-list-item-title",{staticClass:"text-h5"},[a("v-chip",{attrs:{outlined:""}},[t._v(t._s(e.WORK_SHOP_ID))]),a("v-chip",{staticClass:"ml-2",attrs:{outlined:"",color:t.getZoneColor(e.TIME_ZONE_ID)}},[t._v(t._s(e.TIME_ZONE_ID))]),1==e.IS_TARGET?["Y"==e.IS_MANUAL?[a("v-chip",{staticClass:"ml-2",attrs:{outlined:"",color:"info"}},[t._v("수동라인")])]:t._e()]:t._e()],2),a("v-card",{staticClass:"grey--text text-h5 text--darken-1 ml-2",attrs:{flat:""}},[t._v(t._s(e.PART_ID))]),a("v-card",{staticClass:"text-h5 ml-2",attrs:{flat:""}},[t._v(t._s(e.WORK_SHOP_NAME))]),a("v-card",{staticClass:"grey--text text-h5 text--darken-1 ml-2",attrs:{flat:""}},[t._v(t._s(e.PART_NAME))])],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticStyle:{"text-align":"right"}},[e.IS_OK>0?[a("v-chip",{staticClass:"ma-2",attrs:{outlined:"",color:"error"}},[t._v("불합격")])]:t._e(),[a("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:function(a){return t.callTargetSPC(e.WORK_SHOP_ID,e.PART_ID,t.$route.query.workdate,e.TIME_ZONE_ID,t.$route.query.jgcd)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-file-search-outline")]),t._v(" 공정조회 ")],1)]],2)],1)],1)],1)],1)],1)],1)}))],2)],1)},n=[],s=(a("4de4"),a("caad"),a("a15b"),a("d81d"),a("fb6a"),a("ac1f"),a("2532"),a("5319"),a("bc3a")),r=a.n(s),o={name:"TargetLine",data:function(){return{loading:!0,tableItems:[],tableWeekItems:[],apprItems:[],zones:[{name:"전체",value:""},{name:"주간",value:"주간"},{name:"야간",value:"야간"}],istarget:[{name:"전체",value:""},{name:"대상",value:"1"},{name:"비대상",value:"0"}],filter:"",filter2:"",allowedDates:function(t){return 1===new Date(t).getDay()},isApproved:!0,dialogDelete:!1}},computed:{filteredTables:function(){var t=this;return this.tableItems.filter((function(e){return!t.filter&&!t.filter2||!t.filter&&t.filter2.includes(e.IS_TARGET)||t.filter.includes(e.TIME_ZONE_ID)&&!t.filter2||t.filter.includes(e.TIME_ZONE_ID)&&t.filter2.includes(e.IS_TARGET)}))},getLeftColor:function(){return this.filteredTables.map((function(t){var e="";return 0!=t.IS_DONE&&t.IS_DONE===t.TOTAL?e="10px solid #1E4174":t.IS_DONE<t.TOTAL?e="10px solid orange":0===t.IS_DONE&&0===t.TOTAL&&(e="10px solid grey"),t.IS_OK>0&&(e="10px solid red"),e}))}},created:function(){this.filter="주간",this.filter2="1",this.getApproved(),this.fetchData()},methods:{fetchData:function(){var t=this;this.loading=!0;try{var e=localStorage.getItem("token");"주"==this.$route.query.jgcd?r.a.get("".concat(this.$D2ApiPath,"/api/inspection/getLineTargetListWeek?date=")+this.$route.query.workdate,{headers:{Authorization:e}}).then((function(e){t.tableItems=e.data,t.loading=!1})):r.a.get("".concat(this.$D2ApiPath,"/api/inspection/getLineTargetList?date=")+this.$route.query.workdate,{headers:{Authorization:e}}).then((function(e){t.tableItems=e.data,t.loading=!1}))}catch(a){console.error(a),this.loading=!1}},getApproved:function(){var t=this,e=localStorage.getItem("token");r.a.get("".concat(this.$D2ApiPath,"/api/approval/doc?date=")+this.$route.query.workdate+"&jgcd="+this.$route.query.jgcd,{headers:{Authorization:e}}).then((function(e){t.apprItems=e.data[0],t.isApproved=2===e.data[0].STATUS}))},retrieveCalendar:function(){var t=this,e=localStorage.getItem("token");r.a.get("".concat(this.$D2ApiPath,"/api/inspection/getLineTargetList?date=")+this.date.replace(/-/g,""),{headers:{Authorization:e}}).then((function(e){t.tableItems=e.data}))},formatDate:function(t){var e=new Date(t),a=""+(e.getMonth()+1),i=""+e.getDate(),n=e.getFullYear();return a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),[n,a,i].join("-")},formatDate2:function(t){var e=new Date(t),a=""+(e.getMonth()+1),i=""+e.getDate(),n=e.getFullYear();return a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),[n,a,i].join("")},getDateFormat:function(t){if(t){var e=this.getDay(t);return[t.slice(0,4),"-",t.slice(4,6),"-",t.slice(6,8)," ("+e+")"].join("")}},getDay:function(t){if(t){var e=new Array("일","월","화","수","목","금","토"),a=t.substring(0,4),i=t.substring(4,6),n=t.substring(6,8),s=new Date(a,i-1,n,0,0,0,0);return s=e[s.getDay()],s}},callTargetSPC:function(t,e,a,i,n){this.$router.push({path:"/dp2/approval/doc/detail",query:{line:t,part:e,workdate:a.replace(/-/g,""),zone:i,jgcd:n}})},getNum:function(t){return t=+t||0,t},getZoneColor:function(t){return"주간"==t?"warning":"primary"},save:function(){var t=this,e={index:this.apprItems.INDEX_KEY,user_seq:localStorage.getItem("userseq"),kname:this.$store.state.user.kname,rank_name:this.$store.state.user.rank_name},a=localStorage.getItem("token");r.a.patch("".concat(this.$D2ApiPath,"/api/approval/detail/doc"),e,{headers:{Authorization:a}}).then((function(e){alert(e.data.msg),t.$router.push({path:"/dp2/approval/wait"})}))},closeDelete:function(){this.dialogDelete=!1},deleteItemConfirm:function(){this.save(),this.closeDelete()}}},l=o,c=(a("7bf9"),a("2877")),d=a("6544"),u=a.n(d),h=a("7496"),f=a("4ca6"),v=a("8336"),p=a("b0af"),g=a("99d9"),m=a("cc20"),b=a("62ad"),y=a("a523"),_=a("169a"),O=a("ce7e"),C=a("132d"),x=a("da13"),S=a("5d23"),j=a("490a"),k=a("0fd9"),w=a("1f4f"),$=a("3129"),A=a("2fa4"),I=a("71d9"),D=a("2a7f"),T=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=T.exports;u()(T,{VApp:h["a"],VBadge:f["a"],VBtn:v["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VChip:m["a"],VCol:b["a"],VContainer:y["a"],VDialog:_["a"],VDivider:O["a"],VIcon:C["a"],VListItem:x["a"],VListItemContent:S["a"],VListItemTitle:S["c"],VProgressCircular:j["a"],VRow:k["a"],VSimpleTable:w["a"],VSkeletonLoader:$["a"],VSpacer:A["a"],VToolbar:I["a"],VToolbarTitle:D["b"]})},"7bf9":function(t,e,a){"use strict";var i=a("38c0"),n=a.n(i);n.a},"8b37":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return l}));var i=a("b0af"),n=a("80d2"),s=Object(n["j"])("v-card__actions"),r=Object(n["j"])("v-card__subtitle"),o=Object(n["j"])("v-card__text"),l=Object(n["j"])("v-card__title");i["a"]},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var i=a("2b0e");function n(t){return i["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,n=a.data,s=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,s)}})}var s=a("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,n=e.data,r=e.children,o=n.attrs;return o&&(n.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),t(i.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),r)}})},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("5530"),n=(a("615b"),a("10d2")),s=a("297c"),r=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(s["a"],r["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},f40d:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},ff44:function(t,e,a){}}]);
//# sourceMappingURL=chunk-14be59d2.75e55d76.js.map