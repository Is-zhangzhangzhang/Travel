import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Hello'
import SignUp from '@/components/signUp/SignUp'
import Home from '@/components/main/Home'
import Note from '@/components/Note/Note'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Note',
      name: 'Note',
      component: Note
    }
  ]
})
