<template>
  <!-- Email area to modify and send email -->
  <div class="container q-pa-sm q-ma-md">
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
      icon="fa fa-paper-plane"
      color="green"
      @click="sendEmail"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' // ref, toRef, watch,
// import emailjs from '@emailjs/browser'
// import { useQuasar } from 'quasar'
// import { supabaseClient } from 'boot/supabase.js'
// import { useRoute } from "vue-router";
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
