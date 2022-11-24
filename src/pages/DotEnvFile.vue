<template>
<<<<<<< Updated upstream
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
=======
<q-page class="flex-center q-pa-sm">
  <div class="text-center">
    <q-img style="max-width: 500px;" alt="vue_quasar_nodejs" src="images/vue_quasar_nodejs_t.png" />
  </div>
<div class="header q-pa-md text-h5"> Introduction
  <q-btn class=" q-ml-sm" outline style="color: goldenrod;text-align:right;" label="Skip this" to="startprogramming" />
</div>
<div>
<q-card flat class="q-pa-md">
<div class="text-subheader q-py-sm">
Do you want to build an app, a game or a website with interactive features?
 Not sure how to start or which software to use?
</div>
<div class="q-py-sm">
This series of articles and interactive examples will help you to use the <b> Quasar framework</b> to develop applications that can run on a variety of devices.
</div>
<div class="heading text-subheader  q-py-xs q-pt-md">Target</div>
People who want to develop an app or interactive website.
<div class="heading text-subheader q-py-xs q-pt-md">Level</div>
Beginner
<div class="heading text-subheader q-py-xs q-pt-md">Background</div>
<div>
Quasar is built on top of <b>Vue.js</b> which is based on JavaScript.
The Vue framework was developed by Evan You and is one of the 3 most popular frameworks, together with React and Angular.
 Recently Vue was updated to version 3 which Quasar 2 supports.
</div>
<!-- is a programming language that has been around for almost 30 years and has become more popular over time as the internet has grown. -->
<!--
<div class="q-pt-sm">
 Originally a scripting language for web pages, JavaScript has evolved and its core functionality has been extended by other libraries.
 Big advances were the introduction of the <b>node.js</b> framework and <b>npm</b>, which bundles Javascript into packages and helps users to find and install them.
</div>
-->
<!--
<q-list class="q-pa-sm">
   <q-item-section>
 <q-item-label>
<a href="https://www.codeinwp.com/blog/angular-vs-vue-vs-react/">https://www.codeinwp.com/blog/angular-vs-vue-vs-react/</a>
 </q-item-label>
 <q-item-label>
<a href="https://vuejs.org">https://vuejs.org</a>
 </q-item-label>
 <q-item-label>
<a href="https://javascript.info/hello-world">https://javascript.info/hello-world</a>
</q-item-label>
   </q-item-section>
</q-list>
-->
<!--
<div class="q-pt-sm">
Which framework to learn depends on what you want to achieve.
 If you are looking for a career in programming, probably React and Angular will offer you the most  job opportunities.
 If you work as part of a team you should use the same framework as the rest of the team.
 If you are a startup or learning by yourself you might consider Vue as it is said to have the lowest learning curve.
 If you decide to use Quasar then you have no choice but to use Vue.
<q-list class="q-pa-sm">
   <q-item-section>
 <q-item-label>
<a href="https://www.cloudifyapps.com/blog/why-quasar-is-gaining-popularity-among-the-javascript-framework/">https://www.cloudifyapps.com/blog/why-quasar-is-gaining-popularity-among-the-javascript-framework/</a>
 </q-item-label>
 <q-item-label><a href="https://www.cmarix.com/blog/the-key-reasons-why-quasar-is-leading-among-the-javascript-frameworks-now/">https://www.cmarix.com/blog/the-key-reasons-why-quasar-is-leading-among-the-javascript-frameworks-now/</a>
</q-item-label>
   </q-item-section>
</q-list>
</div>
-->
<div class="q-pt-sm">
Quasar includes an interface for developing and building apps together with a library of Vue components including buttons, calendars and cards, as well as functions to speed up development.
Using plugins such as Capacitor and Electron it is possible to build mobile apps and desktop applications.
<!-- Some libraries and tutorials may not yet have been updated so this might be confusing when looking online.-->
<!-- <div class="q-pt-sm">With Quasar you can decide the type of app to build later without significantly changing your code.
</div>
-->
<div class="text-subheader q-pt-sm">What is an SPA and/or a 'web app'?</div>
<div class="q-pt-sm">A Single Page Application (SPA) is an application that runs in a web browser and dynamically loads data as required instead of refreshing the whole page.
  You can start off making an SPA and then later, build a dedicated mobile app or a desktop app that runs on a PC (Windows, Mac or Linux).</div>

  <!-- A web-browser based app is easier for users to start using but the functionality is limited.
  Most users do not expect or want a web page to access personal data (such as their contacts) or access their camera, however, they would often accept this in an app.
  An app can also ask users for permission to access data and hardware. -->

<div class="text-subheader q-pt-sm">
How much does it cost?
</div>
<div class="q-pt-sm">Generally you don't need to buy anything to start. You can download and install everything for free.
 However to publish your app on Apple's App Store or Google Play store you will need to pay a fee. At the time of writing, the cost is $100 per year to join Apple's developer program and $25 for Google.</div>
<div class="text-subheader q-pt-sm">Is it difficult to make an app in Quasar and Vue?</div>
</div>
<!--
Sometimes you will feel like you are making good progress and sometimes you will struggle to fix an issue (bug) or implement a new feature.
It generally comes down to how well you understand, although occasionally you may run into bugs with the frameworks themselves.
-->
<div class="q-pt-sm">This depends on your starting point. If you have experience with other programming languages, Javascript should not be difficult.
  Quasar and Vue create a skeleton of an app already prepared to allow you to spend more time adding your own features.
  If you have not programmed before, learning to program is similar to learning a language or a musical instrument. It takes time, commitment, practice and perseverance.
  Sometimes it can be frustrating but it is often rewarding.
</div>
<!--
<div class="heading text-subheader q-pt-sm">
How much do you know?
</div>
<div class="q-pt-sm">
Do you know the basic elements of a web page? (HTML, CSS, JavaScript)?
If not, click here for a basic explanation.
</div>
<div class="q-pt-sm">
Do you know the basic operation of the internet? (http(s), servers/hosts, clients/web-browser, email, etc?)
If not, click here for a basic explanation.
</div>
<div class="q-pt-sm">
Do you know what UI, UX, GUI, etc. mean?
If not, click here for a basic explanation.
</div>
<div class="q-pt-sm">
Do you know what SASS, PASS, MAAS, etc. are?
If not, click here for a basic explanation.
</div>
-->
<div class="heading text-subheader q-pt-sm">
Some things to consider when making an app...
</div>
<div class="q-pt-sm">
You don't need to decide these things now but it's useful to consider the scope of your app before you start.
</div>
<div class="q-pt-sm">
<ul>
 <li>Who are your target users?</li>
 <li>Which Operating Systems will you support? (IOS, Android, Mac OS, Windows, Linux)</li>
 <li>Which types of devices will you support? (Mobile or desktop, custom electronic devices)</li>
 <li>Will you provide support for displaying the interface in other languages? (A multi-lingual app)</li>
 <li>What types of functionality are required? (Do you need to access hardware including the camera, Bluetooth/BLE or NFC?)</li>
 <li>The color scheme, logos, icons and graphics. (Quasar has some features to help with all of these)</li>
 <!--
 <li>Will you implement dark mode?</li>
 -->
 <li>What kinds of data will you store and where will you store it? (Locally - on the device, in the cloud, or both?)</li>
 <li>How will you manage user data and privacy?</li>
  <!--
 <li>Will users log in and manage their own account or profile?</li>
 <li>Do you need an administration interface? (often known as an Admin dashboard)</li>
 <li>Will your app be used for free, paid (one time) or by subscription?</li>
 <li>How will you market your app?</li>
  -->
</ul>
</div>
<div class="q-pt-sm">
If you are not sure which features to implement, it's better to start simply. Complexity will increase as you add new features or target your app to new types of devices.
However, any new features you add could be used in another app as you gradually build up your own library of code and components.
</div>
<div class="heading text-subheader q-pt-sm">
Break it down
</div>
<div class="q-pt-sm">Speaking of components, one important benefit of frameworks such as Vue and Quasar is that they encourage building components with code.
  If you don't understand what this means, don't worry, but as you develop your app continuously ask yourself, can I separate this code into a component that can be reused in the future?
    This process of writing and then rearranging or separating code is called refactoring.
    Refactoring your code periodically will reward you with a manageable code base that you can understand, even when you come back to it later.
<!--
<div class="q-pt-sm">At the risk of getting sidetracked, I should mention that at some point you might be tempted to rewrite everything in one go. This is usually a mistake. Most significant software has small, strange-looking (even ugly) workarounds that were added to fix an unusual problem that only happened sometimes. It is sometimes tempting to do a major rewrite and then have these previously conquered bugs resurface, which is both inefficient and frustrating.
<div class="q-pt-sm">Also, periodically and especially after implementing a major new feature, make a back-up of your code, even manually - just zip the project folder and save it somewhere. Then if you break something that was previously working and can’t figure out why or what the problem is, you can go back and see or even replace the code from the previous back up. (It is very frustrating to spend hours or days to fix a problem, then a few hours or the next day have the same problem reappear but this has happened to me many times.)
</div>
</div>
-->
</div>
<div class="row q-pt-md">
    <q-space />
      <q-btn class="text-right" outline style="color: goldenrod;ext-align:right;" label="Get started" to="startprogramming" />
  </div>

<div class="text-subheader q-pt-md">
    <!--
    <q-item
          clickable
          v-ripple
          to="startprogramming"
          @click="link='startprogramming'"
        >
        <div onclick="" style="text-align:right" class="full-width">
            Next: Getting started
        </div>
    </q-item>
    -->
</div>

</q-card>
</div>
  </q-page>
>>>>>>> Stashed changes
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
<<<<<<< Updated upstream
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
=======
  name: 'IndexPage'
})
</script>
>>>>>>> Stashed changes
