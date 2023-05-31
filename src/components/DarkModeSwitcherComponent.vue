<template>
 <div :class="[ darkMode ? 'background-dark' : 'background-light' ]">
  <slot name="component"></slot>
</div>
</template>

<!--
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DarkModeComponent'
})
</script>
-->

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

defineProps({
  type: [String, Object]
})

const $q = useQuasar()
const darkMode = ref($q.dark.isActive)
</script>

<!--
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
-->
