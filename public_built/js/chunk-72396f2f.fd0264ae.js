(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72396f2f"],{"0d31":function(t,e,n){"use strict";var i=n("809a"),a=n.n(i);a.a},"30ca":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.keyboardClass})},a=[],s=(n("ac1f"),n("5319"),n("dd7f")),o=n.n(s),r=(n("d2db"),{name:"SimpleKeyboard",props:{keyboardClass:{default:"simple-keyboard",type:String},input:{type:String}},data:function(){return{keyboard:null}},mounted:function(){this.keyboard=new o.a({onChange:this.onChange,onKeyPress:this.onKeyPress,layout:{default:["7 8 9","4 5 6","1 2 3",". 0 {bksp}"]},display:{"{shift}":"⇧","{shiftactivated}":"⇧","{enter}":"return","{bksp}":"⌫"}})},methods:{onChange:function(t){t=t.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"),this.$emit("onChange",t)},onKeyPress:function(t){this.$emit("onKeyPress",t),"{shift}"!==t&&"{lock}"!==t||this.handleShift()},handleShift:function(){var t=this.keyboard.options.layoutName,e="default"===t?"shift":"default";this.keyboard.setOptions({layoutName:e})}},watch:{input:function(t){t=t.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"),this.keyboard.setInput(t)}}}),l=r,c=(n("5b7f"),n("2877")),u=Object(c["a"])(l,i,a,!1,null,"4335c35a",null);e["a"]=u.exports},"5b7f":function(t,e,n){"use strict";var i=n("71d6"),a=n.n(i);a.a},"71d6":function(t,e,n){},"809a":function(t,e,n){},8986:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.line?i("v-card",{attrs:{id:"inspire"}},[t._l(t.tableItems,(function(e,a){return i("v-container",{key:e.INDEX_KEY,attrs:{fluid:""}},[[i("v-row",[i("v-col",[i("v-chip-group",{attrs:{column:""}},[i("v-chip",[t._v(t._s(t.line))]),i("v-chip",[t._v(t._s(t.part))]),i("v-chip",[t._v(t._s(t.getDateFormat(t.workdate)))]),i("v-chip",[t._v(t._s(t.zone))])],1),i("v-chip-group",{attrs:{column:""}},[i("v-chip",{attrs:{outlined:"",color:"warning"}},[t._v("시료수 "+t._s(e.SIZE))]),i("v-chip",{attrs:{outlined:"",color:"warning"}},[t._v("포인트 "+t._s(e.POINT))]),"Y"==e.IS_INPUT?[i("v-chip",{attrs:{outlined:"",color:"info"}},[t._v("하한 "+t._s(e.LCLQ))]),i("v-chip",{attrs:{outlined:"",color:"info"}},[t._v("센터 "+t._s(e.CENT))]),i("v-chip",{attrs:{outlined:"",color:"info"}},[t._v("상한 "+t._s(e.UCLQ))])]:t._e()],2),i("v-divider"),i("v-row",["Y"==e.IS_INPUT?i("v-col",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"red--text"},[t._v("검사결과 *필수")]),i("input",{staticClass:"input",staticStyle:{border:"thin solid rgba(0,0,0,.12)",height:"60px","font-size":"30px"},attrs:{placeholder:"이 곳에 검사결과 표시"},domProps:{value:t.input},on:{input:t.onInputChange}}),i("SimpleKeyboard",{staticStyle:{"font-size":"30px"},attrs:{input:t.input},on:{onChange:t.onChange,onKeyPress:t.onKeyPress}})],1)],1):t._e()],1),i("v-row",{attrs:{align:"center",justify:"space-around"}},[i("v-col",{staticStyle:{"padding-top":"0","padding-bottom":"2"}},[i("v-chip-group",{attrs:{column:"",mandatory:"",id:"oknot"},model:{value:t.toggle_val,callback:function(e){t.toggle_val=e},expression:"toggle_val"}},[i("v-chip",{staticClass:"mr-2",staticStyle:{"justify-content":"center"},attrs:{disabled:t.getOKdisabled[a],filter:"",outlined:"",label:"",color:"primary"}},[t._v("합격")]),i("v-chip",{staticClass:"mr-2",staticStyle:{"justify-content":"center"},attrs:{disabled:t.getOKdisabled[a],filter:"",outlined:"",label:"",color:"error"}},[t._v("불합격")])],1)],1)],1),i("v-row",[i("v-col",{staticStyle:{"padding-top":"0","padding-bottom":"0"}},[i("v-textarea",{attrs:{name:"input-7-1",filled:"",label:"특이사항 입력","auto-grow":"",rows:"1",counter:"",maxlength:100},model:{value:t.etcinput,callback:function(e){t.etcinput=e},expression:"etcinput"}})],1)],1),i("v-row",{attrs:{align:"center",justify:"space-around"}},[i("v-col",{staticStyle:{"padding-top":"0","padding-bottom":"0"}},[i("v-btn",{attrs:{block:"",color:"grey"},on:{click:function(n){return t.save(e.WCEN,e.MACO,e.INDEX_KEY,e.IS_INPUT)}}},[t._v("완료(저장)")])],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",[i("v-card-actions",[i("v-btn",{staticClass:"justify-end px-3",attrs:{color:"info",text:"",right:"",block:""},on:{click:t.setShowClicked}},[t._v(" "+t._s(t.getShowClicked)+" "),i("v-icon",[t._v(t._s(t.getShowIcon))])],1),i("v-spacer")],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}]},[i("v-col",{attrs:{align:"center",md:"0",ma:"0"}},[e.IMAGE?[i("v-img",{attrs:{src:t.getImagePath[a],"lazy-src":t.getImagePath[a],"max-width":"300","max-height":"300"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})]:[i("v-img",{attrs:{src:n("89dc"),"lazy-src":n("89dc"),"max-width":"300","max-height":"300"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})]],2)],1)])],1)],1)],1)],1)]],2)})),i("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"hidden"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})],2):t._e()},a=[],s=(n("4de4"),n("a15b"),n("d81d"),n("fb6a"),n("a9e3"),n("bc3a")),o=n.n(s),r=n("30ca"),l=n("2ef0"),c=n.n(l),u={name:"PatrolDo",components:{SimpleKeyboard:r["a"]},props:{line:String,part:String,cpid:Number,workdate:String,zone:String},data:function(){return{tableItems:[],item:[],input:"",filter:this.cpid,toggle_val:["합격","불합격"],etcinput:"",question:"",answer:"질문을 하기 전까지는 대답할 수 없습니다.",expand:!1}},created:function(){var t=this,e=localStorage.getItem("token");o.a.get("".concat(this.$SuwonApiPath,"/api/inspection/todo/list/")+this.cpid,{headers:{Authorization:e}}).then((function(e){t.tableItems=e.data,t.item=t.tableItems})),this.debouncedGetAnswer=c.a.debounce(this.getAnswer,100)},watch:{input:function(t){this.debouncedGetAnswer()}},computed:{filteredTables:function(){var t=this;return this.tableItems.filter((function(e){return String(e.INDEX_KEY)==t.filter}))},getOKdisabled:function(){return this.tableItems.map((function(t){return"Y"==t.IS_INPUT}))},getImagePath:function(){var t=this.$SuwonApiPath;return this.tableItems.map((function(e){return t+"/images/"+e.IMAGE}))},getShowIcon:function(){return this.expand?"mdi-chevron-up":"mdi-chevron-down"},getShowClicked:function(){return this.expand?"사진 접기":"사진 펼치기"}},methods:{afterLeave:function(){this.$root.$emit("triggerScroll")},getAnswer:function(){this.tableItems[0].UCLQ||this.tableItems[0].CENT||!this.tableItems[0].LCLQ?this.tableItems[0].LCLQ||this.tableItems[0].CENT||!this.tableItems[0].UCLQ?null==this.tableItems[0].LCLQ&&""==this.tableItems[0].LCLQ||null==this.tableItems[0].UCLQ&&""==this.tableItems[0].UCLQ?this.toggle_val=2:this.input>=this.tableItems[0].LCLQ&&this.input<=this.tableItems[0].UCLQ?this.toggle_val=0:this.toggle_val=1:this.input<=this.tableItems[0].UCLQ?this.toggle_val=0:this.toggle_val=1:this.input>=this.tableItems[0].LCLQ?this.toggle_val=0:this.toggle_val=1},save:function(t,e,n,i){var a=parseFloat(this.input);if("Y"==i){if(!a)return alert("검사결과를 숫자로 입력해주세요.");this.saveandcall(t,e,n)}else this.saveandcall(t,e,n)},saveandcall:function(t,e,n){this.$router;var i=this,a=localStorage.getItem("token");o.a.patch("".concat(this.$SuwonApiPath,"/api/inspection/todo/endtime/")+n+"?pINPUT="+this.input+"&pIS_OK="+this.toggle_val+"&pETC="+this.etcinput,this.$store.state.user,{headers:{Authorization:a}}).then((function(t){i.$emit("close-modal")}))},onChange:function(t){this.input=t},onKeyPress:function(t){console.log("button",t)},onInputChange:function(t){this.input=t.target.value},getDateFormat:function(t){return[t.slice(0,4),"-",t.slice(4,6),"-",t.slice(6,8)].join("")},setShowClicked:function(){this.expand=!this.expand}}},d=u,h=(n("0d31"),n("2877")),p=n("6544"),g=n.n(p),v=n("8336"),f=n("b0af"),m=n("99d9"),b=n("cc20"),_=n("ef9a"),y=n("62ad"),I=n("a523"),C=n("ce7e"),w=n("0789"),S=n("132d"),k=n("adda"),x=n("5d23"),L=n("490a"),P=n("0fd9"),N=n("2fa4"),E=n("a844"),K=Object(h["a"])(d,i,a,!1,null,null,null);e["default"]=K.exports;g()(K,{VBtn:v["a"],VCard:f["a"],VCardActions:m["a"],VChip:b["a"],VChipGroup:_["a"],VCol:y["a"],VContainer:I["a"],VDivider:C["a"],VExpandTransition:w["a"],VIcon:S["a"],VImg:k["a"],VListItemContent:x["a"],VListItemTitle:x["c"],VProgressCircular:L["a"],VRow:P["a"],VSpacer:N["a"],VTextarea:E["a"]})}}]);
//# sourceMappingURL=chunk-72396f2f.fd0264ae.js.map