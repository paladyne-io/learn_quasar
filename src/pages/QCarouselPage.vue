<template>
  <!--
  @after-enter="codeShown"
  @after-leave="codeHidden"
  -->
  <transition appear enter-active-class="animated slideInLeft" :duration="1000"
    leave-active-class="animated slideOutLeft">
    <q-card v-if="showCodeSwitch">
      <div class="q-pa-md heading">Code</div>
      <div class="q-px-md">
        Copy the code using the copy button on the right and paste it into your project.
      </div>
      <q-page-sticky class="z-top" position="top-right" :offset="[20, 20]">
        <q-btn fab icon="fa-solid fa-images" color="accent" @click="showCode" />
      </q-page-sticky>
      <q-page-sticky class="z-top" position="top-right" :offset="[80, 20]">
        <q-btn fab icon="fa fa-copy" :color="copyButtonColor" @click="copy" />
      </q-page-sticky>
      <div class="q-px-md">
        <pre style="word-wrap: break-word; white-space: pre-wrap;" ref="codeToCopy">
&lt;template&gt;
 &lt;q-carousel
    v-model="slide"
    animated
    arrows
    :autoplay=true
    navigation
    infinite
    transition-prev="slide-left"
    transition-next="slide-right"
    transition-duration="2500"
  &gt;
  &lt;q-carousel-slide
    v-for="slide in slides" :key="slide.id"
    class="my-element"
    :name="slide.name"
    :img-src="slide.src"
  /&gt;
 &lt;/q-carousel&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import { ref } from 'vue'
  const slide = ref('slide1')

  const slides = [
    {id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1'},
    {id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2'},
    {id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3'},
    {id: 4, name: 'slide4', src: 'https://picsum.photos/800/600?random=4'}
  ]
&lt;/script&gt;

&lt;style&gt;
  .my-element {
    animation: fadeIn;  /* referring directly to the animation's @keyframe declaration */
    animation-duration: 5s; /* don't forget to set a duration! */
  }
&lt;/style&gt;
</pre>
      </div>
    </q-card>
  </transition>
  <q-card v-if="!showCodeSwitch">
    <div class="q-pa-md">
      <q-page-sticky class="z-top" position="top-right" :offset="[20, 20]">
        <q-btn fab icon="code" color="accent" @click="showCode" />
      </q-page-sticky>

      <q-carousel v-model="slide" animated arrows :autoplay=true navigation infinite transition-prev="slide-left"
        transition-next="slide-right" transition-duration="2500">
        <q-carousel-slide v-for="slide in slides" :key="slide.id" class="my-element" :name="slide.name"
          :img-src="slide.src" />

      </q-carousel>

    </div>

    <div ref="header" class="text-center text-deep-purple-8 text-weight-medium full-width text-h6 q-pa-lg">
      <a href="https://quasar.dev/vue-components/carousel">Q-Carousel </a>with 2 transitions (Slide-right by Quasar and
      fade from animate.css)
    </div>

    <div class="text-grey-8 text-weight-medium full-width q-pa-md">
      To run this in your own app you will need to modify the quasar.config.js file by uncommenting <b>animations :
        'all'</b>.
      Delete the // characters at the beginning of the line and save the file.
      <div class="q-pt-sm text-center">
        <q-img src="/images/quasar_conf_animations.png" alt="quasar.config.js screenshot" style="max-width: 500px;" />
      </div>

      <br>
      While you have the file open, you might want to do the same for <b>fontawesome-v6</b> to allow you to use
      <a href='https://fontawesome.com'>Font-Awesome</a> icons in buttons and other components.
      <div class="q-pt-sm text-center">
        <q-img src="/images/quasar_conf_font_awesome.png" alt="quasar.config.js screenshot 2" style="max-width: 500px;" />
      </div>

    </div>
  </q-card>
</template>

<script setup>

import { ref } from 'vue'
import { copyToClipboard, useQuasar } from 'quasar'

const $q = useQuasar()
// const platform = $q.platform

const slide = ref('slide1')
const codeToCopy = ref()
const showCodeSwitch = ref(false)
const copied = ref(false)
const copyLabel = ref('Copy code')
const copyButtonColor = ref('info')

function showCode() {
  console.log('Show code')
  showCodeSwitch.value = !showCodeSwitch.value
}

const slides = [
  { id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1', text: 'This is Slide 1' },
  { id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2', text: 'This is Slide 2' },
  { id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3', text: 'This is Slide 3' },
  { id: 4, name: 'slide4', src: 'https://picsum.photos/800/600?random=4', text: 'This is Slide 4' }]

function copy() {
  if ($q.platform.is.mac) {
    //
  }
  const result = confirm('This action might replace the contents of your clipboard.')
  if (!result) {
    return
  }
  // }

  copyToClipboard(codeToCopy.value.textContent).then(() => {
    // console.log('Copied to clipboard...')
    copied.value = true
    copyLabel.value = 'Copied'
    copyButtonColor.value = 'positive'

    // copyButtonColor.value = 'info'
  })
    .catch(() => {
      // fail
    })
}

</script>

<style>
.my-element {
  animation: fadeIn;
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s;
  /* don't forget to set a duration! */
}
</style>
