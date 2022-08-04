(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ef875ad"],{"003f":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("v-app",[i("v-content",[i("v-container",[i("h1",[e._v("Fixed columns in v-data-table demo")]),i("p",[e._v("Note: fixed columns and grouping tables below are added only in "),i("a",{attrs:{target:"_blank",href:"https://github.com/lzhoucs/vuetify"}},[e._v("my vuetify folk")]),e._v(", which is published on "),i("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/@lzhoucs/vuetify"}},[e._v("npm")]),e._v(". Also checkout "),i("a",{attrs:{target:"_blank",href:"https://codepen.io/lzhoucs/pen/aadaJx"}},[e._v("more detailed grouping table demo")])]),i("div",{staticClass:"section"},[i("h2",[e._v("0. Regular Table(without fixed columns)")]),i("v-data-table",{attrs:{headers:e.headers0,items:e.desserts,"item-key":"name","select-all":""},scopedSlots:e._u([{key:"items",fn:function(t){return[i("tr",[i("td",[i("v-checkbox",{attrs:{"hide-details":""},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"props.selected"}})],1),i("td",[e._v(e._s(t.item.name))]),i("td",[e._v(e._s(t.item.calories))]),i("td",[e._v(e._s(t.item.fat))]),i("td",[e._v(e._s(t.item.carbs))]),i("td",[e._v(e._s(t.item.protein))]),i("td",[e._v(e._s(t.item.nprotein))]),i("td",[e._v(e._s(t.item.iron))]),i("td",[e._v(e._s(t.item.niron))])])]}}]),model:{value:e.selected0,callback:function(t){e.selected0=t},expression:"selected0"}})],1),i("div",{staticClass:"section"},[i("h2",[e._v("1. Regular Table with fixed columns")]),i("p",[e._v("Fixed columns applied onto a regular table. grouping and checkboxes are not involved.")]),i("v-data-table",{attrs:{headers:e.headers,items:e.desserts,"item-key":"name"},scopedSlots:e._u([{key:"items",fn:function(t){return[i("tr",[i("td",[e._v(e._s(t.item.name))]),i("td",[e._v(e._s(t.item.calories))]),i("td",[e._v(e._s(t.item.fat))]),i("td",[e._v(e._s(t.item.carbs))]),i("td",[e._v(e._s(t.item.protein))]),i("td",[e._v(e._s(t.item.nprotein))]),i("td",[e._v(e._s(t.item.iron))]),i("td",[e._v(e._s(t.item.niron))])])]}}])})],1),i("div",{staticClass:"section"},[i("h2",[e._v("2. Selection(checkbox) Table with fixed columns")]),i("p",[e._v("Fixed column applied onto a regular table with a checkbox column. No select all header. It expects an empty header with width to be specified which is used to render a regular empty header for checkbox column: "),i("code",[e._v("{ text: '', fixed: true, width: '100px', sortable: false }")]),e._v(". Note: "),i("code",[e._v("sortable:false")]),e._v(" is required")]),i("v-data-table",{attrs:{headers:e.headers2,items:e.desserts,"item-key":"name"},scopedSlots:e._u([{key:"items",fn:function(t){return[i("tr",[i("td",[i("v-checkbox",{attrs:{"hide-details":""},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"props.selected"}})],1),i("td",[e._v(e._s(t.item.name))]),i("td",[e._v(e._s(t.item.calories))]),i("td",[e._v(e._s(t.item.fat))]),i("td",[e._v(e._s(t.item.carbs))]),i("td",[e._v(e._s(t.item.protein))]),i("td",[e._v(e._s(t.item.nprotein))]),i("td",[e._v(e._s(t.item.iron))]),i("td",[e._v(e._s(t.item.niron))])])]}}]),model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}})],1),i("div",{staticClass:"section"},[i("h2",[e._v("3. Selection(checkbox) Table with fixed columns and select all")]),i("p",[e._v("Fixed column applied onto a regular table with a checkbox column. Has select all header. Similar to #2, it also expects an empty header with width to be specified which is used to render a 'select all' header for checkbox column: "),i("code",[e._v("{ text: '', fixed: true, width: '100px'}")]),e._v(". Note: "),i("code",[e._v("sortable:false")]),e._v(" is no longer required")]),i("v-data-table",{attrs:{headers:e.headers3,items:e.desserts,"item-key":"name","select-all":""},scopedSlots:e._u([{key:"items",fn:function(t){return[i("tr",[i("td",[i("v-checkbox",{attrs:{"hide-details":""},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"props.selected"}})],1),i("td",[e._v(e._s(t.item.name))]),i("td",[e._v(e._s(t.item.calories))]),i("td",[e._v(e._s(t.item.fat))]),i("td",[e._v(e._s(t.item.carbs))]),i("td",[e._v(e._s(t.item.protein))]),i("td",[e._v(e._s(t.item.nprotein))]),i("td",[e._v(e._s(t.item.iron))]),i("td",[e._v(e._s(t.item.niron))])])]}}]),model:{value:e.selected3,callback:function(t){e.selected3=t},expression:"selected3"}})],1),i("div",{staticClass:"section"},[i("h2",[e._v("4. Grouping Table with fixed columns")]),i("v-data-table",{attrs:{headers:e.headers,items:e.desserts,"item-key":"name","group-key":"category"},scopedSlots:e._u([{key:"group",fn:function(t){return[i("span",{staticClass:"font-weight-bold"},[e._v(" Group "+e._s(t.groupIndex+1)+" - "+e._s(t.groupName)+" ")])]}},{key:"items",fn:function(t){return[i("tr",[i("td",[e._v(e._s(t.item.name))]),i("td",[e._v(e._s(t.item.calories))]),i("td",[e._v(e._s(t.item.fat))]),i("td",[e._v(e._s(t.item.carbs))]),i("td",[e._v(e._s(t.item.protein))]),i("td",[e._v(e._s(t.item.nprotein))]),i("td",[e._v(e._s(t.item.iron))]),i("td",[e._v(e._s(t.item.niron))])])]}}])})],1),i("div",{staticClass:"section"},[i("h2",[e._v("5. Grouping Table with fixed columns and select all")]),i("v-data-table",{attrs:{headers:e.headers5,items:e.desserts,"item-key":"name","group-key":"category","select-all":""},scopedSlots:e._u([{key:"group",fn:function(t){return[i("span",{staticClass:"font-weight-bold"},[e._v(" Group "+e._s(t.groupIndex+1)+" - "+e._s(t.groupName)+" ")])]}},{key:"items",fn:function(t){return[i("tr",[i("td",[i("v-checkbox",{attrs:{"hide-details":""},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"props.selected"}})],1),i("td",[e._v(e._s(t.item.name))]),i("td",[e._v(e._s(t.item.calories))]),i("td",[e._v(e._s(t.item.fat))]),i("td",[e._v(e._s(t.item.carbs))]),i("td",[e._v(e._s(t.item.protein))]),i("td",[e._v(e._s(t.item.nprotein))]),i("td",[e._v(e._s(t.item.iron))]),i("td",[e._v(e._s(t.item.niron))])])]}}]),model:{value:e.selected5,callback:function(t){e.selected5=t},expression:"selected5"}})],1)])],1)],1)],1)},a=[],s=(i("99af"),i("d81d"),{data:function(){return{selected0:[],selected2:[],selected3:[],selected5:[],headers:[{text:"Dessert (100g serving)",value:"name",width:"200px",fixed:!0},{text:"Calories",value:"calories",width:"200px",fixed:!0},{text:"Fat (g)",value:"fat",width:"300px"},{text:"Carbs (g)",value:"carbs",width:"300px"},{text:"Protein (g)",value:"protein",width:"300px"},{text:"New Protein (g)",value:"nprotein",width:"300px"},{text:"Iron (%)",value:"iron",width:"300px"},{text:"New Iron (%)",value:"niron",width:"300px"}],desserts:[{value:!1,name:"Orange Juice",category:"Beverage",calories:262,fat:16,carbs:23,protein:6,nprotein:6,iron:"7%",niron:"7%"},{value:!1,name:"Larabar",category:"Snack",calories:408,fat:3.2,carbs:87,protein:6.5,nprotein:6.5,iron:"45%",niron:"45%"},{value:!1,name:"Donut",category:"Breakfast",calories:452,fat:25,carbs:51,protein:4.9,nprotein:4.9,iron:"22%",niron:"22%"},{value:!1,name:"Bagel",category:"Breakfast",calories:999,fat:28,carbs:151,protein:2.9,nprotein:2.9,iron:"29%",niron:"29%"},{value:!1,name:"KitKat",category:"Snack",calories:518,fat:26,carbs:65,protein:7,nprotein:7,iron:"6%",niron:"6%"}]}},computed:{headers0:function(){return this.headers.map((function(e){return Object.assign({},e,{fixed:!1})}))},headers2:function(){return[{text:"",fixed:!0,width:"100px",sortable:!1}].concat(this.headers)},headers3:function(){return[{text:"",fixed:!0,width:"100px"}].concat(this.headers)},headers5:function(){return this.headers3}}}),r=s,o=(i("5eaa"),i("2877")),l=i("6544"),c=i.n(l),d=i("7496"),u=(i("d3b7"),i("25f0"),i("5530")),h=(i("6ca7"),i("ec29"),i("9d26")),p=i("c37a"),v=(i("4de4"),i("45fc"),i("5607")),m=i("2b0e"),f=m["default"].extend({name:"rippleable",directives:{ripple:v["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange:function(){}}}),_=i("8547"),b=i("58df"),g=Object(b["a"])(p["a"],f,_["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=this,t=p["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:function(t){t.preventDefault(),e.onChange()}},t):t},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===n&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),x=g.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({},p["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(h["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(u["a"])(Object(u["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),k=i("a523"),y=i("f6c4"),w=i("d9bd"),C=y["a"].extend({name:"v-main",created:function(){Object(w["d"])("v-content","v-main",this)}}),S=i("8fea"),I=Object(o["a"])(r,n,a,!1,null,null,null);t["default"]=I.exports;c()(I,{VApp:d["a"],VCheckbox:x,VContainer:k["a"],VContent:C,VDataTable:S["a"]})},"5eaa":function(e,t,i){"use strict";var n=i("9574"),a=i.n(n);a.a},"6ca7":function(e,t,i){},9574:function(e,t,i){},a523:function(e,t,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85"),i("a15b"),i("498a");var n=i("2b0e");function a(e){return n["default"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,i){var n=i.props,a=i.data,s=i.children;a.staticClass="".concat(e," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var o=Object.keys(r).filter((function(e){if("slot"===e)return!1;var t=r[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),t(n.tag,a,s)}})}var s=i("d9f7");t["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var i,n=t.props,a=t.data,r=t.children,o=a.attrs;return o&&(a.attrs={},i=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t}))),n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),r)}})},ec29:function(e,t,i){}}]);
//# sourceMappingURL=chunk-0ef875ad.94c10bbe.js.map