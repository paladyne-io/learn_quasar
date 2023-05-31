<template>
  <q-page class="flex-center q-pa-sm">
    <div class="q-pa-md text-h5 header">Getting started with Quasar</div>
    <q-card flat class="q-pa-md">
      <SubHeaderComponentDA mytext="Preparation" />

      <div class="q-pt-sm">
        The goal for this lesson is to get to this. (It might seem underwhelming but this basic window provides a layout
        with a header and revealable side panel. The window is linked to
        your code so when you change the source code and save, the contents of the window will be updated almost
        instantly.)
      </div>

      <q-img src="images/QuasarAppTopPage.png" alt="MyApp menu screen"> </q-img>

      <div class="q-pt-sm">
        This is the order of tasks. Although it might seem complicated, it should take no longer than 15 minutes (on
        Windows installing node.js might take longer).
      </div>

      <div class="q-pt-sm">

        <q-item-label>
          <b>1</b>. <a href="https://code.visualstudio.com/download"><b>Download and install Visual Studio Code</b></a>
          (Highly
          recommended)
        </q-item-label>

        <q-item-label class="q-pt-md">
          <b>2</b>. <a href="https://nodejs.org/en/download/"> <b>Install node.js</b></a> by downloading and running the
          <b>LTS</b> installer appropriate for your computer.

          <q-item-label class="q-pt-md">
            <b>3</b>. <b>Install Quasar CLI</b>. To perform this and the following steps it is necessary to use a
            terminal. You
            can use the Terminal
            application (Mac) or the <a href="https://www.lifewire.com/how-to-open-command-prompt-2618089">Command
              Prompt</a> or PowerShell
            (Windows).

            <br><br>If you have not used these applications before, I suggest you use the Terminal in Visual Studio
            Code.
            <!-- On Windows it is recommended to switch from the default PowerShell to the Command Prompt</b>. -->

            <router-link to="/vscodeterminal">Click here for details</router-link>.
            <br><br>
            Open Visual Studio Code and choose 'New Terminal' from the Terminal menu or click the 'Toggle
            Panel' icon in the top right. Locate the Terminal area at the bottom with the text that looks like that
            shown
            the blue box below. The cursor should be a solid rectangle or a line at the end, indicating it is ready to
            receive typed commands.
            <pre>dcs@Darrens-MacBook-Pro learn_quasar ~ %</pre>
            The % character represents the shell prompt. By convention it is often shown as a <b> &#36; </b> symbol.
            Type commands after this symbol and press <b>Return</b> or <b>Enter</b> &#9166; to run them.
          </q-item-label>

          <div class="text-subheader q-pt-sm">
            The word(s) after your user ID indicate the current working directory (folder) which might not be the same as
            the one you have open on your desktop.
            You can use the 'cd' command to change it to the directory where the project will be created.
            Often you will need to provide a full path after cd, for example (on a
            Mac) it will look something like: cd '/Users/mike/Dev'
            This changes the directory to 'Dev', if that folder exists, and your account name is mike. (Note
            capitalization is important. The quotes are only necessary if there are spaces or some unusual characters in
            the path.)
          </div>
          <pre>
<span class="disable-select">$ </span>cd '/Users/mike/Dev' // This is an example only</pre>
          Note. The are various tools that you can use to enter commends. <b>npm</b> is installed with Node.
          To use yarn instead of npm you might have to install it using the command, 'npm install --global yarn'.
          <pre>
<span class="disable-select">$ </span>npm i -g @quasar/cli
<span class="disable-select">or</span>
<span class="disable-select">$ </span>yarn global add @quasar/cli
</pre>

          *If you experience problems installing Quasar on a Mac, try installing Node using nvm (Node Version Manager).
          <router-link to="/nvm_install">Click here for details</router-link>.
        </q-item-label>

        <div class="q-pt-sm">
          <b>4</b>. Use the Quasar CLI to create your app by entering one of the following commands in the terminal.
        </div>

        <pre>
<span class="disable-select">$ </span>npm init quasar
<span class="disable-select">or</span>
<span class="disable-select">$ </span>yarn create quasar
</pre>

        <div class="q-pt-sm">
          <b>5</b>. Proceed with the Quasar initialization process by answering the questions following the prompts.
          See below for an example. You can/should choose your own Project folder, Package name and Project product name
          and put your own contact information after Author.
        </div>

        <div class="q-pt-sm">
          * When creating a project with Quasar you will be given the choice of using Vite or Webpack.
          If you don't have a strong preference, I recommend you choose Vite as it's faster.
          (Surprising or not, 'vite' means quick in French.)
        </div>

        <pre>
dcs@Darrens-MacBook-Pro github_projects % <b> npm init quasar </b>
Need to install the following packages:
  create-quasar
Ok to proceed? (y) <b>y</b>

 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
       Y8b

✔ What would you like to build? › <b>App with Quasar CLI, let's go!</b>
✔ Project folder: … <b>learn_quasar</b>
✔ Pick Quasar version: › <b>Quasar v2 (Vue 3 | latest and greatest)</b>
✔ Pick script type: › <b>Javascript</b>
✔ Pick Quasar App CLI variant: › <b>Quasar App CLI with Vite</b>
✔ Package name: … <b>learn-quasar</b>
✔ Project product name: (must start with...) … <b>Learn Quasar App</b>
✔ Project description: … <b>An app to teach Quasar</b>
✔ Author: … › <b>darren@paladyne.co.jp</b>
✔ Pick your CSS preprocessor: › <b>Sass with SCSS syntax</b>
✔ Check the features needed for your project: › <b>ESLint, State Management (Pinia)</b>
✔ Pick an ESLint preset: › <b>Standard</b>

Quasar •  SUCCESS  • The project has been scaffolded
…

To get started:
<b>cd learn_quasar</b>
<b>quasar dev</b> # or: yarn quasar dev # or: npx quasar dev
</pre>

        <div class="text-subheader q-pt-sm">
          You're nearly done!
        </div>

        <div class="q-pt-sm">
          After creating your first app, and entering the commands after 'To get started:' ("cd
          <i>your_project_name</i>", followed by "quasar dev"), you should see the default Quasar app screen as
          shown at the top of this page.
        </div>

        <pre>
<b>cd learn_quasar</b> (&lt;- Change <i>'learn_quasar'</i> to the name of your project)
dcs@Darrens-MacBook-Pro learn_quasar % <b>quasar dev</b>
</pre>

        <div class="q-pt-sm">
          If you cannot see the app, please check that the working directory is correct.
          You can verify the current working directory by typing 'pwd'.
        </div>

        <pre>
dcs@Darrens-MacBook-Pro learn_quasar % <b>pwd</b>

/Users/dcs/documents/learn_quasar
</pre>

        The current working directory can be changed by typing 'cd ' ('cd' followed by a space) and then the full
        path.
        An easy way to get the full path to a folder is to drag and drop the folder/directory onto the Terminal window
        after “cd ”.

        <div class="q-pt-sm">
          <b>6</b>. Open your project folder in Visual Studio Code by choosing "Open folder…" from the File menu or by
          typing "<b>code .</b>" in the terminal after the "Quasar • SUCCESS" message.
          If you have already entered 'quasar dev', press the "control" and "c" keys together to stop the program (exit
          the development environment).
        </div>
        <div class="q-pt-sm">
          The working directory will remain set until you close the Terminal window.
          If you ever see an error such as 'Unknown command &quot;dev&quot;' after entering 'quasar dev' it is probably
          because your working directory changed.
        </div>
        <div class="q-pt-sm">
          If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social
          platform of choice and take a break to celebrate your progress.
          <div class="q-pt-sm">If something didn't work, please use the <a href="feedback"> feedback form</a> to get
            help.
          </div>
        </div>
      </div>
      <div class="row q-pt-md">

        <div class="row full-width text-subheader q-pt-sm">
          <q-btn outline style="color: goldenrod" label="Previous" to="intro" />
          <q-space />
          <q-btn outline style="color: goldenrod;text-align:right;" label=" Next: Make it your own" to="helloworld" />
        </div>

        <!---
    <q-item class="col"
          clickable
          v-ripple
          to="intro"
          @click="link = 'intro'"
        >
        Previous
    </q-item>
    <q-item class="col"
          clickable
          v-ripple
          to="helloworld"
          @click="link = 'helloworld'"
        >
      <div style="text-align:right" class="full-width">
            Next: Making it your own
        </div>
    </q-item>
  -->
      </div>

    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SubHeaderComponentDA from 'components/SubHeaderComponentDA.vue'
import { copyToClipboard } from 'quasar'
// import PreComponent from 'components/PreComponent.vue'
// import PreComponentDA from 'components/PreComponentDA.vue'

export default defineComponent({
  name: 'ProgrammingStartPage',
  components: { SubHeaderComponentDA } // PreComponent, PreComponentDA
})

copyToClipboard('some text')
  .then(() => {
    // success!
  })
  .catch(() => {
    // fail
  })
</script>

<style>
ol>li::marker {
  font-weight: bold;
}

.disable-select {
  user-select: none;
  /* supported by Chrome and Opera */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
}
</style>
