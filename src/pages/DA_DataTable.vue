<template>
  <q-page class="flex flex-center">

  <div class="heading q-pa-md">Adding data to a table</div>

  <div class="q-pa-md text-subheader text-center full-width">
    This article explains the basics of assigning data and reactivity.
  </div>

   <div class="q-pa-md">
    A simple element such as a button probably only requires setting a label, however other more complex elements might require loading various types of data.
    A javascript object can be described with JSON (JavaScript Object Notation). JSON is a set of named objects.
  A table is actually a form of array. An array is a set of data than can be arranged in a grid.
  </div>
  <pre>
  Header 1    Header 2     Header 3
  Row 1         H2/R1         H3/R1
  Row 2         H2/R2         H3/R2
  Row 3         H2/R3         H3/R3
  </pre>

   <div class="q-pa-md">

   Many elements in Vue and Quasar use a model. A model is a representation of the data that applies to the element.
   The contents of the element are contained in the model and when you add or change data in the model the display will change.
   This might seem difficult to understand at first but it is related the concept of reactivity.
   The element (such as a table) reacts to the changes in the model.
    Also if the element is editable, changing the data will update the model.

<div class="q-pa-md">
Let's look at in terms of our example app.
We want to load the table data and save it if it changed by the user.
(Using local storage means that the data is saved even after we close the page or app.)

</div>
<pre>
let columns = [
  {
    name: 'exercise', label: 'Exercise', field: 'exercise', align: 'left'
  },
  {
    name: 'time', label: 'Time', field: 'time'
  },
  {
    name: 'calories', label: 'Calories', field: 'calories'
  }
]
let rows = [
  {
    exercise: 'Walking', time: 30, calories: 100
  },
  {
    exercise: 'Chasing cars', time: 60, calories: 400
  }
]

</pre>
</div>

   <div class="q-pa-md">
The syntax for a table looks like this and you can see the columns are assigned to the variable "columns" and rows to "rows"

</div>
<pre>
  &lt;q-table
    dense
    title="Data"
    :rows="rows"
    :columns="columns"
    row-key="name"
  /&gt;
</pre>

<div class="q-pa-md">
So the data is displayed in the table like this (note the heading which is specified in "title" )
</div>

<div class="q-pa-md full-width">
    <q-table
      dense
      title="Data"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>

<div class="q-pa-md">
Now we had to add functions to read and write this data to local storage.DA_RocketMan</div>

<pre>
 function saveTableData () {
  console.log('saving TableData...')
  console.log('Rows: ' + rows)

  try {
    $q.localStorage.set('rows', rows)
    $q.localStorage.set('columns', columns)
  } catch (e) {
    // data wasn't successfully written due to
    // a Web Storage API error
    console.log('Error saving data: ' + e)
  }
}

function readTableData () {
  try {
    rows = $q.localStorage.getItem('rows')
    columns = $q.localStorage.getItem('columns')
  } catch (e) {
    // data wasn't successfully saved due to
    // a Web Storage API error
    console.log('Error getting data: ' + e)
  }
}

</pre>

<div class="q-pa-md">
Notice the slightly different syntax, when getting data it is called 'getItem'.
When saving or writing, it is just called 'set'.
</div>

<div class="q-pa-md text-center full-width">
Next - connecting our 'getData' function to the table.
</div>

    <div class="text-center q-pa-md full-width">
      <q-btn label="Loading data to a table" color="primary"> </q-btn>
    </div>

    <div class="text-center q-pa-md">
      <q-btn label="Home" color="green" to="/"> </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

onMounted(() => {
  console.log('mounted. Reading table data...')
  // alert('I\'m alive!')
  // const data = getData('name')

  saveTableData()

  readTableData()
  console.log('Rows: ' + rows)
  console.log('Columns: ' + columns)

  console.log('Rows: ' + JSON.stringify(rows))
  console.log('Columns: ' + JSON.stringify(columns))
})

const $q = useQuasar()

let columns = [
  {
    name: 'exercise', label: 'Exercise', field: 'exercise', align: 'left'
  },
  {
    name: 'time', label: 'Time', field: 'time'
  },
  {
    name: 'calories', label: 'Calories', field: 'calories'
  }
]
let rows = [
  {
    exercise: 'Walking', time: 30, calories: 100
  },
  {
    exercise: 'Chasing cars', time: 60, calories: 400
  }
]

function readTableData () {
  try {
    rows = $q.localStorage.getItem('rows')
    columns = $q.localStorage.getItem('columns')
  } catch (e) {
    // data wasn't successfully saved due to
    // a Web Storage API error
    console.log('Error getting data: ' + e)
  }
}

function saveTableData () {
  console.log('saving TableData...')
  console.log('Rows: ' + rows)

  try {
    $q.localStorage.set('rows', rows)
    $q.localStorage.set('columns', columns)
  } catch (e) {
    // data wasn't successfully written due to
    // a Web Storage API error
    console.log('Error saving data: ' + e)
  }
}

/*
function btnClicked () {
  alert('btnClicked')
}
*/
</script>
