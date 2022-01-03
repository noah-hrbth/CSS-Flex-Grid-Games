import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        
    }
})

const app = createApp(App)

app.mount('#app')

app.use(store)
