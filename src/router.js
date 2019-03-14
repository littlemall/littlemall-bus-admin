import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/views/Login/Login'], resolve);
const Home = resolve => require(['@/views/Home/Home'], resolve);

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
