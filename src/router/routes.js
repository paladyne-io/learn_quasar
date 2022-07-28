
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'intro', component: () => import('pages/IntroStart.vue') },
      { path: 'startprogramming', component: () => import('pages/ProgrammingStart.vue') },
      { path: 'helloworld', component: () => import('pages/HelloWorld.vue') },
      { path: 'vscodeterminal', component: () => import('pages/VSCodeTerminal.vue') },
      { path: 'images', component: () => import('pages/ImageCarousel.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
