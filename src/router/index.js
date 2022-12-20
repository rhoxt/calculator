import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BierView from '../views/BierView.vue'
import DegreeCalculatorView from '../views/DegreeCalculatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bier',
      name: 'bier',
      component: BierView
    },
    {
      path: "/degreeCalculator",
      name: "degreeCalculator",
      component: DegreeCalculatorView
    }
  ]
})

export default router
