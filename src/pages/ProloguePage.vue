<template>
<q-page class="flex-center q-pa-md">
<div class="heading q-pa-md text-h5 text-bold">Prologue</div>

<div>
<q-card flat class="q-pa-md">
<!--
<div class="q-pa-sm">
If you are new to programming you are about to enter a new world.
 As the famous saying goes, "A journey of a thousand miles begins with a single step."
 If you find that programming appeals to you, you will start to see the world in a different way - something that you can improve.
 You will start to see solutions where before you found annoyances. You will see actions and behaviors as processes and tasks. You can model these processses and change behaviours.
 You can make new tools, systems and games for others. It's like a superpower that anyone can learn.
</div>
-->
<div class="q-pa-sm">
The idea for this app came from my own experience learning Quasar.
 While I had programmed in various languages, it took a while for me to understand the basics of Vue and Quasar.
 I want to help people to get started faster and reduce the frustration that comes when learning something new.
</div>
<!--
<div class="q-pa-sm">
  Of course, it's not perfect and I plan to improve it over time while documenting these improvements. The good and bad thing about software is that it can always be changed. This means that it can be adapted and updated.
   It also means that it is never finished.
</div>
-->
<div class="q-pa-sm">
  The source code for this app is <a href="https://github.com/paladyne-io/learn_quasar" target="_blank" rel="noopener noreferrer">publicly available on Github</a>.
  Github is a huge store of open-source apps like this one.
   I encourage you to download it when you are ready to use it as a basis for your own app.
</div>

<div class="q-pa-sm">
This app is hosted on Digital Ocean.
Digital Ocean offers up to 3 static websites for free and these websites can be used to host apps created with Quasar.
<a href="https://www.digitalocean.com/community/tutorials/how-to-deploy-a-static-website-to-the-cloud-with-digitalocean-app-platform">To learn more click here.</a>
In the near future, I will provide articles about how to deploy your web app to Digital Ocean and also how to connect it to a cloud database such as <a href="https://supabase.com">Supabase</a>.
</div>

<div class="q-pa-sm">
 I wish you success on your journey to learn Quasar and Vue.js and I will try to help if you get lost or confused.

 <div class="q-pt-sm">
  You can contact me directly using the <router-link to="feedback">contact page</router-link>.
</div>
 <div class="q-pt-sm">
 Darren Saunders
 </div>
 August 2022
</div>

<div class="row full-width text-subheader q-pt-sm">
<q-space />
<q-btn outline style="color: goldenrod" label="Introduction" to="intro" />
<!--
    <q-item
          clickable
          v-ripple
          to="intro"
          @click="link = 'intro'"
        >
          <q-item-section nav>
          </q-item-section>
          Next: Introduction
    </q-item>
-->
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

div {
  // background-color: $grey-1;
}
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
