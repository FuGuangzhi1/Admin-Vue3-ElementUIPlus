import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

let routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: 'Show',
    children: [{
      path: '/Show',
      name: 'Show',
      component: () => import('../views/Show.vue')
    },
    {
      path: '/Journal',
      name: 'Journal',
      component: () => import('../views/PersonalManagement/Journal.vue')
    },
    {
      path: '/PersonalInfo',
      name: 'PersonalInfo',
      component: () => import('../views/PersonalManagement/PersonalInfo.vue')
    },
    {
      path: '/Study',
      name: 'Study',
      component: () => import('../views/PersonalManagement/Study.vue')
    },
    {
      path: '/Permissions',
      name: 'Permissions',
      component: () => import('../views/systemManagement/Permissions.vue')
    },
    {
      path: '/Role',
      name: 'Role',
      component: () => import('../views/systemManagement/Role.vue')
    },
    {
      path: '/UserManage',
      name: 'UserManage',
      component: () => import('../views/systemManagement/UserManage.vue')
    }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    // 404页面  
    path: "/:pathMatch(.*)",
    component: () => import('../components/page/NotFound.vue'),
  },
]
// let routerData: any = await getMenuAsync()
// let routerDatachildren: any = routerData.children
// routerDatachildren.forEach(element => {
//   routes.push({
//     path: `/${element.path}`,
//     name: 'element.path',
//     component: () => import('../views/About.vue')
//   })
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 路由守卫判断是否登录
router.beforeEach((to, from, next): any => {
  if (to.path === "/") return next();
  const tokenStr = window.localStorage.getItem("access_token");
  if (!tokenStr) return next("/");
  next();
});
export default router
