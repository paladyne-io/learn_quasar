<template>
<q-page class="flex-center q-pa-md">

<div class="q-py-md text-h5 text-bold">Dot env file</div>
 This step is to prepare to deploy your app on a public web server.
<div>
 <div class="q-pt-sm text-subheader">
  Background
</div>
<div class="q-pt-sm">
   The key necessary to use emailjs should not be visible when viewing the source of our app when it is running in a web browser.
    Using an .env file is a common way to separate keys from the code to keep them away from prying eyes.
     If you are not aware, beginning a filename with '.' makes it invisible in the file system on your computer.
      This may make it difficult to edit the file but each OS offers a way to display hidden files.
       For now you can start with a normal text file and then change the name to '.env' when you save it.
        Make sure that the format is plain text, not rtf or another styled text format.
         The contents can be just as below. Replace the text: 'the_key_from_the_emailjs_dashboard' with your key.
 </div>

<div class="q-pt-md text-subheader">
  1. Create and configure a '.env' (dot env) file.
 </div>

 <div class="q-pa-sm bg-blue-2">
<pre>
  APP_NAME=learn_quasar
  EMAILJS_PUBLIC_KEY=the_key_from_the_emailjs_dashboard
</pre>
</div>

 <div class="q-pt-md text-subheader">
 2. Install and configure Quasar to use the dot env file
 </div>

 <div>
  First, install the <b>dotenv</b> library like before, using this command:
 </div>
 <div class="q-pa-sm bg-blue-2">
   npm add &#45;&#45;include&#61;dev dotenv
 </div>

 <div class="q-px-sm">
Then add the following line to the 'build:' section of the Quasar.conf file:</div>
<div class="q-pa-sm bg-blue-2">
<b>env: require('dotenv').config().parsed,</b>
</div>

<div class="q-px-sm">
Now the EMAILJS_PUBLIC_KEY will be read from the '.env' file by Quasar and be accessible in your app like this:
</div>
<div class="q-pa-sm bg-blue-2">Const EMAILJS_PUBLIC_KEY&#45;process&#46; env&#46; EMAILJS_PUBLIC_KEY</div>

<div class="q-px-sm">
You can do the same with the EMAILJS_SERVICE_ID and EMAILJS_TEMPLATE_ID if you like although these are not as sensitive as the API key.
</div>

<div class="row text-subheader q-pt-sm">
    <q-item class="col"
      clickable
      v-ripple
      to="startprogramming"
      @click="link = 'startprogramming'"
    >
    Previous
    </q-item>

    </div>
</div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailSendingPage',
  setup () {
    return {
    }
  }
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
