<template>

  <div class="q-pa-md">
     <q-carousel
       v-model="slide"
       animated
       arrows
       :autoplay=true
       navigation
       infinite
       transition-prev="slide-left"
       transition-next="slide-right"
       transition-duration="2500"
     >
       <q-carousel-slide
         v-for="slide in slides" :key="slide.id"
         class="my-element"
         :name="slide.name"
         :img-src="slide.src"
       />
     </q-carousel>
   </div>

   <div ref="header" class="text-center text-deep-purple-8 text-weight-medium full-width text-h6 q-pa-lg">
    <a href="https://quasar.dev/vue-components/carousel">Q-Carousel </a>with 2 transitions (Slide-right by Quasar and fade from animate.css)
  </div>

   <div class="text-grey-8 text-weight-medium full-width q-pa-md">
   To run this in your own app you will need to modify the quasar.config.js file by uncommenting <b>animations : 'all'</b>.
   (Delete the // characters at the beginning of the line and save the file.)
   <div class="q-pt-sm text-center" >
    <q-img src="/images/quasar_conf_animations.png" alt="quasar.config.js screenshot" style="max-width: 500px;"/>
  </div>

   <br>
   While you have the file open, you might want to do the same for <b>fontawesome-v6</b> to allow you to use Font-Awesome icons in buttons and other components.
   <div class="q-pt-sm text-center" >
    <q-img src="/images/quasar_conf_font_awesome.png" alt="quasar.config.js screenshot 2" style="max-width: 500px;"/>
  </div>

  </div>

  </template>

<script setup>
import { ref } from 'vue'

const slide = ref('slide1')

const slides = [
  { id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1', text: 'This is Slide 1' },
  { id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2', text: 'This is Slide 2' },
  { id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3', text: 'This is Slide 3' },
  { id: 4, name: 'slide4', src: 'https://picsum.photos/800/600?random=4', text: 'This is Slide 4' }]

</script>

<style>
.my-element {
  animation: fadeIn;  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s; /* don't forget to set a duration! */
}
</style>
