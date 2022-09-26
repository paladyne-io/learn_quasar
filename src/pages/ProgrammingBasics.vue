<template>
<q-page class="flex-center q-pa-md">
<div class="heading q-pa-md"> Programming Basics</div>

<div>
  <q-card flat class="q-pa-md">
    <div class="text-subheader q-pt-sm">
      The world is your stage
    </div>

    <div class="q-pa-sm">

      <div class="q-pt-md text-subheader">
        Adding interactivity
   </div>
   <div>
    So far we have covered how to set up and use Quasar and how to create, modify and navigate between pages.
    I'd like to focus this exercise on showing how to program some interactivity.
   </div>
      <div class="q-pt-sm">
    Each Vue page or component (xx.vue file) can have up to 3 sections:
    <ul>
      <li>the <b>template</b> section which contains html, including custom components and some vue elements</li>
      <li>the <b>script</b> section which is javascript, with some unique functions and 'hooks'</li>
      <li>the <b>style</b> section which is css</li>
    </ul>
     </div>
    <div class="q-pt-sm">
    Simply speaking, the template is what the page contains, the script is what it does and the style is how it looks.
   </div>
    <div class="q-pt-sm">
    In traditional web design these 3 types are usually separated into 3 files. The JavaScript file (xx.js) and the css file  (xx.css) are imported - most often in the header - of the HTML file (xx.html).
    Why combine them into one file?
   </div>
   <div class="q-pt-sm">
    This is called a SingleFileComponent which you can read more about
     <a href="https://vuejs.org/guide/scaling-up/sfc.html">here</a>.
    </div>

  <div class="q-pt-sm">
  <q>In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them.
     Inside a component, its template, logic, and styles are inherently coupled, and colocating them actually makes the component more cohesive and maintainable.
  </q>
   </div>
  <div class="q-pt-sm">
  When you integrate all 3 types of code into one file this becomes a stand-alone object that you can use in other parts of your app.
  It comes fully formed and ready to work. If you decide later to modify this component, everywhere it is used will gain the benefit of the improvements.
  Of course this is a double-edged sword as if you do something wrong it could affect other parts of your app.
  Embedding the behavior (logic) inside an object is a key principle of Object Oriented Programming.
  Thinking in terms of independent objects and their interactions will make your code more usable and easier to manage.
  Once you get used to it I don't think you will want to do it another way.
 </div>
<div class="q-pt-sm">

Some areas we will cover:
<ul>
    <li>Handling user activity such as a button click</li>
    <li>script setup</li>
    <li>onMounted (lifecycle hooks)</li>
</ul>

What we will come back to later:
<ul>
    <li>Reactivity</li>
    <li>Composition vs Options API</li>
    <li>v-if and v-for</li>
    <li>Props and slots</li>
    <li>Local storage</li>
    <li>Axios, i18n and boot files</li>
</ul>

 <div class="q-pt-sm">
    1. In the previous article we added a navigation button with a "to" element.
     If it is not a button used for navigation, you should add "@click=<i>methodName</i>" to the button like this:
</div>

<pre>
  &lt;q-btn label=&quot;Test button&quot;
   color=&quot;blue&quot;
   @click=&quot;btnClicked&quot;&gt;
  &lt;/q-btn&gt;"
</pre>
btnClicked is the name of the function that will be called in the Script section.
If you are completely new to programming and would like to understand terms such as function, method, parameter, variable etc.,
don't worry for now. The meanings of these terms should become clear over time.
</div>

<div class="q-pt-sm">
When you click the button, code in the btnClicked function will run.
</div>
<div class="text-center q-pa-md">

<q-btn label="Test button" color="blue" @click="btnClicked"> </q-btn>
</div>
 <div class="q-pt-sm">
In version 3.2 of Vue, "script setup" was added as a new simpler way to format and use JavaScript.

 <a href="https://vuejs.org/api/sfc-script-setup.html">Read more here </a> if you are interested.

It looks like this.
<pre>
  &lt;script setup&gt;
    import { onMounted } from 'vue'

    onMounted(() => {
      console.log('mounted')
    })

    function btnClicked () {
      alert('You clicked me!')
    }
  &lt;/script&gt;"
/>
</pre>
</div>
<div class="q-pt-sm">
The onMounted function is a special function provided by vue.
 It is called when the component or page is loaded.
 It can be useful to check something or run some code when the page is first displayed.
 For example, to check whether the app is running on a mobile device, what language the device is using etc.
</div>

<div class="q-pt-sm">
  Note the use of 'alert()' and 'console.log()' which are two useful Javascript methods.
  alert() will display a pop-up message to the user.
  console.log() will print a message to the JavaScript console which can be seen by choosing 'Display JavaScript Console' in your browser.

</div>

<div class="q-pt-sm">
Both of these methods are very useful for debugging your code.
This is the process of testing and fixing code. For example, you can add a call to  console.log() at the beginning of a function to make sure it is being called when you expect it to be.
You can also use it to print out the result of calculations or the value of variables to check that they are what you expect.
</div>

<div class="q-pt-sm">
Click the button to see the whole page.
  <div class="text-center q-pa-md">
      <q-btn label="My Page 2" color="green" to="/mypage2"> </q-btn>
    </div>
</div>

</div>
<div class="row full-width text-subheader q-pt-sm">
  <q-btn outline style="color: goldenrod" label="Previous" to="helloworld" />
  <q-space />
  <q-btn outline style="color: goldenrod;text-align:right;" label="Next: Add a library" to="sendemail" />
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
          to="images"
          @click="link = 'images'"
        >
        <div style="text-align:right" class="full-width">
            Next: Add a library
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
// import PreComponentDA from 'components/PreComponentDA.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: { //  PreComponentDA

  },

  setup () {
    /*
    onMounted(() => {
    // console.log('uuid:' + uuid.value)
      alert('Vue version :' + version)
    })
    */
    function btnClicked () {
      alert('You clicked me!')
    }
    return { btnClicked }
  }
})
</script>

<style>
q {
  font-style:italic;
  color:darkblue;
}
.text-subheader {
  font-family: verdana;
  font-size: 16px;
  font-weight: bold;
  color:darkblue;
}
</style>
