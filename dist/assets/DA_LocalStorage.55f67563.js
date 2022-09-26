import{o as d,q as h,t as u,x as m,D as e,d as r,C as l,z as t}from"./index.214a8f10.js";import{Q as g}from"./QPage.48994b99.js";import{u as p}from"./use-quasar.bdb1de90.js";const f=e("div",{class:"heading q-pa-md"},"Local Storage",-1),w=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of reading and writing (saving) data and how to use vue's lifecycle hooks. ",-1),_=e("div",{class:"q-pa-md"},[t(" Lifecycle hooks allow code to be run at certain times. For example, 'onMounted' is a special event that is triggered when a page loads. More information is "),e("a",{href:"https://vuejs.org/api/composition-api-lifecycle.html"},"here"),t(". "),e("p"),e("p"),t("This is a simple example using script setup... ")],-1),b=e("pre",null,`<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    console.log('mounted')
    alert('I am alive!')
  })
<\/script>`,-1),v=e("div",{class:"q-pa-md"},[t(" This can be a useful place to take some actions, for example to load data into our table. There are various ways to accomplish this. Let's start with the easiest which is Quasar's built-in LocalStorage plugin. More information is "),e("a",{href:"https://quasar.dev/quasar-plugins/web-storage"},"here"),t(". Just a note that this is the easiest but not necessarily the best way. It's probably not suitable if you are using a shared computer and the data will be deleted if the browser cache is cleared. "),e("p"),e("p"),t(" First some setup. We have to load the Quasar plugin by modifying the Quasar.conf file. Add 'LocalStorage' after plugins in the "),e("b",null,"quasar.config.js"),t(" file like this: ")],-1),y=e("pre",null,`// Quasar plugins
plugins: ['LocalStorage']
`,-1),x=e("div",{class:"q-pa-md"},' Then we have to import "useQuasar" to use the plugin and add some code to access local storage. ',-1),q=e("pre",null,`<script setup>
  import { onMounted } from 'vue'
  import useQuasar from 'quasar/src/composables/use-quasar.js';

  onMounted(() => {
    console.log('Mounted')
    const data = getData('name') <-- Look up the name
    if (data) {
      console.log('Read: ' + data)
    }
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
`,-1),D=e("div",{class:"q-pa-md"},[t(' When you use LocalStorage you save data in named pairs, for example, "name: George" and "age: 5", and you read it by asking for that name. We created a method called getData that does this so we can call '),e("b",null,"getData(dataName)"),t(". If the data has been saved, it will be returned by the method. If there is no data, it will return 'undefined' which means it doesn't exist. In Javascript if we want to check whether or not something (an object) exists, the easiest way is just to write 'if (object)...'. ")],-1),S=e("div",{class:"q-pa-md"},[t(" Since we haven't yet stored any data we should add a "),e("b",null,"saveData()"),t(" function to add some new data if the data doesn't exist. Note: with computers it is possible that there will be an error when reading or writing data. The memory might be full or it might be locked. You can't always assume that reading or writing data will be successful. That is why we have some code called a try/catch block that catches such errors. "),e("p"),e("p"),t("Here is our saveData function which is similar to getData except we have to provide 2 pieces of information, the name for the data and the actual data... ")],-1),k=e("pre",null,` function saveData (dataName, data) {
  try {
    return $q.localStorage.set(dataName, data)
  } catch (e) {
    // data wasn't successfully written due to
    // a Web Storage API error
  }
}
`,-1),N=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),Q=e("div",{class:"q-pa-md text-center full-width"}," Next - connecting our 'getData' function to the table. ",-1),I={class:"text-center q-pa-md full-width"},L={class:"text-center q-pa-md"},A={__name:"DA_LocalStorage",setup(M){d(()=>{console.log("mounted");const a=n("name");if(console.log("Data: "+a),!a){i("name","George"),i("age","5");const o=n("name");console.log("Data: "+o)}});const s=p();function n(a){try{return s.localStorage.getItem(a)}catch(o){console.log("Error getting data: "+o)}}function i(a,o){try{s.localStorage.set(a,o)}catch(c){console.log("Error saving data: "+c)}}return(a,o)=>(h(),u(g,{class:"flex flex-center"},{default:m(()=>[f,w,_,b,v,y,x,q,D,S,k,N,Q,e("div",I,[r(l,{label:"Loading data into a table",color:"primary",to:"da_table"})]),e("div",L,[r(l,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{A as default};
