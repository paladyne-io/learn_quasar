
<!--
  This is identical not sure why...
  <template>
 <component :is="DarkModeComponent"/>
 <PreComponent :text="mytext"/>
</template>
-->

<template>
  <DarkModeComponent>
    <template #component>
      <!--
  <PreComponent :text="mytext"/>
  -->
      <div class="pre q-px-sm q-my-sm">
        <pre>
  {{ mytext }}
  </pre>
      </div>
    </template>
  </DarkModeComponent>
</template>

<script setup>

import DarkModeComponent from 'components/DarkModeSwitcherComponent.vue'
// import PreComponent from 'components/PreComponent.vue'

defineProps({ mytext: String })

</script>

<!--
background-light and background-dark classes
are added by the DarkMode(Aware)Component
-->

<style scoped>
div .pre {
  font-family: verdana;
  font-size: 14px;
  font-weight: bold;
}

div .background-dark {
  background-color: #cde6ff;
}

div .background-light {
  background-color: #cde6ff;
}

.body--light {
  background-color: red;
}
</style>
