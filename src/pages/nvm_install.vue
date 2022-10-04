<template>
<q-page class="flex-center q-pa-md">
<div class="heading q-pa-md text-h5 text-bold"> Install Node using nvm</div>

<div>
<q-card flat class="q-pa-md">
<div class="heading text-subheader q-pa-sm">
How to install nvm and node
</div>
<q-btn
  :label="copyLabel"
  size="md"
  icon="fas fa-copy"
  :color="getCopyButtonColor()"
  @click="copy"
  />
<pre>
1) Install NVM by copying and pasting the curl command below into a terminal window.
     (Check the latest version here: <a href="https://github.com/nvm-sh/nvm">https://github.com/nvm-sh/nvm</a>)
   <b>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</b>
2) Close and reopen the terminal for the System to recognize the changes…
3) check that NVM is installed
       nvm -v
4) Install the latest Long Term Support version of node
       nvm install —lts
</pre>
<a href="https://github.com/nvm-sh/nvm">More information about nvm for Mac and Linux/Unix...</a>
<br>
<a href="https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows">More information about nvm for Windows...</a>
<br><br>
<div class="row full-width text-subheader q-pt-sm">
  <q-space />
  <q-btn outline style="color: goldenrod;text-align:right;" label="Start Programming" to="startprogramming" />
</div>

</q-card>
</div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue' // computed,
import { copyToClipboard } from 'quasar'

const commandString = 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'

const copied = ref(false)
const copyLabel = ref('Copy command')

function copy () {
  copyToClipboard(commandString).then(() => {
    // success!
    // console.log('Copied command to clipboard...')
    copied.value = true
    copyLabel.value = 'Copied'
  })
    .catch(() => {
      // fail
    })
}

function getCopyButtonColor () {
  // console.log('getCopyButtonColor copied.')
  if (copied.value) {
    return 'positive'
  }
  return 'info'
}

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
