<template>
  <q-page class="flex flex-center">
    <div>
    <q-img width="400px" class="q-ma-md"
      alt="My dog app image"
      src="images/MyDogApp.png"/>
  </div>

  <div class="q-pa-md">
  Let's make a dummy app to learn some more features.
  This app will have a picture of our pet (or child or favorite movie star) together with a table showing some information about it.
  We'll learn how to save and load data, first from our local device and later from an online database.
  Also, we will add some transitions to make the information display more interesting.
 <br><br>
  Note that we added another layout to better simulate a separate app.
   If you examine the source code (from Github) you will see that it adds a different header and footer.
   The layout also contains the side menu which has been modified as well. Examine the code in DummyAppLayout to better understand these changes.
  </div>
    <div class="text-center q-pa-md full-width">
      <q-btn label="Get started" color="primary" to="da_ui_example_1"> </q-btn>
    </div>
    <div class="text-center q-pa-md">
      <q-btn label="Home" color="green" to="/"> </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted')
})

/*
function btnClicked () {
  alert('btnClicked')
}
*/
</script>
