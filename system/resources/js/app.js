import { createApp } from 'vue'
import router from './vue-router'
import store from './store'
import App from './components/App.vue'

import './bootstrap'

const app = createApp({
    components: {
        App,
    },
})

app.use(router)
app.use(store)

app.mount('#app')
