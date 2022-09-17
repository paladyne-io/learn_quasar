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
        <div v-if="dogStatsVisible" class="col-12 col-md-6 ">
          <div class="q-pa-md justify-center x-center" style="width:400px;">
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
        <q-btn label="Show/hide stats" color="blue" @click="showDogStats"> </q-btn>
      </div>
    </div>

      <!-- Explanation part -->
     <div class="q-pa-md">
     In this first example we just display the data table with an effect when the button is clicked.
        </div>
     <div class="q-pa-md"><b>Method:</b> Wrap the component in a &lt;Transition&gt; with 'v-if' and a variable, 'dogStatsVisible'.

     The transition is triggered when the (boolean) value of the 'dogStatsVisible' variable is changed, which switches the visibility of the component.
    </div>
  <pre>
  &lt;transition
    appear
    enter-active-class="animated bounceIn"
    leave-active-class="animated fadeOut"
  &gt;
    &lt;div v-if="dogStatsVisible" class="col-12 col-md-6"&gt;
    ...
    &lt;/div&gt;
  &lt;/transition&gt;
  </pre>

  <div class="q-pa-md full-width ">
     WIth this example we have added some Quasar helper classes to automatically change the position of the table based on the width of the display.
     When we load this page on a mobile phone, the table will display under the image.
     If we open it on a PC or large tablet, the table will be shown on the right side.
     Further, if we resize the browser window the position will adjust automatically. This is called Responsive design.
  </div>

  <div class="q-pa-md">
     It works but it's pretty basic. Ideally we would like to show the data table as if it is printed on the back and visually flip the card.
    </div>
    <div class="q-pa-md full-width">
         Lets try  that<router-link to="da_ui_example_2"></router-link>.
    </div>
         <div class="text-center q-pa-md full-width">
            <q-btn label="UI Example 1" color="primary" to="da_ui_example_2"> </q-btn>
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
    name: 'exercise',
    label: 'Exercise',
    field: 'exercise',
    align: 'left'
  },
  {
    name: 'time',
    label: 'Time',
    field: 'time'
  },
  {
    name: 'calories',
    label: 'Calories',
    field: 'calories'
  }
]

const rows = [
  {
    exercise: 'Walking',
    time: 30,
    calories: 100
  },
  {
    exercise: 'Chasing cars',
    time: 30,
    calories: 200
  }
]

function showDogStats () {
  console.log('showDogStats' + dogStatsVisible.value)
  dogStatsVisible.value = !dogStatsVisible.value
}
</script>
