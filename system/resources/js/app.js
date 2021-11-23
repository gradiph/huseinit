import './bootstrap'
import { createApp } from 'vue'
import router from './vue-router'
import store from './store'
import App from './components/App.vue'
import Btn from './components/buttons/Btn.vue'

const APP = createApp({
    components: {
        App,
    },
})

APP.component('Btn', Btn)

APP.use(router)
APP.use(store)

APP.mount('#app')
