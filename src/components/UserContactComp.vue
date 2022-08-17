<template>
  <div no-border class="q-pa-md" style="min-width: 320px">
    <div class="q-pa-sm font-semibold">
      If you have any requests or suggestions, please email darren@paladyne.co.jp or fill out the form below.
      I greatly appreciate your input and will respond to every well-intentioned message.
    </div>
  </div>
  <!-- Email area to modify and send email -->
  <div class="container q-pa-sm q-ma-md">
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

<script>
import { defineComponent, ref } from 'vue'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID_2 = process.env.EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID_2 = process.env.EMAILJS_TEMPLATE_ID

const EMAILJS_SERVICE_ID_3 = process.env.EMAILJS_SERVICE
const EMAILJS_TEMPLATE_ID_3 = process.env.EMAILJS_TEMPLATE

export default defineComponent({
  name: 'UserContactComponnet',

  setup () {
    // console.log('EMAILJS_SERVICE: ' + import.meta.env.EMAILJS_SERVICE) // 123
    // console.log('VITE EMAILJS_SERVICE_2: ' + import.meta.env.VITE_EMAILJS_SERVICE) // 123
    // console.log('EMAILJS_SERVICE: ' + import.meta.EMAILJS_SERVICE) // 123
    // console.log('VITE EMAILJS_SERVICE_22: ' + import.meta.VITE_EMAILJS_SERVICE) // 123

    const newMessage = ref()
    const fromName = ref('')
    const replyTo = ref('')

    const templateParams = ref({
      from_name: fromName,
      message: newMessage,
      reply_to: replyTo
    })

    return {
      templateParams,
      newMessage,
      fromName,
      replyTo
    }
  },

  methods: {
    sendEmail () {
      console.log('send email 2...')

      // const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
      // const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
      // const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY

      // console.log('Process.env: ' + JSON.stringify(process.env))

      // console.log('Public key: ' + process.env.EMAILJS_PUBLIC_KEY)
      // console.log('SERVICE_ID: ' + EMAILJS_SERVICE_ID)
      // console.log('TEMPLATE_ID: ' + EMAILJS_TEMPLATE_ID)

      console.log('EMAILJS_SERVICE_ID_2: ' + EMAILJS_SERVICE_ID_2)
      console.log('EMAILJS_TEMPLATE_ID_2: ' + EMAILJS_TEMPLATE_ID_2)

      console.log('EMAILJS_SERVICE_ID_3: ' + EMAILJS_SERVICE_ID_3)
      console.log('EMAILJS_TEMPLATE_ID_3: ' + EMAILJS_TEMPLATE_ID_3)

      console.log('SERVICE_ID: ' + process.env.EMAILJS_SERVICE_ID)
      console.log('TEMPLATE_ID: ' + process.env.EMAILJS_TEMPLATE_ID)

      // console.log('templateParams: ' + JSON.stringify(templateParams.value))

      if (!process.env.EMAILJS_PUBLIC_KEY || !process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID) {
        console.log('Error. One or more email service parameters was not supplied.')
        alert('Error. One or more email service parameters was not supplied.')
        return
      }

      if (!this.templateParams.message) {
        console.log('Error. No message.')
        alert('Please type a message.')
        return
      }

      if (!this.templateParams.reply_to) {
        console.log('Error. No reply_to email address.')
        alert('Please type your email address.')
        return
      }

      /*
      const i = 1
      if (i === 1) {
        console.log('Stopped sending email!')
        return
      }
      */

      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          this.templateParams,
          process.env.EMAILJS_PUBLIC_KEY)
        .then(
          (result) => {
            console.log('SUCCESS!', result.text)
            alert('email sent')
            // this.notify('Email sent.')
          },
          (error) => {
            console.log('FAILED...', error.text)
            // this.notify('Sorry the email was not sent.')
          })
    }
  }
})
</script>
