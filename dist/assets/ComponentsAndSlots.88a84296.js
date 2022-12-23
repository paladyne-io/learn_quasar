import{Q as d}from"./QItem.48ead3da.js";import{L as p,o as i,h as r,w as t,c as e,t as v,K as y,e as l,g as a,a as o,E as c,as as w,aJ as m}from"./index.d0600fff.js";import{Q as b}from"./QPage.98f2eec1.js";import{_ as x,S as k}from"./SubHeaderComponentDA.5dfb713b.js";import"./use-quasar.57f4256d.js";const C={class:"quote q-px-sm q-my-sm"},q={__name:"QuoteComponent",props:{mytext:String},setup(n){return(s,u)=>(i(),r(x,null,{component:t(()=>[e("div",C,[e("blockquote",null,[e("q",null,v(n.mytext),1)])])]),_:1}))}};var S=p(q,[["__scopeId","data-v-1f027aed"]]);const Q=y({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:k,QuoteComponent:S}}),I=e("div",{class:"q-pa-md text-h5 text-bold"}," Components And Slots",-1),A=e("div",{class:"q-pt-sm"},[o(" For reference: "),e("a",{href:"https://vuejs.org/guide/components/slots.html"},"Vue Slots")],-1),D={class:"q-pt-sm"},$=e("a",{href:"https://quasar.dev/style/dark-mode"}," too",-1),T={class:"q-pt-sm"},N=e("div",{class:"q-pt-sm"},` After spending an hour or two trying to figure out how to use a toggle switch to toggle a function... I got it working and, voila!, the colors in the app are suddenly reversed. This is a great example where Quasar saves tons of time - giving you functionality out of the box. After a fleeting feeling of satisfaction, the next realization is, "but that doesn't look right". As the Quasar documentation says, " All Quasar components with a dark property will have it automatically set to true. No need to do it manually." which raises the question, what about your own components? What about the places where you have added some colors using in-line CSS styles? `,-1),P=e("div",{class:"q-pt-sm"},' In my experience, when you start trying to fix something you do a lot of learning along the way. So today I made a custom component that switches its appearance based on the mode. This shows the power of vue and of components. After making this one component I considered how to make it available to other components. In Java you might do this by "sub classing" and inheritance, but vue uses composition so I made a parent component that is dark mode aware with a slot for other components to fit inside. ',-1),H=e("div",{class:"q-pt-sm"}," Today I want to explain about slots and the somewhat similar props while once again urging you to spend time understanding and thinking how to 'componentize' your app. ",-1),V={class:"row text-subheader q-pt-sm"},B=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Slots ",-1);function E(n,s,u,L,z,J){const h=l("SubHeaderComponentDA"),_=l("router-link"),g=l("QuoteComponent");return i(),r(b,{class:"flex-center q-pa-md"},{default:t(()=>[I,a(w,{flat:"",class:"q-pa-md"},{default:t(()=>[a(h,{mytext:"How to use Components"}),A,e("div",D,[o(" Today (November 26, 2022) I added a "),a(_,{to:"/preferences"},{default:t(()=>[o("Preferences page")]),_:1}),o(" containing a toggle to switch to Dark mode. If you don't know what that is you can try it out on the page. There is an explanation on Quasar's website "),$,o(". ")]),e("div",T,[a(g,{mytext:`The advantages of Dark Mode are that:

It enhances visual ergonomics by reducing eye strain.
Provides comfort of use at night or in dark environments.
It conserves battery power mainly if the device screen is OLED or AMOLED, thereby enabling device usage for longer periods without charging.`})]),N,P,H,e("div",V,[c((i(),r(d,{class:"col",clickable:"",to:"intro",onClick:s[0]||(s[0]=f=>n.link="intro")},{default:t(()=>[o(" Previous ")]),_:1})),[[m]]),c((i(),r(d,{class:"col",clickable:"",to:"slots",onClick:s[1]||(s[1]=f=>n.link="slots")},{default:t(()=>[B]),_:1})),[[m]])])]),_:1})]),_:1})}var R=p(Q,[["render",E]]);export{R as default};
