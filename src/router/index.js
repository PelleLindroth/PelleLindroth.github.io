import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import CV from '../views/CV.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
})

export default router
