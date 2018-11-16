import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/building/list',
          name: 'buildingList',
          component: () => import('./views/building/BuildingList.vue')
        }
      ]
    }
  ]
})
