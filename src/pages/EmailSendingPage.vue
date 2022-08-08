<template>
<q-page class="flex-center q-pa-md">
<div class="q-pa-md text-h5 text-bold"> Email sending</div>

<div>
  <q-card flat class="q-pa-md">
    <div class="q-pt-sm">
      This article explains how to add a form to your app that will allow users to send an email with their comments or suggestions.
   </div>
<div class="q-pt-sm text-subheader">
  Background
</div>
  <div class="q-pt-sm">
  As presented previously, you can extend the functionality of your app by adding libraries.
   We can add the <b>emailjs</b> library to send emails from our app and collect feedback from users.
   A free account with emailjs allows you to send/receive 200 emails per month.
   Beyond this you will need to sign up for a paid account.

  Please look at the <a href="https://www.emailjs.com/">emaijs</a> webpage for other options such as adding a captcha to prevent spam.
  I recommend that you <a href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank" rel="noopener noreferrer"> create a gmail account</a> to use specifically for the email sender.
</div>

<div class="q-pt-sm">
  Note that this exercise is focused on the app. You should look at the instructions on the emailjs website explaining how to create and test a template, connect your email account etc.
</div>
<div class="q-pt-sm">
  This is the basic order of tasks.
</div>
     <div class="q-pt-sm text-subheader">
          1. Install the <b>emailjs</b> library
      </div >

        <div class="q-pt-sm">
        For this task you need to use the terminal again.
        Type "control c" (press the 'control' key and 'c' key at the same time) to exit the Quasar development environment.
        Then install the library by entering the following command:
        <div class="q-pa-sm"><b>
          npm install @emailjs/browser --save
          </b>
        </div>
          Assuming there are no errors, the library is now installed so relaunch the Quasar development environment by typing 'quasar dev'
      </div>

      <div class="q-pt-md text-subheader">
          2. Import and customise the library
      </div>
       <div class="q-pt-sm">
      After adding the library to your project, you have to add it to the page or component in the script section.
      If the file doesn't have a script section, add one like this:
     </div>
  <div class="q-pt-md text-subheader">
      3. Modify the template to display the entry fields
  </div>
  <div class="q-px-sm">
  In the <b>template</b> section of your page or component, add the presentation (html) code below.
  This is a simple html form. Study it so you can get an idea of how the email js code submits each field (using the name as a tag).
</div>

  <div class="q-pt-sm">
  This will display like this:
    <UserContactComp/>
    You can't send an email with this form but to see how it works, click the "Send Feedback" menu in the side menu.
</div>

</q-card>
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
import { defineComponent } from 'vue' //, onMounted, version
import UserContactComp from 'components/UserContactDummy.vue'

export default defineComponent({
  name: 'EmailSendingPage',
  components: {
    UserContactComp
  },
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
