<template>
  <div no-border class="q-pa-md" style="min-width: 320px">
    <div class="q-pa-sm font-semibold">
      If you have any requests or suggestions, please email darren@paladyne.co or fill out the form below.
      I greatly appreciate your input and will respond to every well-intentioned message.
    </div>
  </div>
  <!-- Email area to modify and send email -->
  <div class="container q-pa-sm q-ma-md" style="background-color: linen">
    <form ref="form" @submit.prevent="sendEmail">
      <div class="field">
        <q-input
          autogrow
          type="textarea"
          name="message"
          label="Message:"
          v-model="newMessage"
        />
      </div>

      <div class="field">
        <q-input
          id="from_name"
          type="text"
          label="Your name: "
          v-model="fromName"
          name="from_name"
          placeholder="Your Name"
        />
      </div>

      <div class="field">
        <q-input
          id="reply_to"
          type="email"
          label="Your email address:"
          v-model="replyTo"
          name="reply_to"
          placeholder="Your email address"
        />
      </div>
    </form>
  </div>
  <div class="text-center q-pa-md full-width">
    <q-btn
      class="q-ml-md"
      label="Send email"
      size="md"
      icon="fas fa-copy"
      color="green"
      @click="sendEmail"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' // ref, toRef, watch,
import emailjs from '@emailjs/browser'

// import { useQuasar } from 'quasar'
// import { supabaseClient } from 'boot/supabase.js'
// import { useRoute } from "vue-router";

// const $q = useQuasar()

const newMessage = ref()
const fromName = ref('')
const replyTo = ref('')

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY

const templateParams = ref({
  from_name: fromName,
  message: newMessage,
  reply_to: replyTo
})

// read from localstorage
onMounted(() => {
  // console.log('this.onMounted: ' + EMAILJS_PUBLIC_KEY)
  // selected_email_option.value = selected_pp_option.value
  // getSelectedEmailOption()
})

function sendEmail () {
  console.log('send email...')

  // console.log('Public key: ' + EMAILJS_PUBLIC_KEY)
  // console.log('SERVICE_ID: ' + EMAILJS_SERVICE_ID)
  // console.log('TEMPLATE_ID: ' + EMAILJS_TEMPLATE_ID)
  // console.log('templateParams: ' + JSON.stringify(templateParams.value))

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    console.log('Error. One or more email service parameters was not supplied.')
    alert('Error. One or more email service parameters was not supplied.')
    return
  }

  if (!templateParams.value.message) {
    console.log('Error. No message.')
    alert('Please type a message.')
    return
  }

  if (!templateParams.value.reply_to) {
    console.log('Error. No reply_to email address.')
    alert('Please type your email address.')
    return
  }

  /**
  const i = 1
  if (i === 1) {
    return
  }
  */
  emailjs
    .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams.value,
      EMAILJS_PUBLIC_KEY)
    .then(
      (result) => {
        console.log('SUCCESS!', result.text)
        // this.notify('Email sent.')
      },
      (error) => {
        console.log('FAILED...', error.text)
        // this.notify('Sorry the email was not sent.')
      }
    )
}

</script>
