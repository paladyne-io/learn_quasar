import{Q as l}from"./QToggle.30ab0fed.js";import{_ as n,p as d,r as i,q as c,t as u,x as p,D as o,d as s,C as m}from"./index.94d0aa13.js";import{Q as g}from"./QPage.f8cedd90.js";import{u as f}from"./use-quasar.e53429b2.js";import"./use-checkbox.4a36a450.js";import"./use-dark.4fd065ce.js";import"./use-form.9c91ecfa.js";var _="/assets/quasar-logo-vertical.55e9c854.svg";const x=d({name:"IndexPage",setup(){const e=f(),t=i(e.dark.isActive);function a(){e.dark.toggle()}return{darkModeStatus:t,toggled:a}}}),k=o("img",{alt:"Quasar logo",src:_,style:{width:"200px",height:"200px","background-color":"white",padding:"14px"}},null,-1),h=o("div",{class:"full-width text-center"}," Welcome to Learn Quasar... ",-1),v={class:"full-width text-center"},Q={class:"text-center"};function w(e,t,a,C,V,$){return c(),u(g,{class:"flex flex-center"},{default:p(()=>[k,h,o("div",v,[s(l,{modelValue:e.darkModeStatus,"onUpdate:modelValue":t[0]||(t[0]=r=>e.darkModeStatus=r),label:"Dark mode",onClick:e.toggled},null,8,["modelValue","onClick"])]),o("div",Q,[s(m,{label:"Introduction",color:"green",to:"intro"})])]),_:1})}var D=n(x,[["render",w]]);export{D as default};
