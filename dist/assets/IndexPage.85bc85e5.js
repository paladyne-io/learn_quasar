import{k as m,j as _,l as u,e as w,o,h as p,w as f,c as a,a as g,t as v,g as n,ap as S,m as h,d as b,f as x,F as Q,n as y}from"./index.317bd1d8.js";import{Q as C}from"./QPage.73dc004e.js";import{u as q}from"./use-quasar.2b79f97a.js";var L="/learn_quasar/assets/quasar-logo-vertical.55e9c854.svg";const V=_({name:"IndexPage",setup(){const e=q(),s=u(e.dark.isActive),l="January 1, 2023",i=u({url:"https://learn-quasar-p764s.ondigitalocean.app/learn_quasar/",title:"Learn Quasar app",description:"Try this free app to learn the Quasar framework and vue.js, step by step.",sites:["Facebook","Twitter","Linkedin","Line"]});function d(r){switch(r.toLowerCase()){case"facebook":return"fa-brands fa-facebook";case"twitter":return"fa-brands fa-twitter";case"linkedin":return"fa-brands fa-linkedin";case"line":return"fa-brands fa-line";default:return"fa-solid fa-share-nodes"}}function c(){e.dark.toggle()}return{darkModeStatus:s,toggled:c,updatedDate:l,socialSharing:i,getSocialSharingIcon:d}}}),B=a("img",{alt:"Quasar logo",src:L,style:{width:"200px",height:"200px","background-color":"white",padding:"14px"}},null,-1),I={class:"full-width text-center"},N=a("br",null,null,-1),$={class:"full-width text-center"},D={class:"full-width text-center"},P={class:"q-pa-sm q-gutter-sm full-width center text-center"};function T(e,s,l,i,d,c){const r=w("ShareNetwork");return o(),p(C,{class:"flex flex-center"},{default:f(()=>[B,a("div",I,[g(" Welcome to Learn Quasar..."),N,g(" Updated: "+v(e.updatedDate),1)]),a("div",$,[n(S,{modelValue:e.darkModeStatus,"onUpdate:modelValue":s[0]||(s[0]=t=>e.darkModeStatus=t),label:"Dark mode",onClick:e.toggled},null,8,["modelValue","onClick"])]),a("div",D,[n(h,{label:"Get started",color:"green",to:"preview"})]),a("div",P,[(o(!0),b(Q,null,x(e.socialSharing.sites,(t,k)=>(o(),p(r,{key:k,class:"social-btn",network:t,url:e.socialSharing.url,title:e.socialSharing.title,description:e.socialSharing.description},{default:f(()=>[n(h,{round:"",flat:"",size:"xl",class:y(t.toLowerCase()),icon:e.getSocialSharingIcon(t)},null,8,["class","icon"])]),_:2},1032,["network","url","title","description"]))),128))])]),_:1})}var z=m(V,[["render",T]]);export{z as default};
