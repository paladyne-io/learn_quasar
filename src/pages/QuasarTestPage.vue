<template>
  <q-page class="flex flex-center" style="background: black">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"
     @after-enter="imageShown"
     @after-leave="imageHidden"
     >
      <img id="quasar_image" v-show="showImage" class="quasar_image"
        alt="Quasar image"
        src="/images/nasa_images/stsci-h-2010a-d-1280x720.png"
      />
    </transition>
    <!-- @after-leave="aboutText1Hidden"> -->
    <transition enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOut"
    @after-enter="aboutText1Shown">

    <div v-show="showText" class="quasar_image_about" >
        {{quasarInfo}}
    </div>
    </transition>

    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
    <div v-if="showText2" class="quasar_image_about2" >
        {{quasarInfo2}}
    </div>
    </transition>

    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" >
      <div v-if="showImage" class="credit_text text-h6 full-width text-center text-white">
        Quasar image courtesy of NASA
    </div>
    </transition>
    <div class="test_btn text-center full-width fixed-bottom">
      <q-btn label="Test" color="green" @click="testTransition"> </q-btn>
      <q-btn class="q-ma-md" label="Menu" color="blue" to="/"> </q-btn>
    </div>
  </q-page>

</template>

<script>
import { defineComponent, ref, onMounted } from 'vue' // version

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const showText = ref(false)
    const showText2 = ref(false)
    const showImage = ref(false)
    const quasarInfo = ref('A quasar is a supermassive black hole feeding on gas at the center of a distant galaxy with mass ranging from millions to tens of billions of solar masses.')
    const quasarInfo2 = ref('Quasar is short for quasi-stellar radio source, because astronomers first discovered quasars in 1963 as objects that looked like stars but emitted radio waves.')
    onMounted(() => {
      // console.log('Vue version:' + version)
      // alert('Vue version :' + version)
      // showText2 = true
      showImage.value = true
      // this.$refs.layout.hideLeft()
      // showText.value = true
    })
    return {
      showText,
      showText2,
      showImage,
      quasarInfo,
      quasarInfo2,
      aboutText1Shown,
      imageShown,
      imageHidden,
      testTransition
    }

    function imageShown () {
      showText.value = true
    }

    function imageHidden () {
      showText.value = false
    }

    function aboutText1Shown () {
      // delay 2 s
      setTimeout(function () { showText.value = false }, 2000)
      // delay 2 s
      setTimeout(function () { showText2.value = true }, 2000)
    }

    // function aboutText1Hidden () {
    //   showText.value = false
    // }

    function testTransition () {
      showText2.value = false
      showImage.value = !showImage.value
    }
  }
})
</script>

<style>
/* we will explain what these classes do next!
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
 */

.quasar_image {
  /* display: inline-block; */
  display: fill;
  /* margin: 0 0.5rem; */
  /* animation: fade;  referring directly to the animation's @keyframe declaration */
  animation-duration: 3s; /* don't forget to set a duration! */
}

.test_btn{
  padding-bottom: 38px;
}

.credit_text {
  padding-bottom: 42px;
}
.quasar_image_about
    {
      background: rgba(30, 37, 45, 0.265);
      color: white;
      padding:10px;
      width: 220px;
      max-height: 300px;
      height: auto;
      animation-duration: 3s;
      position:fixed;
      top: 80px;
      left: 32px;
      z-index: 2;
    }
    .quasar_image_about2
    {
      background: rgba(30, 37, 45, 0.265);
      color: white;
      padding:10px;
      width: 220px;
      max-height: 300px;
      height: auto;
      animation-duration: 3s;
      position:fixed;
      top: 400px;
      /* float: right; */
      right: 20px;
      z-index: 2;
    }
</style>
