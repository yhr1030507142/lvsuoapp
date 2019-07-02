import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
 state : {
  dataWord : ""
 },
 mutations : {
  change : function(state, dataWord){
   state.dataWord = dataWord;
  }
 }
});
export default store