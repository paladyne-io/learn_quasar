import{r as o,x as r,H as f,A as t,z as s,T,y as _,aq as y,B as g,J as v,F as l,G as e,I as S,C as n}from"./index.89637881.js";import{Q as d}from"./QPageSticky.5990a291.js";import{Q as B}from"./QCarouselSlide.92f86a2d.js";import{Q as V}from"./QCarousel.f2c6024e.js";import{Q as x}from"./QImg.b6b1d665.js";import{c as j}from"./copy-to-clipboard.7a0543b4.js";import{u as z}from"./use-quasar.f5e05f8d.js";import"./touch.70a9dd44.js";import"./selection.4438e391.js";import"./use-fullscreen.ca22d8e3.js";const I=e("div",{class:"q-pa-md heading"},"Code",-1),L=e("div",{class:"q-px-md"}," Copy the code using the copy button on the right and paste it into your project. ",-1),N={class:"q-px-md"},F={class:"q-pa-md"},P={ref:"header",class:"text-center text-deep-purple-8 text-weight-medium full-width text-h6 q-pa-lg"},A=e("a",{href:"https://quasar.dev/vue-components/carousel"},"Q-Carousel ",-1),D={class:"text-grey-8 text-weight-medium full-width q-pa-md"},E=e("b",null,"animations : 'all'",-1),G={class:"q-pt-sm text-center"},H=e("br",null,null,-1),J=e("b",null,"fontawesome-v6",-1),O={class:"q-pt-sm"},se={__name:"QCarouselPage",setup(U){const w=z(),c=o("slide1"),m=o(),i=o(!1),C=o(!1),q=o("Copy code"),p=o("info");function u(){console.log("Show code"),i.value=!i.value}const b=[{id:1,name:"slide1",src:"https://picsum.photos/800/600?random=1",text:"This is Slide 1"},{id:2,name:"slide2",src:"https://picsum.photos/800/600?random=2",text:"This is Slide 2"},{id:3,name:"slide3",src:"https://picsum.photos/800/600?random=3",text:"This is Slide 3"},{id:4,name:"slide4",src:"https://picsum.photos/800/600?random=4",text:"This is Slide 4"}];function Q(){w.platform.is.mac,confirm("This action might replace the contents of your clipboard.")&&j(m.value.textContent).then(()=>{C.value=!0,q.value="Copied",p.value="positive"}).catch(()=>{})}return(k,h)=>(r(),f(v,null,[t(T,{appear:"","enter-active-class":"animated slideInLeft",duration:1e3,"leave-active-class":"animated slideOutLeft"},{default:s(()=>[i.value?(r(),_(y,{key:0},{default:s(()=>[I,L,t(d,{class:"z-top",position:"top-right",offset:[20,20]},{default:s(()=>[t(l,{fab:"",icon:"fa-solid fa-images",color:"accent",onClick:u})]),_:1}),t(d,{class:"z-top",position:"top-right",offset:[80,20]},{default:s(()=>[t(l,{fab:"",icon:"fa fa-copy",color:p.value,onClick:Q},null,8,["color"])]),_:1}),e("div",N,[e("pre",{style:{"word-wrap":"break-word","white-space":"pre-wrap"},ref_key:"codeToCopy",ref:m},`<template>
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
    {id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1'},
    {id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2'},
    {id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3'},
    {id: 4, name: 'slide4', src: 'https://picsum.photos/800/600?random=4'}
  ]
<\/script>

<style>
  .my-element {
    animation: fadeIn;  /* referring directly to the animation's @keyframe declaration */
    animation-duration: 5s; /* don't forget to set a duration! */
  }
</style>
`,512)])]),_:1})):g("",!0)]),_:1}),i.value?g("",!0):(r(),_(y,{key:0},{default:s(()=>[e("div",F,[t(d,{class:"z-top",position:"top-right",offset:[20,20]},{default:s(()=>[t(l,{fab:"",icon:"code",color:"accent",onClick:u})]),_:1}),t(V,{modelValue:c.value,"onUpdate:modelValue":h[0]||(h[0]=a=>c.value=a),animated:"",arrows:"",autoplay:!0,navigation:"",infinite:"","transition-prev":"slide-left","transition-next":"slide-right","transition-duration":"2500"},{default:s(()=>[(r(),f(v,null,S(b,a=>t(B,{key:a.id,class:"my-element",name:a.name,"img-src":a.src},null,8,["name","img-src"])),64))]),_:1},8,["modelValue"])]),e("div",P,[A,n("with 2 transitions (Slide-right by Quasar and fade from animate.css) ")],512),e("div",D,[n(" To run this in your own app you will need to modify the quasar.config.js file by uncommenting "),E,n(". Delete the // characters at the beginning of the line and save the file. "),e("div",G,[t(x,{src:"/images/quasar_conf_animations.png",alt:"quasar.config.js screenshot",style:{"max-width":"500px"}})]),H,n(" While you have the file open, you might want to do the same for "),J,n(" to allow you to use Font-Awesome icons in buttons and other components. "),e("div",O,[t(x,{ratio:16/9,src:"/images/quasar_conf_font_awesome.png",alt:"quasar.config.js screenshot 2",style:{"max-width":"500px",height:"400px"}})])])]),_:1}))],64))}};export{se as default};
