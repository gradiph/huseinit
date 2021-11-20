import { createStore, createLogger } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
    count: 1,
})

const store = createStore({
    state,
    getters,
    actions,
    mutations,
    strict: true,
    plugins: [
        createLogger()
    ],
    modules: {

    },
})

export default store
