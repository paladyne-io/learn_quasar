<template>
  <q-page class="flex flex-center column justify-start q-mt-lg">
      <transition
        leave-active-class="animated flipOutY"
        enter-active-class="animated flipInY"
        @after-leave="imageHidden"
      >
    <q-card flat v-show="imageVisible" class="col column">
      <div class="text-center">
        <img class="q-ma-md" alt="Dog image" src="images/dog.png" @click="showDogStats"/>
        <div class="heading full-width">Reggie</div>
      </div>
    </q-card>
    </transition>
<!--
    transition-delay='1000ms'

    <transition
        @after-leave="statsHidden"
      >
-->
    <q-card v-show="dogStatsVisible" flat class="col column">
      <div class="q-pa-md">
        <q-table
         dense
          :title="dogStatsTitle"
          :rows="rows"
          :columns="columns"
          row-key="name"
          @click="flip"
        />
      </div>
    </q-card>

    <div class="full-width text-center">
      <div class="text-center q-pa-md">
        <q-btn :label="buttonLabel" color="blue" @click="flip"> </q-btn>
      </div>
    </div>
    <!-- Explanation part -->
     <div class="q-pa-md">
      <b>Method:</b> Same as the first example, wrap the q-card in a &lt;Transition&gt; with 'v-show' or 'v-if' and a variable (i.e 'dogStatsVisible').
    The transition is triggered when the value of the variable is changed.
    </div>
  <pre>
  &lt;transition
    leave-active-class="animated flipOutY"
    enter-active-class="animated flipInY"
    @after-leave="imageHidden"
  &gt;
  &lt;q-card v-show="dogStatsVisible"&gt;
  &lt;/transition &gt;
  </pre>

  <div class="q-pa-md">
    <b>Issues.</b> The stats table is displayed too soon.
     The flip doesn't reval the other card in a natural way.
     Can partially fix by 'listening' to the imageHidden or statsHidden events,
     however the transition effect issue is still not resolved.
    </div>
    <div class="q-pa-md">

         We will try some alternative approaches in the next examples<router-link to="da_ui_example_3"></router-link>.
        <div class="text-center q-pa-md full-width">
            <q-btn label="UI Example 1" color="primary" to="da_ui_example_3"> </q-btn>
      </div>
    </div>
    <div class="text-center q-pa-md">
      <q-btn label="Home" color="green" to="/"> </q-btn>
    </div>

  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const dogStatsVisible = ref(false)
const imageVisible = ref(true)

const dogName = ref('Reggie')
const dogStatsTitle = dogName.value + "'s stats"

const buttonLabel = ref('Show stats')

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

function imageHidden () {
  console.log('imageHidden - dogStatsVisible: ' + dogStatsVisible.value)
  dogStatsVisible.value = !dogStatsVisible.value
}

/*
function statsHidden () {
  console.log('statsHidden - dogStatsVisible: ' + dogStatsVisible.value)
  // dogStatsVisible.value = !dogStatsVisible.value
  imageVisible.value = true
}
*/

function flip () {
  console.log('flip')
  if (imageVisible.value) {
    imageVisible.value = false
    buttonLabel.value = 'Hide stats'
  } else {
    imageVisible.value = true
    dogStatsVisible.value = false
    buttonLabel.value = 'Show stats'
  // dogStatsVisible.value = !dogStatsVisible.value
  }
}

function showDogStats () {
  console.log('showDogStats: ' + dogStatsVisible.value)
  imageVisible.value = false
  buttonLabel.value = 'Hide stats'
  // dogStatsVisible.value = !dogStatsVisible.value
}

/*
function showImage () {
  console.log('showImage: ' + dogStatsVisible.value)
  dogStatsVisible.value = false
  dogStatsTitle.value = 'Show stats'
  // dogStatsVisible.value = !dogStatsVisible.value
}
*/

</script>
