import{o as d,q as h,t as u,x as m,D as e,d as r,C as c,z as a}from"./index.a7b0f77b.js";import{Q as p}from"./QPage.80c99fa4.js";import{u as g}from"./use-quasar.4feb0145.js";const f=e("div",{class:"heading q-pa-md"},"Local Storage",-1),w=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of reading and writing (saving) data and how to use vue's lifecycle hooks. ",-1),_=e("div",{class:"q-pa-md"},[a(" Lifecycle hooks allow code to be run at certain times. For example, 'onMounted' is a special event that is called when a page loads. More information is "),e("a",{href:"https://vuejs.org/api/composition-api-lifecycle.html"},"here"),a(". "),e("p"),e("p"),a("This is simple example when using script setup... ")],-1),v=e("pre",null,`    <script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
      console.log('mounted')
      alert('I am alive!')
    })
    <\/script>
  `,-1),b=e("div",{class:"q-pa-md"},[a(" This can be a useful place to take some actions, for example to load data into our table. There are various ways to accomplish this. Let's start with the easiest which is Quasar's built-in LocalStorage plugin. More information is "),e("a",{href:"https://quasar.dev/quasar-plugins/web-storage"},"here"),a(". Just a note that this is the easiest but not necessarily the best way. It's probably not suitable if you are using a shared computer and the data will be deleted if the browser cache is cleared. "),e("p"),e("p"),a(" First some set up. We have to load the Quasar plugin by modifying the Quasar.conf file. Add 'LocalStorage' after plugins in the Quasar.conf file like this: ")],-1),y=e("pre",null,`  // Quasar plugins
  plugins: ['LocalStorage']
`,-1),x=e("div",{class:"q-pa-md"},' Then we have to import "useQuasar" to use the plugin and add some code to access local storage. ',-1),q=e("pre",null,`<script setup>
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
`,-1),D=e("div",{class:"q-pa-md"},` When you use LocalStorage you save data in named pairs, for example, "name: George" and "age: 5" and you read it by asking for that name. We created a method called getData that does this so we can call getData('name'). If the data has been saved, it will be returned by the method. If there is no data, it will return 'undefined' which means it doesn't exist. In Javascript if we want to check whether or not something (an object) exists, the easiest way is just to write 'if (object)'. `,-1),S=e("div",{class:"q-pa-md"},[a(" Since we haven't yet stored any data we should add a saveData() function to add some new data if the data doesn't exist. Note: with computers it is possible that there will be an error when reading or writing data. The memory might be full or it might be locked. You can't always assume that reading or writing data will be successful. That is why we have some code called a try/catch block that catches such errors. "),e("p"),e("p"),a("Here is our saveData function which is similar to getData except we have to provide 2 pieces of information, the name for the data and the actual data... ")],-1),Q=e("pre",null,` function saveData (dataName, data) {
  try {
    return $q.localStorage.set(dataName, data)
  } catch (e) {
    // data wasn't successfully written due to
    // a Web Storage API error
  }
}
`,-1),k=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),I=e("div",{class:"q-pa-md text-center full-width"}," Next - connecting our 'getData' function to the table. ",-1),L={class:"text-center q-pa-md full-width"},N={class:"text-center q-pa-md"},A={__name:"DA_LocalStorage",setup(M){d(()=>{console.log("mounted");const t=n("name");if(console.log("Data: "+t),t)alert("Data: "+t);else{i("name","George"),i("age","5");const o=n("name");console.log("Data: "+o)}});const s=g();function n(t){try{return s.localStorage.getItem(t)}catch(o){console.log("Error getting data: "+o)}}function i(t,o){try{s.localStorage.set(t,o)}catch(l){console.log("Error saving data: "+l)}}return(t,o)=>(h(),u(p,{class:"flex flex-center"},{default:m(()=>[f,w,_,v,b,y,x,q,D,S,Q,k,I,e("div",L,[r(c,{label:"Loading data to a table",color:"primary",to:"da_table"})]),e("div",N,[r(c,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{A as default};
