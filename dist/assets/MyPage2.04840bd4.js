import{Q as t}from"./QBtn.bfaec128.js";import{Q as a}from"./QPage.6bb31a1b.js";import{o,L as c,M as l,N as i,U as e,d as n}from"./index.ba1fc8e1.js";import"./QIcon.a03dee72.js";import"./use-size.56b56c45.js";import"./render.ee200cf8.js";import"./QSpinner.43b6d172.js";import"./use-router-link.023d295d.js";const r=e("img",{class:"q-ma-md",alt:"Quasar image",src:"images/nasa_images/stsci-h-2010a-d-1280x720.png"},null,-1),d=e("div",{class:"full-width text-center"}," Quasar Image coutesy of NASA ",-1),m={class:"full-width text-center"},u={class:"text-center q-pa-md"},p=e("div",{class:"q-pa-md"},[e("div",{class:"text-center"}," The code for this page "),e("pre",null,`  <template>
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
  `)],-1),g={class:"text-center q-pa-md"},M={__name:"MyPage2",setup(_){o(()=>{console.log("mounted")});function s(){alert("btnClicked")}return(f,h)=>(c(),l(a,{class:"flex flex-center"},{default:i(()=>[e("div",null,[r,d,e("div",m,[e("div",u,[n(t,{label:"Change picture",color:"blue",onClick:s})])])]),p,e("div",g,[n(t,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{M as default};
