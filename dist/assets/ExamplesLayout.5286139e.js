import{r as _,E as k,x as m,y as Q,z as a,A as e,F as b,C as r,K as x,L as C,H as L,I as v,J as w,M as h}from"./index.16939dca.js";import{Q as I,a as E,b as T,A as u,c as y}from"./AppLink.b5812ce1.js";import{Q as i}from"./QRouteTab.1c933064.js";import{Q as D,a as B}from"./QFooter.0b344518.js";import{Q as d}from"./QItemLabel.c277eea2.js";import{a as V}from"./QList.286fc127.js";import{Q as F,a as G}from"./QLayout.2f21c60e.js";import"./QScrollObserver.a55622da.js";import"./TouchPan.b882b347.js";import"./touch.70a9dd44.js";import"./selection.e5f82d2d.js";import"./format.a33550d6.js";import"./QItem.89465a60.js";import"./rtl.b51694b1.js";const Y={__name:"ExamplesLayout",setup(H){const c={title:"Home",caption:"Back to where it all began",icon:"home",link:"/"},p=[{title:"Transitions",caption:"",icon:"star",link:"transitions"},{title:"Image Grid",caption:"Image grid demo using Colcade)",icon:"fas fa-border-all",link:"imagegrid"},{title:"Image Gallery",caption:"Quasar's Carousel with transitions",icon:"fa-solid fa-images",link:"qcarousel"}],o=_(!1);function n(){console.log("toggleLeftDrawer"),o.value=!o.value}function f(){console.log("testClicked")}function l(){console.log("hide LeftDrawer"),o.value=!1}return(P,s)=>{const g=k("router-view");return m(),Q(F,{view:"lHh Lpr lFf"},{default:a(()=>[e(T,{bordered:"",elevated:""},{default:a(()=>[e(I,null,{default:a(()=>[e(b,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n}),e(E,null,{default:a(()=>[r("Examples")]),_:1})]),_:1})]),_:1}),e(B,{bordered:""},{default:a(()=>[e(D,{"no-caps":"","indicator-color":"transparent"},{default:a(()=>[e(i,{name:"UI Example 1",label:"Transitions",to:"/examples/transitions",onClick:l}),e(i,{name:"UI Example 2",label:"Image Grid",to:"/examples/imagegrid",onClick:l}),e(i,{name:"UI Example 3",label:"Image Gallery",to:"/examples/qcarousel",onClick:l})]),_:1})]),_:1}),e(y,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),"show-if-above":"",bordered:""},{default:a(()=>[e(V,null,{default:a(()=>[e(d,{header:""},{default:a(()=>[r("Navigation")]),_:1}),e(u,x(C(c)),null,16),e(d,{header:""},{default:a(()=>[r("Examples")]),_:1}),(m(),L(w,null,v(p,t=>e(u,h({key:t.title,onClick:n,onClicked:f},t),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),e(G,null,{default:a(()=>[e(g)]),_:1})]),_:1})}}};export{Y as default};
