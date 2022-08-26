<template>
  <q-page class="flex-center q-pa-md">
  <div class="heading q-pa-md"> Deploy to GitHub</div>

  <q-card flat class="q-pa-md">
    <div class="text-subheader q-pt-sm">
      The world is your back yard
    </div>

    <div class="q-pt-sm">
    Hosting your project/app on Github (or Gitlab) offers a number of benefits
    You have a back-up online and it makes publishing to a host such as Digital Ocean very easy.
    The general process is to commit your code to your github repository which can be either public or private

    </div>

 <div class="text-subheader q-pt-sm">
      Create a free organisation page
    </div>
    https://github.com/account/organizations/new?plan=free&ref_cta=Create%2520a%2520free%2520organization&ref_loc=cards&ref_page=%2Fpricing

  </q-card>
</q-page>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted')
})

/*
function btnClicked () {
  alert('btnClicked')
}
*/
</script>
