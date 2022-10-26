<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px; background-color:white; padding:14px"
    >
    <div class="full-width text-center">
        Welcome to Learn Quasar...<br>
        Updated: {{updatedDate}}
     </div>
     <div class="full-width text-center">
      <q-toggle
      v-model="darkModeStatus"
      label="Dark mode"
      @click="toggled"
    />
  </div>

    <div class="text-center">
    <q-btn label="Introduction" color="green" to="intro"> </q-btn>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue' //, watchEffect
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const $q = useQuasar()
    const darkModeStatus = ref($q.dark.isActive)

    const updatedDate = 'October 19, 2022'

    function toggled () {
      // console.log(darkModeStatus.value)
      $q.dark.toggle()
    }

    return {
      darkModeStatus,
      toggled,
      updatedDate
    }
  }
})

/*
watchEffect((darkModeStatus) => {
  console.log('darkModeStatus: ' + darkModeStatus.value)
  // useQuasar.dark.set(darkModeStatus) // or false or "auto"
})
*/

</script>
