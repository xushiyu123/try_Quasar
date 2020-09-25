const routes = [{
  path: '/',
  component: () => import('pages/Main.vue'),
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
  path: '*',
  component: () => import('pages/Error404.vue')
}
]

export default routes
