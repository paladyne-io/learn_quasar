import{D as b,a as d,G as j,d as z,h as Q,g as L,H as O,c as F,r as h,i as _,y as S,l as a,k as u,T as I,j as $,m as T,F as P,q as C,x as o,z as N,n as g}from"./index.6766e7f5.js";import{Q as B}from"./QCard.bf52abf0.js";import{Q as A}from"./QCarouselSlide.b9de54a1.js";import{Q as D}from"./QCarousel.5b975ad8.js";import{Q as V}from"./QImg.99ba1e5a.js";import{c as E}from"./copy-to-clipboard.7a0543b4.js";import{u as G}from"./use-quasar.7fac37b6.js";import"./use-dark.fcf081d7.js";import"./touch.70a9dd44.js";import"./selection.e7f9da0d.js";import"./use-fullscreen.b1d2d85b.js";const H={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function K(){const{props:e,proxy:{$q:l}}=L(),n=j(O,b);if(n===b)return console.error("QPageSticky needs to be child of QLayout"),b;const v=d(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),i=d(()=>n.header.offset),c=d(()=>n.right.offset),p=d(()=>n.footer.offset),m=d(()=>n.left.offset),x=d(()=>{let t=0,r=0;const s=v.value,q=l.lang.rtl===!0?-1:1;s.top===!0&&i.value!==0?r=`${i.value}px`:s.bottom===!0&&p.value!==0&&(r=`${-p.value}px`),s.left===!0&&m.value!==0?t=`${q*m.value}px`:s.right===!0&&c.value!==0&&(t=`${-q*c.value}px`);const f={transform:`translate(${t}, ${r})`};return e.offset&&(f.margin=`${e.offset[1]}px ${e.offset[0]}px`),s.vertical===!0?(m.value!==0&&(f[l.lang.rtl===!0?"right":"left"]=`${m.value}px`),c.value!==0&&(f[l.lang.rtl===!0?"left":"right"]=`${c.value}px`)):s.horizontal===!0&&(i.value!==0&&(f.top=`${i.value}px`),p.value!==0&&(f.bottom=`${p.value}px`)),f}),y=d(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function w(t){const r=z(t.default);return Q("div",{class:y.value,style:x.value},e.expand===!0?r:[Q("div",r)])}return{$layout:n,getStickyContent:w}}var k=F({name:"QPageSticky",props:H,setup(e,{slots:l}){const{getStickyContent:n}=K();return()=>n(l)}});const R=o("div",{class:"q-pa-md heading"},"Code",-1),U=o("div",{class:"q-px-md"}," Copy the code using the copy button on the right and paste it into your project. ",-1),W={class:"q-px-md"},X={class:"q-pa-md"},Y={ref:"header",class:"text-center text-deep-purple-8 text-weight-medium full-width text-h6 q-pa-lg"},J=o("a",{href:"https://quasar.dev/vue-components/carousel"},"Q-Carousel ",-1),M={class:"text-grey-8 text-weight-medium full-width q-pa-md"},Z=o("b",null,"animations : 'all'",-1),tt={class:"q-pt-sm text-center"},et=o("br",null,null,-1),ot=o("b",null,"fontawesome-v6",-1),st={class:"q-pt-sm text-center"},ht={__name:"QCarouselPage",setup(e){const l=G(),n=h("slide1"),v=h(),i=h(!1);function c(){console.log("Show code"),i.value=!i.value}const p=[{id:1,name:"slide1",src:"https://picsum.photos/800/600?random=1",text:"This is Slide 1"},{id:2,name:"slide2",src:"https://picsum.photos/800/600?random=2",text:"This is Slide 2"},{id:3,name:"slide3",src:"https://picsum.photos/800/600?random=3",text:"This is Slide 3"},{id:4,name:"slide4",src:"https://picsum.photos/800/600?random=4",text:"This is Slide 4"}],m=h(!1),x=h("Copy code"),y=h("info");function w(){l.platform.is.mac,confirm("This action might replace the contents of your clipboard.")&&E(v.value.textContent).then(()=>{m.value=!0,x.value="Copied",y.value="positive"}).catch(()=>{})}return(t,r)=>(_(),S(P,null,[a(I,{appear:"","enter-active-class":"animated slideInLeft",duration:1e3,"leave-active-class":"animated slideOutLeft"},{default:u(()=>[i.value?(_(),$(B,{key:0},{default:u(()=>[R,U,a(k,{class:"z-top",position:"top-right",offset:[20,20]},{default:u(()=>[a(C,{fab:"",icon:"fa-solid fa-images",color:"accent",onClick:c})]),_:1}),a(k,{class:"z-top",position:"top-right",offset:[80,20]},{default:u(()=>[a(C,{fab:"",icon:"fa fa-copy",color:y.value,onClick:w},null,8,["color"])]),_:1}),o("div",W,[o("pre",{style:{"word-wrap":"break-word","white-space":"pre-wrap"},ref_key:"codeToCopy",ref:v},`<template>
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
`,512)])]),_:1})):T("",!0)]),_:1}),i.value?T("",!0):(_(),$(B,{key:0},{default:u(()=>[o("div",X,[a(k,{class:"z-top",position:"top-right",offset:[20,20]},{default:u(()=>[a(C,{fab:"",icon:"code",color:"accent",onClick:c})]),_:1}),a(D,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=s=>n.value=s),animated:"",arrows:"",autoplay:!0,navigation:"",infinite:"","transition-prev":"slide-left","transition-next":"slide-right","transition-duration":"2500"},{default:u(()=>[(_(),S(P,null,N(p,s=>a(A,{key:s.id,class:"my-element",name:s.name,"img-src":s.src},null,8,["name","img-src"])),64))]),_:1},8,["modelValue"])]),o("div",Y,[J,g("with 2 transitions (Slide-right by Quasar and fade from animate.css) ")],512),o("div",M,[g(" To run this in your own app you will need to modify the quasar.config.js file by uncommenting "),Z,g(". (Delete the // characters at the beginning of the line and save the file.) "),o("div",tt,[a(V,{src:"/images/quasar_conf_animations.png",alt:"quasar.config.js screenshot",style:{"max-width":"500px"}})]),et,g(" While you have the file open, you might want to do the same for "),ot,g(" to allow you to use Font-Awesome icons in buttons and other components. "),o("div",st,[a(V,{src:"/images/quasar_conf_font_awesome.png",alt:"quasar.config.js screenshot 2",style:{"max-width":"500px"}})])])]),_:1}))],64))}};export{ht as default};
