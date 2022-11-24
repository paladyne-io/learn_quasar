import{Q as u}from"./QCarouselSlide.b9de54a1.js";import{Q as b}from"./QTable.4989282a.js";import{Q as x}from"./QCarousel.5b975ad8.js";import{r as n,I as w,i as q,j as C,k as o,p as k,l as t,x as e,q as d,n as r}from"./index.6766e7f5.js";import{Q}from"./QCard.bf52abf0.js";import{Q as S}from"./QPage.8dbc33ed.js";import"./touch.70a9dd44.js";import"./selection.e7f9da0d.js";import"./QSeparator.d817502b.js";import"./use-dark.fcf081d7.js";import"./use-timeout.ed080a3c.js";import"./scroll.1c697311.js";import"./use-tick.d9d262be.js";import"./use-key-composition.52a41272.js";import"./uid.42677368.js";import"./QItem.0e413009.js";import"./QItemLabel.5d798cd0.js";import"./use-form.8965679d.js";import"./format.a33550d6.js";import"./use-checkbox.81108e4a.js";import"./use-fullscreen.b1d2d85b.js";const T=e("img",{alt:"Dog image",src:"/images/dog.png"},null,-1),y=e("div",{class:"text-center heading full-width"}," Reggie ",-1),B={class:"text-center q-pa-md"},V=e("div",{class:"q-ma-md"},[e("b",null,"Method:"),r(" Use a QCarousel with its built-in transition triggers, 'transition-prev' and 'transition-next'. The transition is triggered when the slide is changed. ")],-1),D=e("pre",null,`<q-carousel height="500px"
  v-model="slides"
  transition-prev="flip-right"
  transition-next="flip-left"
  transition-duration="1500">
  <q-carousel-slide name="image" @click="showDogStats">
  </q-carousel-slide>
</q-carousel>
`,-1),N=e("div",{class:"q-pa-md"},[e("b",null," Issues."),r(" The transition is smooth but there is a delay afterwards and the top part of the stats table is visible underneath. I can't find a way to change the focal point of the transition. ")],-1),I={class:"q-pa-md"},L={class:"text-center q-pa-md full-width"},M={class:"text-center q-pa-md"},se={__name:"MyDogAppPage3",setup(R){const i=n(!1),s=n("image"),p=n("Reggie").value+"'s stats",g=n("Show/Hide stats");w(()=>{console.log("mounted")});const f=[{name:"name",required:!0,label:"Exercise",align:"left",field:a=>a.name,format:a=>`${a}`,width:"400px",headerStyle:"width: 400px",sortable:!0},{name:"Time",align:"left",label:"Time (m)",field:"time",sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0}],h=[{name:"Walking",time:30,calories:159,fat:6},{name:"Running in park",time:30,calories:237,fat:9},{name:"Sleeping",time:90,calories:10,fat:1},{name:"Chasing cars",time:10,calories:200,fat:3.7},{name:"Chasing cats",time:10,calories:100,fat:8},{name:"Chasing tail",time:30,calories:50,fat:10}];function m(){console.log("showDogStats: "+i.value),i.value=!i.value,i.value?s.value="stats":s.value="image"}function _(a){console.log("sg BeforeLeave element: "+a)}return(a,l)=>{const v=k("router-link");return q(),C(S,{class:"q-mt-sm"},{default:o(()=>[t(Q,{flat:"",class:""},{default:o(()=>[t(x,{height:"500px",modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),"transition-prev":"flip-right","transition-next":"flip-left","transition-duration":"1500",onBeforeTransition:l[1]||(l[1]=c=>_(a.$el)),animated:""},{default:o(()=>[t(u,{name:"image",class:"text-center",onClick:m},{default:o(()=>[T,y]),_:1}),t(u,{height:"500px",name:"stats"},{default:o(()=>[t(b,{width:"400px",dense:"",title:p,rows:h,columns:f,"row-key":"name",onClick:m})]),_:1})]),_:1},8,["modelValue"]),e("div",B,[t(d,{label:g.value,color:"blue",onClick:m},null,8,["label"])]),V,D,N,e("div",I,[r(" Let's try another way"),t(v,{to:"da_ui_example_5"}),r(". ")]),e("div",L,[t(d,{label:"UI Example 3",color:"blue",to:"da_ui_example_5"})]),e("div",M,[t(d,{label:"Home",color:"green",to:"/"})])]),_:1})]),_:1})}}};export{se as default};