import Vuex from 'vuex'

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
      nuxtServerInit: async ({commit}, {app}) => {
        let res = await app.$axios.$get(`/site_info`)
        commit('setSiteInfo', res)
      }
    }
  })
}
export default createStore