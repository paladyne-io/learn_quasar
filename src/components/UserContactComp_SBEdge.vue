<template>
  <div no-border class="q-pa-md" style="min-width: 320px">
    <div class="q-pa-sm font-semibold">
      If you have any requests or suggestions, please email darren@paladyne.co.jp or fill out the form below.
      I appreciate your input and will respond to every well-intentioned message.
    </div>
  </div>
  <!-- Email area to modify and send email -->
  <div class="container q-pa-sm q-ma-md">
    <form ref="form" @submit.prevent="sendEmail">
      <div class="field">
        <q-input autogrow type="textarea" name="message" label="Message:" v-model="newMessage" />
      </div>

      <div class="field">
        <q-input id="from_name" type="text" label="Your name: " v-model="fromName" name="from_name"
          placeholder="Your Name" />
      </div>

      <div class="field">
        <q-input id="reply_to" type="email" label="Your email address:" v-model="replyTo" name="reply_to"
          placeholder="Your email address" />
      </div>
    </form>
  </div>
  <div class="text-center q-pa-md full-width">
    <q-btn class="q-ml-md" label="Send email" size="md" icon="fa fa-paper-plane" color="green" @click="sendEmail" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import emailjs from '@emailjs/browser'
// import { supabaseClient } from '../supabaseV2.js'

export default defineComponent({
  name: 'UserContactComponent',

  setup() {
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
    async sendEmail() {
      console.log('send email via Supbase edge function...')

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

      // Use SB CLient to connect

      // v2
      const { data: user, error } = await supabase.functions.invoke('hello-world', {
        body: { foo: 'tester' }
      })

      console.log('User: ' + user)
      console.log('Error: ' + error)

      /*
      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          this.templateParams,
          process.env.EMAILJS_PUBLIC_KEY)
        .then(
          (result) => {
            console.log('SUCCESS!', result.text)
            alert('Email sent')
            // this.notify('Email sent.')
          },
          (error) => {
            console.log('FAILED...', error.text)
            // this.notify('Sorry the email was not sent.')
          })
    }
    */
    }
  }
}
)
</script>
