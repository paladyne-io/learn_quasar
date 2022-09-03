import{o as a,q as c,t as l,x as o,D as e,d as t,C as n}from"./index.3225310d.js";import{Q as i}from"./QPage.3cd68b5f.js";const d=e("img",{class:"q-ma-md",alt:"Quasar image",src:"images/nasa_images/stsci-h-2010a-d-1280x720.png"},null,-1),r=e("div",{class:"full-width text-subheader text-center"}," Quasar image courtesy of NASA ",-1),u={class:"full-width text-center"},m={class:"text-center q-pa-md"},p=e("div",{class:"q-pa-md"},[e("div",{class:"text-center"}," The code for this page "),e("pre",null,`  <template>
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
  `)],-1),g={class:"text-center q-pa-md"},b={__name:"MyPage2",setup(_){a(()=>{console.log("mounted")});function s(){alert("btnClicked")}return(x,f)=>(c(),l(i,{class:"flex flex-center"},{default:o(()=>[e("div",null,[d,r,e("div",u,[e("div",m,[t(n,{label:"Change picture",color:"blue",onClick:s})])])]),p,e("div",g,[t(n,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{b as default};
