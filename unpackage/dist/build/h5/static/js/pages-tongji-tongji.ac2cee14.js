(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tongji-tongji"],{1428:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isShow?i("v-uni-view",{staticClass:"picker"},["time"!=e.type?i("v-uni-view",{staticClass:"picker-modal"},[i("v-uni-view",{staticClass:"picker-modal-header"},[i("v-uni-view",{staticClass:"picker-icon picker-icon-zuozuo",attrs:{"hover-stay-time":100,"hover-class":"picker-icon-active"},on:{click:function(t){t=e.$handleEvent(t),e.onSetYear("-1")}}}),i("v-uni-view",{staticClass:"picker-icon picker-icon-zuo",attrs:{"hover-stay-time":100,"hover-class":"picker-icon-active"},on:{click:function(t){t=e.$handleEvent(t),e.onSetMonth("-1")}}}),i("v-uni-text",{staticClass:"picker-modal-header-title"},[e._v(e._s(e.title))]),i("v-uni-view",{staticClass:"picker-icon picker-icon-you",attrs:{"hover-stay-time":100,"hover-class":"picker-icon-active"},on:{click:function(t){t=e.$handleEvent(t),e.onSetMonth("+1")}}}),i("v-uni-view",{staticClass:"picker-icon picker-icon-youyou",attrs:{"hover-stay-time":100,"hover-class":"picker-icon-active"},on:{click:function(t){t=e.$handleEvent(t),e.onSetYear("+1")}}})],1),i("v-uni-swiper",{staticClass:"picker-modal-body",attrs:{circular:!0,duration:200,"skip-hidden-item-layout":!0,current:e.calendarIndex},on:{change:function(t){t=e.$handleEvent(t),e.onSwiperChange(t)}}},e._l(e.calendars,function(t,a){return i("v-uni-swiper-item",{key:a,staticClass:"picker-calendar"},[e._l(e.weeks,function(t,a){return i("v-uni-view",{key:a-7,staticClass:"picker-calendar-view"},[i("v-uni-view",{staticClass:"picker-calendar-view-item"},[e._v(e._s(t))])],1)}),e._l(t,function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-calendar-view",on:{click:function(i){i=e.$handleEvent(i),e.onSelectDate(t)}}},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.bgStyle.type,expression:"date.bgStyle.type"}],class:"picker-calendar-view-"+t.bgStyle.type,style:{background:t.bgStyle.background}}),i("v-uni-view",{staticClass:"picker-calendar-view-item",style:{opacity:t.statusStyle.opacity,color:t.statusStyle.color,background:t.statusStyle.background}},[i("v-uni-text",[e._v(e._s(t.title))])],1),i("v-uni-view",{staticClass:"picker-calendar-view-dot",style:{opacity:t.dotStyle.opacity,background:t.dotStyle.background}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.tips,expression:"date.tips"}],staticClass:"picker-calendar-view-tips"},[e._v(e._s(t.tips))])],1)})],2)}),1),i("v-uni-view",{staticClass:"picker-modal-footer"},[i("v-uni-view",{staticClass:"picker-modal-footer-info"},[e.isMultiSelect?[i("v-uni-view",{staticClass:"picker-display"},[i("v-uni-text",[e._v(e._s(e.beginText)+"日期")]),i("v-uni-text",{staticClass:"picker-display-text"},[e._v(e._s(e.BeginTitle))]),e.isContainTime?i("v-uni-view",{staticClass:"picker-display-link",style:{color:e.color},attrs:{"hover-stay-time":100,"hover-class":"picker-display-link-active"},on:{click:function(t){t=e.$handleEvent(t),e.onShowTimePicker("begin")}}},[e._v(e._s(e.BeginTimeTitle))]):e._e()],1),i("v-uni-view",{staticClass:"picker-display"},[i("v-uni-text",[e._v(e._s(e.endText)+"日期")]),i("v-uni-text",{staticClass:"picker-display-text"},[e._v(e._s(e.EndTitle))]),e.isContainTime?i("v-uni-view",{staticClass:"picker-display-link",style:{color:e.color},attrs:{"hover-stay-time":100,"hover-class":"picker-display-link-active"},on:{click:function(t){t=e.$handleEvent(t),e.onShowTimePicker("end")}}},[e._v(e._s(e.EndTimeTitle))]):e._e()],1)]:[i("v-uni-view",{staticClass:"picker-display"},[i("v-uni-text",[e._v("当前选择")]),i("v-uni-text",{staticClass:"picker-display-text"},[e._v(e._s(e.BeginTitle))]),e.isContainTime?i("v-uni-view",{staticClass:"picker-display-link",style:{color:e.color},attrs:{"hover-stay-time":100,"hover-class":"picker-display-link-active"},on:{click:function(t){t=e.$handleEvent(t),e.onShowTimePicker("begin")}}},[e._v(e._s(e.BeginTimeTitle))]):e._e()],1)]],2),i("v-uni-view",{staticClass:"picker-modal-footer-btn"},[i("v-uni-view",{staticClass:"picker-btn",attrs:{"hover-stay-time":100,"hover-class":"picker-btn-active"},on:{click:function(t){t=e.$handleEvent(t),e.onCancel(t)}}},[e._v("取消")]),i("v-uni-view",{staticClass:"picker-btn",style:{color:e.color},attrs:{"hover-stay-time":100,"hover-class":"picker-btn-active"},on:{click:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}},[e._v("确定")])],1)],1)],1):e._e(),e.showTimePicker?i("v-uni-view",{staticClass:"picker"},[i("v-uni-view",{staticClass:"picker-modal picker-time"},[i("v-uni-view",{staticClass:"picker-modal-header"},[i("v-uni-text",{staticClass:"picker-modal-header-title"},[e._v("选择日期")])],1),i("v-uni-picker-view",{staticClass:"picker-modal-time",attrs:{"indicator-class":"picker-modal-time-item",value:e.timeValue},on:{change:function(t){t=e.$handleEvent(t),e.onTimeChange(t)}}},[i("v-uni-picker-view-column",e._l(24,function(t,a){return i("v-uni-view",{key:a},[e._v(e._s(a<10?"0"+a:a)+"时")])}),1),i("v-uni-picker-view-column",e._l(60,function(t,a){return i("v-uni-view",{key:a},[e._v(e._s(a<10?"0"+a:a)+"分")])}),1),e.showSeconds?i("v-uni-picker-view-column",e._l(60,function(t,a){return i("v-uni-view",{key:a},[e._v(e._s(a<10?"0"+a:a)+"秒")])}),1):e._e()],1),i("v-uni-view",{staticClass:"picker-modal-footer"},[i("v-uni-view",{staticClass:"picker-modal-footer-info"},[i("v-uni-view",{staticClass:"picker-display"},[i("v-uni-text",[e._v("当前选择")]),i("v-uni-text",{staticClass:"picker-display-text"},[e._v(e._s(e.PickerTimeTitle))])],1)],1),i("v-uni-view",{staticClass:"picker-modal-footer-btn"},[i("v-uni-view",{staticClass:"picker-btn",attrs:{"hover-stay-time":100,"hover-class":"picker-btn-active"},on:{click:function(t){t=e.$handleEvent(t),e.onCancelTime(t)}}},[e._v("取消")]),i("v-uni-view",{staticClass:"picker-btn",style:{color:e.color},attrs:{"hover-stay-time":100,"hover-class":"picker-btn-active"},on:{click:function(t){t=e.$handleEvent(t),e.onConfirmTime(t)}}},[e._v("确定")])],1)],1)],1)],1):e._e()],1):e._e()},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"454e":function(e,t,i){"use strict";i.r(t);var a=i("1428"),n=i("4d11");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("56ac");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"49298842",null);t["default"]=r.exports},"4d11":function(e,t,i){"use strict";i.r(t);var a=i("7c22"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"56ac":function(e,t,i){"use strict";var a=i("e750"),n=i.n(a);n.a},"731d":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".countHeader[data-v-415b8674]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?160?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.child_count[data-v-415b8674]{margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;justify-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-left:%?2?% solid #999;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?36?%}.child_count[data-v-415b8674]:first-child{border-left:none}.count_num[data-v-415b8674]{font-weight:600}.count_title[data-v-415b8674]{margin-top:%?10?%}\n\n/*  */.countCase[data-v-415b8674]{margin-top:%?30?%}.countCase_title[data-v-415b8674]{margin-left:%?30?%}.echartDiv[data-v-415b8674]{margin:0 auto}.date_btn[data-v-415b8674]{background:#7e2c2e;height:%?80?%;width:%?220?%;color:#fff;line-height:%?80?%;text-align:center;border-radius:none;border:none}",""])},"75fc":function(e,t,i){"use strict";i.r(t);var a=i("a745"),n=i.n(a);function s(e){if(n()(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}var o=i("774e"),r=i.n(o),c=i("c8bb"),l=i.n(c);function d(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r()(e)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){return s(e)||d(e)||h()}i.d(t,"default",function(){return u})},"7c22":function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("55dd");var n=a(i("e814")),s=a(i("a745"));i("ac6a");var o=a(i("75fc")),r=a(i("5176"));i("3b2b"),i("a481");var c={getHoliday:function(e){var t={"0101":"元旦","0214":"情人","0308":"妇女","0312":"植树","0401":"愚人","0501":"劳动","0504":"青年","0601":"儿童","0701":"建党","0801":"建军","0903":"抗日","0910":"教师",1001:"国庆",1031:"万圣",1224:"平安",1225:"圣诞"},i=this.format(e,"mmdd");return!!t[i]&&t[i]},parse:function(e){return new Date(e.replace(/(年|月|-)/g,"/").replace(/(日)/g,""))},isSameDay:function(e,t){return e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()&&e.getDate()==t.getDate()},format:function(e,t){var i={"m+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"i+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3)};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return t},inverse:function(e,t){var i={y:"",m:"",d:"",h:"",i:"",s:""},a=new Date;if(e.length!=t.length)return a;for(var n in t)void 0!=i[t[n]]&&(i[t[n]]+=e[n]);return i.y&&a.setFullYear(i.y.length<4?(a.getFullYear()+"").substr(0,4-i.y.length)+i.y:i.y),i.m&&a.setMonth(i.m-1,1),i.d&&a.setDate(i.d-0),i.h&&a.setHours(i.h-0),i.i&&a.setMinutes(i.i-0),i.s&&a.setSeconds(i.s-0),a},getCalendar:function(e,t){var i=new Date(e),a=[];i.setDate(1),i.setDate(i.getDate()-((0==i.getDay()?7:i.getDay())-1));for(var n=0;n<42;n++){var s={dateObj:new Date(i),title:i.getDate(),isOtherMonth:i.getMonth()<e.getMonth()||i.getMonth()>e.getMonth()};a.push((0,r.default)(s,t?t(s):{})),i.setDate(i.getDate()+1)}return a},getDateToMonth:function(e,t){var i=new Date(e);return i.setMonth(t,1),i},formatTimeArray:function(e,t){var i=(0,o.default)(e);return t||(i.length=2),i.forEach(function(e,t){return i[t]=("0"+e).slice(-2)}),i.join(":")}},l={props:{color:{type:String,default:"#409eff"},showSeconds:{type:Boolean,default:!1},value:[String,Array],type:{type:String,default:"range"},show:{type:Boolean,default:!1},format:{type:String,default:""},showHoliday:{type:Boolean,default:!0},showTips:{type:Boolean,default:!1},beginText:{type:String,default:"开始"},endText:{type:String,default:"结束"}},data:function(){return{isShow:!1,isMultiSelect:!1,isContainTime:!1,date:{},weeks:["一","二","三","四","五","六","日"],title:"初始化",calendars:[[],[],[]],calendarIndex:1,checkeds:[],showTimePicker:!1,timeValue:[0,0,0],timeType:"begin",beginTime:[0,0,0],endTime:[0,0,0]}},methods:{setValue:function(e){var t=this;this.date=new Date,this.checkeds=[],this.isMultiSelect=this.type.indexOf("range")>=0,this.isContainTime=this.type.indexOf("time")>=0;var i=function(e){return t.format?c.inverse(e,t.format):c.parse(e)};if(e){if(this.isMultiSelect)(0,s.default)(e)&&e.forEach(function(e,a){var n=i(e),s=[n.getHours(),n.getMinutes(),n.getSeconds()];0==a?t.beginTime=s:t.endTime=s,t.checkeds.push(n)});else if("time"==this.type){var a=i("2019/1/1 "+e);this.beginTime=[a.getHours(),a.getMinutes(),a.getSeconds()],this.onShowTimePicker("begin")}else this.checkeds.push(i(e)),this.isContainTime&&(this.beginTime=[this.checkeds[0].getHours(),this.checkeds[0].getMinutes(),this.checkeds[0].getSeconds()]);this.checkeds.length&&(this.date=new Date(this.checkeds[0]))}else this.isContainTime&&(this.beginTime=[this.date.getHours(),this.date.getMinutes(),this.date.getSeconds()],this.isMultiSelect&&(this.endTime=(0,o.default)(this.beginTime))),this.checkeds.push(new Date(this.date));"time"!=this.type?this.refreshCalendars(!0):this.onShowTimePicker("begin")},onSetYear:function(e){this.date.setFullYear(this.date.getFullYear()+(0,n.default)(e)),this.refreshCalendars(!0)},onSetMonth:function(e){this.date.setMonth(this.date.getMonth()+(0,n.default)(e)),this.refreshCalendars(!0)},onTimeChange:function(e){this.timeValue=e.detail.value},onShowTimePicker:function(e){this.showTimePicker=!0,this.timeType=e,this.timeValue="begin"==e?(0,o.default)(this.beginTime):(0,o.default)(this.endTime)},procCalendar:function(e){var t=this;if(e.statusStyle={opacity:1,color:e.isOtherMonth?"#ddd":"#000",background:"transparent"},e.bgStyle={type:"",background:"transparent"},e.dotStyle={opacity:1,background:"transparent"},e.tips="",c.isSameDay(new Date,e.dateObj)&&(e.statusStyle.color=this.color,e.isOtherMonth&&(e.statusStyle.opacity=.3)),this.checkeds.forEach(function(i){c.isSameDay(i,e.dateObj)&&(e.statusStyle.background=t.color,e.statusStyle.color="#fff",e.statusStyle.opacity=1,t.isMultiSelect&&t.showTips&&(e.tips=t.beginText))}),e.statusStyle.background!=this.color){var i=!!this.showHoliday&&c.getHoliday(e.dateObj);(i||c.isSameDay(new Date,e.dateObj))&&(e.title=i||e.title,e.dotStyle.background=this.color,e.isOtherMonth&&(e.dotStyle.opacity=.2))}else e.title=e.dateObj.getDate();2==this.checkeds.length&&(c.isSameDay(this.checkeds[0],e.dateObj)&&(e.bgStyle.type="bgbegin"),c.isSameDay(this.checkeds[1],e.dateObj)&&(this.isMultiSelect&&this.showTips&&(e.tips=e.bgStyle.type?this.beginText+" / "+this.endText:this.endText),e.bgStyle.type?e.bgStyle.type="":e.bgStyle.type="bgend"),!e.bgStyle.type&&+e.dateObj>+this.checkeds[0]&&+e.dateObj<+this.checkeds[1]&&(e.bgStyle.type="bg",e.statusStyle.color=this.color),e.bgStyle.type&&(e.bgStyle.background=this.color,e.dotStyle.opacity=1,e.statusStyle.opacity=1))},refreshCalendars:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date(this.date),i=c.getDateToMonth(t,t.getMonth()-1),a=c.getDateToMonth(t,t.getMonth()+1);0==this.calendarIndex?(e&&this.calendars.splice(0,1,c.getCalendar(t,this.procCalendar)),this.calendars.splice(1,1,c.getCalendar(a,this.procCalendar)),this.calendars.splice(2,1,c.getCalendar(i,this.procCalendar))):1==this.calendarIndex?(this.calendars.splice(0,1,c.getCalendar(i,this.procCalendar)),e&&this.calendars.splice(1,1,c.getCalendar(t,this.procCalendar)),this.calendars.splice(2,1,c.getCalendar(a,this.procCalendar))):2==this.calendarIndex&&(this.calendars.splice(0,1,c.getCalendar(a,this.procCalendar)),this.calendars.splice(1,1,c.getCalendar(i,this.procCalendar)),e&&this.calendars.splice(2,1,c.getCalendar(t,this.procCalendar))),this.title=c.format(this.date,"yyyy年mm月")},onSwiperChange:function(e){this.calendarIndex=e.detail.current;var t=this.calendars[this.calendarIndex];this.date=new Date(t[22].dateObj),this.refreshCalendars()},onSelectDate:function(e){var t=this;~this.type.indexOf("range")&&2==this.checkeds.length?this.checkeds=[]:!~this.type.indexOf("range")&&this.checkeds.length&&(this.checkeds=[]),this.checkeds.push(new Date(e.dateObj)),this.checkeds.sort(function(e,t){return e-t}),this.calendars.forEach(function(e){e.forEach(t.procCalendar)})},onCancelTime:function(){this.showTimePicker=!1,"time"==this.type&&this.onCancel()},onConfirmTime:function(){"begin"==this.timeType?this.beginTime=this.timeValue:this.endTime=this.timeValue,this.showTimePicker=!1,"time"==this.type&&this.onConfirm()},onCancel:function(){this.$emit("cancel",!1)},onConfirm:function(){var e=this,t={value:null,date:null},i={date:"yyyy/mm/dd",time:"hh:ii"+(this.showSeconds?":ss":""),datetime:""};i["datetime"]=i.date+" "+i.time;var a=function(t,i){t.setHours(i[0],i[1]),e.showSeconds&&t.setSeconds(i[2])};if("time"==this.type){var n=new Date;a(n,this.beginTime),t.value=c.format(n,this.format?this.format:i.time),t.date=n}else if(this.isMultiSelect){var s=[],o=[];if(this.checkeds.length<2)return uni.showToast({icon:"none",title:"请选择两个日期"});this.checkeds.forEach(function(t,n){var r=new Date(t);if(e.isContainTime){var l=[e.beginTime,e.endTime];a(r,l[n])}s.push(c.format(r,e.format?e.format:i[e.isContainTime?"datetime":"date"])),o.push(r)}),t.value=s,t.date=o}else{var r=new Date(this.checkeds[0]);this.isContainTime&&(r.setHours(this.beginTime[0],this.beginTime[1]),this.showSeconds&&r.setSeconds(this.beginTime[2])),t.value=c.format(r,this.format?this.format:i[this.isContainTime?"datetime":"date"]),t.date=r}this.$emit("confirm",t)}},computed:{BeginTitle:function(){var e="未选择";return this.checkeds.length&&(e=c.format(this.checkeds[0],"yy/mm/dd")),e},EndTitle:function(){var e="未选择";return 2==this.checkeds.length&&(e=c.format(this.checkeds[1],"yy/mm/dd")),e},PickerTimeTitle:function(){return c.formatTimeArray(this.timeValue,this.showSeconds)},BeginTimeTitle:function(){return"未选择"!=this.BeginTitle?c.formatTimeArray(this.beginTime,this.showSeconds):""},EndTimeTitle:function(){return"未选择"!=this.EndTitle?c.formatTimeArray(this.endTime,this.showSeconds):""}},watch:{show:function(e,t){e&&this.setValue(this.value),this.isShow=e},value:function(e,t){var i=this;setTimeout(function(){i.setValue(e)},0)}}};t.default=l},"8c0d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"countHeader"},[i("div",{staticClass:"child_count"},[i("div",{staticClass:"count_num"},[e._v(e._s(e.Case_Number))]),i("p",{staticClass:"count_title"},[e._v("案件合计")])]),i("div",{staticClass:"child_count"},[i("div",{staticClass:"count_num"},[e._v(e._s(e.Closingcase_Number))]),i("p",{staticClass:"count_title"},[e._v("已结案")])]),i("div",{staticClass:"child_count"},[i("div",{staticClass:"count_num"},[e._v(e._s(e.Customer_Number))]),i("p",{staticClass:"count_title"},[e._v("客户")])]),i("div",{staticClass:"child_count"},[i("div",{staticClass:"count_num"},[e._v(e._s(e._f("formatMoney")(e.Total_Amount)))]),i("p",{staticClass:"count_title"},[e._v("金额合计")])])]),i("mx-date-picker",{attrs:{show:e.showPicker1,type:e.type,value:e.value,"show-tips":!0,"begin-text":"开始时间","end-text":"结束时间","show-seconds":!0},on:{confirm:function(t){t=e.$handleEvent(t),e.onSelected1(t)},cancel:function(t){t=e.$handleEvent(t),e.onSelected1(t)}}}),i("div",{staticClass:"countCase"},[i("v-uni-button",{staticClass:"date_btn",on:{click:function(t){t=e.$handleEvent(t),e.onShowDatePicker1("range")}}},[e._v("选择日期范围")]),i("p",{staticClass:"countCase_title"}),i("div",{ref:"myEchart",class:e.className,style:{height:e.height,width:e.width},attrs:{id:e.id}})],1),i("div",{staticClass:"countCase"},[i("mx-date-picker",{attrs:{show:e.showPicker2,type:e.type,value:e.value,"show-tips":!0,"begin-text":"开始时间","end-text":"结束时间","show-seconds":!0},on:{confirm:function(t){t=e.$handleEvent(t),e.onSelected2(t)},cancel:function(t){t=e.$handleEvent(t),e.onSelected2(t)}}}),i("v-uni-button",{staticClass:"date_btn",on:{click:function(t){t=e.$handleEvent(t),e.onShowDatePicker2("range")}}},[e._v("选择日期范围")]),i("p",{staticClass:"countCase_title"}),i("div",{ref:"myEchart1",class:e.className,style:{height:e.height,width:e.width},attrs:{id:e.id}})],1),i("div",{staticClass:"countCase"},[i("mx-date-picker",{attrs:{show:e.showPicker4,type:e.type,value:e.value,"show-tips":!0,"begin-text":"开始时间","end-text":"结束时间","show-seconds":!0},on:{confirm:function(t){t=e.$handleEvent(t),e.onSelected4(t)},cancel:function(t){t=e.$handleEvent(t),e.onSelected4(t)}}}),i("p",{staticClass:"countCase_title"}),i("v-uni-button",{staticClass:"date_btn",on:{click:function(t){t=e.$handleEvent(t),e.onShowDatePicker4("range")}}},[e._v("选择日期范围")]),i("div",{ref:"myEchart4",class:e.className,style:{height:e.height,width:e.width},attrs:{id:e.id}})],1),i("div",{staticClass:"countCase"},[i("mx-date-picker",{attrs:{show:e.showPicker3,type:e.type,value:e.value,"show-tips":!0,"begin-text":"开始时间","end-text":"结束时间","show-seconds":!0},on:{confirm:function(t){t=e.$handleEvent(t),e.onSelected3(t)},cancel:function(t){t=e.$handleEvent(t),e.onSelected3(t)}}}),i("p",{staticClass:"countCase_title"}),i("v-uni-button",{staticClass:"date_btn",on:{click:function(t){t=e.$handleEvent(t),e.onShowDatePicker3("range")}}},[e._v("选择日期范围")]),i("div",{ref:"myEchart3",class:e.className,style:{height:e.height,width:e.width},attrs:{id:e.id}})],1),i("div",{staticClass:"countCase"},[i("mx-date-picker",{attrs:{show:e.showPicker5,type:e.type,value:e.value,"show-tips":!0,"begin-text":"开始时间","end-text":"结束时间","show-seconds":!0},on:{confirm:function(t){t=e.$handleEvent(t),e.onSelected5(t)},cancel:function(t){t=e.$handleEvent(t),e.onSelected5(t)}}}),i("p",{staticClass:"countCase_title"}),i("v-uni-button",{staticClass:"date_btn",on:{click:function(t){t=e.$handleEvent(t),e.onShowDatePicker5("range")}}},[e._v("选择日期范围")]),i("div",{ref:"myEchart5",class:e.className,style:{height:e.height,width:e.width},attrs:{id:e.id}})],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"9cc5":function(e,t,i){"use strict";var a=i("f962"),n=i.n(a);n.a},c40d:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5"),i("6b54"),i("87b3"),i("7f7f"),i("a481");var n=a(i("9abc")),s=a(i("454e")),o={props:{className:{type:String,default:"echartDiv"},id:{type:String,default:"yourID"},width:{type:String,default:"100%"},height:{type:String,default:"600upx"}},data:function(){return{chart:null,chart1:null,chart2:null,chart3:null,chart4:null,chart5:null,arr:[],arr1:[],arr2:[],arr3:[],MinTime:"",MaxTime:"",MinTime1:"",MaxTime1:"",MinTime4:"",MaxTime4:"",MinTime3:"",MaxTime3:"",MinTime5:"",MaxTime5:"",showPicker1:!1,showPicker2:!1,showPicker3:!1,showPicker4:!1,showPicker5:!1,date:"2019/01/01",time:"15:00:12",datetime:"2019/01/01 15:00:12",range:["2019/01/01","2019/01/06"],rangetime:["2019/01/08 14:00","2019/01/16 13:59"],type:"rangetime",value:"",Total_Amount:"",Case_Number:"",Customer_Number:"",Closingcase_Number:""}},mounted:function(){this.getInfo(),this.getMounthDate()},beforeDestroy:function(){this.chart=null,this.chart1=null},components:{MxDatePicker:s.default},methods:{getInfo:function(){var e=this;uni.request({url:e.$api+"Statistics/Amount_Number",data:{User_Id:uni.getStorageSync("userId")},success:function(t){console.log(t),e.Total_Amount=t.data.Total_Amount,e.Case_Number=t.data.Case_Number,e.Customer_Number=t.data.Customer_Number,e.Closingcase_Number=t.data.Closingcase_Number}})},onShowDatePicker1:function(e){this.type=e,this.showPicker1=!0,this.value=this[e]},onShowDatePicker2:function(e){this.type=e,this.showPicker2=!0,this.value=this[e]},onShowDatePicker3:function(e){this.type=e,this.showPicker3=!0,this.value=this[e]},onShowDatePicker4:function(e){this.type=e,this.showPicker4=!0,this.value=this[e]},onShowDatePicker5:function(e){this.type=e,this.showPicker5=!0,this.value=this[e]},onSelected1:function(e){if(console.log(e),this.showPicker1=!1,e){this[this.type]=e.value;var t=[];t=e.value.splice(","),console.log(t);var i=/\//g;this.MinTime=t[0].replace(i,"-"),this.MaxTime=t[1].replace(i,"-"),this.initChart(),console.log(this.MinTime),console.log("value => "+e.value),console.log("date => "+e.date)}},onSelected2:function(e){if(console.log(e),this.showPicker2=!1,e){this[this.type]=e.value;var t=[];t=e.value.splice(","),console.log(t);var i=/\//g;this.MinTime1=t[0].replace(i,"-"),this.MaxTime1=t[1].replace(i,"-"),this.initChart1(),console.log(this.MinTime1),console.log("value => "+e.value),console.log("date => "+e.date)}},onSelected3:function(e){if(console.log(e),this.showPicker3=!1,e){this[this.type]=e.value;var t=[];t=e.value.splice(","),console.log(t);var i=/\//g;this.MinTime3=t[0].replace(i,"-"),this.MaxTime3=t[1].replace(i,"-"),this.initChart3(),console.log(this.MinTime1),console.log("value => "+e.value),console.log("date => "+e.date)}},onSelected4:function(e){if(console.log(e),this.showPicker4=!1,e){this[this.type]=e.value;var t=[];t=e.value.splice(","),console.log(t);var i=/\//g;this.MinTime4=t[0].replace(i,"-"),this.MaxTime4=t[1].replace(i,"-"),this.initChart4(),console.log(this.MinTime4),console.log("value => "+e.value),console.log("date => "+e.date)}},onSelected5:function(e){if(console.log(e),this.showPicker5=!1,e){this[this.type]=e.value;var t=[];t=e.value.splice(","),console.log(t);var i=/\//g;this.MinTime5=t[0].replace(i,"-"),this.MaxTime5=t[1].replace(i,"-"),this.initChart5(),console.log(this.MinTime5),console.log("value => "+e.value),console.log("date => "+e.date)}},getMounthDate:function(){for(var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=new Array,n=0;n<6;n++)i-=1,i<=0&&(t-=1,i+=12),i<10&&(i="0"+i),a[n]=t+"-"+i;var s=this;s.MinTime=a[5]+"-01",s.MaxTime=a[0]+"-30",s.MinTime1=a[5]+"-01",s.MaxTime1=a[0]+"-30",s.MinTime4=a[5]+"-01",s.MaxTime4=a[0]+"-30",s.MinTime3=a[5]+"-01",s.MaxTime3=a[0]+"-30",s.MinTime5=a[5]+"-01",s.MaxTime5=a[0]+"-30",console.log(s.MinTime1),s.initChart1(),s.initChart4(),s.initChart3(),s.initChart(),s.initChart5()},initChart:function(){var e=this;uni.request({url:e.$api+"Statistics/weekNumber",data:{MinTime:e.MinTime,MaxTime:e.MaxTime,User_Id:uni.getStorageSync("userId")},method:"GET",success:function(t){e.arr=t.data,console.log(t);for(var i=0;i<e.arr.length;i++)e.arr1[i]=e.arr[i].name.replace(/\r\n/g,""),e.arr2=e.arr[0].date,e.arr3[i]=e.arr[i].data;e.chart=n.default.init(e.$refs.myEchart),e.chart.setOption({title:{text:"案件类型统计",subtext:"数量"},tooltip:{trigger:"axis"},legend:{data:e.arr1,type:"scroll",bottom:"bottom"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:e.arr2}],yAxis:[{type:"value",axisLabel:{formatter:"{value}"}}],series:e.arr})}})},initChart1:function(){var e=this;console.log(e.MaxTime1),uni.request({url:e.$api+"Statistics/Customer_Number",data:{MinTime:e.MinTime1,MaxTime:e.MaxTime1,User_Id:uni.getStorageSync("userId")},method:"GET",success:function(t){var i=t.data,a=[],s=[];console.log(i);for(var o=0;o<i.length;o++)a[o]=i[o].name,s=i[0].date;console.log(a),console.log(s),e.chart1=n.default.init(e.$refs.myEchart1),e.chart1.setOption({title:{text:"新增客户数量",subtext:"数量"},tooltip:{trigger:"axis"},legend:{data:a,bottom:"bottom",type:"scroll"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:s}],yAxis:[{type:"value"}],series:i})}})},initChart4:function(){var e=this;uni.request({url:e.$api+"Statistics/Sel_Cases_Pie",data:{MinTime:e.MinTime4,MaxTime:e.MaxTime4,User_Id:uni.getStorageSync("userId")},method:"GET",success:function(t){var i=t.data,a=[],s=[];console.log(i);for(var o=0;o<i.length;o++)a[o]=i[o].name.replace(/[\r\n]/g,""),s=i[o].value;console.log(a),console.log(s),e.chart4=n.default.init(e.$refs.myEchart4),e.chart4.setOption({title:{text:"案件类型统计",subtext:"数量",x:"center"},tooltip:{trigger:"item",formatter:"{a} {b} : {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:a,type:"scroll"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"left",max:1548}}},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,series:[{name:"系统统计",type:"pie",radius:"55%",center:["50%","60%"],data:i}]})}})},initChart3:function(){var e=this;uni.request({url:e.$api+"Statistics/Industry_Number",data:{MinTime:e.MinTime3,MaxTime:e.MaxTime3,User_Id:uni.getStorageSync("userId")},method:"GET",success:function(t){var i=t.data,a=[],s=[],o=[];console.log(i);for(var r=0;r<i.length;r++)a[r]=i[r].name.replace(/[\r\n]/g,""),s=i[0].date,i[r].data,o.push({name:i[r].name.replace(/[\r\n]/g,""),date:i[r].date,data:i[r].data,type:i[r].type});console.log(a),console.log(s),e.chart3=n.default.init(e.$refs.myEchart3),e.chart3.setOption({title:{text:"客户行业类型统计",subtext:"数量"},tooltip:{trigger:"axis"},legend:{type:"scroll",bottom:"bottom",data:a},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:s}],yAxis:[{type:"value",axisLabel:{formatter:"{value}"}}],series:o})}})},initChart5:function(){var e=this;uni.request({url:e.$api+"Statistics/Sel_Industry_Type",data:{MinTime:e.MinTime5,MaxTime:e.MaxTime5,User_Id:uni.getStorageSync("userId")},method:"GET",success:function(t){var i=t.data,a=[],s=[],o=[];console.log(i);for(var r=0;r<i.length;r++)a[r]=i[r].name.replace(/[\r\n]/g,""),s=i[r].value,o.push({name:i[r].name.replace(/[\r\n]/g,""),value:i[r].value});console.log(a),console.log(s),e.chart5=n.default.init(e.$refs.myEchart5),e.chart5.setOption({title:{text:"客户行业类型统计",subtext:"数量"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{bottom:"bottom",data:a,type:"scroll"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"left",max:1548}}},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,series:[{name:"系统统计",type:"pie",radius:"55%",center:["50%","60%"],data:o}]})}})}},filters:{formatMoney:function(e,t){if(/[^0-9\.]/.test(e))return"0";if(null==e||""==e)return"0";e=e.toString().replace(/^(\d*)$/,"$1."),e=(e+"00").replace(/(\d*\.\d\d)\d*/,"$1"),e=e.replace(".",",");var i=/(\d)(\d{3},)/;while(i.test(e))e=e.replace(i,"$1,$2");if(e=e.replace(/,(\d\d)$/,".$1"),0==t){var a=e.split(".");"00"==a[1]&&(e=a[0])}return e}}};t.default=o},c9ba:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.picker[data-v-49298842]{position:fixed;z-index:100;background:hsla(0,0%,100%,0);left:0;top:0;width:100%;height:100%;font-size:%?28?%}.picker-btn[data-v-49298842]{padding:%?10?% %?20?%;border-radius:%?12?%;color:#666}.picker-btn-active[data-v-49298842]{background:rgba(0,0,0,.1)}.picker-display[data-v-49298842]{color:#666}.picker-display-text[data-v-49298842]{color:#000;margin:0 %?10?%}.picker-display-link[data-v-49298842]{display:inline-block}.picker-display-link-active[data-v-49298842]{background:rgba(0,0,0,.1)}.picker-time[data-v-49298842]{width:%?550?%!important;left:%?100?%!important}.picker-modal[data-v-49298842]{background:#fff;position:absolute;top:50%;left:%?60?%;width:%?630?%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.1);box-shadow:0 0 20px 0 rgba(0,0,0,.1);border-radius:%?12?%}.picker-modal-header[data-v-49298842]{text-align:center;line-height:%?80?%;font-size:%?32?%}.picker-modal-header-title[data-v-49298842]{display:inline-block;width:40%}.picker-modal-header .picker-icon[data-v-49298842]{display:inline-block;line-height:%?50?%;width:%?50?%;height:%?50?%;border-radius:%?50?%;text-align:center;margin:%?10?%;background:#fff;font-size:%?36?%}.picker-modal-header .picker-icon-active[data-v-49298842]{background:rgba(0,0,0,.1)}.picker-modal-body[data-v-49298842]{width:%?630?%!important;height:%?630?%!important;position:relative}.picker-modal-time[data-v-49298842]{width:100%;height:%?180?%;text-align:center;line-height:%?60?%}.picker-modal-footer[data-v-49298842]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?%}.picker-modal-footer-info[data-v-49298842]{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.picker-modal-footer-btn[data-v-49298842]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.picker-calendar[data-v-49298842]{position:absolute;left:0;top:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.picker-calendar-view[data-v-49298842]{position:relative;width:%?90?%;height:%?90?%;text-align:center}.picker-calendar-view-bg[data-v-49298842],.picker-calendar-view-bgbegin[data-v-49298842],.picker-calendar-view-bgend[data-v-49298842],.picker-calendar-view-dot[data-v-49298842],.picker-calendar-view-item[data-v-49298842],.picker-calendar-view-tips[data-v-49298842]{position:absolute;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.picker-calendar-view-bg[data-v-49298842],.picker-calendar-view-bgbegin[data-v-49298842],.picker-calendar-view-bgend[data-v-49298842]{opacity:.15;height:80%}.picker-calendar-view-bg[data-v-49298842]{left:0;top:10%;width:100%}.picker-calendar-view-bgbegin[data-v-49298842]{border-radius:%?90?% 0 0 %?90?%;top:10%;left:10%;width:90%}.picker-calendar-view-bgend[data-v-49298842]{border-radius:0 %?90?% %?90?% 0;top:10%;left:0;width:90%}.picker-calendar-view-item[data-v-49298842]{left:5%;top:5%;width:90%;height:90%;border-radius:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.picker-calendar-view-dot[data-v-49298842]{right:10%;top:10%;width:%?12?%;height:%?12?%;border-radius:%?12?%}.picker-calendar-view-tips[data-v-49298842]{bottom:100%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:#7e2c2e;color:#fff;border-radius:%?12?%;padding:%?10?% %?20?%;font-size:%?24?%;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-bottom:5px;pointer-events:none}.picker-calendar-view-tips[data-v-49298842]:after{content:"";position:absolute;top:100%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:0;height:0;border-style:solid;border-width:5px 5px 0 5px;border-color:#7e2c2e rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}@font-face{font-family:mxdatepickericon;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMYAAsAAAAACBgAAALMAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDIgqDRIJiATYCJAMUCwwABCAFhG0HSRvfBsg+QCa3noNAyAQ9w6GDvbwpNp2vloCyn8bD/x+y+/5qDhtj+T4eRVEcbsCoKMFASzCgLdDkmqYDwgxkWQ6YH5L/YnppOlLEjlnter43YRjU7M6vJ3iGADVAgJn5kqjv/wEii23T86UsAQT+04fV+o97VTMx4PPZt4DlorLXwIQiGMA5uhaVrBWqGHfQXcTEiE+PE+g2SUlxWlLVBHwUYFMgrgwSB3wstTKSGzqF1nOyiGeeOtNjV4An/vvxR58PSc3AzrMViyDvPo/7dVEUzn5GROfIWAcU4rLXfMFdhte56y4We9gGNEVIezkBOOaQXUrbTf/hJVkhGpDdCw7dSOEzByMEn3kIic98hMxnAfeFPKWCbjRcA148/HxhCEkaA94eGWFaGolsblpaWz8/Po2WVuNHh1fmBpZHIpqal9fOjizhTteY+RZ9rv02I/pq0W6QVH3pSncBz3m55r9ZIPycHfmenvxe4uyutIgfT5u4bgkDusl9gcF0rnfnz+b2NpSaQWBFeu8GIL1xQj5AH/6FAsEr/50F28e/gA9ny6KjLrxIp0TE+UucmQOl5AFNLXkzZufWamWHYEI39PEP2If97CMdm51N6DSmIekwAVmneXTBr0PVYx+aTgfQbU3p+R4jKHdRurBq0oEw6AKSfm+QDbpGF/w3VOP+oBnMHbqdx409FjP4RRHHkAj5IWgQiBUjHfMTuQ1Icpg5avI4sQVRu8EHdWptM1aKrIjuscfeL+kZwxBTYoElztOQ2UygjRIjEphaZsyWodHgvm9SC8QC/JygEA6DiCDeEMhAQFhhOpvxa/18A0TiYMahIy0L2hYIZWeYH9JR085Al4qts1re5St2/SR6DINBGEVYQCWOETHDMAHZ+pcZIQJGTV4RtMmg8UbhuWL1+VLLA2RFHYC71kiRo0SNpjwQh8pj2EFU3oTNmS1WqgIA") format("woff2")}.picker-icon[data-v-49298842]{font-family:mxdatepickericon!important}.picker-icon-you[data-v-49298842]:before{content:"\\E63E"}.picker-icon-zuo[data-v-49298842]:before{content:"\\E640"}.picker-icon-zuozuo[data-v-49298842]:before{content:"\\E641"}.picker-icon-youyou[data-v-49298842]:before{content:"\\E642"}',""])},d15d:function(e,t,i){"use strict";i.r(t);var a=i("c40d"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},e750:function(e,t,i){var a=i("c9ba");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("9980cdae",a,!0,{sourceMap:!1,shadowMode:!1})},f962:function(e,t,i){var a=i("731d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("6db38982",a,!0,{sourceMap:!1,shadowMode:!1})},fa7e:function(e,t,i){"use strict";i.r(t);var a=i("8c0d"),n=i("d15d");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("9cc5");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"415b8674",null);t["default"]=r.exports}}]);