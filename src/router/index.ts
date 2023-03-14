import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AccessErrorBoundary from '@/components/AccessErrorBoundary.vue'
import { useAuthStore } from '@/stores/authStore';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movie',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/MovieView.vue'),
    beforeEnter: checkAuthenticated
  },
  {
    path: '/boundary',
    name: 'boundary',
    component: AccessErrorBoundary,
    props: {type: 'role' ,message: "Your DFNX account has been created. Now you’ll need to contact us to be granted access to your company’s information. <br> Follow with a link to “Customer Registration” at this address:", link: 'register@dfnfreight.com'},
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    template: "<div>Helloo.....?</div>",
    component: AccessErrorBoundary,
    props: {type: 'url found', message: "<strong>404 - </strong>Sorry, the page you're looking for cannot be found Visit our", link: 'Homepage'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
2554.93

function checkAuthenticated (to: RouteLocationNormalized) {
  console.log('useAuthStore().hasRole', useAuthStore().hasRole)
  if(useAuthStore().isAuth && !useAuthStore().hasRole && to.name !== "home" ){
    console.log('here..?')
    return {name: "boundary"}
  }

  if(!useAuthStore().isAuth && to.name !== "home") {
    console.log('no....')
    return {name: "home"}
  }
}

export default router
