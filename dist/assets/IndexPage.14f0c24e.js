import{k,j as w,l as u,e as _,o,h as p,w as g,c as a,a as f,t as b,g as n,ap as S,m as h,d as v,f as x,F as y,n as Q}from"./index.ed6746cf.js";import{Q as C}from"./QPage.c882e0b2.js";import{u as L}from"./use-quasar.4abab93d.js";var I="/assets/quasar-logo-vertical.55e9c854.svg";const V=w({name:"IndexPage",setup(){const e=L(),s=u(e.dark.isActive),l="May 31, 2023",i=u({url:"https://www.makeaweb.app",title:"Learn Quasar app",description:"Try this free app to learn the Quasar framework and vue.js, step by step.",sites:["Facebook","Twitter","Linkedin","Line","Reddit"],ogImage:"images/og/learn_to_webapp.png",ogTitle:{property:"og:title",template(t){return`${t} - makeaweb.app`}}});function d(t){switch(t.toLowerCase()){case"facebook":return"fa-brands fa-facebook";case"twitter":return"fa-brands fa-twitter";case"linkedin":return"fa-brands fa-linkedin";case"line":return"fa-brands fa-line";case"reddit":return"fa-brands fa-reddit";default:return"fa-solid fa-share-nodes"}}function c(){e.dark.toggle()}return{darkModeStatus:s,toggled:c,updatedDate:l,socialSharing:i,getSocialSharingIcon:d}}}),$=a("img",{alt:"Quasar logo",src:I,style:{width:"200px",height:"200px","background-color":"white",padding:"14px"}},null,-1),B={class:"full-width text-center"},N=a("br",null,null,-1),T={class:"full-width text-center"},q={class:"full-width text-center"},D={class:"q-pa-sm q-gutter-sm full-width center text-center"};function M(e,s,l,i,d,c){const t=_("ShareNetwork");return o(),p(C,{class:"flex flex-center"},{default:g(()=>[$,a("div",B,[f(" Welcome to Learn Quasar..."),N,f(" Updated: "+b(e.updatedDate),1)]),a("div",T,[n(S,{modelValue:e.darkModeStatus,"onUpdate:modelValue":s[0]||(s[0]=r=>e.darkModeStatus=r),label:"Dark mode",onClick:e.toggled},null,8,["modelValue","onClick"])]),a("div",q,[n(h,{label:"Get started",color:"green",to:"intro"})]),a("div",D,[(o(!0),v(y,null,x(e.socialSharing.sites,(r,m)=>(o(),p(t,{key:m,class:"social-btn",network:r,url:e.socialSharing.url,title:e.socialSharing.title,description:e.socialSharing.description},{default:g(()=>[n(h,{round:"",flat:"",size:"xl",class:Q("share-network-"+r.toLowerCase()),icon:e.getSocialSharingIcon(r)},null,8,["class","icon"])]),_:2},1032,["network","url","title","description"]))),128))])]),_:1})}var z=k(V,[["render",M]]);export{z as default};