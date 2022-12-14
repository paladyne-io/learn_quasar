<template>
  <q-page class="flex flex-center">

  <div class="heading q-pa-md">Adding data to a table</div>

  <div class="q-pa-md text-subheader text-center full-width">
    This article explains the basics of assigning data and reactivity.
  </div>

   <div class="q-pa-md">
    A simple element such as a button probably only requires setting a label, however other more complex components, such as a table, might require loading various types of data.
    A javaScript object can be described with <a href="https://www.json.org/json-en.html"><b>JSON</b></a> (JavaScript Object Notation).
     JSON can describe an object, an array or a set of named elements.
     It is often used to save data and to send it over the network (to and from a server).
  </div>
  <div class="q-pa-md full-width text-center text-bold">
Some simple examples of JSON
  </div>
  <div class="q-pa-md full-width text-center">
  A plain JSON array is used to contain a list of items.
</div>
<pre>["John", "Sarah", "Hiroyuki", "Maria"]
</pre>
<div class="q-pa-md full-width text-center">
  An object (in this case a person) can be described by adding named elements between {}.
  An array is added inside the object.
   </div>
<pre>{"name":"John", "age":25, "hobbies":["running", "swimming", "reading"]}</pre>

 <div class="full-width text-center q-pa-md">
  A table is comprised of an array of data arranged in a grid.
 </div>
  <pre>Column 1   Column 2     Column 3
  Row 1           C2/R1         C3/R1
  Row 2           C2/R2         C3/R2
  Row 3           C2/R3         C3/R3</pre>

<div class="q-pa-md">
   Many components in Vue and Quasar use a <b>model</b>. A model is a representation of the data that applies to the component.
   The data used by the component are contained in the model and when the data in the model changes, the display will change.
   This might seem difficult to understand at first but it is related to the concept of <b>reactivity</b>.
   The component (such as a table) reacts to the changes in the model.
   Also, if the component is editable, changing the data inside the component will update the model.
    This is known as 2-way binding.
</div>
<div class="q-pa-md">
Let's look at this further using our example app.
We want to load the table data and save it when it is changed by the user.
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
]</pre>

<div class="q-pa-md">
A small side note here about data types.
Plain words such as names are called 'strings' and they have to be enclosed by single (') or double quotes (").
Numbers however do not have quotes. There is a small but important difference between 1 and "1".
There are some other types but numbers and strings are the most commonly used in the UI.
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
So the data is displayed in the table as shown below. Note the heading which is specified in "title" and the ':' before rows and columns which means 'look up the data from JavaScript'.
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

Now we have to add functions to read and write this data to local storage.
</div>
<pre>
function saveTableData () {
  console.log('Saving Table Data...')
  try {
    $q.localStorage.<b>set</b>('rows', rows)
    $q.localStorage.<b>set</b>('columns', columns)
  } catch (e) {
    // data wasn't successfully saved due to
    // a Web Storage API error
    console.log('Error saving data: ' + e)
  }
}

function readTableData () {
  console.log('Reading Table Data...')
  try {
    rows = $q.localStorage.<b>getItem</b>('rows')
    columns = $q.localStorage.<b>getItem</b>('columns')
  } catch (e) {
    // data wasn't successfully read due to
    // a Web Storage API error
    console.log('Error reading data: ' + e)
  }
}

</pre>

<div class="q-pa-md">
Notice the slightly different syntax, when getting data it is called 'getItem'.
When saving or writing, it is just called 'set'.
</div>

<div class="q-pa-md text-center full-width">
  Coming soon -  using an online database...
</div>

  <!--
    <div class="text-center q-pa-md full-width">
      <q-btn label="Using an online database" color="primary"> </q-btn>
    </div>
   -->
    <div class="text-center q-pa-md">
      <q-btn class="q-ma-sm"  label="Home" color="green" to="/"> </q-btn>
      <q-btn class="q-ma-sm" label="Examples" color="orange" to="../examples/imagegrid"> </q-btn>
      <q-btn class="q-ma-sm" label="Time for a  Game?" color="blue" to="../gameapp/rm_game/"> </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

onMounted(() => {
  console.log('Mounted. Reading table data...')
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
    // data wasn't successfully read due to
    // a Web Storage API error
    console.log('Error reading data: ' + e)
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
