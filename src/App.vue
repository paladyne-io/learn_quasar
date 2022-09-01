<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'App',
  plugins: { Notify },

  config: {
    notify: {}
  }
})
</script>
