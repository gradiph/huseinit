import { createStore, createLogger } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const STATE = () => ({
    applicationName: '',
    isLoading: true,
    lang: '',
})

export default createStore({
    state: STATE,
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
