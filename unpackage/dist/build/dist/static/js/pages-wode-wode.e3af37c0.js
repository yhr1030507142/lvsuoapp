(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wode-wode"],{"01b5":function(e,t,i){"use strict";i.r(t);var a=i("83af"),n=i("dc11");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("a50b");var o=i("2877"),d=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"4c0e2ec7",null);t["default"]=d.exports},"322b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{nodes:[{name:"div",attrs:{class:"div-class",style:"line-height: 60px; color: red; text-align:center;"},children:[{type:"text",text:"Hello&nbsp;uni-app!"}]}],name:"",number:"",job:"",email:"",tel:"",jobTextare:"",Id:"",honor:"",pic:"",value:"",teach:"",jobStrory:"",grade:"",jobSociety:"",User_Id:""}},onLoad:function(){this.showInfo(),this.getJobList()},methods:{showInfo:function(){var e=this;uni.request({url:e.$api+"Personal/Display_Information",data:{User_Id:20},success:function(t){e.jobTextare=t.data.practice_Areas,e.name=t.data.Staff_Name,e.Id=t.data.Id,e.User_Id=t.data.User_Id,e.honor=t.data.Honor,e.pic=t.data.Avatar_Path,e.tel=t.data.Contact_Information,e.value=t.data.Position_Id,e.number=t.data.Occupation_Number,e.teach=t.data.Education,e.email=t.data.Contact_Mailbox,e.jobStrory=t.data.Work_History,e.grade=t.data.Achievement,e.jobSociety=t.data.Social_Duty}})},getJobList:function(){var e=this;uni.request({url:e.$api+"Personal/Position",success:function(t){void 0==t.data[e.value].Position_Name||""==t.data[e.value].Position_Name?e.job="":e.job=e.job=t.data[e.value].Position_Name}})},gotoEdit:function(){var e=this;uni.navigateTo({url:"../undateMyInfo/undateMyInfo?User_Id="+e.User_Id+"&Id="+e.Id})}}};t.default=a},"83af":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header flex row"},[""==e.pic||void 0==e.pic?i("v-uni-image",{staticClass:"pic",attrs:{src:"",mode:""}}):e._e(),""!=e.pic||"undefined"!=e.pic?i("v-uni-image",{staticClass:"pic",attrs:{src:"http://java.gzbigbang.cn"+e.pic,mode:""}}):e._e(),i("v-uni-view",{staticClass:"info flex col"},[i("v-uni-view",{staticClass:"name flex row row_between"},[i("v-uni-text",{staticClass:"name_word"},[e._v("律师:"),i("v-uni-text",{staticClass:"name_word"},[e._v(e._s(e.name))])],1),i("v-uni-view",{staticClass:"edit",on:{click:function(t){t=e.$handleEvent(t),e.gotoEdit()}}},[e._v("编辑")])],1),i("v-uni-view",{staticClass:"name flex row row_between"},[i("v-uni-text",{staticClass:"name_word1"},[e._v("执业证号:"),i("v-uni-text",{staticClass:"name_word1"},[e._v(e._s(e.number))])],1)],1),i("v-uni-view",{staticClass:"name flex row row_between"},[i("v-uni-text",{staticClass:"name_word1"},[e._v("职务:"),i("v-uni-text",{staticClass:"name_word1"},[e._v(e._s(e.job))])],1)],1),i("v-uni-view",{staticClass:"name flex row row_between"},[i("v-uni-text",{staticClass:"name_word1"},[e._v("联系方式:"),i("v-uni-text",{staticClass:"name_word1"},[e._v(e._s(e.tel))])],1)],1),i("v-uni-view",{staticClass:"name flex row row_between"},[i("v-uni-text",{staticClass:"name_word1"},[e._v("电子邮箱:"),i("v-uni-text",{staticClass:"name_word1"},[e._v(e._s(e.email))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"middle flex col row"},[i("v-uni-view",{staticClass:"middle_info"},[i("v-uni-view",{staticClass:"middle_info_head"},[e._v("职业领域")]),i("v-uni-view",{staticClass:"middle_info_content"},[i("v-uni-rich-text",{attrs:{nodes:e.jobTextare}})],1)],1),i("v-uni-view",{staticClass:"middle_info"},[i("v-uni-view",{staticClass:"middle_info_head"},[e._v("教育背景")]),i("v-uni-view",{staticClass:"middle_info_content"},[i("v-uni-rich-text",{attrs:{nodes:e.teach}})],1)],1),i("v-uni-view",{staticClass:"middle_info"},[i("v-uni-view",{staticClass:"middle_info_head"},[e._v("工作经历")]),i("v-uni-view",{staticClass:"middle_info_content"},[i("v-uni-rich-text",{attrs:{nodes:e.jobStrory}})],1)],1),i("v-uni-view",{staticClass:"middle_info"},[i("v-uni-view",{staticClass:"middle_info_head"},[e._v("社会职务")]),i("v-uni-view",{staticClass:"middle_info_content"},[i("v-uni-rich-text",{attrs:{nodes:e.jobSociety}})],1)],1),i("v-uni-view",{staticClass:"middle_info"},[i("v-uni-view",{staticClass:"middle_info_head"},[e._v("获得荣誉")]),i("v-uni-view",{staticClass:"middle_info_content"},[i("v-uni-rich-text",{attrs:{nodes:e.honor}})],1)],1),i("v-uni-view",{staticClass:"middle_info"},[i("v-uni-view",{staticClass:"middle_info_head"},[e._v("主要业绩")]),i("v-uni-view",{staticClass:"middle_info_content"},[i("v-uni-rich-text",{attrs:{nodes:e.grade}})],1)],1)],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},a50b:function(e,t,i){"use strict";var a=i("d71d"),n=i.n(a);n.a},b992:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-4c0e2ec7]{height:%?350?%}.header .pic[data-v-4c0e2ec7]{width:32%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%;border:%?1?% solid #e5e5e5}.header .info[data-v-4c0e2ec7]{margin-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.header .info .name[data-v-4c0e2ec7]{color:#333}.header .info .name .name_word[data-v-4c0e2ec7]{font-size:%?34?%;font-weight:600}.header .info .name .name_word1[data-v-4c0e2ec7]{font-size:%?32?%}.header .info .name .edit[data-v-4c0e2ec7]{width:%?100?%;height:%?50?%;background:#e5e5e5;color:#999;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.middle[data-v-4c0e2ec7]{margin-top:%?30?%;width:100%}.middle .middle_info[data-v-4c0e2ec7]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.middle .middle_info .middle_info_head[data-v-4c0e2ec7]{font-size:%?42?%;font-weight:600;color:#813032}.middle .middle_info .middle_info_content[data-v-4c0e2ec7]{clear:both;margin-top:%?10?%;color:#333;font-size:%?32?%}',""])},d71d:function(e,t,i){var a=i("b992");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("70eefcde",a,!0,{sourceMap:!1,shadowMode:!1})},dc11:function(e,t,i){"use strict";i.r(t);var a=i("322b"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a}}]);