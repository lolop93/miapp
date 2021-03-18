import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import Cuenta from '../views/Cuenta.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tiendas',
    name: 'Tiendas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tiendas.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/cuenta',
    name: 'Cuenta',
    component: Cuenta
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
