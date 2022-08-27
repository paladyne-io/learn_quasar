import{Q as t}from"./QBtn.c20e4677.js";import{Q as a}from"./QPage.3b554a5c.js";import{o,n as c,p as l,q as i,z as e,d as n}from"./index.d8bba45e.js";import"./QIcon.ac1b8ec4.js";import"./use-size.7c2afb04.js";import"./render.f76013d7.js";import"./QSpinner.4ba2e699.js";import"./use-router-link.102b6527.js";const r=e("img",{class:"q-ma-md",alt:"Quasar image",src:"images/nasa_images/stsci-h-2010a-d-1280x720.png"},null,-1),d=e("div",{class:"full-width text-subheader text-center"}," Quasar image courtesy of NASA ",-1),m={class:"full-width text-center"},u={class:"text-center q-pa-md"},p=e("div",{class:"q-pa-md"},[e("div",{class:"text-center"}," The code for this page "),e("pre",null,`  <template>
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
  `)],-1),g={class:"text-center q-pa-md"},A={__name:"MyPage2",setup(_){o(()=>{console.log("mounted")});function s(){alert("btnClicked")}return(f,h)=>(c(),l(a,{class:"flex flex-center"},{default:i(()=>[e("div",null,[r,d,e("div",m,[e("div",u,[n(t,{label:"Change picture",color:"blue",onClick:s})])])]),p,e("div",g,[n(t,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{A as default};
