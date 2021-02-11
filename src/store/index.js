import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liste:[]
  },
  mutations: {
    addText(state, text){
      state.liste.push(text);      
    }
  },
  actions: {
  },
  modules: {
  }
})
