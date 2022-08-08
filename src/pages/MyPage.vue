<template>
  <q-page class="flex flex-center">
    <q-img class="q-ma-md"
      alt="Quasar image"
      src="images/nasa_images/stsci-h-2010a-d-1280x720.png">
    </q-img>
    <div class="full-width text-center">
        Quasar Image coutesy of NASA
     </div>
    <div class="text-center">
    <q-btn label="My Page" color="green" to="mypage">   </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, version } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    onMounted(() => {
      console.log('Vue version:' + version)
      // alert('Vue version :' + version)
    })
  }
})
</script>
