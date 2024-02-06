import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NineToNineteen from './NineToNineteen.vue'

const app = createApp(NineToNineteen)

app.use(router)

app.mount('#app')
