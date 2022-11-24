<template>
<<<<<<< Updated upstream
  <!-- Email area to modify and send email -->
  <div class="container q-pa-sm q-ma-md">
=======
  <!--
  <div no-border class="q-pa-md" style="min-width: 320px">

    <div class="q-pa-sm font-semibold">
      If you have any requests or suggestions, please email xxx@yyy.com or fill out the form below.
      I greatly appreciate your input and will respond to every well-intentioned message.
    </div>

  </div>
    -->
  <!-- Email area to modify and send email -->
  <div class="container q-pa-sm q-ma-md" style="background-color: linen">
>>>>>>> Stashed changes
    <form ref="form" @submit.prevent="sendEmail">
        <q-input
          autogrow
          type="textarea"
          name="message"
          label="Message:"
          v-model="newMessage"
        />

        <q-input
          id="from_name"
          type="text"
          label="Your name: "
          v-model="fromName"
          name="from_name"
          placeholder="Your Name"
        />
        <q-input
          id="reply_to"
          type="email"
          label="Your email address:"
          v-model="replyTo"
          name="reply_to"
          placeholder="Your email address"
        />
    </form>
  </div>
  <div class="text-center q-pa-md full-width">
    <q-btn
      class="q-ml-md"
      label="Send email"
      size="md"
<<<<<<< Updated upstream
      icon="fa fa-paper-plane"
=======
      icon="fas fa-copy"
>>>>>>> Stashed changes
      color="green"
      @click="sendEmail"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' // ref, toRef, watch,
// import emailjs from '@emailjs/browser'
<<<<<<< Updated upstream
// import { useQuasar } from 'quasar'
// import { supabaseClient } from 'boot/supabase.js'
// import { useRoute } from "vue-router";
=======

// import { useQuasar } from 'quasar'
// import { supabaseClient } from 'boot/supabase.js'
// import { useRoute } from "vue-router";

>>>>>>> Stashed changes
// const $q = useQuasar()

const newMessage = ref()
const fromName = ref('')
const replyTo = ref('')

/*
const templateParams = ref({
  from_name: fromName,
  message: newMessage,
  reply_to: replyTo
})
*/

<<<<<<< Updated upstream
=======
// read from localstorage
>>>>>>> Stashed changes
onMounted(() => {
  console.log('this.onMounted')
  // selected_email_option.value = selected_pp_option.value
  // getSelectedEmailOption()
})

function sendEmail () {
  console.log('send email...')
  if (!newMessage.value) {
    alert('Please type a message.')
    return
  }
  alert('This is a test email from: ' + fromName.value + ' with message: ' + newMessage.value)
}

</script>
