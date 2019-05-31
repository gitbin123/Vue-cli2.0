import Vue from 'vue'
import Vuex from 'vuex'
import testX from './modules/testVuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    testX
  }
})

export default store
