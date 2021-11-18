import { createApp } from 'vue'

import App from './components/App.vue'

import './bootstrap'

const app = createApp({
    components: {
        App,
    },
})

app.mount('#app')
