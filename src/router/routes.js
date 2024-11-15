const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'page', component: () => import('pages/IndexPage.vue') }
    ]
  },  {
    path: '/test',
    component: () => import('layouts/TestLayout.vue'),

  }, {
    path: '/search',
    component: () => import('layouts/SearchLayout.vue'),

  },{
    path: '/news',
    component: () => import('layouts/NewsLayout.vue'),

  },{
    path: '/chart',
    component: () => import('layouts/ChartLayout.vue'),

  },{
    path: '/app',
    component: () => import('layouts/ListAppLayout.vue'),

  },{
    path: '/access',
    component: () => import('layouts/AppAccessLayout.vue'),

  },{
    path: '/weather',
    component: () => import('layouts/WeatherAppLayout.vue'),

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
