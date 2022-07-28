<template>
<q-page class="flex-center q-pa-md">
<div class="q-pa-md text-h5 text-bold"> Making it your own </div>

<div>
  <q-card flat class="q-pa-md">
    <div class="text-subheader q-pt-sm">
      The world is your canvas
    </div>

    <div class="q-pt-sm">
      Your mission today is to get to this:
    </div>

<q-img src="images/QuasarAppTopPage.png" alt="Quasar default app screen"> </q-img>

<div class="q-pt-sm">
  This is the basic order of tasks.
</div>

<q-list>
   <q-item>
      <q-item-section>
       <q-item-label class="q-pt-md text-subheader" >
        1. Add your own pictures and text
        </q-item-label>

<q-item-label class="q-pt-md text-subheader" >
2. Add a new page
</q-item-label>

<div class="q-pt-sm">
1. Copy a previous page or write and save a new page.
It can be as simple as something like this (the default Quasar 'IndexPage.vue' page).
Note that the file name has to have 2 or more words, like <b>'MyPage.vue'</b>.
</div>
<div class="q-pa-sm bg-blue-2">
<pre>
&lt;template&gt;
  &lt; q-p_ge class="flex flex-center"&gt;
      &lt;img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;
</pre>
</div>
<div class="q-pt-sm">
2. Add this page to the router. Locate the file "routes.js" in the router folder.
Copy and paste one of the children, then rename the <b>path</b> and <b>page title</b> as below.
 Make sure to add a comma after the previous child.
 'path' is the name that will appear after the "/" in the browser's address bar*.
</div>
<div class="q-pa-sm bg-blue-2">
<pre>
  { path: '<b>mypage</b>', component: () => import('pages/<b>MyPage.vue</b>') }
</pre>
</div>
<div class="q-pt-sm">
*You may notice the "#" in the address. Dont worry about it for now.
 It is the default mode and can be changed in the Quasar.conf file.
</div>

</q-item-section>
    </q-item>
    </q-list>

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
        Next: Add a carousel
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

<style>
.text-subheader {
  font-family: verdana;
  font-size: 16px;
  font-weight: bold;
  color:darkblue;
}
</style>
