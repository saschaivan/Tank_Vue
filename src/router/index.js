import Vue from 'vue'
import VueRouter from 'vue-router'
import TankMenu from "@/views/TankMenu";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainMenu',
    component: TankMenu
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Tank.vue')
  },
  {
    path: '/controls',
    name: 'Controls',
    component: () => import('../views/Controls.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
