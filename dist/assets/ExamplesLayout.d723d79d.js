import{r as _,i as m,j as k,k as a,p as Q,l as e,q as b,n as r,A as x,B as C,y as v,z as w,F as L,C as h}from"./index.7a166512.js";import{Q as I,a as E,b as T,A as p,c as y}from"./AppLink.5e3ab571.js";import{Q as i}from"./QRouteTab.71b959e7.js";import{Q as B,a as D}from"./QFooter.87c88a42.js";import{Q as u}from"./QItemLabel.9594c0b6.js";import{c as V}from"./use-timeout.20f7cddd.js";import{Q as F,a as G}from"./QLayout.207ec86c.js";import"./QScrollObserver.6faefd12.js";import"./scroll.04b9a41e.js";import"./use-dark.172d2369.js";import"./TouchPan.55774ac6.js";import"./touch.70a9dd44.js";import"./selection.02db45aa.js";import"./format.a33550d6.js";import"./QItem.e2712350.js";import"./uid.42677368.js";import"./use-tick.d666b489.js";const ee={__name:"ExamplesLayout",setup(P){const d={title:"Home",caption:"Back to where it all began",icon:"home",link:"/"},c=[{title:"Transitions",caption:"",icon:"star",link:"transitions"},{title:"Image Grid",caption:"Image grid demo using Colcade)",icon:"fas fa-border-all",link:"imagegrid"},{title:"Image Gallery",caption:"Quasar's Carousel with transitions",icon:"fa-solid fa-images",link:"qcarousel"}],o=_(!1);function n(){console.log("toggleLeftDrawer"),o.value=!o.value}function f(){console.log("testClicked")}function l(){console.log("hide LeftDrawer"),o.value=!1}return(U,s)=>{const g=Q("router-view");return m(),k(F,{view:"lHh Lpr lFf"},{default:a(()=>[e(T,{bordered:"",elevated:""},{default:a(()=>[e(I,null,{default:a(()=>[e(b,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n}),e(E,null,{default:a(()=>[r("Examples")]),_:1})]),_:1})]),_:1}),e(D,{bordered:""},{default:a(()=>[e(B,{"no-caps":"","indicator-color":"transparent"},{default:a(()=>[e(i,{name:"UI Example 1",label:"Transitions",to:"/examples/transitions",onClick:l}),e(i,{name:"UI Example 2",label:"Image Grid",to:"/examples/imagegrid",onClick:l}),e(i,{name:"UI Example 3",label:"Image Gallery",to:"/examples/qcarousel",onClick:l})]),_:1})]),_:1}),e(y,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),"show-if-above":"",bordered:""},{default:a(()=>[e(V,null,{default:a(()=>[e(u,{header:""},{default:a(()=>[r("Navigation")]),_:1}),e(p,x(C(d)),null,16),e(u,{header:""},{default:a(()=>[r("Examples")]),_:1}),(m(),v(L,null,w(c,t=>e(p,h({key:t.title,onClick:n,onClicked:f},t),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),e(G,null,{default:a(()=>[e(g)]),_:1})]),_:1})}}};export{ee as default};