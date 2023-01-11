import Vue from 'vue'
import VueRouter from 'vue-router'

// main_page와 sub_page 컴포넌트 모듈 가져오기
import MainPage from '../components/main_page'
import SubPage from '../components/sub_page'


Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main_page',
    component: MainPage
  },
  {
    path: '/sub',
    name: 'sub_page',
    component: SubPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const routes : [
//   {
//     // 첫 루트 페이지는 main_page로 설정
//     path:'/', name:'home', component: main_page
//   },
//   {
//     path:'/main', name:'main_page', component: MainPage
//   },
//   {
//     path:'/sub', name:'sub_page', component: SubPage
//   }
// ]
export default router
