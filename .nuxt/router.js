import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5abe5892 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _39d8ca42 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _7827ef83 = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _65755330 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _f4b664e4 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _0c211008 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3696a30b = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _d025ac0e = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _e91c705a = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _6ad922d1 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6bfa12ac = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _3ca52460 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _76ab66cc = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _bd9d008c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _5abe5892,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _39d8ca42,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _7827ef83,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _65755330,
    name: "cart"
  }, {
    path: "/checkout",
    component: _f4b664e4,
    name: "checkout"
  }, {
    path: "/contact",
    component: _0c211008,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _3696a30b,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _d025ac0e,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _e91c705a,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _6ad922d1,
    name: "login"
  }, {
    path: "/products",
    component: _6bfa12ac,
    name: "products"
  }, {
    path: "/signup",
    component: _3ca52460,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _76ab66cc,
    name: "products-details-id"
  }, {
    path: "/",
    component: _bd9d008c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
