import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// const modules = import.meta.glob('./modules/*.ts')
// for (const path in modules) {
//   modules[path]().then((mod) => {
//     let route = mod.default
//     router.addRoute(route)
//     console.log(1111, router)
//   })
// }

export default router