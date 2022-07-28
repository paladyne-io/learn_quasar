<template>
<q-page class="flex-center q-pa-md">
<div class="heading q-pa-md text-h5 text-bold"> Visual Studio Code Terminal</div>

<div>
<q-card flat class="q-pa-md">
<div class="heading text-subheader q-pa-sm">
How to set up and use the VS Code Terminal
</div>

Choose Terminal from the View menu to display the terminal.

<q-img src="images/VSCode_Terminal.png" alt="Quasar default app screen"> </q-img>
<a href="https://code.visualstudio.com/docs/terminal/basics">For more information...</a>

<div class="text-subheader q-pt-sm">
    <q-item
          clickable
          v-ripple
          to="startprogramming"
          @click="link = 'startprogramming'"
        >
          <q-item-section nav>
          </q-item-section>
          Next: Getting started with programming
    </q-item>
</div>
</q-card>
</div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style lang="scss">
div .heading {
  background-color: $grey-1;
}
</style>

<style>
.text-subheader {
  font-family: verdana;
  font-size: 16px;
  font-weight: bold;
  color:darkblue;
}
</style>
