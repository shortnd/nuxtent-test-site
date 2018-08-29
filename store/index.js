import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
      site_info: {}
    },
    mutations: {
      setSiteInfo(state, obj) {
        state.site_info = obj
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {app}) {
        if (process.env.NODE_ENV === 'production') {
          let res = await app.$axios.$get(`${process.env.NODE_ENV}/content-api/site_info`)
          commit('setSiteInfo', res)
        } else {
          let res = await app.$axios.$get(`/site_info`)
          commit('setSiteInfo', res)
        }
      }
    }
  })
}
export default createStore