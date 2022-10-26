<template>
<q-page class=" q-mt-sm">
 <q-card flat class="">
  <q-carousel height="500px"
    v-model="slide"
      transition-prev="flip-right"
      transition-next="flip-left"
      transition-duration="1500"
      @before-transition="sgBeforeLeave($el)"
      animated>
      <q-carousel-slide name="image" class="text-center" @click="showDogStats">
        <img  alt="Dog image" src="/images/dog.png" />
        <div class="text-center heading full-width">
          Reggie
        </div>
      </q-carousel-slide>
      <q-carousel-slide height="500px" name="stats">
        <q-table
         width="400px"
         dense
          :title="dogStatsTitle"
          :rows="rows"
          :columns="columns"
          row-key="name"
          @click="showDogStats"
        />
      </q-carousel-slide>
 </q-carousel>

      <div class="text-center q-pa-md">
        <q-btn :label="buttonLabel" color="blue" @click="showDogStats"> </q-btn>
      </div>

     <!-- Explanation part -->
     <div class="q-ma-md">
      <b>Method:</b> Use a QCarousel with its built-in transition triggers, 'transition-prev' and 'transition-next'.
    The transition is triggered when the slide is changed.
      </div>
<pre>
&lt;q-carousel height="500px"
  v-model="slides"
  transition-prev="flip-right"
  transition-next="flip-left"
  transition-duration="1500"&gt;
  &lt;q-carousel-slide name="image" @click="showDogStats"&gt;
  &lt;/q-carousel-slide&gt;
&lt;/q-carousel&gt;
</pre>

  <div class="q-pa-md">
     <b> Issues.</b> The transition is smooth but there is a delay afterwards and the top part of the stats table is visible underneath.
  I can't find a way to change the focal point of the transition.
  </div>
  <div class="q-pa-md">
      Let's try another way<router-link to="da_ui_example_5"></router-link>.
  </div>
    <div class="text-center q-pa-md full-width">
      <q-btn label="UI Example 3" color="blue" to="da_ui_example_5"> </q-btn>
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

const buttonLabel = ref('Show/Hide stats')

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
    width: '400px',
    headerStyle: 'width: 400px',
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
