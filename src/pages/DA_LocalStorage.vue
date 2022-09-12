<template>
  <q-page class="flex flex-center">

  <div class="heading q-pa-md">Local Storage</div>

  <div class="q-pa-md text-subheader text-center full-width">
    This article explains the basics of reading and writing (saving) data and how to use vue's lifecycle hooks.
  </div>

   <div class="q-pa-md">
    Lifecycle hooks allow code to be run at certain times.
    For example, 'onMounted' is a special event that is called when a page loads.
    More information is <a href="https://vuejs.org/api/composition-api-lifecycle.html">here</a>.
    <p></p><p></p>This is a simple example using script setup...
    </div>
<pre>&lt;script setup&gt;
  import { onMounted } from 'vue'

  onMounted(() => {
    console.log('mounted')
    alert('I am alive!')
  })
&lt;/script&gt;</pre>

  <div class="q-pa-md">
   This can be a useful place to take some actions, for example to load data into our table.
   There are various ways to accomplish this. Let's start with the easiest which is Quasar's built-in LocalStorage plugin.
    More information is <a href="https://quasar.dev/quasar-plugins/web-storage">here</a>.

   Just a note that this is the easiest but not necessarily the best way. It's probably not suitable if you are using a shared computer and the data will be deleted if the browser cache is cleared.
  <p></p><p></p>
  First some setup. We have to load the Quasar plugin  by modifying the Quasar.conf file.
  Add 'LocalStorage' after plugins in the <b>quasar.config.js</b> file like this:
</div>
<pre>
// Quasar plugins
plugins: ['LocalStorage']
</pre>

<div class="q-pa-md">
  Then we have to import "useQuasar" to use the plugin and add some code to access local storage.
</div>
<pre>
&lt;script setup&gt;
  import { onMounted } from 'vue'
  import { useQuasar } from 'quasar'

  onMounted(() => {
    console.log('mounted')
    alert('I\'m alive!')
    const data = getData('name') &lt;-- Look up the name
  })

  const $q = useQuasar()

  function getData (dataName) {
    try {
      return $q.localStorage.getItem(dataName)
    } catch (e) {
      // data wasn't successfully read due to
      // a Web Storage API error
    }
  }
</pre>

<div class="q-pa-md">
When you use LocalStorage you save data in named pairs, for example, "name: George" and "age: 5", and you read it by asking for that name.
We created a method called getData that does this so we can call <b>getData(dataName)</b>. If the data has been saved, it will be returned by the method.
If there is no data, it will return 'undefined' which means it doesn't exist.
In Javascript if we want to check whether or not something (an object) exists, the easiest way is just to write 'if (object)...'.
</div>

 <div class="q-pa-md">
  Since we haven't yet stored any data we should add a <b>saveData()</b> function to add some new data if the data doesn't exist.
  Note: with computers it is possible that there will be an error when reading or writing data.
  The memory might be full or it might be locked. You can't always assume that reading or writing data will be successful.
  That is why we have some code called a try/catch block that catches such errors.

  <p></p><p></p>Here is our saveData function which is similar to getData except we have to provide 2 pieces of information, the name for the data and the actual data...
 </div>

<pre>
 function saveData (dataName, data) {
  try {
    return $q.localStorage.set(dataName, data)
  } catch (e) {
    // data wasn't successfully written due to
    // a Web Storage API error
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
      <q-btn label="Loading data to a table" color="primary" to="da_table"> </q-btn>
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
  console.log('mounted')
  // alert('I\'m alive!')
  const data = getData('name')
  console.log('Data: ' + data)
  if (data) {
    // alert('Data: ' + data)
  } else {
    // let's save some data
    saveData('name', 'George')
    saveData('age', '5')
    const data2 = getData('name')
    console.log('Data: ' + data2)
  }
})

const $q = useQuasar()

function getData (dataName) {
  try {
    return $q.localStorage.getItem(dataName)
  } catch (e) {
    // data wasn't successfully saved due to
    // a Web Storage API error

    console.log('Error getting data: ' + e)
  }
}

function saveData (dataName, theData) {
  try {
    $q.localStorage.set(dataName, theData)
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
