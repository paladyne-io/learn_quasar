import{l as _,e as Q,o as m,h as k,w as a,g as e,m as b,a as r,p as w,q as x,d as v,f as C,F as L,s as h}from"./index.4e690c71.js";import{Q as I,a as E,b as T,A as d,c as D}from"./AppLink.119b8077.js";import{Q as i}from"./QRouteTab.322c09ec.js";import{Q as y,a as B}from"./QFooter.d826fac4.js";import{Q as u}from"./QItemLabel.95d15f93.js";import{Q as V}from"./QList.e37c616e.js";import{Q as F,a as G}from"./QLayout.ccfbbc84.js";import"./QScrollObserver.359fab7c.js";import"./TouchPan.e2d3931b.js";import"./touch.3df10340.js";import"./selection.1bcc29c5.js";import"./format.a33550d6.js";import"./QItemSection.52e39e60.js";import"./QItem.645ef334.js";import"./rtl.b51694b1.js";const Z={__name:"ExamplesLayout",setup(P){const p={title:"Home",caption:"Back to where it all began",icon:"home",link:"/"},c=[{title:"Transitions",caption:"",icon:"star",link:"transitions"},{title:"Image Grid",caption:"Image grid demo using Colcade)",icon:"fas fa-border-all",link:"imagegrid"},{title:"Image Gallery",caption:"Quasar's Carousel with transitions",icon:"fa-solid fa-images",link:"qcarousel"}],o=_(!1);function n(){console.log("toggleLeftDrawer"),o.value=!o.value}function f(){console.log("testClicked")}function l(){console.log("hide LeftDrawer"),o.value=!1}return(U,s)=>{const g=Q("router-view");return m(),k(F,{view:"lHh Lpr lFf"},{default:a(()=>[e(T,{bordered:"",elevated:""},{default:a(()=>[e(I,null,{default:a(()=>[e(b,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n}),e(E,null,{default:a(()=>[r("Examples")]),_:1})]),_:1})]),_:1}),e(B,{bordered:""},{default:a(()=>[e(y,{"no-caps":"","indicator-color":"transparent"},{default:a(()=>[e(i,{name:"UI Example 1",label:"Transitions",to:"/examples/transitions",onClick:l}),e(i,{name:"UI Example 2",label:"Image Grid",to:"/examples/imagegrid",onClick:l}),e(i,{name:"UI Example 3",label:"Image Gallery",to:"/examples/qcarousel",onClick:l})]),_:1})]),_:1}),e(D,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),"show-if-above":"",bordered:""},{default:a(()=>[e(V,null,{default:a(()=>[e(u,{header:""},{default:a(()=>[r("Navigation")]),_:1}),e(d,w(x(p)),null,16),e(u,{header:""},{default:a(()=>[r("Examples")]),_:1}),(m(),v(L,null,C(c,t=>e(d,h({key:t.title,onClick:n,onClicked:f},t),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),e(G,null,{default:a(()=>[e(g)]),_:1})]),_:1})}}};export{Z as default};