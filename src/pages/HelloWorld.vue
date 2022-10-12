<template>
<q-page class="flex-center q-pa-md">
<div class="heading q-pa-md text-bold"> Making it your own</div>
<div>
<q-card flat q-card class="q-pa-md">
    <div class="text-subheader q-pt-sm">
      The world is your canvas
    </div>

    <div class="q-pt-sm">
      Your mission today is to get to this (with any picture and text you choose):
    </div>

    <div class="q-pt-sm text-center" >
      <q-img src="images/MyAppTopPage.png" alt="Quasar default app screen" style="max-width: 500px;"/>
    </div>
<div class="q-pt-sm">
  This is the basic order of tasks.
</div>

<div>
       <div class="q-pt-md text-subheader" >
        1. Add your own pictures, text and a button to the main screen.
        </div>
        <div class="q-pa-sm">
        The first page that is displayed when your app starts up is <b>IndexPage.vue</b> in the src folder.
         In this exercise, we'll modify it. One important feature of Quasar, called hot reloading, enables any changes made to this file (when saved) to be immediately shown.
        This speeds up programming as you don't have to save, compile and restart the app each time.
        This is how the file looks in Visual Studio Code.
        </div>
        <div class="q-pa-sm">
         <q-img src="~assets/indexpage_screenshot.png" alt="Index page screen in Visual Studio Code" style="max-width: 600px;" />
        </div>
        <div class="q-pa-sm">
          To demonstrate hot reloading, type a word such as 'Hello' before '&lt;img' and save the file.
         In the web browser, you should see the word appear to the left of the Quasar icon.
         As you will see it requires additional work to get the text to appear in the right place, with the correct size and color etc.
         We will come to that later.
         </div>
      <div class="q-pt-md text-subheader" >
        Change the image
           </div>
        <div class="q-pt-sm">
        There are two places where images can be added to the project:
       <ol>
         <li>in the <b>public/images</b> folder (referenced in Quasar as: 'src="images/img.png')</li>
        <li>in the <b>src/assets folder</b> (referenced in Quasar as: 'src="~assets/img.png') </li>
      </ol>
      </div>
      You can add your own images to either of these folders and then change the code in the 'img' tag to display them, like this.
<pre>
&lt;img
  alt="My image"
  src="~assets/myimage.png" &lt;- Change this to the name of your image
  style="width: 200px; height: 200px" &lt;- Change the size here
  &lt;!-- Either width or height can be omitted to retain proportions--&gt;
&gt;
</pre>

  <div class="q-pt-md text-subheader" >
      Add some text
  </div>
 <div class="q-py-sm">
  We'll add some text below the image for a description, label or accreditation.
   We add a 'div' around the text as a container to help keep it in the center of the page.
 </div>
<pre>
 &lt;div class="full-width text-center text-h6"&gt;
    Quasar image courtesy of NASA
 &lt;/div&gt;
</pre>

<div class="q-py-sm">
  The words written after 'class=' are keywords Quasar recognizes to help with layout.
   A list of classes related to typography and layout can be found <a href=" https://quasar.dev/style/typography">on the Quasar website</a>.
</div>

</div>
  <q-item-label class="q-pt-md text-subheader" >
      Add a button
  </q-item-label>
 <div class="q-py-sm">
   This button will allow the user to go to a new page we will create next.
   Note the '<b>q-btn</b>' tag. This is one of Quasar's prebuilt Vue components mentioned in the introduction.
   There are many of them with descriptions and examples <a href="https://quasar.dev/vue-components">on the Quasar website</a>.

    Feel free to change the color, label etc.
</div>

 <pre>
  &lt;div class="text-center"&gt;
    &lt;q-btn label="My Page" color="blue" to="mypage"&gt;&lt;/q-btn&gt;
  &lt;/div&gt;
</pre>

<q-item-label class="q-pt-md text-subheader">
2. Add a new page
</q-item-label>

<div class="q-pt-sm">
1. There are a few ways to create a new page, including using the command, "quasar new page <i>pagename</i>" in the CLI (Terminal).
 I find it easiest to copy an existing page (one of the 'xxx.vue' files in the pages folder) or create and save a new file.
The contents can be as simple as the default Quasar 'IndexPage.vue' page shown below.
The filename must have 2 or more words joined (capitalized, without spaces) like this: <b>'MyPage.vue'</b>. This is called Camel case.

<div class='note q-pt-sm'> Note. An extension called 'Duplicate action' can be installed in VS Code to allow you to duplicate files in the EXPLORER panel.
 After installing the extension, right-click on a file to show a menu with "Duplicate file or directory" at the bottom.
</div>
<pre>
&lt;template&gt;
  &lt;q-page class="flex flex-center"&gt;
    &lt;img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;
</pre>

<div class="q-pt-sm">
2. While you have added a new page, Quasar doesn't know about it.
 You might think that it could be automatically detected but it isn't - you have to add this page to the Router.
 The router is a common concept for frameworks like Vue. It's job is to manage and load pages.
  (It took me a while to get my head around this concept so if it's confusing, don't worry.)
Locate the file "routes.js" in the router folder.
Copy and paste one of the 'children' (the line between {}), then rename the <b>path</b> and <b>page title</b> as below.
 Make sure to add a comma after the previous child.
<div class="q-pt-sm">
 If you add a child for a page that doesn't exist you will see an error when you save the Routes.js file.
</div>
 'path' is the name that will appear after the "/" in the browser's address bar*.
</div>

<pre>
{ path: '<b>mypage</b>', component: () => import('pages/<b>MyPage.vue</b>') }
</pre>

<div class="q-pt-sm">
*You may notice the "#" in the address. Don't worry about it for now.
 It is the default mode and can be changed in the Quasar.conf file.
</div>

</div>

<div class="row full-width text-subheader q-pt-sm">
  <q-btn outline style="color: goldenrod" label="Previous" to="startprogramming" />
  <q-space />
  <q-btn outline style="color: goldenrod;text-align:right;" label="Next: Make it move" to="programming1" />
</div>

<!--
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
          to="programming1"
          @click="link = 'programming1'"
        >
        <div style="text-align:right" class="full-width">
            Next: Making it move
        </div>
    </q-item>
</div>
-->
</q-card>
</div>

</q-page>
</template>

<script>
import { defineComponent } from 'vue' //, onMounted, version

export default defineComponent({
  name: 'HelloWorld',
  components: {

  },

  setup () {
    /*
    onMounted(() => {
    // console.log('uuid:' + uuid.value)
      alert('Vue version :' + version)
    })
    */
  }
})
</script>
