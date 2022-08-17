<template>
<q-page class="flex-center q-pa-md">
<div class="heading q-pa-md text-bold"> Making it your own</div>
<div>
<q-card flat q-card class="q-pa-md">

    <div class="text-subheader q-pt-sm">
      The world is your canvas
    </div>

    <div class="q-pt-sm">
      Your mission today is to get to this:
    </div>

<q-img src="images/MyAppTopPage.png" alt="Quasar default app screen" style="max-width: 600px;"> </q-img>

<div class="q-pt-sm">
  This is the basic order of tasks.
</div>

<div>
       <div class="q-pt-md text-subheader" >
        1. Add your own pictures, text and a button to the main screen.
        </div>
        <div class="q-pa-sm">
        The first page that is displayed when your app starts up is IndexPage.vue in the src folder.
         In this exercise we'll modify it. One important feature of Quasar, called hot reloading, enables any changes made to this file (when saved) to be immediately shown.
        This speeds up programming a lot as you don't have to save, compile and restart the app each time.
        This is how the file looks in Visual Studio Code.
        </div>
        <div class="q-pa-sm">
         <q-img src="~assets/indexpage_screenshot.png" alt="Index page screen in Visual Studio Code" style="max-width: 600px;" />
        </div>
        <div class="q-pa-sm">
          To demonstrate hot reloading, type a word such as 'Hello' before '&lt;img' and save the file.
         In the web browser you should see the word appear to the left of the Quasar icon.
         As you will see it requires additional work to get text to appear in the right place, with the correct size and color etc.
         We will come to that later.
         </div>
      <div class="q-pt-md text-subheader" >
        1. Change the image.
           </div>
        <div class="q-pt-sm">
        There are two places that images can be added to the project:
       <ol>
         <li> in the <b>public/images</b> folder (referenced in Quasar as: 'src="images/img.png')</li>
        <li> in the <b>src/assets folder</b> (referenced in Quasar as: 'src="~assets/img.png') </li>
      </ol>
      </div>
      As in the example above, you can put your own image in one of these folders and then change the code in the 'img' tag to display it.

<pre>
&lt;img
  alt="Quasar logo"
  src="~assets/myimage.png" &lt;- Change this to the name of your image in the assets folder
  style="width: 200px; height: 200px" &lt;- Change the size here
&gt;
</pre>

  <div class="q-pt-md text-subheader" >
      2. Add some text
  </div>
 <div class="q-py-sm">
  We'll add some text below the image where we could put a description, label or accreditation.
   We add a 'div' around the text as a container to help keep it in the center of the page. The words written after 'class=' are key words Quasar recognizes to help with layout.
</div>

<pre>
 &lt;div class="full-width text-center"&gt;
    Quasar Image coutesy of NASA
 &lt;/div&gt;
</pre>
</div>
  <q-item-label class="q-pt-md text-subheader" >
      3. Add a button
  </q-item-label>
 <div class="q-py-sm">
   This button will allow the user to go to the new page we will create next.
   Note the 'q-btn' tag. This is one of the Quasar components mentioned in the introduction.
   There are many of them with descriptions and examples on the Quasar website. Feel free to change the color, label etc.
</div>

 <pre>
  &lt;div class="text-center"&gt;
    &lt;q-btn label="My Page" color="green" to="mypage"&gt;&lt;/q-btn&gt;
  &lt;/div&gt;
</pre>

<q-item-label class="q-pt-md text-subheader">
2. Add a new page
</q-item-label>

<div class="q-pt-sm">
1. Copy an existing page (an 'xxx.vue' file in the pages folder) or create and save a new page (file).
It can be as simple as something like this (the default Quasar 'IndexPage.vue' page).
Note that the file name must have 2 or more words, like <b>'MyPage.vue'</b>. This is called camel case.

<pre>
&lt;template&gt;
  &lt;q-p_ge class="flex flex-center"&gt;
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
 You might think that it could be automatically detectetd but it isnt - you have to add this page to the Router.
 The router is a common concept for frameworks like Vue. It's job is to manage and load pages.
  (It took me a while to get my head around this concept so if it's confusing, don't worry.)
Locate the file "routes.js" in the router folder.
Copy and paste one of the 'children' (the line between {}), then rename the <b>path</b> and <b>page title</b> as below.
 Make sure to add a comma after the previous child.
<div class="q-pt-sm">
 If you add a child for a page that doesn't exist you will see an error.
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
