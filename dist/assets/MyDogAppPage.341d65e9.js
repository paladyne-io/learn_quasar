import{Q as m}from"./QImg.caad16fa.js";import{Q as h}from"./QTable.7e05571d.js";import{r as p,I as _,i as o,j as u,k as l,p as f,x as e,l as t,y as w,m as b,T as v,q as s,n as i}from"./index.7a166512.js";import{Q as g}from"./QPage.d61366b6.js";import"./QSeparator.3b587b08.js";import"./use-dark.172d2369.js";import"./use-timeout.20f7cddd.js";import"./scroll.04b9a41e.js";import"./use-tick.d666b489.js";import"./use-key-composition.3e43daf7.js";import"./uid.42677368.js";import"./QItem.e2712350.js";import"./QItemLabel.9594c0b6.js";import"./selection.02db45aa.js";import"./use-form.ea812f30.js";import"./format.a33550d6.js";import"./use-checkbox.4e60f51a.js";import"./use-fullscreen.a0a29324.js";const x={class:"row border full-width q-pa-md"},y={class:"col-12 col-md-6 text-center"},k={key:0,class:"col-12 col-md-6"},q={class:"q-pa-md justify-center x-center",style:{width:"400px"}},I={class:"full-width text-center"},Q={class:"text-center q-pa-md"},T=e("div",{class:"q-pa-md"}," In this first example, we just display the data table with an effect when the button is clicked. ",-1),V=e("div",{class:"q-pa-md"},[e("b",null,"Method:"),i(" Wrap the component in a <Transition> with 'v-if' and a variable, 'dogStatsVisible'. The transition is triggered when the (boolean) value of the 'dogStatsVisible' variable is changed, which switches the visibility of the component. ")],-1),C=e("pre",null,`<transition
    appear
    enter-active-class="animated bounceIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="dogStatsVisible" class="col-12 col-md-6">
    ...
  </div>
</transition>
`,-1),S=e("div",{class:"q-pa-md full-width"}," WIth this example we have added some Quasar helper classes to automatically change the position of the table based on the width of the display. When we load this page on a mobile phone, the table will display under the image. If we open it on a PC or large tablet, the table will be shown on the right side. Further, if we resize the browser window the position will adjust automatically. This is called Responsive design. ",-1),B=e("div",{class:"q-pa-md"}," It works but it's pretty basic. Ideally we would like to show the data table as if it is printed on the back and visually flip the card. ",-1),D={class:"q-pa-md full-width"},j={class:"text-center q-pa-md full-width"},M={class:"text-center q-pa-md"},ae={__name:"MyDogAppPage",setup(N){const a=p(!1);_(()=>{console.log("mounted")});const n=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],c=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:30,calories:200}];function d(){console.log("showDogStats"+a.value),a.value=!a.value}return(W,E)=>{const r=f("router-link");return o(),u(g,{class:"flex flex-center"},{default:l(()=>[e("div",x,[e("div",y,[t(m,{class:"q-ma-md",style:{height:"480px",width:"350px"},alt:"Dog image",src:"/images/dog.png"})]),t(v,{appear:"","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"},{default:l(()=>[a.value?(o(),w("div",k,[e("div",q,[t(h,{title:"My Dog",rows:c,columns:n,"row-key":"name"})])])):b("",!0)]),_:1})]),e("div",I,[e("div",Q,[t(s,{label:"Show/hide stats",color:"blue",onClick:d})])]),T,V,C,S,B,e("div",D,[i(" Let's try that"),t(r,{to:"da_ui_example_2"}),i(". ")]),e("div",j,[t(s,{label:"UI Example 1",color:"blue",to:"da_ui_example_2"})]),e("div",M,[t(s,{label:"Home",color:"green",to:"/"})])]),_:1})}}};export{ae as default};