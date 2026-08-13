import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/leistungen', name: 'leistungen', component: () => import('../views/Leistungen.vue') },
  { path: '/schwerpunkte', name: 'schwerpunkte', component: () => import('../views/Schwerpunkte.vue') },
  { path: '/ueber-mich', name: 'ueber-mich', component: () => import('../views/UeberMich.vue') },
  { path: '/blog', name: 'blog', component: () => import('../views/Blog.vue') },
  { path: '/blog/beikoststart', name: 'blog-beikoststart', component: () => import('../views/blog/Beikoststart.vue') },
  { path: '/blog/picky-eating', name: 'blog-picky-eating', component: () => import('../views/blog/PickyEating.vue') },
  { path: '/blog/schwangerschaft', name: 'blog-schwangerschaft', component: () => import('../views/blog/Schwangerschaft.vue') },
  { path: '/buchung', name: 'buchung', component: () => import('../views/Buchung.vue') },
  { path: '/kontakt', name: 'kontakt', component: () => import('../views/Kontakt.vue') },
  { path: '/impressum', name: 'impressum', component: () => import('../views/Impressum.vue') },
  { path: '/datenschutz', name: 'datenschutz', component: () => import('../views/Datenschutz.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return savedPosition || { top: 0 }
  },
})

export default router
