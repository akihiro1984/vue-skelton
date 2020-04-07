import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

/* Library*/
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import VueHead from 'vue-head'
Vue.use(VueHead)

import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

/* PortalVue */
import PortalVue from 'portal-vue'
Vue.use(PortalVue)

/* VueCsrf */
import VueCsrf from 'vue-csrf';
Vue.use(VueCsrf, {
  selector: 'meta[name="csrf-token"]',
  attribute: 'content',
});

import VueTimeago from 'vue-timeago'
Vue.use(VueTimeago, {
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})

import { sync } from 'vuex-router-sync'
sync(store, router)

/* Config */
Vue.config.productionTip = true

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
