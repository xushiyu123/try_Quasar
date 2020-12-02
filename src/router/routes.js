const routes = [{
  path: '/',
  component: () => import('pages/LogIn.vue'),
  children: [{
    path: '/user_history',
    component: () => import('pages/childPages/UserHistory.vue')
  }, {
    path: '/signal',
    component: () => import('pages/childPages/Signal.vue')
  }, {
    path: '/plot',
    component: () => import('pages/childPages/Plot.vue')
  }]
},
// Always leave this as last one,
// but you can also remove it
{
  path: '/',
  component: () => import('pages/Error404.vue')
},
{
  path: '/SignUp',
  component: () => import('pages/SignUp.vue')
}]

export default routes
