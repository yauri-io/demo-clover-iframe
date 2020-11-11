import { createApp } from 'vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

Bugsnag.start({
    apiKey: '4384355ff980cd801ed3e2eae61b2e22',
    plugins: [new BugsnagPluginVue()]
})
import App from './App.vue'
import './index.css'
import router from "./router";


createApp(App)
    .use(router)
    .mount('#app');
