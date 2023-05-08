import{O as s,o as c,h as l,w as o,c as e,g as t,m as n}from"./index.fe5066fd.js";import{Q as i}from"./QPage.ce4d759f.js";const d=e("img",{class:"q-ma-md",alt:"Quasar image",src:"images/nasa_images/stsci-h-2010a-d-1280x720.png"},null,-1),r=e("div",{class:"full-width text-subheader text-center"}," Quasar image courtesy of NASA ",-1),m={class:"full-width text-center"},u={class:"text-center q-pa-md"},g=e("div",{class:"q-pa-md"},[e("div",{class:"text-center"}," The code for this page "),e("pre",null,`<template>
  <q-page class="flex flex-center">
    <div>
     <img class="q-ma-md"
      alt="Quasar image"
      src="images/nasa_images/stsci-h-2010a-d-1280x720.png">
     <div class="full-width text-center">
        Quasar image courtesy of NASA
     </div>
        <div class="full-width text-center">
     <div class="text-center">
       <q-btn label="My Page" color="blue" @click="btnClicked">
       </q-btn>
     </div>
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
`)],-1),p={class:"text-center q-pa-md"},b={__name:"MyPage2",setup(_){s(()=>{console.log("mounted")});function a(){alert("btnClicked")}return(f,h)=>(c(),l(i,{class:"flex flex-center"},{default:o(()=>[e("div",null,[d,r,e("div",m,[e("div",u,[t(n,{label:"My Page",color:"blue",onClick:a})])])]),g,e("div",p,[t(n,{label:"Back to programming Basics",color:"green",to:"programming1"})])]),_:1}))}};export{b as default};
