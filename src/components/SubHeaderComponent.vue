<template>
  <div class="sub q-py-sm">
  {{text}}
  </div>
</template>

<script setup>
defineProps({ text: String })
</script>

<style scoped>
 div .sub {
  font-family: verdana;
  font-size: 18px;
  font-weight: bold;
  }
/**
  .dark {
    color: lightblue;
  }
  */
</style>
