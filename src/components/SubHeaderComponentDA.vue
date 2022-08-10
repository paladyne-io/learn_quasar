<template>
 <DarkModeComponent>
 <template #component>
  <!-- <SubHeaderComponent :text="mytext"/> -->

  <div class="sub q-py-sm">
  {{mytext}}
  </div>

  </template>
</DarkModeComponent>
</template>

<script setup>

import DarkModeComponent from 'components/DarkModeComponent.vue'
// import SubHeaderComponent from 'components/SubHeaderComponent.vue'

defineProps({ mytext: String })

</script>

<!--
background-light and background-dark classes
are added by the DarkMode(Aware)Component
-->

<style scoped>
 div .sub {
  font-family: verdana;
  font-size: 18px;
  font-weight: bold;
  }

  div .background-light {
    color: black;
  }

  div .background-dark {
    color: #AFDBF5;
  }
</style>
