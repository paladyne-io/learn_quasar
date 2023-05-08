<template>
  <q-page class="flex-center q-pa-md">
    <div class="heading q-pa-md text-h5 text-bold">Supabase Introduction</div>

    <q-card flat class="q-px-md">

      <!--
    Similar services are offered by Digital Ocean, Netlify and other cloud/app hosting service providers.
    Please research these to see if they provide more suitable services for your needs.
  -->

      <div class="q-pa-sm">
        <b><a href="https://supabase.com">Supabase </a> </b> is an open-source alternative to <a
          href=https://firebase.google.com> Google's Firebase service</a>.

      </div>
      <div class="q-pa-sm">
        The <a href="https://supabase.com/docs">feature list for Supabase</a> is growing continuously.

        It provides much of the functionality that previously required a dedicated server (and all the hassle that goes
        with it).
        Supabase provides ways to register and authenticate users, a database to store information as well as storage
        for files (such as profile pictures).
        Recent additions to the service include edge functions and real-time features that enable your app to use
        immediate notifications, instant messaging, event synchronization, etc.
      </div>
      <div class="q-pa-sm">
        A <a href="https://supabase.com/pricing"> trial account</a> allows you to run two projects for free.
        You can have more, but only 2 projects can be active at one time. If your project is not used/accessed for a
        week it will be automatically 'hibernated' but you can restart it.
        When you are ready, a Pro account costs US$25 per month.
        Perhaps not cheap but with careful management, it could be used for more than one project and provides a lot of
        capacity.
      </div>
      <div class="q-pa-sm">
        Supabase is easy to integrate with front-end frameworks such as Vue/Quasar and provides a web browser interface
        to manage the database.
        Supabase provides documentation explaining how to set up a project for many common frameworks, <a
          href="https://supabase.com/docs/guides/with-vue-3"> including Vue</a>.
      </div>

      <div class="q-pa-sm">
        There are some other tutorials online, such as <a
          href="https://vueschool.io/articles/vuejs-tutorials/use-supabase-auth-with-vue-js-3/">this one</a>, that
        explain in detail how to setup and use Supabase so please refer to them as well if you want to.
      </div>
      <div class="q-pa-sm">
        Get started by installing the current (V2) client by running this command:
        <pre>npm install @supabase/supabase-js</pre>
      </div>

      * Note that Supabase V1 is used by some older tutorials and a few changes will be necessary with the latest version.

      <div class="q-pa-sm">
        Quasar provides a unique boot file functionality to initialize code when your app starts.
        There are 2 steps, The first is to add the javascript boot file and the second is to 'activate' it in the boot
        section of the Quasar.conf (or Quasar.config) file.
        You can find an example of the boot file in the source code (on Github).
        <pre>
// --> boot files are part of "main.js"
// https://v2.quasar.dev/quasar-cli/boot-files
boot: [
  'supabase', 'i18n'
],
</pre>
      </div>
      <div>
        To be continued...
      </div>
      <div class="row full-width text-subheader q-pt-sm">
        <q-space />
        <q-btn outline style="color: goldenrod" label="Home" to="/" />

      </div>

    </q-card>

  </q-page>
</template>

<script setup>
// import { ref } from 'vue'
</script>

<style>
.my-element {
  animation: fadeIn;
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s;
  /* don't forget to set a duration! */
}
</style>
