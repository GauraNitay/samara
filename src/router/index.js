import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactsView from "@/views/ContactsView.vue"
import PhilosophyView from "@/views/PhilosophyView.vue";
import OurYatraView from "@/views/OurYatraView.vue";
import NewsView from "@/views/NewsView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    component: PhilosophyView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/ouryatra',
    name: 'ouryatra',
    component: OurYatraView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
