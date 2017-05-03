/**
 * Created by Vouill on 26/04/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { gebHandler } from 'vue-geb'
Vue.use(Vuex)

const actions = {
  open_modal: ({commit}, payload) => {
    gebHandler.emit(payload)
  }
}

export default new Vuex.Store({
  actions,
})
