<template>
<q-page class="flex-center q-pa-sm">
  <div class="text-center">
    <q-img style="max-width: 500px;" alt="vue_quasar_nodejs" src="images/vue_quasar_nodejs.png" />
  </div>
<div class="heading q-pa-md text-h5 text-bold"> Introduction </div>
<div class="row full-width text-subheader q-pl-md">
  <q-btn outline style="color: goldenrod;text-align:right;" label="Skip it" to="startprogramming" />
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
Anyone who wants to develop an app or interactive website.
<div class="heading text-subheader q-py-xs q-pt-md">Level</div>
Beginner
<div class="heading text-subheader q-py-xs q-pt-md">Background</div>
<div>
Quasar is built on top of <b>Vue.js</b> which is based on JavaScript.
The Vue framework was developed by Evan You and is one of the 3 most popular frameworks, together with React and Angular.
</div>
<!-- is a programming language that has been around for almost 30 years and has become more popular over time as the internet has grown. -->
<div class="q-pt-sm">
 Originally a scripting language for web pages, JavaScript has evolved and its core functionality has been extended by other libraries.
 Big advances were the introduction of the <b>node.js</b> framework and <b>npm</b>, which bundles Javascript into packages and helps users to find and install them.
</div>
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
Recently Vue was updated from version 2 to version 3.
<!-- Some libraries and tutorials may not yet have been updated so this might be confusing when looking online.-->
Quasar version 2 was released in 2021 and is built on Vue 3.
</div>
<div class="text-subheader q-pt-sm">What is an SPA and/or a 'web app'?</div>
<div class="q-pt-sm">A Single Page Application (SPA) is an application that runs in a web browser and dynamically loads data as required instead of refreshing the whole page.
 <!-- A web-browser based app is easier for users to start using but the functionality is limited.
  Most users do not expect or want a web page to access personal data (such as their contacts) or access their camera, however they would often accept this in an app.
  An app can also ask users for permission to access data and access to hardware. -->
<div class="q-pt-sm">One of the best features of Quasar is that it allows you to choose the kind of app you build without significantly changing your code.
 You can start off making an SPA that runs in a browser and then later, build a dedicated mobile app or even a desktop app that runs on a PC (Windows, Mac OS or Linux).</div>
<div class="q-pt-sm">Quasar also provides many prebuilt components such as buttons, calendars, cards and functions to speed up development.</div>

<div class="text-subheader q-pt-sm">
How much does it cost?
</div>
<div class="q-pt-sm">Generally you don't need to buy anything to start. You can download and install everything for free.
 However to publish your app on Apple's App Store or Google Play store you will need to pay. At the time of writing, the cost is $100 per year to join Apple's developer program and $25 for Google.</div>
<div class="text-subheader q-pt-sm">Is it difficult to make an app in Quasar and Vue?</div>
</div>
<div class="q-pt-sm">It's like learning a language or a musical instrument. It takes time, commitment, practice and perseverance.
 Sometimes you will feel like you are making good progress and sometimes you will struggle to fix an issue (bug) or implement a new feature.
  It generally comes down to how well you understand. Sometimes it can be frustrating but it is also rewarding.
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
 <li>What kinds of data will you store and where will you store it? (Locally - on the device, in the cloud, or both)</li>
 <li>How will you manage user data and privacy?</li>
 <li>Will users log in and manage their own account or profile?</li>
 <li>Do you need an administration interface? (often known as an Admin dashboard)</li>
 <li>Will your app be used for free, paid (one time) or by subscription?</li>
 <li>How will you market your app?</li>
</ul>
</div>
<div class="q-pt-sm">
If you are not sure what features to implement, it's better to start simply. Complexity will increase as you add new features or target your app to new types of devices.
However, any new features you add could be used in another app as you gradually build up your own library of code and components.
</div>
<div class="heading text-subheader q-pt-sm">
Break it down
</div>
<div class="q-pt-sm">Speaking of components, one important benefit of frameworks such as Vue and Quasar is that they encourage using code to build components.
  If you don't understand what this means, don't worry but when you start building your app, continuously ask yourself, can I separate this code into a component that can be reused in the future?
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
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
