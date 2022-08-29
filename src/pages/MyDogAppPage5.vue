<template>
  <q-page class="flex flex-center q-mt-lg">
    <vue-flip v-model="flipModel" width="350px" height="480px">
      <template v-slot:front>

      <q-card style="height:480px; width:350px" class="q-pa-lg" @click="showStats">
        <q-img alt="Dog image" src="images/dog.png"/>
        <div class="text-center heading full-width">
          Reggie
        </div>
        <div class="full-width text-center">
          <div class="text-center q-pa-md">
            <q-btn class="q-ma-md" :label="showStatsLabel" color="blue" @click="showImage"> </q-btn>
          </div>
        </div>
      </q-card>
  </template>
  <template v-slot:back>
      <transition
        leave-active-class="animated fadeIn"
        enter-active-class="animated fadeOut"
        @after-leave="imageHidden"
      >
     <q-card style="height:480px; width:350px">
      <div name="stats" >
        <q-table
          :title="dogStatsTitle"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
      </div>
           <div class="full-width text-center">
          <div class="text-center q-pa-md">
            <q-btn class="q-ma-md" :label="showImageLabel" color="blue" @click="showImage"> </q-btn>
          </div>
        </div>
    </q-card>
    </transition>
  </template>
</vue-flip>

 <!-- Explanation part -->
  <div class="q-ma-md">
    <b> Method: </b> Use the Vue-flip library.
     More information is <a href="https://github.com/kgrandemange/vue-flip">here</a>.
     The transition can triggered programmatically, by changing the model, or automatically by adding "active-click" like below.
    </div>

<pre>
 &lt;vue-flip active-click width="350px" height="480px">
 &lt;template v-slot:front&gt;
 &lt;/template&gt;
</pre>

  <div class="q-pa-md">
     <b>Issues.</b> So far this is the best solution but I would prefer the text not show through the image when it starts to flip.
  </div>

  <div class="q-pa-md">
     Next: <b><router-link to="da_local_storage">Storing and restoring (reading) data</router-link>...</b>
  </div>

    <div class="text-center q-pa-md">
      <q-btn label="Home" color="green" to="/"> </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import VueFlip from 'vue-flip'

const dogStatsVisible = ref(false)

const flipModel = ref(false)

// const slide = ref('image')

const dogName = ref('Reggie')
const dogStatsTitle = dogName.value + "'s activity"

const showStatsLabel = 'Show stats'
const showImageLabel = 'Hide stats'

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
    sortable: true,
    headerStyle: 'width: 340px',
    style: 'width: 340px'
  },
  {
    name: 'Time',
    align: 'left',
    label: 'Min.',
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
  console.log('imageHidden...')
  // dogStatsVisible.value = !dogStatsVisible.value
  // if (dogStatsVisible.value) { slide.value = 'stats' } else slide.value = 'image'
  // flipModel.value = !flipModel.value
  // flipModel.value = true
}

function showStats () {
  console.log('show Stats: ' + dogStatsVisible.value)
  // dogStatsVisible.value = !dogStatsVisible.value
  // if (dogStatsVisible.value) { slide.value = 'stats' } else slide.value = 'image'
  // flipModel.value = !flipModel.value
  flipModel.value = true
}

function showImage () {
  console.log('showImage...')
  // dogStatsVisible.value = false
  flipModel.value = false
}

</script>
