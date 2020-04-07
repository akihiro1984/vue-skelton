import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(Router)

const isDevelopment = process.env.NODE_ENV === 'development'

const router = new Router({
    routes,
    mode: isDevelopment ? 'hash' : 'history'
})

router.beforeResolve(async (to, from, next) => {
  next()
})

router.beforeEach(async (to, from, next) => {
  next()
})

router.afterEach((to, from) => {

})

export default router
