import{Q as l}from"./QToggle.571eb09a.js";import{Q as n}from"./QCard.6bb189db.js";import{Q as m}from"./QPage.b356a4f4.js";import{u as i}from"./use-quasar.bb7c91a1.js";import{_ as f,f as p,r as c,i as u,j as g,k as t,l as r,x as s}from"./index.d92ddc89.js";import"./use-checkbox.ff4929bc.js";import"./use-dark.298bee95.js";import"./use-form.6f1bf1a0.js";const k=p({name:"PreferencesPage",setup(){const e=i(),a=c(e.dark.isActive);function o(){e.dark.toggle()}return{darkModeStatus:a,toggled:o}}}),_=s("div",{class:"q-pa-md text-h5 text-bold"},"Preferences",-1);function Q(e,a,o,P,x,C){return u(),g(m,{class:"flex-center q-pa-md"},{default:t(()=>[_,r(n,{flat:"",class:"q-pa-md"},{default:t(()=>[s("div",null,[r(l,{modelValue:e.darkModeStatus,"onUpdate:modelValue":a[0]||(a[0]=d=>e.darkModeStatus=d),label:"Dark mode",onClick:e.toggled},null,8,["modelValue","onClick"])])]),_:1})]),_:1})}var h=f(k,[["render",Q]]);export{h as default};