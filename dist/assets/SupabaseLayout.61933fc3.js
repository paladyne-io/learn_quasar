import{r as _,i as m,j as k,k as a,p as b,l as e,q as Q,n as r,A as v,B as w,y as x,z as C,F as L,C as h}from"./index.5aff0604.js";import{Q as y,a as I,b as T,A as p,c as B}from"./AppLink.61bb54ec.js";import{Q as i}from"./QRouteTab.16808503.js";import{Q as D,a as E}from"./QFooter.38d1c3c3.js";import{Q as c}from"./QItemLabel.bda6d7ba.js";import{c as V}from"./use-timeout.3cc5e849.js";import{Q as F,a as G}from"./QLayout.30632e72.js";import"./QScrollObserver.0f333484.js";import"./scroll.d068e769.js";import"./use-dark.3ed48953.js";import"./TouchPan.94975130.js";import"./touch.70a9dd44.js";import"./selection.28907003.js";import"./format.a33550d6.js";import"./QItem.5e5f19f5.js";import"./uid.42677368.js";import"./use-tick.23e33080.js";const ee={__name:"SupabaseLayout",setup(P){const u={title:"Home",caption:"Back to where it all began",icon:"home",link:"/"},d=[{title:"Transitions",caption:"",icon:"star",link:"transitions"},{title:"Image Grid",caption:"Image grid demo using Colcade)",icon:"fas fa-border-all",link:"imagegrid"},{title:"Image Gallery",caption:"Quasar's Carousel with transitions",icon:"fa-solid fa-images",link:"qcarousel"}],o=_(!1);function n(){console.log("toggleLeftDrawer"),o.value=!o.value}function f(){console.log("testClicked")}function l(){console.log("hide LeftDrawer"),o.value=!1}return(U,s)=>{const g=b("router-view");return m(),k(F,{view:"lHh Lpr lFf"},{default:a(()=>[e(T,{elevated:""},{default:a(()=>[e(y,null,{default:a(()=>[e(Q,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n}),e(I,null,{default:a(()=>[r("Supabase")]),_:1})]),_:1})]),_:1}),e(E,{bordered:"",class:"bg-white text-primary"},{default:a(()=>[e(D,{"no-caps":"","active-color":"primary","indicator-color":"transparent",class:"text-grey"},{default:a(()=>[e(i,{name:"UI Example 1",label:"Transitions",to:"/examples/transitions",onClick:l}),e(i,{name:"UI Example 2",label:"Image Grid",to:"/examples/imagegrid",onClick:l}),e(i,{name:"UI Example 3",label:"Image Gallery",to:"/examples/qcarousel",onClick:l})]),_:1})]),_:1}),e(B,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),"show-if-above":"",bordered:""},{default:a(()=>[e(V,null,{default:a(()=>[e(c,{header:""},{default:a(()=>[r("Navigation")]),_:1}),e(p,v(w(u)),null,16),e(c,{header:""},{default:a(()=>[r("Examples")]),_:1}),(m(),x(L,null,C(d,t=>e(p,h({key:t.title,onClick:n,onClicked:f},t),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),e(G,null,{default:a(()=>[e(g)]),_:1})]),_:1})}}};export{ee as default};