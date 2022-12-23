import { boot } from 'quasar/wrappers'
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'

export default boot(async ({ app, store, router, redirect }) => {
  app.use(VueCookieComply)
})
