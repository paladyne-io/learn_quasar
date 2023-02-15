<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px; background-color:white; padding:14px">
    <div class="full-width text-center">
      Welcome to Learn Quasar...<br>
      Updated: {{ updatedDate }}
    </div>

    <div class="full-width text-center">
      <q-toggle v-model="darkModeStatus" label="Dark mode" @click="toggled" />
    </div>

    <div class="full-width text-center">
      <q-btn label="Get started" color="green" to="preview"> </q-btn>
    </div>

    <div class="q-pa-sm q-gutter-sm full-width center text-center">
      <ShareNetwork v-for="(sns, index) in socialSharing.sites" :key=index class="social-btn" :network="sns"
        :url="socialSharing.url" :title="socialSharing.title" :description="socialSharing.description">
        <q-btn round flat size="xl" :class="'share-network-' + sns.toLowerCase()"
          :icon="getSocialSharingIcon(sns)"></q-btn>
      </ShareNetwork>
    </div>

  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue' //, watchEffect
import { useQuasar } from 'quasar' //, useMeta
// import { ShareNetwork } from 'vue-social-sharing'

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const $q = useQuasar()
    const darkModeStatus = ref($q.dark.isActive)
    const updatedDate = 'February 15, 2023'

    const socialSharing = ref({
      url: 'https://learn-quasar-p764s.ondigitalocean.app/learn_quasar/',
      title: 'Learn Quasar app',
      description: 'Try this free app to learn the Quasar framework and vue.js, step by step.',
      sites: ['Facebook', 'Twitter', 'Linkedin', 'Line', 'Reddit'] //, 'Fakeblock'
    })

    // useMeta(metaData)

    function getSocialSharingIcon(e) {
      // console.log('getSocialSharingIcon: ' + e)
      switch (e.toLowerCase()) {
        case 'facebook':
          return 'fa-brands fa-facebook'
        case 'twitter':
          return 'fa-brands fa-twitter'
        case 'linkedin':
          return 'fa-brands fa-linkedin'
        case 'line':
          return 'fa-brands fa-line'
        case 'reddit':
          return 'fa-brands fa-reddit'
        default:
          return 'fa-solid fa-share-nodes'
      }
    }

    function toggled() {
      // console.log(darkModeStatus.value)
      $q.dark.toggle()
    }

    return {
      darkModeStatus,
      toggled,
      updatedDate,
      socialSharing,
      getSocialSharingIcon
    }
  }
})

/*
watchEffect((darkModeStatus) => {
  console.log('darkModeStatus: ' + darkModeStatus.value)
  // useQuasar.dark.set(darkModeStatus) // or false or "auto"
})
*/

</script>

<style>
.social-btn:any-link {
  text-decoration: none;
}

/* https://www.webnots.com/color-codes-for-social-networking-site-icons/
https://gist.github.com/ksloan/d1b9ace61fddd2356ebf
*/
.share-network-facebook {
  color: #3b5998;
  background: radial-gradient(ellipse at center, #ffffff 35%, #23bc2b00 35%);
  /* background: no-repeat center/44% url("/images/white_7x7_round.png"); */
}

/* #55acee #00aced */
.share-network-twitter {
  color: #1DA1F2;
}

/* #0072b1 #007bb6 */
.share-network-linkedin {
  color: #0077B5;
  /* background: no-repeat center/46% url("/images/white_7x7_square.png"); */
  background: radial-gradient(ellipse at center, #ffffff 34%, #23bc2b00 32%);
}

/* #00c300 */
.share-network-line {
  color: #00B900;
  /* background: no-repeat center/40% url("/images/white_7x7_square.png"); */
  background: radial-gradient(ellipse at center, #ffffff 34%, #23bc2b00 32%);
}

.share-network-reddit {
  color: #FF4500;
  /* background: no-repeat center/38% url("/images/white_7x7_round.png"); */
  background: radial-gradient(ellipse at center, #ffffff 34%, #23bc2b00 32%);
}
</style>
