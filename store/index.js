import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      site_info: null,
      posts_pages: null,
      pro_pages: null
    },
    mutations: {
      setSiteInfo(state, obj) {
        state.site_info = obj
      },
      setPostsPages(state, obj) {
        state.posts_pages = obj
      },
      setProPages(state, obj) {
        state.pro_pages = obj
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {app}) {
          let infoRes = await app.$axios.$get(`/site_info`)
          commit('setSiteInfo', infoRes)
          let postRes = await app.$axios.$get('/posts')
          commit('setPostsPages', postRes)
          let proRes = await app.$axios.$get('/projects')
          commit('setProPages', proRes)
      }
    }
  })
}
export default createStore