const routes = [
  {
    path: '/',
    redirect:'/setup',
  },
  {
      path: '/setup',
      name: 'setup',
      title: '测试',
      component: () => import('../test/setup.vue'), //.vue不能省略
  },
  
  {
    path: '/login',
    name: 'Login',
    title: '测试',
    component: () => import('@/views/login.vue'), //.vue不能省略
},
]
export default routes
