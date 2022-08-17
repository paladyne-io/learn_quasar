<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px; background-color:white; padding:14px"
    >
    <div class="full-width text-center">
        Welcome to Learning Quasar...
     </div>
    <div class="text-center">
    <q-btn label="Introduction" color="green" to="intro">   </q-btn>
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
