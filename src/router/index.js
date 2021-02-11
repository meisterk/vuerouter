import Vue from 'vue'
import VueRouter from 'vue-router'
import Uebersicht from '../views/Uebersicht.vue'
import Neu from '../views/Neu.vue'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'Uebersicht',
    component: Uebersicht
  },
  {
    path: '/neu',
    name: 'Neu',
    component: Neu
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
