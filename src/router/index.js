import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/myshop',
    name: 'myshop',
    component: () => import('@/components/MyShop/index.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/components/Shop/index.vue'),
    beforeEnter: (to, from, next) => {
      console.log(`beforeEnter: ${to.name}`);
      next()
    },
  },
  {
    path: '/user/:username',
    name: 'user',
    props: route => ({ q: route.query.q, username: route.params.username }),
    component: () => import('@/components/User/index.vue'),
    children: [
      {
        path: 'todo',
        component: () => import('@/components/Todo/index.vue')
      },
      {
        path: 'blog',
        component: () => import('@/components/Blog/index.vue')
      },
      {
        path: 'setting',
        components: {
          default: () => import('@/components/Setting/settingTitle.vue'),
          body: () => import('@/components/Setting/settingBody.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  console.log(`beforeResolve ${to.name}`);
  next()
})

router.beforeEach((to, from, next) => {
  console.log(`beforeEach ${to.name}`);
  if (to.name == 'myshop') {
    next('/shop')
  } else {
    next()
  }
})


export default router
