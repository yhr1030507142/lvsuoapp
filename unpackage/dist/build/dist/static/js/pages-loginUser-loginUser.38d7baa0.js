(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-loginUser-loginUser"],{"0440":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("4328"));function i(e){return e&&e.__esModule?e:{default:e}}var o=n("97ea"),a={data:function(){return{password:"",username:"",pub:""}},onLoad:function(){var e=this;e.getPublicKey()},methods:{checknumber:function(e){var t,n,r="1234567890";for(t=0;t<e.length;t++)if(n=e.charAt(t),-1==r.indexOf(n))return!0;return!1},denglu:function(){var e=this;if(""==e.username||null==e.username)return uni.showToast({title:"用户名不能为空",icon:"none"}),!1;if(""==e.password||null==e.password)return uni.showToast({title:"请输入密码",icon:"none"}),!1;if(e.checknumber(e.username))return uni.showToast({title:"用户名格式错误",icon:"none"}),!1;var t=new o.JSEncrypt;console.log(e.pub),t.setPublicKey(e.pub);var n=e.username+"&&"+e.password,i=t.encrypt(n),a=r.default.stringify({str:i});console.log(a),uni.request({url:this.$api+"Login/Judging_Landing",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:r.default.stringify({str:i}),success:function(t){t.data;return 1==t.data?(uni.showToast({title:"用户名错误",icon:"none"}),!1):2==t.data?(uni.showToast({title:"密码错误",icon:"none"}),!1):3==t.data?(uni.showToast({title:"该账户被锁定",icon:"none"}),!1):(5==t.data&&uni.showModal({title:"提示",content:"此账号已在其他地方登录, 是否继续登录?",success:function(t){t.confirm?uni.request({url:e.$api+"Login/Occupancy_Landing",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:r.default.stringify({str:i}),success:function(e){uni.setStorageSync("userId",e.data.User_Id),uni.setStorageSync("sessionId",e.data.sessionId),uni.setStorageSync("Rule_Id",e.data.Rule_Id),uni.setStorageSync("Expiration_Date",e.data.Expiration_Date),uni.setStorageSync("Username",e.data.Username),uni.switchTab({url:"../index/index"})}}):t.cancel&&console.log("用户点击取消")}}),void(4==t.data&&(uni.getStorageSync("userId")&&uni.request({url:e.$api+"Login/Exit_Landing",method:"GET",data:{sessionId:uni.getStorageSync("sessionId")},success:function(e){1==e.data&&(uni.removeStorageSync("userId"),uni.removeStorageSync("sessionId"),uni.removeStorageSync("Rule_Id"),uni.removeStorageSync("Expiration_Date"),uni.removeStorageSync("Username"))}}),uni.request({url:e.$api+"Login/Rsa_Land",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:r.default.stringify({str:i}),success:function(e){console.log(e),uni.setStorageSync("userId",e.data.User_Id),uni.setStorageSync("sessionId",e.data.sessionId),uni.setStorageSync("Rule_Id",e.data.Rule_Id),uni.setStorageSync("Expiration_Date",e.data.Expiration_Date),uni.setStorageSync("Username",e.data.Username),uni.switchTab({url:"../index/index"})}}))))}})},getPublicKey:function(){var e=this;uni.request({url:e.$api+"Login/PublicKey",success:function(t){e.pub=t.data.PublicKey,console.log(e.pub)}})}}};t.default=a},4127:function(e,t,n){"use strict";var r=n("d233"),i=n("b313"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,n,i,o,a,c,l,u,d,f,p,y){var b=t;if("function"===typeof l)b=l(n,b);else if(b instanceof Date)b=f(b);else if(null===b){if(o)return c&&!y?c(n,s.encoder):n;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||r.isBuffer(b)){if(c){var g=y?n:c(n,s.encoder);return[p(g)+"="+p(c(b,s.encoder))]}return[p(n)+"="+p(String(b))]}var m,w=[];if("undefined"===typeof b)return w;if(Array.isArray(l))m=l;else{var v=Object.keys(b);m=u?v.sort(u):v}for(var h=0;h<m.length;++h){var x=m[h];a&&null===b[x]||(w=Array.isArray(b)?w.concat(e(b[x],i(n,x),i,o,a,c,l,u,d,f,p,y)):w.concat(e(b[x],n+(d?"."+x:"["+x+"]"),i,o,a,c,l,u,d,f,p,y)))}return w};e.exports=function(e,t){var n=e,a=t?r.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!==typeof a.encoder)throw new TypeError("Encoder has to be a function.");var l="undefined"===typeof a.delimiter?s.delimiter:a.delimiter,u="boolean"===typeof a.strictNullHandling?a.strictNullHandling:s.strictNullHandling,d="boolean"===typeof a.skipNulls?a.skipNulls:s.skipNulls,f="boolean"===typeof a.encode?a.encode:s.encode,p="function"===typeof a.encoder?a.encoder:s.encoder,y="function"===typeof a.sort?a.sort:null,b="undefined"!==typeof a.allowDots&&a.allowDots,g="function"===typeof a.serializeDate?a.serializeDate:s.serializeDate,m="boolean"===typeof a.encodeValuesOnly?a.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof a.format)a.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,a.format))throw new TypeError("Unknown format option provided.");var w,v,h=i.formatters[a.format];"function"===typeof a.filter?(v=a.filter,n=v("",n)):Array.isArray(a.filter)&&(v=a.filter,w=v);var x,j=[];if("object"!==typeof n||null===n)return"";x=a.arrayFormat in o?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var k=o[x];w||(w=Object.keys(n)),y&&w.sort(y);for(var O=0;O<w.length;++O){var S=w[O];d&&null===n[S]||(j=j.concat(c(n[S],S,k,u,d,f?p:null,v,y,b,g,h,m)))}var _=j.join(l),A=!0===a.addQueryPrefix?"?":"";return _.length>0?A+_:""}},4328:function(e,t,n){"use strict";var r=n("4127"),i=n("9e6a"),o=n("b313");e.exports={formats:o,parse:i,stringify:r}},"65c0":function(e,t,n){"use strict";n.r(t);var r=n("0440"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=i.a},"869c":function(e,t,n){"use strict";var r=n("b7c6"),i=n.n(r);i.a},"8fb2":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/img/logo.png",mode:""}})],1),n("v-uni-view",{staticClass:"m_200"}),n("v-uni-view",{staticClass:"input m_200"},[n("v-uni-image",{staticClass:"icon",attrs:{src:"../../static/img/shouji.png",mode:""}}),n("v-uni-input",{staticClass:"input1",attrs:{type:"text",placeholder:"请输入账号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("v-uni-view",{staticClass:"input"},[n("v-uni-image",{staticClass:"icon",attrs:{src:"../../static/img/mima.png",mode:""}}),n("v-uni-input",{staticClass:"input1",attrs:{type:"text",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-uni-view",{staticClass:"btn btn1 flex row",on:{click:function(t){t=e.$handleEvent(t),e.denglu()}}},[n("v-uni-view",[e._v("登录")])],1),n("v-uni-view",{staticClass:"bottom flex row row_center"},[n("v-uni-view",{staticClass:"bbox"},[n("v-uni-image",{staticClass:"pic_img",attrs:{src:"../../static/img/weixin1.png",mode:""}}),n("v-uni-view",{},[e._v("微信账号登录")])],1)],1)],1)},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},"9e6a":function(e,t,n){"use strict";var r=n("d233"),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,s=r.split(t.delimiter,a),c=0;c<s.length;++c){var l,u,d=s[c],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(l=t.decoder(d,o.decoder),u=t.strictNullHandling?null:""):(l=t.decoder(d.slice(0,p),o.decoder),u=t.decoder(d.slice(p+1),o.decoder)),i.call(n,l)?n[l]=[].concat(n[l]).concat(u):n[l]=u}return n},s=function(e,t,n){for(var r=t,i=e.length-1;i>=0;--i){var o,a=e[i];if("[]"===a)o=[],o=o.concat(r);else{o=n.plainObjects?Object.create(null):{};var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(s,10);!isNaN(c)&&a!==s&&String(c)===s&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(o=[],o[c]=r):o[s]=r}r=o}return r},c=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=o.exec(r),l=c?r.slice(0,c.index):r,u=[];if(l){if(!n.plainObjects&&i.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}var d=0;while(null!==(c=a.exec(r))&&d<n.depth){if(d+=1,!n.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+r.slice(c.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t?r.assign({},t):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!==typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=!0===n.ignoreQueryPrefix,n.delimiter="string"===typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"===typeof n.depth?n.depth:o.depth,n.arrayLimit="number"===typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"===typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"===typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"===typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"===typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"===typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"===typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||"undefined"===typeof e)return n.plainObjects?Object.create(null):{};for(var i="string"===typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},l=Object.keys(i),u=0;u<l.length;++u){var d=l[u],f=c(d,i[d],n);s=r.merge(s,f,n)}return r.compact(s)}},b313:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},b7c6:function(e,t,n){var r=n("f548");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("c24d9012",r,!0,{sourceMap:!1,shadowMode:!1})},cae0:function(e,t,n){"use strict";n.r(t);var r=n("8fb2"),i=n("65c0");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("869c");var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"a94f0c2c",null);t["default"]=s.exports},d233:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){var t;while(e.length){var n=e.pop();if(t=n.obj[n.prop],Array.isArray(t)){for(var r=[],i=0;i<t.length;++i)"undefined"!==typeof t[i]&&r.push(t[i]);n.obj[n.prop]=r}}return t},a=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(n[r]=e[r]);return n},s=function e(t,n,i){if(!n)return t;if("object"!==typeof n){if(Array.isArray(t))t.push(n);else{if("object"!==typeof t)return[t,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if("object"!==typeof t)return[t].concat(n);var o=t;return Array.isArray(t)&&!Array.isArray(n)&&(o=a(t,i)),Array.isArray(t)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(t,o)?t[o]&&"object"===typeof t[o]?t[o]=e(t[o],n,i):t.push(n):t[o]=n}),t):Object.keys(n).reduce(function(t,o){var a=n[o];return r.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t},o)},c=function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},l=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),n="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var i=t[r],a=i.obj[i.prop],s=Object.keys(a),c=0;c<s.length;++c){var l=s[c],u=a[l];"object"===typeof u&&null!==u&&-1===n.indexOf(u)&&(t.push({obj:a,prop:l}),n.push(u))}return o(t)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:a,assign:c,compact:d,decode:l,encode:u,isBuffer:p,isRegExp:f,merge:s}},f548:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.logo[data-v-a94f0c2c]{margin-top:%?150?%;width:100%;height:%?150?%}.logo .img[data-v-a94f0c2c]{width:100%;height:100%}.m_200[data-v-a94f0c2c]{margin-top:%?70?%;height:%?10?%}.input[data-v-a94f0c2c]{margin-top:%?50?%;width:100%;border:none;border-bottom:%?1?% solid #ddd;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input .icon[data-v-a94f0c2c]{width:%?50?%;height:%?50?%}.input .input1[data-v-a94f0c2c]{margin-left:%?30?%;height:100%}.bottom[data-v-a94f0c2c]{width:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;color:#999;position:fixed;bottom:%?20?%}.bottom .bbox[data-v-a94f0c2c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto}.bottom .bbox .pic_img[data-v-a94f0c2c]{width:%?40?%;height:%?40?%;margin-right:%?20?%}.btn1[data-v-a94f0c2c]{width:100%;background:#7e2c2e;color:#fff;margin:0;padding:0;list-style:none;outline:none;margin-top:%?150?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?36?%;font-weight:600;border:none;-webkit-border-radius:%?10?%;border-radius:%?10?%}',""])}}]);