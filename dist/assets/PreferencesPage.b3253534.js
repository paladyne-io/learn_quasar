import{Q as l}from"./QToggle.d16882d5.js";import{Q as n}from"./QCard.b3c5006c.js";import{Q as m}from"./QPage.4d5fea8c.js";import{u as i}from"./use-quasar.7d9a075c.js";import{_ as p,i as c,r as f,j as u,k as g,l as t,m as r,y as s}from"./index.2b580301.js";import"./use-checkbox.652b4123.js";import"./use-dark.730c1ba6.js";import"./use-form.78b89a35.js";const k=c({name:"PreferencesPage",setup(){const e=i(),a=f(e.dark.isActive);function o(){e.dark.toggle()}return{darkModeStatus:a,toggled:o}}}),_=s("div",{class:"q-pa-md text-h5 text-bold"},"Preferences",-1);function Q(e,a,o,P,C,V){return u(),g(m,{class:"flex-center q-pa-md"},{default:t(()=>[_,r(n,{flat:"",class:"q-pa-md"},{default:t(()=>[s("div",null,[r(l,{modelValue:e.darkModeStatus,"onUpdate:modelValue":a[0]||(a[0]=d=>e.darkModeStatus=d),label:"Dark mode",onClick:e.toggled},null,8,["modelValue","onClick"])])]),_:1})]),_:1})}var h=p(k,[["render",Q]]);export{h as default};
