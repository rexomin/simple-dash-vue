import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Login from '../views/Login/Login.vue'
import Register from '../views/Register/Register.vue'
import LayoutPanel from '../views/Layouts/LayoutPanel.vue'

/* panel */
import Dashboard from '../views/Panel/Dashboard/Dashboard.vue'
import Users from '../views/Panel/Users.vue'
import Components from '../views/Panel/Components.vue'
import Settings from '../views/Panel/Settings.vue'
import Chat from '../views/Panel/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Hello
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/panel',
    name: 'panel',
    component: LayoutPanel,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'users',
        name: 'Users',
        component: Users
      },
      {
        path: 'chat',
        name: 'Chat',
        component: Chat
      },
      {
        path: 'components',
        name: 'Components',
        component: Components
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
