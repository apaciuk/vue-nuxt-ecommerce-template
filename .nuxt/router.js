import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bc20496 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _08628120 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _94c3c378 = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _7249e4ae = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _79ca0762 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _fc8cf5b2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _89b6f62c = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _181010d0 = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _3106d51c = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _b80b58a0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _ad1f7d26 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _27aa0f61 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _e1d707e6 = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _4b5a9ece = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _0bc20496,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _08628120,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _94c3c378,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _7249e4ae,
    name: "cart"
  }, {
    path: "/checkout",
    component: _79ca0762,
    name: "checkout"
  }, {
    path: "/contact",
    component: _fc8cf5b2,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _89b6f62c,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _181010d0,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _3106d51c,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _b80b58a0,
    name: "login"
  }, {
    path: "/products",
    component: _ad1f7d26,
    name: "products"
  }, {
    path: "/signup",
    component: _27aa0f61,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _e1d707e6,
    name: "products-details-id"
  }, {
    path: "/",
    component: _4b5a9ece,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
