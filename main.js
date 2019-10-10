import Vue from 'vue'
import App from './App'
import './static/style/common.css' 
import JsEncrypt from 'jsencrypt/bin/jsencrypt'
import echarts from 'echarts' 
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import store from './store'
Vue.prototype.$store = store;
Vue.use(VueQuillEditor) 
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false 
Vue.prototype.$api = 'http://lsms.gzbigbang.net/lsmsManager/'
Vue.prototype.$api1 = 'http://lsms.gzbigbang.net'
//Vue.prototype.$api = 'http://192.168.0.104:8080/'  
//Vue.prototype.$api="http://java.gzbigbang.cn/lsmsApp/" 
App.mpType = 'app'   
const app = new Vue({ 
    ...App 
})  
app.$mount() 
   