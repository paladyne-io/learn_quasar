import{Q as n}from"./QToggle.590ac161.js";import{_ as i,f as c,r as u,i as p,j as m,k as g,x as t,n as r,t as f,l,q as _}from"./index.7a166512.js";import{Q as k}from"./QPage.d61366b6.js";import{u as x}from"./use-quasar.2822c877.js";import"./use-checkbox.4e60f51a.js";import"./use-dark.172d2369.js";import"./use-form.ea812f30.js";var h="/assets/quasar-logo-vertical.55e9c854.svg";const v=c({name:"IndexPage",setup(){const e=x(),o=u(e.dark.isActive),a="November 24, 2022";function s(){e.dark.toggle()}return{darkModeStatus:o,toggled:s,updatedDate:a}}}),Q=t("img",{alt:"Quasar logo",src:h,style:{width:"200px",height:"200px","background-color":"white",padding:"14px"}},null,-1),V={class:"full-width text-center"},b=t("br",null,null,-1),w={class:"full-width text-center"},$={class:"text-center"};function B(e,o,a,s,C,D){return p(),m(k,{class:"flex flex-center"},{default:g(()=>[Q,t("div",V,[r(" Welcome to Learn Quasar..."),b,r(" Updated: "+f(e.updatedDate),1)]),t("div",w,[l(n,{modelValue:e.darkModeStatus,"onUpdate:modelValue":o[0]||(o[0]=d=>e.darkModeStatus=d),label:"Dark mode",onClick:e.toggled},null,8,["modelValue","onClick"])]),t("div",$,[l(_,{label:"Introduction",color:"green",to:"intro"})])]),_:1})}var T=i(v,[["render",B]]);export{T as default};
