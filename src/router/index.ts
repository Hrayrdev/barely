import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import AccountView from "@/views/AccountView.vue";
import ProductListView from "@/views/ProductListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Registration',
    component: RegistrationView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },

  {
    path: '/myAccount',
    name: 'Account',
    component: AccountView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productList',
    name: 'productList',
    component: ProductListView
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
