import{Q as l}from"./QItem.ea45c247.js";import{k as f,j as _,e as a,o as i,h as r,w as o,g as n,c as e,a as t,R as c,as as v,aL as m}from"./index.fe5066fd.js";import{Q as y}from"./QPage.ce4d759f.js";import{S as w}from"./SubHeaderComponentDA.460bf957.js";import{Q as b}from"./QuoteComponent.20ea73ff.js";import"./use-quasar.de10b2ef.js";const k=_({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:w,QuoteComponent:b}}),x=e("div",{class:"q-pa-md text-h5 text-bold"}," Components And Slots",-1),C=e("div",{class:"q-pt-sm"},[t(" For reference: "),e("a",{href:"https://vuejs.org/guide/components/slots.html"},"Vue Slots")],-1),Q={class:"q-pt-sm"},q=e("a",{href:"https://quasar.dev/style/dark-mode"}," too",-1),I={class:"q-pt-sm"},S=e("div",{class:"q-pt-sm"},` After spending an hour or two trying to figure out how to use a toggle switch to toggle a function... I got it working and, voila!, the colors in the app are suddenly reversed. This is a great example where Quasar saves tons of time - giving you functionality out of the box. After a fleeting feeling of satisfaction, the next realization is, "but that doesn't look right". As the Quasar documentation says, " All Quasar components with a dark property will have it automatically set to true. No need to do it manually." which raises the question, what about your own components? What about the places where you have added some colors using in-line CSS styles? `,-1),A=e("div",{class:"q-pt-sm"},' In my experience, when you start trying to fix something you do a lot of learning along the way. So today I made a custom component that switches its appearance based on the mode. This shows the power of vue and of components. After making this one component I considered how to make it available to other components. In Java you might do this by "sub classing" and inheritance, but vue uses composition so I made a parent component that is dark mode aware with a slot for other components to fit inside. ',-1),D=e("div",{class:"q-pt-sm"}," Today I want to explain about slots and the somewhat similar props while once again urging you to spend time understanding and thinking how to 'componentize' your app. ",-1),P={class:"row text-subheader q-pt-sm"},T=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Slots ",-1);function N(d,s,$,H,V,B){const p=a("SubHeaderComponentDA"),h=a("router-link"),u=a("QuoteComponent");return i(),r(y,{class:"flex-center q-pa-md"},{default:o(()=>[x,n(v,{flat:"",class:"q-pa-md"},{default:o(()=>[n(p,{mytext:"How to use Components"}),C,e("div",Q,[t(" Today (November 26, 2022) I added a "),n(h,{to:"/preferences"},{default:o(()=>[t("Preferences page")]),_:1}),t(" containing a toggle to switch to Dark mode. If you don't know what that is you can try it out on the page. There is an explanation on Quasar's website "),q,t(". ")]),e("div",I,[n(u,{mytext:`The advantages of Dark Mode are that:

It enhances visual ergonomics by reducing eye strain.
Provides comfort of use at night or in dark environments.
It conserves battery power mainly if the device screen is OLED or AMOLED, thereby enabling device usage for longer periods without charging.`})]),S,A,D,e("div",P,[c((i(),r(l,{class:"col",clickable:"",to:"intro",onClick:s[0]||(s[0]=g=>d.link="intro")},{default:o(()=>[t(" Previous ")]),_:1})),[[m]]),c((i(),r(l,{class:"col",clickable:"",to:"slots",onClick:s[1]||(s[1]=g=>d.link="slots")},{default:o(()=>[T]),_:1})),[[m]])])]),_:1})]),_:1})}var R=f(k,[["render",N]]);export{R as default};
