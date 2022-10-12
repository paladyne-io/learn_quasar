<template>
<q-page class="flex-center q-pa-md">
<div class="heading q-pa-md text-h5 text-bold"> Visual Studio Code Terminal</div>

<div>
<q-card flat class="q-pa-md">
<div class="heading text-subheader q-pa-sm">
How to set up and use the VS Code Terminal
</div>

Choose Terminal from the View menu to display the terminal.

<q-img src="images/VSCode_Terminal.png" alt="VS Code Terminal screenshot"> </q-img>

On Windows, you can switch from PowerShell (default) to Command Prompt by clicking the small v (arrow) next to + at the top right of the Terminal.
Try this (and set Command Prompt as the default) if you experience errors when installing Node or Quasar.
<div class="text-center">
<q-img style="max-width: 600px;"
  src="https://code.visualstudio.com/assets/docs/terminal/basics/select-shell-dropdown.png"
  alt="Visual Studio Code Terminal select shell screenshot"
 >
</q-img>
</div>
<br><br>
<a href="https://code.visualstudio.com/docs/terminal/basics">For more information on using the terminal in Visual Studio Code...</a>

<div class="row full-width text-subheader q-pt-sm">
  <q-space />
  <q-btn outline style="color: goldenrod;text-align:right;" label="Start Programming" to="startprogramming" />
</div>

<!---
<div class="text-subheader q-pt-sm">
    <q-item
          clickable
          v-ripple
          to="startprogramming"
          @click="link='startprogramming'"
        >
          <q-item-section nav>
          </q-item-section>
          Next: Getting started with programming
    </q-item>
</div>
-->
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
