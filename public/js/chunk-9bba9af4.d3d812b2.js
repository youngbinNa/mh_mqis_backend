(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9bba9af4"],{"24b0":function(t,e,a){},"878e":function(t,e,a){"use strict";var r=a("24b0"),s=a.n(r);s.a},dcdd:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-container",{staticStyle:{padding:"0"},attrs:{app:""}},[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.getDateFormat(t.apprItems.WORK_DATE))+" "+t._s(t.$route.query.jgcd)+" 단위 검사를"),a("br"),t._v("결재 하시겠습니까?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"font-weight-bold",attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("취소")]),a("v-btn",{staticClass:"font-weight-bold",attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("확인")]),a("v-spacer")],1)],1)],1)],1),a("div",[a("v-toolbar",{attrs:{dense:"",flat:""}},[a("v-toolbar-title",[t._v(t._s(t.$route.query.jgcd)+" 단위 검사")]),a("v-col",{staticClass:"ma-0 pa-0 justify-end",staticStyle:{"text-align":"right"}},[a("v-btn",{staticClass:"text-h6",attrs:{outlined:"",tile:"",color:"primary",link:"",to:{path:"/SW/approval/done"}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-format-list-bulleted")]),t._v(" 목록")],1),t.isApproved?[a("v-btn",{staticClass:"ml-5 text-h6",attrs:{outlined:"",tile:"",color:"success"},on:{click:function(e){t.dialogDelete=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-draw")]),t._v(" 승인")],1)]:t._e()],2)],1)],1),a("div",[a("v-card-text",{staticClass:"pt-0 mt-0 pb-0"},[a("v-row",[a("v-col",{staticClass:"px-3"},[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticClass:"text-h6"},[t._v("검사일")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.getDateFormat(t.apprItems.WORK_DATE)))])]),a("tr",[a("td",{staticClass:"text-h6"},[t._v("완료")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.$route.query.ok)+" 라인")])]),a("tr",[a("td",{staticClass:"text-h6"},[t._v("미완료")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.$route.query.yet)+" 라인")])]),a("tr",[a("td",{staticClass:"text-h6"},[t._v("불합격")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.$route.query.def)+" 항목")])])])]},proxy:!0}])})],1),a("v-divider",{attrs:{vertical:""}}),a("v-col",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticClass:"text-h6"},[t._v("상태")]),t.isApproved?[a("td",[a("v-chip",{staticClass:"ml-2 text-h6",attrs:{outlined:"",color:"error"}},[t._v("결재중")])],1)]:[a("td",[a("v-chip",{staticClass:"ml-2 text-h6",attrs:{outlined:"",color:"success"}},[t._v("승인됨")])],1)]],2),a("tr",[a("td",{staticClass:"text-h6"},[t._v("결재일")]),t.isApproved?[a("td")]:[a("td",{staticClass:"text-h6"},[t._v(t._s(t.getDateFormat(t.formatDate2(t.apprItems.APPR_DATE))))])]],2),a("tr",[a("td",{staticClass:"text-h6"},[t._v("결재자")]),a("td",{staticClass:"text-h6"},[t._v(t._s(t.apprItems.kname)+" "+t._s(t.apprItems.rank_name))])])])]},proxy:!0}])})],1)],1)],1)],1),t.loading?a("v-container",{staticStyle:{"padding-top":"5px","padding-bottom":"5px","padding-left":"12px","padding-right":"12px"},attrs:{"grid-list-md":"","text-xs-center":"",fluid:""}},[a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1),a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1),a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1),a("v-card",{staticClass:"mx-auto mb-3",attrs:{outlined:"",elevation:"2"}},[a("v-skeleton-loader",{attrs:{loading:"",height:"150",type:"list-item-avatar-two-line"}})],1)],1):t._l(t.filteredTables,(function(e,r){return a("v-container",{key:e.INDEX_KEY,staticClass:"pt-1 pb-1 pl-3 pr-3",attrs:{"grid-list-md":"","text-xs-center":"",fluid:"",app:""}},[a("v-card",{staticClass:"mx-auto",style:{borderLeft:t.getLeftColor[r]},attrs:{outlined:"",elevation:"2"}},[a("v-list-item",{staticClass:"pa-0 ma-0",attrs:{"two-line":""}},[a("v-list-item-content",[a("v-row",{staticClass:"pa-0 ma-0 justify-center"},[a("v-col",{staticClass:"pa-0 mx-4",attrs:{md:"3"}},[a("v-col",{staticStyle:{"text-align":"center"}},[a("v-badge",{attrs:{color:"grey",left:"",value:r+1,content:r+1}},[a("v-progress-circular",{attrs:{rotate:"270",size:"100",value:100*t.getNum(e.IS_DONE/e.TOTAL),width:"8",color:"#479cc8"}},[t._v("완료: "+t._s(Math.round(100*t.getNum(e.IS_DONE/e.TOTAL)))+"%"),a("br"),t._v(t._s(e.IS_DONE)+" / "+t._s(e.TOTAL)+" ")])],1)],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticStyle:{width:"100%"}},[a("v-list-item-title",{staticClass:"text-h5"},[a("v-chip",{attrs:{outlined:""}},[t._v(t._s(e.WORK_SHOP_ID))]),a("v-chip",{staticClass:"ml-2",attrs:{outlined:"",color:t.getZoneColor(e.TIME_ZONE_ID)}},[t._v(t._s(e.TIME_ZONE_ID))]),1==e.IS_TARGET?["Y"==e.IS_MANUAL?[a("v-chip",{staticClass:"ml-2",attrs:{outlined:"",color:"info"}},[t._v("수동라인")])]:t._e()]:t._e()],2),a("v-card",{staticClass:"grey--text text-h5 text--darken-1 ml-2",attrs:{flat:""}},[t._v(t._s(e.PART_ID))]),a("v-card",{staticClass:"text-h5 ml-2",attrs:{flat:""}},[t._v(t._s(e.WORK_SHOP_NAME))]),a("v-card",{staticClass:"grey--text text-h5 text--darken-1 ml-2",attrs:{flat:""}},[t._v(t._s(e.PART_NAME))])],1)],1),a("v-row",{staticClass:"pa-0 ma-0"},[a("v-col",{staticStyle:{"text-align":"right"}},[e.IS_OK>0?[a("v-chip",{staticClass:"ma-2",attrs:{outlined:"",color:"error"}},[t._v("불합격")])]:t._e(),[a("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:function(a){return t.callTargetSPC(e.WORK_SHOP_ID,e.PART_ID,t.$route.query.workdate,e.TIME_ZONE_ID,t.$route.query.jgcd)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-file-search-outline")]),t._v(" 공정조회 ")],1)]],2)],1)],1)],1)],1)],1)],1)}))],2)],1)},s=[],i=(a("4de4"),a("caad"),a("a15b"),a("d81d"),a("fb6a"),a("ac1f"),a("2532"),a("5319"),a("96cf"),a("1da1")),l=a("bc3a"),n=a.n(l),o={name:"TargetLine",data:function(){return{loading:!0,tableItems:[],tableWeekItems:[],apprItems:[],zones:[{name:"전체",value:""},{name:"주간",value:"주간"},{name:"야간",value:"야간"}],istarget:[{name:"전체",value:""},{name:"대상",value:"1"},{name:"비대상",value:"0"}],filter:"",filter2:"",allowedDates:function(t){return 1===new Date(t).getDay()},isApproved:!0,dialogDelete:!1}},computed:{filteredTables:function(){var t=this;return this.tableItems.filter((function(e){return!t.filter&&!t.filter2||!t.filter&&t.filter2.includes(e.IS_TARGET)||t.filter.includes(e.TIME_ZONE_ID)&&!t.filter2||t.filter.includes(e.TIME_ZONE_ID)&&t.filter2.includes(e.IS_TARGET)}))},getLeftColor:function(){return this.filteredTables.map((function(t){var e="";return 0!=t.IS_DONE&&t.IS_DONE===t.TOTAL?e="10px solid #1E4174":t.IS_DONE<t.TOTAL?e="10px solid orange":0===t.IS_DONE&&0===t.TOTAL&&(e="10px solid grey"),t.IS_OK>0&&(e="10px solid red"),e}))}},created:function(){this.filter="주간",this.filter2="1",this.getApproved(),this.fetchData()},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,e.prev=1,a=localStorage.getItem("token"),"주"!=t.$route.query.jgcd){e.next=11;break}return e.next=6,n.a.get("".concat(t.$D2ApiPath,"/api/inspection/getLineTargetListWeek?date=")+t.$route.query.workdate,{headers:{Authorization:a}});case 6:r=e.sent,t.tableItems=r.data,t.loading=!1,e.next=16;break;case 11:return e.next=13,n.a.get("".concat(t.$D2ApiPath,"/api/inspection/getLineTargetList?date=")+t.$route.query.workdate,{headers:{Authorization:a}});case 13:s=e.sent,t.tableItems=s.data,t.loading=!1;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](1),console.error(e.t0),t.loading=!1;case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))()},getApproved:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,n.a.get("".concat(t.$D2ApiPath,"/api/approval/doc?date=")+t.$route.query.workdate+"&jgcd="+t.$route.query.jgcd,{headers:{Authorization:a}});case 3:r=e.sent,t.apprItems=r.data[0],t.isApproved=2===r.data[0].STATUS;case 6:case"end":return e.stop()}}),e)})))()},retrieveCalendar:function(){var t=this,e=localStorage.getItem("token");n.a.get("".concat(this.$D2ApiPath,"/api/inspection/getLineTargetList?date=")+this.date.replace(/-/g,""),{headers:{Authorization:e}}).then((function(e){t.tableItems=e.data}))},formatDate:function(t){var e=new Date(t),a=""+(e.getMonth()+1),r=""+e.getDate(),s=e.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[s,a,r].join("-")},formatDate2:function(t){var e=new Date(t),a=""+(e.getMonth()+1),r=""+e.getDate(),s=e.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[s,a,r].join("")},getDateFormat:function(t){if(t){var e=this.getDay(t);return[t.slice(0,4),"-",t.slice(4,6),"-",t.slice(6,8)," ("+e+")"].join("")}},getDay:function(t){if(t){var e=new Array("일","월","화","수","목","금","토"),a=t.substring(0,4),r=t.substring(4,6),s=t.substring(6,8),i=new Date(a,r-1,s,0,0,0,0);return i=e[i.getDay()],i}},callTargetSPC:function(t,e,a,r,s){this.$router.push({path:"/dp2/approval/doc/detail",query:{line:t,part:e,workdate:a.replace(/-/g,""),zone:r,jgcd:s}})},getNum:function(t){return t=+t||0,t},getZoneColor:function(t){return"주간"==t?"warning":"primary"},save:function(){var t=this,e={index:this.apprItems.INDEX_KEY,user_seq:localStorage.getItem("userseq"),kname:this.$store.state.user.kname,rank_name:this.$store.state.user.rank_name},a=localStorage.getItem("token");n.a.patch("".concat(this.$D2ApiPath,"/api/approval/detail/doc"),e,{headers:{Authorization:a}}).then((function(e){alert(e.data.msg),t.$router.push({path:"/dp2/approval/wait"})}))},closeDelete:function(){this.dialogDelete=!1},deleteItemConfirm:function(){this.save(),this.closeDelete()}}},c=o,d=(a("878e"),a("2877")),u=a("6544"),v=a.n(u),p=a("7496"),g=a("4ca6"),h=a("8336"),m=a("b0af"),_=a("99d9"),f=a("cc20"),x=a("62ad"),b=a("a523"),C=a("169a"),D=a("ce7e"),I=a("132d"),T=a("da13"),y=a("5d23"),k=a("490a"),w=a("0fd9"),A=a("1f4f"),S=a("3129"),E=a("2fa4"),O=a("71d9"),V=a("2a7f"),$=Object(d["a"])(c,r,s,!1,null,null,null);e["default"]=$.exports;v()($,{VApp:p["a"],VBadge:g["a"],VBtn:h["a"],VCard:m["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:f["a"],VCol:x["a"],VContainer:b["a"],VDialog:C["a"],VDivider:D["a"],VIcon:I["a"],VListItem:T["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VProgressCircular:k["a"],VRow:w["a"],VSimpleTable:A["a"],VSkeletonLoader:S["a"],VSpacer:E["a"],VToolbar:O["a"],VToolbarTitle:V["b"]})}}]);
//# sourceMappingURL=chunk-9bba9af4.d3d812b2.js.map