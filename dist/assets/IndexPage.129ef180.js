import{k as m,j as _,l as u,e as w,o,h as p,w as f,c as a,a as g,t as b,g as n,ap as v,m as h,d as S,f as x,F as Q,n as y}from"./index.9ddae5f5.js";import{Q as C}from"./QPage.43797c57.js";import{u as q}from"./use-quasar.4cbdfe46.js";var L="/learn_quasar/assets/quasar-logo-vertical.55e9c854.svg";const V=_({name:"IndexPage",setup(){const e=q(),r=u(e.dark.isActive),l="February 15, 2023",i=u({url:"https://learn-quasar-p764s.ondigitalocean.app/learn_quasar/",title:"Learn Quasar app",description:"Try this free app to learn the Quasar framework and vue.js, step by step.",sites:["Facebook","Twitter","Linkedin","Line","Reddit"]});function d(s){switch(s.toLowerCase()){case"facebook":return"fa-brands fa-facebook";case"twitter":return"fa-brands fa-twitter";case"linkedin":return"fa-brands fa-linkedin";case"line":return"fa-brands fa-line";case"reddit":return"fa-brands fa-reddit";default:return"fa-solid fa-share-nodes"}}function c(){e.dark.toggle()}return{darkModeStatus:r,toggled:c,updatedDate:l,socialSharing:i,getSocialSharingIcon:d}}}),B=a("img",{alt:"Quasar logo",src:L,style:{width:"200px",height:"200px","background-color":"white",padding:"14px"}},null,-1),I={class:"full-width text-center"},N=a("br",null,null,-1),$={class:"full-width text-center"},D={class:"full-width text-center"},F={class:"q-pa-sm q-gutter-sm full-width center text-center"};function P(e,r,l,i,d,c){const s=w("ShareNetwork");return o(),p(C,{class:"flex flex-center"},{default:f(()=>[B,a("div",I,[g(" Welcome to Learn Quasar..."),N,g(" Updated: "+b(e.updatedDate),1)]),a("div",$,[n(v,{modelValue:e.darkModeStatus,"onUpdate:modelValue":r[0]||(r[0]=t=>e.darkModeStatus=t),label:"Dark mode",onClick:e.toggled},null,8,["modelValue","onClick"])]),a("div",D,[n(h,{label:"Get started",color:"green",to:"preview"})]),a("div",F,[(o(!0),S(Q,null,x(e.socialSharing.sites,(t,k)=>(o(),p(s,{key:k,class:"social-btn",network:t,url:e.socialSharing.url,title:e.socialSharing.title,description:e.socialSharing.description},{default:f(()=>[n(h,{round:"",flat:"",size:"xl",class:y("share-network-"+t.toLowerCase()),icon:e.getSocialSharingIcon(t)},null,8,["class","icon"])]),_:2},1032,["network","url","title","description"]))),128))])]),_:1})}var z=m(V,[["render",P]]);export{z as default};
