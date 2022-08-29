import{Q as r}from"./QBtn.bec21ff7.js";import{Q as d}from"./QPage.7dd74a2d.js";import{u as h}from"./use-quasar.5686454b.js";import{o as u,n as m,p,q as g,z as e,d as l,u as a}from"./index.a6f57cfb.js";import"./QIcon.d6306007.js";import"./use-size.d55f13e1.js";import"./render.1c8257f7.js";import"./QSpinner.7606a0cb.js";import"./use-router-link.06542d9a.js";const f=e("div",{class:"heading q-pa-md"},"Local Storage",-1),w=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of reading and writing (saving) data and how to use vue's lifecycle hooks. ",-1),v=e("div",{class:"q-pa-md"},[a(" Lifecycle hooks allow code to be run at certain times. For example, 'onMounted' is a special event that is called when a page loads. More information is "),e("a",{href:"https://vuejs.org/api/composition-api-lifecycle.html"},"here"),a(". "),e("p"),e("p"),a("This is simple example when using script setup... "),e("pre",null,`    <script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
      console.log('mounted')
      alert('I am alive!')
    })
    <\/script>
  `)],-1),b=e("div",{class:"q-pa-md"},[a(" This can be a useful place to take some action, for example to load some data into our table. There are various ways to accomplish this. Let's start with the easiest which is Quasar's built-in LocalStorage plugin. More information is "),e("a",{href:"https://quasar.dev/quasar-plugins/web-storage"},"here"),a(". Just a note that this is the easiest but not necessarily the best way. It's probably not suitable if you are using a shared computer and the data will be deleted if the browser cache is cleared. "),e("p"),e("p"),a(" First some set up. We have to load the Quasar plugin by modifying the Quasar.conf file. Add 'LocalStorage' after plugins in the Quasar.conf file like this: "),e("pre",null,`  // Quasar plugins
  plugins: ['LocalStorage']
`),e("div",{class:"q-pa-md"},' Then we have to add some code and import "useQuasar" to access the plugin. '),e("pre",null,`<script setup>
import { onMounted } from 'vue'
import useQuasar from 'quasar/src/composables/use-quasar.js';

onMounted(() => {
  console.log('mounted')
  alert('I\\'m alive!')
  const data = getData('name') <-- Look up the name
})

const $q = useQuasar()

function getData (dataName) {
  try {
    return $q.localStorage.getItem(dataName)
  } catch (e) {
    // data wasn't successfully read due to
    // a Web Storage API error
  }
}
`)],-1),_=e("div",{class:"q-pa-md"},` When you use LocalStorage you save data in named pairs, for example, "name: George" and "age: 5" and you read it by asking for that name. We created a method called getData that does this so we can call getData('name'). If the data has been saved, it will be returned by the method. If there is no data, it will return 'undefined' which means it doesn't exist. In Javascript if we want to check whether or not something (an object) exists, the easiest way is just to write 'if (object)'. `,-1),y=e("div",{class:"q-pa-md"},[a(" Since we haven't yet stored any data we should add a saveData() function to add some new data if the data doesn't exist. Note: with computers it is possible that there will be an error when reading or writing data. The memory might be full or it might be locked. You can't always assume that reading or writing data will be successful. That is why we have some code called a try/catch block that catches such errors. "),e("p"),e("p"),a("Here is our saveData function which is similar to getData except we have to provide 2 pieces of information, the name for the data and the actual data... ")],-1),x=e("pre",null,` function saveData (dataName, data) {
  try {
    return $q.localStorage.set(dataName, data)
  } catch (e) {
    // data wasn't successfully written due to
    // a Web Storage API error
  }
}
`,-1),q=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),D=e("div",{class:"q-pa-md text-center full-width"}," Next - connecting our 'getData' function to the table. ",-1),Q={class:"text-center q-pa-md full-width"},S={class:"text-center q-pa-md"},$={__name:"DA_LocalStorage",setup(k){u(()=>{console.log("mounted");const t=n("name");if(console.log("Data: "+t),t)alert("Data: "+t);else{i("name","George"),i("age","5");const o=n("name");console.log("Data: "+o)}});const s=h();function n(t){try{return s.localStorage.getItem(t)}catch(o){console.log("Error getting data: "+o)}}function i(t,o){try{s.localStorage.set(t,o)}catch(c){console.log("Error saving data: "+c)}}return(t,o)=>(m(),p(d,{class:"flex flex-center"},{default:g(()=>[f,w,v,b,_,y,x,q,D,e("div",Q,[l(r,{label:"Loading data to a table",color:"primary"})]),e("div",S,[l(r,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{$ as default};
