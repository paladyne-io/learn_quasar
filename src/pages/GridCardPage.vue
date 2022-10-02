<template>
  <q-page padding>
    <grid-cards>
      <q-card :key="item.id" v-for="item in items" class="q-ma-sm">
        <q-card-section>
         <div class="text-h6">{{item.name}}</div>
         <div class="text-subtitle2">{{item.description}}</div>
         <q-img
         alt="picture"
         :src="item.src"
       />
       <!-- style="width: 300px;"
        width:240px
        -->
        </q-card-section>
      </q-card>
     </grid-cards>
  </q-page>
</template>

<!--
  https://dalezak.medium.com/reusable-component-for-responsive-grid-of-cards-in-quasar-using-colcade-e2636247b0b
  https://codepen.io/jburks/pen/GRRvjGM
-->

<script setup>
import gridCards from 'components/GridCards.vue'
const items = [
  { id: 1, name: 'Image 1', src: 'https://picsum.photos/800/600?random=1', description: 'This is image 1' },
  { id: 2, name: 'Image 2', src: 'https://picsum.photos/800/600?random=2', description: 'This is image 2' },
  { id: 3, name: 'Image 3', src: 'https://picsum.photos/800/600?random=3', description: 'This is image 3' },
  { id: 4, name: 'Image 4', src: 'https://picsum.photos/800/600?random=4', description: 'This is image 4' }
]

</script>
