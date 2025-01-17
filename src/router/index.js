import { createRouter, createWebHistory } from 'vue-router'
import AddExpenseView from '@/views/AddExpenseView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ExpenseListView from '@/views/ExpenseListView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/addexpense',
      name: 'Addexpense',
      component: AddExpenseView,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView,
    },
    {
      path: '/expenselist',
      name: 'expense List',
      component: ExpenseListView,
    },
  ],
})

export default router
