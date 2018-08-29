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
        await app.$axios.$get(`/site_info`).then(res => commit('setSiteInfo', res))
      }
    }
  })
}
export default createStore