import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wall from '@/components/freewall/wall'
import gantt1 from '@/views/gantt1'
import gantt2 from '@/views/gantt2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wall',
      name: 'wall',
      component: wall
    },
    {
      path: '/gantt1',
      name: 'gantt1',
      component: gantt1
    },
    {
      path: '/gantt2',
      name: 'gantt2',
      component: gantt2
    }
  ]
})
