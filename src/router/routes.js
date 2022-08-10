
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'prologue', component: () => import('pages/ProloguePage.vue') },
      { path: 'intro', component: () => import('pages/IntroStart.vue') },
      { path: 'startprogramming', component: () => import('pages/ProgrammingStart.vue') },
      { path: 'dotenv', component: () => import('pages/DotEnvFile.vue') },
      { path: 'mypage', component: () => import('pages/MyPage.vue') },
      { path: 'mypage2', component: () => import('pages/MyPage2.vue') },
      { path: 'feedback', component: () => import('pages/UserFeedbackPage.vue') },
      { path: 'preferences', component: () => import('pages/PreferencesPage.vue') },
      { path: 'helloworld', component: () => import('pages/HelloWorld.vue') },
      { path: 'programming1', component: () => import('pages/ProgrammingBasics.vue') },
      { path: 'sendemail', component: () => import('pages/EmailSendingPage.vue') },
      { path: 'vscodeterminal', component: () => import('pages/VSCodeTerminal.vue') },
      { path: 'images', component: () => import('pages/ImageCarousel.vue') },
      { path: 'components', component: () => import('pages/ComponentsAndSlots.vue') }
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
