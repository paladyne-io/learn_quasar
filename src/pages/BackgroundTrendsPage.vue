<template>
  <q-page class="flex-center q-pa-sm">
    <div class="text-center">
      <q-img style="max-width: 500px;" alt="vue_quasar_nodejs" src="images/vue_quasar_nodejs_t.png" />
    </div>
    <div class="header q-pa-md text-h5">Background and Trends
      <q-btn class=" q-ml-sm" outline style="color: goldenrod;text-align:right;" label="Skip this"
        to="startprogramming" />
    </div>
    <div>
      <q-card flat class="q-pa-md">
        <div class="text-subheader q-py-sm">
          What is Vue.js, where did it come from and why is it relevant for the future? What about the Quasar framework.
          Why are frameworks necessary at all?
        </div>
        <div class="q-py-sm">

          While there is a lot of talk about Web 3.0 lately, many significant changes have happened in front-end
          frameworks.

          Having developed applications for more than 30 years I know that
          programming for users on PCs was difficult and time consuming.
          Before the world wide web became widely used, most professional packaged applications were
          written in C or C++ and were closely tied
          with the types of chips they were intended to run on. The promise of cross platform development lay far in
          the future.
          (Java made a good run at it but its desktop GUI libraries, first the AWT and later Swing were too little, too
          late.)
          Professional software was expensive. Shareware and freeware filled in the gaps but was of varying quality and
          without adequate payment mechanisms, was usually not well rewarded.
          One breakthrough was the game <a href="https://en.wikipedia.org/wiki/Myst" target="_blank">Myst</a> that
          appeared in 1993. Myst was originally built with HyperCard, which was available only for
          the Mac,
          so it had to be completely rewritten for the PC platform.
        </div>
        <div class=" q-py-sm">
          An interesting aside, and one that shows how effects can ripple far beyond the original scope,
          Wikipedia says that <a href="https://en.wikipedia.org/wiki/HyperCard" target="_blank">HyperCard</a> influenced
          the design of the first web browser and Hypercard's
          scripting language, HyperTalk, inspired JavaScript.
        </div>

        <div class="text-subheader q-pt-md">
          The birth and rise of JavaScript
        </div>
        <div class=" q-py-sm">

          Since its release in 1995 <a href="https://launchschool.com/books/javascript/read/introduction"
            target="_blank">JavaScript</a> has been confused with Java - probably since it was renamed to
          compete with the fledgling language that was released by Sun Microsystems around the same time.
          JavaScript was developed for Netscape Navigator, the browser
          that kick-started the popularity of the world wide web.
          While slowed at first by competition with Microsoft, JavaScript remained under continuous development
          together with improvements in web browsers.
        </div>

        <div class="q-px-md q-py-sm">
          &quot;Meanwhile, very important developments were occurring in open-source communities not affiliated with
          ECMA work. In 2005, Jesse James Garrett released a white paper in which he coined the term Ajax and described
          a set of technologies, of which JavaScript was the backbone, to create web applications where data can be
          loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of
          JavaScript, spearheaded by open-source libraries and the communities that formed around them. Many new
          libraries were created, including jQuery, Prototype, Dojo Toolkit, and MooTools.&quot;

          <a href="https://en.wikipedia.org/wiki/JavaScript#Creation_at_Netscape" target="_blank">Wikipedia JavaScript
            Creation_at_Netscape</a>
        </div>
        <div class="text-subheader q-pt-md">
          The rise of JavaScript frameworks and web apps
        </div>

        <div class="q-py-sm">
          In 2009, Node.js was released, extending JavaScript beyond the browser using Google's Chrome's V8 runtime.
          At the same time, web browsers gained many
          features previously only available on Desktop applications such as access to local files, drag and drop, etc.
          30 years after the launch of HyperCard and 20 after the first web browser, finally cross platform development
          is possible.
        </div>

        <div class="q-py-sm">

          The first major JavaScript framework, <a href="https://jquery.com" target="_blank">JQuery</a>, simplified
          website development and became very popular.
          JQuery allows the programmer to manipulate the Document Object Model (DOM) - which is the skeleton of the
          webpage.

          AngularJS, developed internally and released by Google in 2010 introduced data binding and then React,
          released by Facebook in 2013, replaced the DOM with a model generated by JavaScript (rather than one
          created by the browser and manipulated by JavaScript). Both <a
            href="https://www.cuelogic.com/blog/what-are-the-differences-between-angular-and-react"
            target="_blank">Angular and React</a> improved the capabilities of JavaScript to
          interact directly with the webpage contents.

          These JavaScript frameworks, more advanced and efficient JIT compilers and improving capabilities of Web
          browsers gave rise to the web app - a hybrid of website and application that doesn't require installation but
          with more restricted access to user data and device functionality.
        </div>
        <div class="q-py-sm">
          As the capabilities of JavaScript increased, so did the difficulties in managing it. IDEs built for
          programming
          in other languages were not widely used for JavaScript as it could usually be written in a plain text editor.
          However the limitations of writing increasing lengthy code in a text file caused it to become unmanageable.
          Recently <b>Visual Studio Code</b> (VS Code for short) has become a standard for JavaScript development as a
          lightweight IDE (itself written with
          Electron - a platform for developing desktop applications with JavaScript).
        </div>
        <div class="text-subheader q-pt-md">
          Vue.js
        </div>
        Vue.js was developed first as an experiment to try and take the best parts of React and Angular while
        simplifying the code architecture. To my mind, Vue.js goes further by making Single File Components and the
        Model View Controller pattern central to development. You might want to look at other frameworks, including
        newer ones such as <a href="https://svelte.dev"> Svelte </a> and <a href="https://www.solidjs.com">Solid</a>
        before committing
        yourself to Vue.js.
        <div class="q-py-sm">
          This video describes the early days of Vue.js and how it became popular.
          <q-video style="height:380px" src="https://www.youtube.com/embed/OrxmtDw4pVI" />
        </div>
        <div class="text-subheader q-pt-md">
          Quasar
        </div>
        <div class="q-pt-md">
          The <a href="https://quasar.dev" target="_blank">Quasar framework</a> is a recent framework that builds on
          Vue.js, adding the Quasar Command Line Interface (CLI) and a library
          of Vue components with great documentation and many examples. Quasar makes it much easier to target other
          platforms allowing to build Desktop and native mobile apps using the same codebase.
          The last version of Vue.js is installed when you install Quasar so
          developing with Vue and Quasar is a great combination and makes it easy to
          <router-link to="/startprogramming">get started</router-link>.
        </div>
      </q-card>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackgroundTrendsPage'
})
</script>
