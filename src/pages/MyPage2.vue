<template>
  <q-page class="flex flex-center">
    <div>
    <img class="q-ma-md"
      alt="Quasar image"
      src="images/nasa_images/stsci-h-2010a-d-1280x720.png">

    <div class="full-width text-subheader text-center">
        Quasar image courtesy of NASA
     </div>
       <div class="full-width text-center">
    <div class="text-center q-pa-md">
      <q-btn label="Change picture" color="blue" @click="btnClicked"> </q-btn>
    </div>

    </div>
  </div>

  <div class="q-pa-md">
  <div class="text-center">
      The code for this page
    </div>

  <pre>
  &lt;template&gt;
   &lt;q-page class="flex flex-center"&gt;
     &lt;div&gt;
     &lt;img class="q-ma-md"
      alt="Quasar image"
      src="images/nasa_images/stsci-h-2010a-d-1280x720.png"&gt;
     &lt;div class="full-width text-center"&gt;
        Quasar image courtesy of NASA
     &lt;/div>
        &lt;div class="full-width text-center"&gt;
     &lt;div class="text-center"&gt;
       &lt;q-btn label="Change picture" color="blue" @click="btnClicked"&gt;  &lt;/q-btn&gt;
     &lt;/div>
     &lt;div class="text-center">
      &lt;q-btn label="Home" color="green" to="/"&gt; &lt;q-btn&gt;
     &lt;div&gt;
      &lt;/div&gt;
   &lt;/div&gt;
   &lt;/q-page&gt;
 &lt;/template&gt;

 &lt;script setup&gt;
    import { onMounted } from 'vue'

    onMounted(() => {
      console.log('mounted')
    })

    function btnClicked () {
      alert('btnClicked')
    }
 &lt;/script&gt;
  </pre>
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

function btnClicked () {
  alert('btnClicked')
}
</script>
