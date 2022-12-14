import{r as s,j as r,z as f,m as t,l as o,T,k as _,n as y,F as g,x as l,y as e,A as S,p as a}from"./index.2b580301.js";import{Q as c}from"./QPageSticky.d270ac81.js";import{Q as v}from"./QCard.b3c5006c.js";import{Q as V}from"./QCarouselSlide.9a684202.js";import{Q as B}from"./QCarousel.db102fd2.js";import{Q as x}from"./QImg.399f6eac.js";import{c as j}from"./copy-to-clipboard.7a0543b4.js";import{u as z}from"./use-quasar.7d9a075c.js";import"./use-dark.730c1ba6.js";import"./touch.70a9dd44.js";import"./selection.d9867a99.js";import"./use-fullscreen.14f50e07.js";const L=e("div",{class:"q-pa-md heading"},"Code",-1),N=e("div",{class:"q-px-md"}," Copy the code using the copy button on the right and paste it into your project. ",-1),F={class:"q-px-md"},I={class:"q-pa-md"},P={ref:"header",class:"text-center text-deep-purple-8 text-weight-medium full-width text-h6 q-pa-lg"},A=e("a",{href:"https://quasar.dev/vue-components/carousel"},"Q-Carousel ",-1),D={class:"text-grey-8 text-weight-medium full-width q-pa-md"},E=e("b",null,"animations : 'all'",-1),O={class:"q-pt-sm text-center"},U=e("br",null,null,-1),W=e("b",null,"fontawesome-v6",-1),$={class:"q-pt-sm text-center"},ne={__name:"QCarouselPage",setup(G){const w=z(),d=s("slide1"),m=s(),i=s(!1),C=s(!1),q=s("Copy code"),p=s("info");function u(){console.log("Show code"),i.value=!i.value}const Q=[{id:1,name:"slide1",src:"https://picsum.photos/800/600?random=1",text:"This is Slide 1"},{id:2,name:"slide2",src:"https://picsum.photos/800/600?random=2",text:"This is Slide 2"},{id:3,name:"slide3",src:"https://picsum.photos/800/600?random=3",text:"This is Slide 3"},{id:4,name:"slide4",src:"https://picsum.photos/800/600?random=4",text:"This is Slide 4"}];function b(){w.platform.is.mac,confirm("This action might replace the contents of your clipboard.")&&j(m.value.textContent).then(()=>{C.value=!0,q.value="Copied",p.value="positive"}).catch(()=>{})}return(k,h)=>(r(),f(g,null,[t(T,{appear:"","enter-active-class":"animated slideInLeft",duration:1e3,"leave-active-class":"animated slideOutLeft"},{default:o(()=>[i.value?(r(),_(v,{key:0},{default:o(()=>[L,N,t(c,{class:"z-top",position:"top-right",offset:[20,20]},{default:o(()=>[t(l,{fab:"",icon:"fa-solid fa-images",color:"accent",onClick:u})]),_:1}),t(c,{class:"z-top",position:"top-right",offset:[80,20]},{default:o(()=>[t(l,{fab:"",icon:"fa fa-copy",color:p.value,onClick:b},null,8,["color"])]),_:1}),e("div",F,[e("pre",{style:{"word-wrap":"break-word","white-space":"pre-wrap"},ref_key:"codeToCopy",ref:m},`<template>
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
`,512)])]),_:1})):y("",!0)]),_:1}),i.value?y("",!0):(r(),_(v,{key:0},{default:o(()=>[e("div",I,[t(c,{class:"z-top",position:"top-right",offset:[20,20]},{default:o(()=>[t(l,{fab:"",icon:"code",color:"accent",onClick:u})]),_:1}),t(B,{modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=n=>d.value=n),animated:"",arrows:"",autoplay:!0,navigation:"",infinite:"","transition-prev":"slide-left","transition-next":"slide-right","transition-duration":"2500"},{default:o(()=>[(r(),f(g,null,S(Q,n=>t(V,{key:n.id,class:"my-element",name:n.name,"img-src":n.src},null,8,["name","img-src"])),64))]),_:1},8,["modelValue"])]),e("div",P,[A,a("with 2 transitions (Slide-right by Quasar and fade from animate.css) ")],512),e("div",D,[a(" To run this in your own app you will need to modify the quasar.config.js file by uncommenting "),E,a(". (Delete the // characters at the beginning of the line and save the file.) "),e("div",O,[t(x,{src:"/images/quasar_conf_animations.png",alt:"quasar.config.js screenshot",style:{"max-width":"500px"}})]),U,a(" While you have the file open, you might want to do the same for "),W,a(" to allow you to use Font-Awesome icons in buttons and other components. "),e("div",$,[t(x,{src:"/images/quasar_conf_font_awesome.png",alt:"quasar.config.js screenshot 2",style:{"max-width":"500px"}})])])]),_:1}))],64))}};export{ne as default};
