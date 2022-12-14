import{Q as d}from"./QItem.3051b89e.js";import{Q as y}from"./QCard.dd8389a4.js";import{Q as v}from"./QPage.513e75aa.js";import{_ as p,i,j as r,k as e,x as t,t as w,f as k,p as l,l as s,n as o,b as c,al as m}from"./index.c61c3b91.js";import{_ as b,S as x}from"./SubHeaderComponentDA.744c0a7f.js";import"./use-dark.6eafdff9.js";import"./use-quasar.3ea3155f.js";const C={class:"quote q-px-sm q-my-sm"},q={__name:"QuoteComponent",props:{mytext:String},setup(a){return(n,u)=>(i(),r(b,null,{component:e(()=>[t("div",C,[t("blockquote",null,[t("q",null,w(a.mytext),1)])])]),_:1}))}};var Q=p(q,[["__scopeId","data-v-1f027aed"]]);const S=k({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:x,QuoteComponent:Q}}),I=t("div",{class:"q-pa-md text-h5 text-bold"}," Components And Slots",-1),A=t("div",{class:"q-pt-sm"},[o(" For reference: "),t("a",{href:"https://vuejs.org/guide/components/slots.html"},"Vue Slots")],-1),D={class:"q-pt-sm"},$=t("a",{href:"https://quasar.dev/style/dark-mode"}," too",-1),P={class:"q-pt-sm"},N=t("div",{class:"q-pt-sm"},` So after spending an hour or two trying to figure out how to make a toggle switch to toggle a function... (Quasar can be a little frustrating sometimes - most of the component examples show how they look and the basic operation but there are not many examples of how to actually use them) I got it working and, voila!, the colors in the app are suddenly reversed. A great example where Quasar actually saves tons of time - giving you functionality out of the box. After a fleeting feeling of satisfaction, the next realization is, "but that doesn't look right". As the Quasar documentation says, " All Quasar components with a dark property will have it automatically set to true. No need to do it manually." which raises the question, what about your own components? What about the places where you have added some colors using in-line CSS styles? `,-1),T=t("div",{class:"q-pt-sm"},' I have found that in general when you start trying to fix something you do a lot of learning along the way. So today I made a custom component that switches its appearance based on the mode. This shows the power of vue and of components. After making this one component I considered how to make it available to other components. In Java you might do this by "sub classing" and inheritance, but vue uses composition so I made a parent component that is dark mode aware with a slot for other components to fit inside. ',-1),H=t("div",{class:"q-pt-sm"}," So today I want to explain about slots and the somewhat similar props while once again urging you to spend time understanding and thinking how to 'componentize' your app. ",-1),V={class:"row text-subheader q-pt-sm"},B=t("div",{style:{"text-align":"right"},class:"full-width"}," Next: Making it your own ",-1);function M(a,n,u,j,z,E){const h=l("SubHeaderComponentDA"),_=l("router-link"),g=l("QuoteComponent");return i(),r(v,{class:"flex-center q-pa-md"},{default:e(()=>[I,s(y,{flat:"",class:"q-pa-md"},{default:e(()=>[s(h,{mytext:"How to use Components"}),A,t("div",D,[o(" Today I learned something new that I would like to pass on. I added a "),s(_,{to:"/preferences"},{default:e(()=>[o("Preferences page ")]),_:1}),o(" containing a toggle to switch to Dark mode. If you don't know what that is you can try it out on the page. There is an explanation on Quasar's website "),$,o(". ")]),t("div",P,[s(g,{mytext:`The advantages of Dark Mode are that:

It enhances visual ergonomics by reducing eye strain.
Provides comfort of use at night or in dark environments.
It conserves battery power mainly if the device screen is OLED or AMOLED, thereby enabling device usage for longer periods without charging.`})]),N,T,H,t("div",V,[c((i(),r(d,{class:"col",clickable:"",to:"intro",onClick:n[0]||(n[0]=f=>a.link="intro")},{default:e(()=>[o(" Previous ")]),_:1})),[[m]]),c((i(),r(d,{class:"col",clickable:"",to:"helloworld",onClick:n[1]||(n[1]=f=>a.link="helloworld")},{default:e(()=>[B]),_:1})),[[m]])])]),_:1})]),_:1})}var K=p(S,[["render",M]]);export{K as default};
