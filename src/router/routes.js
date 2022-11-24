
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
      { path: 'mypage', component: () => import('src/pages/QuasarTestPage.vue') },
      { path: 'mypage2', component: () => import('pages/MyPage2.vue') },
      { path: 'mydogapp', component: () => import('pages/MyDogAppPage.vue') },
      { path: 'feedback', component: () => import('pages/UserFeedbackPage.vue') },
      { path: 'preferences', component: () => import('pages/PreferencesPage.vue') },
      { path: 'helloworld', component: () => import('pages/HelloWorld.vue') },
      { path: 'programming1', component: () => import('pages/ProgrammingBasics.vue') },
      { path: 'github', component: () => import('pages/GitHubDeploy.vue') },
      { path: 'sendemail', component: () => import('pages/EmailSendingPage.vue') },
      { path: 'vscodeterminal', component: () => import('pages/VSCodeTerminal.vue') },
      { path: 'nvm_install', component: () => import('pages/nvm_install.vue') },
      { path: 'images', component: () => import('pages/ImageCarousel.vue') },
      { path: 'components', component: () => import('pages/ComponentsAndSlots.vue') }
    ]
  },
  {
    path: '/dummyapp',
    component: () => import('layouts/DummyAppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MyDogAppDayOne.vue') },
      { path: 'da_ui_example_1', component: () => import('pages/MyDogAppPage.vue') },
      { path: 'da_ui_example_2', component: () => import('pages/MyDogAppPage2.vue') },
      { path: 'da_ui_example_3', component: () => import('pages/MyDogAppPage3.vue') },
      { path: 'da_ui_example_4', component: () => import('pages/MyDogAppPage4.vue') },
      { path: 'da_ui_example_5', component: () => import('pages/MyDogAppPage5.vue') },
      { path: 'da_local_storage', component: () => import('pages/DA_LocalStorage.vue') },
      { path: 'da_table', component: () => import('pages/DA_DataTable.vue') },
      { path: 'da_rm_game', component: () => import('pages/DA_RocketMan.vue') }

    ]
  },
  {
    path: '/gameapp',
    component: () => import('layouts/RocketManAppLayout.vue'),
    children: [
      { path: 'rm_game', component: () => import('pages/DA_RocketMan.vue') }
    ]
  },
  {
    path: '/examples',
    component: () => import('layouts/ExamplesLayout.vue'),
    children: [
      { path: '', component: () => import('pages/QuasarTestPage.vue') },
      { path: 'transitions', component: () => import('pages/QuasarTestPage.vue') },
      { path: 'qcarousel', component: () => import('pages/QCarouselPage.vue') },
      { path: 'imagegrid', component: () => import('pages/GridCardPage.vue') }
    ]
  },
  {
    path: '/supabase',
    component: () => import('layouts/SupabaseLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SupabaseIntroPage.vue') },
      { path: 'supabase_1', component: () => import('pages/SupabaseIntroPage.vue') }
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
