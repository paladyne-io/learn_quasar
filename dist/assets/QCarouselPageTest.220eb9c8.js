import{y as s,o as r,d as h,g as t,w as o,m as T,h as g,as as _,i as y,F as v,M as l,c as e,f as S,a as n}from"./index.d0600fff.js";import{Q as c}from"./QPageSticky.3eaefd60.js";import{Q as V}from"./QCarouselSlide.e0fcf47e.js";import{Q as j}from"./QCarousel.9b8ee152.js";import{Q as w}from"./QImg.8af05b51.js";import{c as B}from"./copy-to-clipboard.7a0543b4.js";import{u as z}from"./use-quasar.57f4256d.js";import"./touch.70a9dd44.js";import"./selection.0f580cd2.js";import"./use-fullscreen.75f4fae1.js";const L=e("div",{class:"q-pa-md heading"},"Code",-1),N=e("div",{class:"q-px-md"}," Copy the code using the copy button on the right and paste it into your project. ",-1),F={class:"q-px-md"},I={class:"q-pa-md"},P={ref:"header",class:"text-center text-deep-purple-8 text-weight-medium full-width text-h6 q-pa-lg"},A=e("a",{href:"https://quasar.dev/vue-components/carousel"},"Q-Carousel ",-1),D={class:"text-grey-8 text-weight-medium full-width q-pa-md"},E=e("b",null,"animations : 'all'",-1),M={class:"q-pt-sm text-center"},O=e("br",null,null,-1),U=e("b",null,"fontawesome-v6",-1),W={class:"q-pt-sm text-center"},oe={__name:"QCarouselPageTest",setup($){const x=z(),d=s("slide1"),m=s(),i=s(!1);function u(){console.log("Show code"),i.value=!i.value}const C=[{id:1,name:"slide1",src:"/images/test/dog.jpg",text:"This is Slide 1"},{id:2,name:"slide2",src:"/images/test/bicycle.png",text:"This is Slide 2"}],b=s(!1),q=s("Copy code"),p=s("info");function k(){x.platform.is.mac,confirm("This action might replace the contents of your clipboard.")&&B(m.value.textContent).then(()=>{b.value=!0,q.value="Copied",p.value="positive"}).catch(()=>{})}return(Q,f)=>(r(),h(v,null,[t(T,{appear:"","enter-active-class":"animated slideInLeft",duration:1e3,"leave-active-class":"animated slideOutLeft"},{default:o(()=>[i.value?(r(),g(_,{key:0},{default:o(()=>[L,N,t(c,{class:"z-top",position:"top-right",offset:[20,20]},{default:o(()=>[t(l,{fab:"",icon:"fa-solid fa-images",color:"accent",onClick:u})]),_:1}),t(c,{class:"z-top",position:"top-right",offset:[80,20]},{default:o(()=>[t(l,{fab:"",icon:"fa fa-copy",color:p.value,onClick:k},null,8,["color"])]),_:1}),e("div",F,[e("pre",{style:{"word-wrap":"break-word","white-space":"pre-wrap"},ref_key:"codeToCopy",ref:m},`<template>
 <q-carousel
    v-model="slide"
    animated
    arrows
    :autoplay=true
    navigation
    infinite
    transition-prev="slide-left"
    transition-next="slide-right"
    transition-duration="2500"
  >
  <q-carousel-slide
    v-for="slide in slides" :key="slide.id"
    class="my-element"
    :name="slide.name"
    :img-src="slide.src"
  />
 </q-carousel>
</template>

<script setup>
  import { ref } from 'vue'
  const slide = ref('slide1')

  const slides = [
    {id: 1, name: 'slide1', src: 'images/test/dog.jpg},
    {id: 2, name: 'slide2', src: 'images/test/bicycle.png},
  ]
<\/script>

<style>
  .my-element {
    animation: fadeIn;  /* referring directly to the animation's @keyframe declaration */
    animation-duration: 5s; /* don't forget to set a duration! */
  }
</style>
`,512)])]),_:1})):y("",!0)]),_:1}),i.value?y("",!0):(r(),g(_,{key:0},{default:o(()=>[e("div",I,[t(c,{class:"z-top",position:"top-right",offset:[20,20]},{default:o(()=>[t(l,{fab:"",icon:"code",color:"accent",onClick:u})]),_:1}),t(j,{modelValue:d.value,"onUpdate:modelValue":f[0]||(f[0]=a=>d.value=a),animated:"",arrows:"",autoplay:!0,navigation:"",infinite:"","transition-prev":"slide-left","transition-next":"slide-right","transition-duration":"2500",height:"300px"},{default:o(()=>[(r(),h(v,null,S(C,a=>t(V,{key:a.id,class:"my-element",name:a.name,"img-src":a.src,style:{"background-size":"contain","background-repeat":"no-repeat"}},null,8,["name","img-src"])),64))]),_:1},8,["modelValue"])]),e("div",P,[A,n("with 2 transitions (Slide-right by Quasar and fade from animate.css) ")],512),e("div",D,[n(" To run this in your own app you will need to modify the quasar.config.js file by uncommenting "),E,n(". (Delete the // characters at the beginning of the line and save the file.) "),e("div",M,[t(w,{src:"/images/quasar_conf_animations.png",alt:"quasar.config.js screenshot",style:{"max-width":"500px"}})]),O,n(" While you have the file open, you might want to do the same for "),U,n(" to allow you to use Font-Awesome icons in buttons and other components. "),e("div",W,[t(w,{src:"/images/quasar_conf_font_awesome.png",alt:"quasar.config.js screenshot 2",style:{"max-width":"500px"}})])])]),_:1}))],64))}};export{oe as default};
