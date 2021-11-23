export default {
    startLoading({ commit, dispatch }) {
        commit('setIsLoading', true)
    },

    stopLoading({ commit }) {
        commit('setIsLoading', false)
    },

    startApp({ commit }, payload) {
        commit('setApplicationName', payload.name)
        commit('setLang', payload.lang)
    },
}
