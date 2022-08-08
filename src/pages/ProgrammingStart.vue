<template>
<q-page class="flex-center q-pa-md">
<div class="q-pa-md text-h5 text-bold"> Programming Start </div>

<div>
<q-card flat class="q-pa-md">

<div class="text-subheader q-pt-sm">
Getting started programming with Quasar (Preparation)
</div>

<div class="q-pt-sm">
Your mission today is to get to this:
</div>
<q-img src="images/QuasarAppTopPage.png" alt="MyApp menu screen"> </q-img>

<div class="q-pt-sm">
This is the basic order of tasks (assuming you have a PC).
</div>
<q-list>
   <q-item>
      <q-item-section>
       <q-item-label>

1. <a href="https://code.visualstudio.com/download"><b>Download and install Visual Studio Code</b></a> (Highly recommended)
 </q-item-label>

<q-item-label class="q-pt-md">
2. <a href="https://nodejs.org/en/download/"> <b>Install node.js</b></a>
* Download and run one of the <b>LTS</b> installers appropriate for your computer.
</q-item-label>

<q-item-label class="q-pt-md">

3. <b>Install Quasar CLI and create your app</b>. To do these steps you can use the Terminal application (Mac), <a href="https://www.lifewire.com/how-to-open-command-prompt-2618089">Command Prompt</a> or PowerShell (Windows), or the Terminal window in Visual Studio Code.
If you have not used the Mac Terminal or Windows Command Prompt it might be better to try the Terminal window in Visual Studio Code first.
<router-link to="/vscodeterminal">Click here for details</router-link>. The $ character represents the shell prompt. It might appear as a %. You enter commands after this symbol and press Return or Enter to run them.
</q-item-label>
<div class="q-pt-sm bg-blue-2">

<pre>
$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar
</pre>
</div>
* When installing Quasar you will be given the choice of using Vite or Webpack. If you dont have a strong preference, I recommend you choose Vite as its faster. (Suprising or not, 'Vite' means quick in French.)

<q-item-label class="q-pt-md">
</q-item-label>
    </q-item-section>
         </q-item>
  </q-list>
<div class="q-pt-sm">
Answer the questions, following the prompts.
See below for an example. Of course you can/should choose your own Project folder, Package name and Project product name and put your own contact Information after Author.
</div>
<div class="bg-blue-2 q-pa-sm">
<pre>
dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
Need to install the following packages:
  create-quasar
Ok to proceed? (y) y

 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
       Y8b

✔ What would you like to build? › App with Quasar CLI, let's go!
✔ Project folder: … learn_quasar
✔ Pick Quasar version: › Quasar v2 (Vue 3 | latest and greatest)
✔ Pick script type: › Javascript
✔ Pick Quasar App CLI variant: › Quasar App CLI with Vite
✔ Package name: … learn-quasar
✔ Project product name: (must start with letter if building mobile apps) … Learn Quasar App
✔ Project description: … An app to teach Quasar
✔ Author: … darren@paladyne.co.jp
✔ Pick your CSS preprocessor: › Sass with SCSS syntax
✔ Check the features needed for your project: › ESLint, State Management (Pinia), Vue-i18n
✔ Pick an ESLint preset: › Standard

Quasar •  SUCCESS  • The project has been scaffolded
…

To get started:
  cd learn_quasar
  quasar dev # or: yarn quasar dev # or: npx quasar dev
</pre>
</div>
<div class="text-subheader q-pt-sm">
You're nearly done!
</div>
<div class="q-pt-sm">
After creating your first app, and entering the above commands ("cd <i>your_project_name</i>" followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page.
</div>
<div class="q-pt-sm">
If you cannot see the app, please check that the working directory is correct.
<div class="bg-blue-2 q-pa-sm">
<pre>
dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
</pre>
</div>
 <div class="q-pt-sm">
 You can verify the current working directory by typing 'pwd' and change it by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory on to the Terminal window after “cd ”.
</div>
</div>
<div class="q-pt-sm">
In the directory/folder that you chose you will find a folder named after your app.
 This is your project folder. Open it in Visual Studio Code by choosing "Open folder…" from the File menu. Another way is to type "code ." in the terminal after the the "Quasar •  SUCCESS" message to open the working directory.
 If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment).

<div class="q-pt-sm">
The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command &quot;dev&quot; when you enter 'quasar dev' it is probably because your working directory changed.
</div>
<div class="q-pt-sm">
If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress.
<div class="q-pt-sm">If something didn't work, drop a note in the comments* or email me at darren@paladyne.co.jp to get help. (* Comments are coming soon, in a later lesson. )
</div>
</div>
</div>
<div class="row text-subheader q-pt-sm">
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

<style>
.text-subheader {
  font-family: verdana;
  font-size: 16px;
  font-weight: bold;
  color:darkblue;
}
</style>
