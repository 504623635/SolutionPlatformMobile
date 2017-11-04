import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/index/index'
import HotSolutionList from '@/pages/index/hotSolutionList'
import GoodSolutionList from '@/pages/index/goodSolutionList'
import Question from '@/pages/index/question'
import Login from '@/pages/login/login'
import LoginCell from '@/pages/login/loginCell'


Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/login', 
      name: 'login',
      component: LoginCell
    },


    { path: '/', redirect: '/hotSolutionList'},
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
          { 
            path: '/hotSolutionList', 
            name:"hotSolutionList",
            component: HotSolutionList
          },
          { 
            path: '/goodSolutionList', 
            name:"goodSolutionList",
            component: GoodSolutionList
          },
          { 
            path: '/question', 
            name:"question",
            component: Question
          }
      ]
    }
  ]
})
