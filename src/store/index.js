import Vue from 'vue'
import Vuex from 'vuex'

import songlist from './songs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    songlist
  }
})