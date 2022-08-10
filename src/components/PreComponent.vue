<template>
  <div :class="[ darkMode ? 'background-dark' : 'background-light' ]" class="pre q-px-sm q-my-sm">
  <pre>
  {{text}}
  </pre>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
defineProps({ text: String })

const $q = useQuasar()
const darkMode = ref($q.dark.isActive)
</script>

<style scoped>
 div .pre {
  font-family: verdana;
  font-size: 14px;
  font-weight: bold;
  }

  div .background-dark {
    background-color: #00356B;
  }

  div .background-light {
    background-color: #AFDBF5;
  }

</style>
