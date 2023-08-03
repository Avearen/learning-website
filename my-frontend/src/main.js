// * DEFAULT IMPORTS
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// * ADDITIONAL IMPORTS
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


createApp(App).use(router).mount('#app')
