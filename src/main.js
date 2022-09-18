import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import {upperFirst, camelCase} from 'lodash'
import "./css/common.css"

Vue.config.productionTip = false
let requireComponent = require.context(
    './components',
    false,
    /^Base[A-Z]\w+\.(vue|js)$/
)

requireComponent
    .keys()
    .forEach(function (filename) {
        let componentConfig = requireComponent(filename)
        const componentName = upperFirst(
            camelCase(
                filename
                    .split("/")
                    .pop()
                    .replace(/\.\w+$/, "")
            )
        )
        Vue.component(componentName, componentConfig.default || componentConfig)
    })

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
