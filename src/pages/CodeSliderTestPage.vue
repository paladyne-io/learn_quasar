<template>
<q-card>
  <code-slider-component
  :title="theTitle"
  :code="theCode"
  :view="theView">
  </code-slider-component>
</q-card>

</template>
<script setup>

/*
Put common elements and functionality in the component
e.g. in this case we want the functionality to switch between a div showing the code
with some visual elements (such as a 'fab' to show and copy the code.)

Then in the parent (often a page) import the component and add it to the template
you can convert the camelCase style to kebab-case in the template.

Then we pass data that is unique in props to the component.
In this case we will pass the raw code and the view of the code.
The code can be formatted or raw. The view is a compound Javascript object defined in JSON.

if necessary the component can emit data up to the parent, for example to trigger functions in the page.

*/

import { ref } from 'vue'
import CodeSliderComponent from 'src/components/CodeSliderComponent.vue'

// const $q = useQuasar()
// const platform = $q.platform

const slide = ref('slide1')

const slides = [
  { id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1', text: 'This is Slide 1' },
  { id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2', text: 'This is Slide 2' },
  { id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3', text: 'This is Slide 3' },
  { id: 4, name: 'slide4', src: 'https://picsum.photos/800/600?random=4', text: 'This is Slide 4' }]

const theView = ref({ view: { slide, slides } })
const theCode = ref('view goes here')
const theTitle = ref('title goes here')

</script>

<style>
.my-element {
  animation: fadeIn;  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s; /* don't forget to set a duration! */
}
</style>
