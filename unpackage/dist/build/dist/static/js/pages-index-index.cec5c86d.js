(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"04bd":function(e,t,n){"use strict";n.r(t);var i=n("e6a2"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},1237:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"content_header flex row row_between"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value=t.target.multiple?n:n[0]},function(t){t=e.$handleEvent(t),e.changeOneMenu(e.value)}]}},[n("option",{domProps:{value:0}},[e._v("一级类型")]),e._l(e.arr,function(t,i){return n("option",{key:i,domProps:{value:t.Id}},[e._v(e._s(t.Category_Name))])})],2),n("select",{directives:[{name:"model",rawName:"v-model",value:e.value1,expression:"value1"}],staticClass:"select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value1=t.target.multiple?n:n[0]},function(t){t=e.$handleEvent(t),e.changeTwoMenu(e.value1)}]}},[n("option",{domProps:{value:0}},[e._v("二级类型")]),e._l(e.arr1,function(t,i){return n("option",{key:i,domProps:{value:t.Id}},[e._v(e._s(t.Value))])})],2),n("select",{directives:[{name:"model",rawName:"v-model",value:e.value2,expression:"value2"}],staticClass:"select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value2=t.target.multiple?n:n[0]},function(t){t=e.$handleEvent(t),e.changeStatus(e.value2)}]}},[n("option",{domProps:{value:-3}},[e._v("状态")]),e._l(e.options,function(t,i){return n("option",{key:i,domProps:{value:t.value}},[e._v(e._s(t.label))])})],2),n("select",{directives:[{name:"model",rawName:"v-model",value:e.Sort,expression:"Sort"}],staticClass:"select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.Sort=t.target.multiple?n:n[0]},function(t){t=e.$handleEvent(t),e.changeSort(e.Sort)}]}},e._l(e.SortArr,function(t,i){return n("option",{key:i,domProps:{value:t.value}},[e._v(e._s(t.label))])}),0)]),e._l(e.caseList,function(t,i){return n("v-uni-view",{key:i,staticClass:"content_middle flex col m-100",on:{click:function(n){n=e.$handleEvent(n),e.gotoEdit(t.Id,t.Charging_Method)}}},[n("v-uni-view",{staticClass:"content_middle_view"},[n("v-uni-view",{staticClass:"content_middle_view_child flex col"},[n("v-uni-view",{staticClass:"content_middle_view_child_header flex row row_between"},[n("v-uni-text",{staticClass:"title"},[e._v("【"+e._s(t.Category_Name)+"】")]),n("v-uni-text",{staticClass:"state"},[e._v(e._s(t.Status))])],1),n("v-uni-view",{staticClass:"content_middle_view_child_bottom flex col"},[n("v-uni-text",[e._v(e._s(t.Customer_Name_Zh))]),n("v-uni-text",[e._v(e._s(t.Case_Name))]),n("v-uni-text",[e._v(e._s(t.Creattime))])],1)],1)],1)],1)}),n("v-uni-view",{staticClass:"add_btn",on:{click:function(t){t=e.$handleEvent(t),e.toAdd()}}},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/img/add.png",mode:""}})],1)],2)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"7d1b":function(e,t,n){var i=n("c339");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("390c798c",i,!0,{sourceMap:!1,shadowMode:!1})},8310:function(e,t,n){"use strict";n.r(t);var i=n("1237"),a=n("04bd");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("9006");var l=n("2877"),r=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"cd663f2c",null);t["default"]=r.exports},9006:function(e,t,n){"use strict";var i=n("7d1b"),a=n.n(i);a.a},c339:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add_btn[data-v-cd663f2c]{position:fixed;bottom:%?125?%;right:%?40?%;width:%?140?%;height:%?140?%;background:#7e2c2e;-webkit-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.add_btn .img[data-v-cd663f2c]{width:50%;height:50%}.select[data-v-cd663f2c]{height:%?70?%;border:1px solid #ccc;width:23%}.content_middle_view[data-v-cd663f2c]{margin-bottom:%?100?%;width:100%;height:%?350?%;-webkit-box-shadow:0 3px 15px 0 rgba(0,0,0,.3);box-shadow:0 3px 15px 0 rgba(0,0,0,.3);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content_middle_view .content_middle_view_child[data-v-cd663f2c]{width:90%;height:100%;margin:0 auto}.content_middle_view .content_middle_view_child .content_middle_view_child_header[data-v-cd663f2c]{font-weight:600;font-size:%?36?%;border-bottom:1px solid #ddd}.content_middle_view .content_middle_view_child .content_middle_view_child_header .state[data-v-cd663f2c]{color:#7e2c2e}.content_middle_view .content_middle_view_child .content_middle_view_child_bottom uni-text[data-v-cd663f2c]{font-size:%?32?%;margin-top:%?20?%}',""])},e6a2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{arr:[],arr1:[],arr2:[],value:0,value1:0,value2:-3,caseList:[],onMenuId:"",options:[{value:0,label:"审核中"},{value:1,label:"已审核"},{value:2,label:"已签合同"},{value:3,label:"已结案"},{value:-2,label:"返回修改"},{value:4,label:"待结案"}],Sort:1,SortArr:[{value:1,label:"降序"},{value:2,label:"升序"}]}},onLoad:function(){var e=this,t=this;t.getMineList(),uni.getSystemInfo({success:function(t){e.windowHeight=t.windowHeight}}),uni.onWindowResize(function(t){t.size.windowHeight<e.windowHeight?e.tabbar=!1:e.tabbar=!0})},onShow:function(){var e=this;e.getOneMenu()},methods:{getMineList:function(){var e=this;uni.request({url:e.$api+"Index/Show_All_Case",data:{UserId:17,Dic_Id:e.value1,Status:e.value2,Sort:e.Sort},success:function(t){console.log(t),e.caseList=t.data.All_Case}})},getOneMenu:function(){var e=this;uni.request({url:e.$api+"Index/GetBoxOne",data:{},success:function(t){console.log(t),e.arr=t.data}})},getTwoMenu:function(e){var t=this;uni.request({url:t.$api+"Index/GetBoxTwo",data:{Id:e},success:function(e){console.log(e),t.arr1=e.data,t.value1=e.data[0].Id}})},changeOneMenu:function(e){console.log(e),this.value=e,this.getTwoMenu(e)},changeTwoMenu:function(e){this.value1=e,this.getMineList()},changeStatus:function(e){console.log(e),this.value2=e,0===this.value2&&(this.value2=-3),this.getMineList()},changeSort:function(e){this.getMineList()},toAdd:function(){uni.navigateTo({url:"../../pages/caseAdd/caseAdd"})},gotoEdit:function(e,t){uni.navigateTo({url:"../../pages/caseEdit/caseEdit?Id="+e+"&Charging_Method="+t})}},watch:{value1:function(e,t){this.getMineList()}}};t.default=i}}]);