import{a as z,c,g as L,L as j,m as I,h as Q,f as O,r as g,q as x,E as S,d as n,x as d,k as N,t as $,y as T,F as P,C as b,D as o,G as F,z as _}from"./index.4d31a4bc.js";import{Q as B}from"./QCard.ca3ab117.js";import{Q as A}from"./QCarouselSlide.95b7f793.js";import{Q as D}from"./QCarousel.e3d99d66.js";import{Q as V}from"./QImg.83203848.js";import{c as E}from"./copy-to-clipboard.7a0543b4.js";import{u as G}from"./use-quasar.0d1bcba3.js";import"./use-dark.c843e23f.js";import"./touch.70a9dd44.js";import"./selection.8644c033.js";import"./use-fullscreen.fa0b408c.js";const K={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function U(){const{props:e,proxy:v}=L(),{$q:a}=v,i=z(j,()=>{console.error("QPageSticky needs to be child of QLayout")}),u=c(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),r=c(()=>i.header.offset),p=c(()=>i.right.offset),l=c(()=>i.footer.offset),m=c(()=>i.left.offset),y=c(()=>{let t=0,s=0;const f=u.value,q=a.lang.rtl===!0?-1:1;f.top===!0&&r.value!==0?s=`${r.value}px`:f.bottom===!0&&l.value!==0&&(s=`${-l.value}px`),f.left===!0&&m.value!==0?t=`${q*m.value}px`:f.right===!0&&p.value!==0&&(t=`${-q*p.value}px`);const h={transform:`translate(${t}, ${s})`};return e.offset&&(h.margin=`${e.offset[1]}px ${e.offset[0]}px`),f.vertical===!0?(m.value!==0&&(h[a.lang.rtl===!0?"right":"left"]=`${m.value}px`),p.value!==0&&(h[a.lang.rtl===!0?"left":"right"]=`${p.value}px`)):f.horizontal===!0&&(r.value!==0&&(h.top=`${r.value}px`),l.value!==0&&(h.bottom=`${l.value}px`)),h}),w=c(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function C(t){const s=I(t.default);return Q("div",{class:w.value,style:y.value},e.expand===!0?s:[Q("div",s)])}return{$layout:i,getStickyContent:C}}var k=O({name:"QPageSticky",props:K,setup(e,{slots:v}){const{getStickyContent:a}=U();return()=>a(v)}});const W=o("div",{class:"q-pa-md heading"},"Code",-1),X=o("div",{class:"q-px-md"}," Copy the code using the copy button on the right and paste it into your project. ",-1),Y={class:"q-px-md"},H={class:"q-pa-md"},J={ref:"header",class:"text-center text-deep-purple-8 text-weight-medium full-width text-h6 q-pa-lg"},M=o("a",{href:"https://quasar.dev/vue-components/carousel"},"Q-Carousel ",-1),R=_("with 2 transitions (Slide-right by Quasar and fade from animate.css) "),Z=[M,R],tt={class:"text-grey-8 text-weight-medium full-width q-pa-md"},et=_(" To run this in your own app you will need to modify the quasar.config.js file by uncommenting "),ot=o("b",null,"animations : 'all'",-1),st=_(". (Delete the // characters at the beginning of the line and save the file.) "),nt={class:"q-pt-sm text-center"},at=o("br",null,null,-1),it=_(" While you have the file open, you might want to do the same for "),rt=o("b",null,"fontawesome-v6",-1),lt=_(" to allow you to use Font-Awesome icons in buttons and other components. "),ct={class:"q-pt-sm text-center"},wt={__name:"QCarouselPage",setup(e){const v=G(),a=g("slide1"),i=g(),u=g(!1);function r(){console.log("Show code"),u.value=!u.value}const p=[{id:1,name:"slide1",src:"https://picsum.photos/800/600?random=1",text:"This is Slide 1"},{id:2,name:"slide2",src:"https://picsum.photos/800/600?random=2",text:"This is Slide 2"},{id:3,name:"slide3",src:"https://picsum.photos/800/600?random=3",text:"This is Slide 3"},{id:4,name:"slide4",src:"https://picsum.photos/800/600?random=4",text:"This is Slide 4"}],l=g(!1),m=g("Copy code"),y=g("primary");function w(){v.platform.is.mac,confirm("This action might replace the contents of your clipboard.")&&E(i.value.textContent).then(()=>{l.value=!0,m.value="Copied",l.value&&(y.value="positive"),y.value="info"}).catch(()=>{})}return(C,t)=>(x(),S(P,null,[n(N,{appear:"","enter-active-class":"animated slideInLeft",duration:1e3,"leave-active-class":"animated slideOutLeft"},{default:d(()=>[u.value?(x(),$(B,{key:0},{default:d(()=>[W,X,n(k,{class:"z-top",position:"top-right",offset:[20,20]},{default:d(()=>[n(b,{fab:"",icon:"fa-solid fa-images",color:"secondary",onClick:r})]),_:1}),n(k,{class:"z-top",position:"top-right",offset:[80,20]},{default:d(()=>[n(b,{fab:"",icon:"fa fa-copy",color:y.value,onClick:w},null,8,["color"])]),_:1}),o("div",Y,[o("pre",{style:{"word-wrap":"break-word","white-space":"pre-wrap"},ref_key:"codeToCopy",ref:i},`<template>
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
`,512)])]),_:1})):T("",!0)]),_:1}),u.value?T("",!0):(x(),$(B,{key:0},{default:d(()=>[o("div",H,[n(k,{class:"z-top",position:"top-right",offset:[20,20]},{default:d(()=>[n(b,{fab:"",icon:"code",color:"accent",onClick:r})]),_:1}),n(D,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),animated:"",arrows:"",autoplay:!0,navigation:"",infinite:"","transition-prev":"slide-left","transition-next":"slide-right","transition-duration":"2500"},{default:d(()=>[(x(),S(P,null,F(p,s=>n(A,{key:s.id,class:"my-element",name:s.name,"img-src":s.src},null,8,["name","img-src"])),64))]),_:1},8,["modelValue"])]),o("div",J,Z,512),o("div",tt,[et,ot,st,o("div",nt,[n(V,{src:"/images/quasar_conf_animations.png",alt:"quasar.config.js screenshot",style:{"max-width":"500px"}})]),at,it,rt,lt,o("div",ct,[n(V,{src:"/images/quasar_conf_font_awesome.png",alt:"quasar.config.js screenshot 2",style:{"max-width":"500px"}})])])]),_:1}))],64))}};export{wt as default};
