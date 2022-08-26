<template>
  <q-page class="flex flex-center">
    <div class="row border full-width q-pa-md">
      <div class="col-12 col-md-6 text-center">
        <q-img class="q-ma-md" style="height:480px; width:350px"  alt="Dog image" src="images/dog.png" />
      </div>

      <transition
        appear
        enter-active-class="animated bounceIn"
        leave-active-class="animated fadeOut"
      >
        <div v-if="dogStatsVisible" class="col-12 col-md-6">
          <div class="q-pa-md">
            <q-table
              title="My Dog"
              :rows="rows"
              :columns="columns"
              row-key="name"
            />
          </div>
        </div>
      </transition>
    </div>

    <div class="full-width text-center">
      <div class="text-center q-pa-md">
        <q-btn label="Show stats" color="blue" @click="showDogStats"> </q-btn>
      </div>
    </div>

      <!-- Explanation part -->
     <div class="q-pa-md">
     In this first example we just display the data table when the button is clicked.
     Method: Wrap the component in a &lt;Transition&gt; with 'v-if' and a variable, 'dogStatsVisible'.

     The transition is triggered when the (boolean) value of the 'dogStatsVisible' variable is changed, switching the visibility of the component.
    </div>
  <pre>
  &lt;transition
     appear
        enter-active-class="animated bounceIn"
        leave-active-class="animated fadeOut"
  &gt;
  &lt;div v-if="dogStatsVisible" class="col-12 col-md-6">
  ...
  &lt;/transition&gt;
  </pre>

  <div class="q-pa-md full-width ">
    Note that we have added some Quasar helper classes to automatically change the position of the table based on the width of the display.
     This is called Responsive design. When we load this page on a mobile phone, the table will display under the image.
      If we load it on a PC or tablet, the table wil be shown on the right side.
     Further, if we resize the browser window the display will update
  </div>

  <div class="q-pa-md">
     It works but it's pretty basic. Ideally we would like to show the data table as if it is printed on the back and visually flip the card.
    </div>
    <div class="q-pa-md full-width">
         Lets try <router-link to="2"> that</router-link>.
    </div>

    <div class="text-center q-pa-md">
      <q-btn label="Home" color="green" to="/"> </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const dogStatsVisible = ref(false)

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
    label: 'Time (minutes)',
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

]

const rows = [
  {
    name: 'Walking',
    time: 30,
    calories: 159,
    fat: 6.0
  },
  {
    name: 'Running in the park',
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
  console.log('showDogStats' + dogStatsVisible.value)
  dogStatsVisible.value = !dogStatsVisible.value
}
</script>
