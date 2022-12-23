import CookieConsent from 'vue-cookieconsent'
import { boot } from 'quasar/wrappers'
// import 'node_modules/vue-cookieconsent/vendor/cookieconsent.css'

import '../css/cookieconsent.css'

// import './theme/cookieconsent_custom.css' // custom cookie consent styles
// See: https://github.com/orestbida/cookieconsent#all-configuration-options
const consentOptions = {}

export default boot(async ({ app, store, router, redirect }) => {
  app.use(CookieConsent, consentOptions)
    .use(router)
})
