import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BubbleContainer from '@/components/BubbleContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bubble',
      component: BubbleContainer
    }
  ]
})
