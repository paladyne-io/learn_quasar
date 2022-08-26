<template>
  <q-page class="flex flex-center column justify-start q-mt-sm">
    <q-card>

  <transition-group tag="div" class="slide-group"
                    name="flip"
                    @before-leave="sgBeforeLeave">

    <h1 class="slide-group__header" key="title">FLIPing Slides With <code>&lt;transition-group&gt;</code></h1>

<!--
    <div :key="current" class="slide" @click="nav(1)">
      <img :src="slides[current].image" width="800" height="200" />
      <div v-html="slides[current].content"></div>
    </div>

        v-model="slide"
      transition-prev="flip-right"
      transition-next="flip-left"
      transition-duration="1500"
      @before-transition="sgBeforeLeave($el)"
      animated>
-->

      <q-carousel-slide name="image" @click="showDogStats" key="slide1">
        <img  alt="Dog image" src="images/dog.png" key="img"/>
        <div class="text-center heading full-width" key="label">
          Reggie
        </div>
      </q-carousel-slide>
   <q-carousel-slide height="500px" name="stats" key="slide2">
        <q-table
         dense
          :title="dogStatsTitle"
          :rows="rows"
          :columns="columns"
          row-key="name"
          @click="showDogStats"
        />
        </q-carousel-slide>
  </transition-group>

    <div class="full-width text-center">
      <div class="text-center q-pa-md">
        <q-btn :label="dogStatsTitle" color="blue" @click="showDogStats"> </q-btn>
      </div>
    </div>
    <div class="text-center q-pa-md">
      <q-btn label="Home" color="green" to="/"> </q-btn>
    </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const dogStatsVisible = ref(false)

const slide = ref('image')

const dogName = ref('Reggie')
const dogStatsTitle = dogName.value + "'s stats"

onMounted(() => {
  console.log('mounted')
})

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Exercise',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'Time',
    align: 'left',
    label: 'Time (m)',
    field: 'time',
    sortable: true
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Calories',
    field: 'calories',
    sortable: true
  },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true }
  /*
  ,
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
 */
]

const rows = [
  {
    name: 'Walking',
    time: 30,
    calories: 159,
    fat: 6.0
  },
  {
    name: 'Running in park',
    time: 30,
    calories: 237,
    fat: 9.0
  },
  {
    name: 'Sleeping',
    time: 90,
    calories: 10,
    fat: 1.0
  },
  {
    name: 'Chasing cars',
    time: 10,
    calories: 200,
    fat: 3.7
  },
  {
    name: 'Chasing cats',
    time: 10,
    calories: 100,
    fat: 8.0
  },
  {
    name: 'Chasing tail',
    time: 30,
    calories: 50,
    fat: 10.0
  }
]

function showDogStats () {
  console.log('showDogStats: ' + dogStatsVisible.value)
  dogStatsVisible.value = !dogStatsVisible.value
  if (dogStatsVisible.value) { slide.value = 'stats' } else slide.value = 'image'
}

function sgBeforeLeave (el) {
  console.log('sg BeforeLeave element: ' + el)
  /*

  if (typeof el === 'object') {
    console.log('is a DOM object (maybe)!')
  }

  const rect = el.getBoundingClientRect()
  el.style.width = (rect.right - rect.left) + 'px'
  el.style.height = (rect.bottom - rect.top) + 'px'
  el.style.position = 'fixed'
  el.style.top = rect.top + 'px'
  el.style.left = rect.left + 'px'
  */
}

</script>
