import{Q as t}from"./QBtn.7ba80fc1.js";import{Q as a}from"./QPage.23e2a8e3.js";import{o,L as c,M as l,N as i,U as e,d as n}from"./index.4e44a38f.js";import"./QIcon.e188b234.js";import"./use-size.8cfaaf87.js";import"./render.5487b79a.js";import"./QSpinner.c48bcbc1.js";import"./use-router-link.dd0537cb.js";const r=e("img",{class:"q-ma-md",alt:"Quasar image",src:"images/nasa_images/stsci-h-2010a-d-1280x720.png"},null,-1),d=e("div",{class:"full-width text-center"}," Quasar image courtesy of NASA ",-1),m={class:"full-width text-center"},u={class:"text-center q-pa-md"},p=e("div",{class:"q-pa-md"},[e("div",{class:"text-center"}," The code for this page "),e("pre",null,`  <template>
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
  `)],-1),g={class:"text-center q-pa-md"},M={__name:"MyPage2",setup(_){o(()=>{console.log("mounted")});function s(){alert("btnClicked")}return(f,h)=>(c(),l(a,{class:"flex flex-center"},{default:i(()=>[e("div",null,[r,d,e("div",m,[e("div",u,[n(t,{label:"Change picture",color:"blue",onClick:s})])])]),p,e("div",g,[n(t,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{M as default};
