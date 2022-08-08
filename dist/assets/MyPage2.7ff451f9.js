import{a as t}from"./QBtn.1fe4a790.js";import{Q as a}from"./QPage.a56c827c.js";import{o as l,L as c,M as o,N as i,U as e,d as n}from"./index.1935b5ec.js";import"./QSpinner.4ae2f6f6.js";import"./use-router-link.27e43fa1.js";const r=e("img",{class:"q-ma-md",alt:"Quasar image",src:"images/nasa_images/stsci-h-2010a-d-1280x720.png"},null,-1),d=e("div",{class:"full-width text-center"}," Quasar Image coutesy of NASA ",-1),m={class:"full-width text-center"},u={class:"text-center"},p=e("div",null,[e("div",{class:"text-center"}," The code for this page "),e("div",{class:"q-pa-sm bg-blue-2"},[e("pre",null,`  <template>
   <q-page class="flex flex-center">
     <div>
     <img class="q-ma-md"
      alt="Quasar image"
      src="images/nasa_images/stsci-h-2010a-d-1280x720.png">
     <div class="full-width text-center">
        Quasar Image coutesy of NASA
     </div>
        <div class="full-width text-center">
     <div class="text-center">
       <q-btn label="Change picture" color="blue" @click="btnClicked">  </q-btn>
     </div>
     <div class="text-center">
      <q-btn label="Home" color="green" to="/"> <q-btn>
     <div>
      </div>
   </div>
   </q-page>
 </template>

<script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
      console.log('mounted')
    })

    function btnClicked () {
      alert('btnClicked')
    }
<\/script>
      `)])],-1),g={class:"text-center"},C={__name:"MyPage2",setup(_){l(()=>{console.log("mounted")});function s(){alert("btnClicked")}return(f,v)=>(c(),o(a,{class:"flex flex-center"},{default:i(()=>[e("div",null,[r,d,e("div",m,[e("div",u,[n(t,{label:"Change picture",color:"blue",onClick:s})])])]),p,e("div",g,[n(t,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{C as default};
