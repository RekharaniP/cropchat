import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import MyTasks from '@/components/MyTasks'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import About from '@/components/About'
import CreateRequest from '@/components/CreateRequest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      {
        path:'/createrequest',
        name: 'createrequest',
        component: CreateRequest
      },
      {
          path: '/myTask',
          name: 'myTask',
          component: MyTasks
      },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
        
        
    },
      {
         path: '/about',
          name: 'about',
          component: About
      }
  ]
})