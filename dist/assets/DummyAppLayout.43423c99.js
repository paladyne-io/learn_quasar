import{_ as h,p as k,r as g,B as m,q as n,t as l,x as t,d as e,C as L,H as v,I as w,E as u,G as c,F as d,z as i,J as _}from"./index.2cca3aea.js";import{A as y,Q,a as b,b as x,c as U}from"./AppLink.94465380.js";import{Q as A,a as C}from"./QFooter.61547248.js";import{Q as s}from"./QItemLabel.2278a2ac.js";import{c as D}from"./use-timeout.ac0399c0.js";import{Q as E,a as F}from"./QLayout.aa504aad.js";import"./QScrollObserver.855db98c.js";import"./scroll.4f05f9da.js";import"./use-dark.4c0c48e8.js";import"./TouchPan.a9370f59.js";import"./touch.70a9dd44.js";import"./selection.efd1b60c.js";import"./format.a33550d6.js";import"./QItem.0814ff35.js";import"./use-tick.c638aada.js";const B={title:"Home",caption:"Back to where it all began",icon:"home",link:"/"},I=[{title:"Saving and reading data",caption:"Using local storage",icon:"school",link:"da_local_storage"},{title:"Working with data",caption:"JSON and Reactivity",icon:"school",link:"da_table"}],O=[{title:"Example 1",caption:"Using transition with v-if",icon:"school",link:"da_ui_example_2"},{title:"Example 2",caption:"Using transition with q-Carousel",icon:"school",link:"da_ui_example_3"},{title:"Example 3",caption:"Using vue-flip library",icon:"school",link:"da_ui_example_5"}],P=k({name:"MainLayout",components:{AppLink:y},setup(){const a=g(!1);return{appUILinks:O,appFunctionLinks:I,homeLink:B,leftDrawerOpen:a,toggleLeftDrawer(){a.value=!a.value}}}}),T=i("My Pet App"),V=i(" Navigation"),H=i("UI Examples"),N=i("Other functionality");function $(a,p,M,q,z,J){const r=m("AppLink"),f=m("router-view");return n(),l(E,{view:"lHh Lpr lFf"},{default:t(()=>[e(x,{elevated:""},{default:t(()=>[e(Q,null,{default:t(()=>[e(L,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a.toggleLeftDrawer},null,8,["onClick"]),e(b,null,{default:t(()=>[T]),_:1})]),_:1})]),_:1}),e(C,{bordered:"",class:"bg-white text-primary"},{default:t(()=>[e(A,{"no-caps":"","active-color":"primary","indicator-color":"transparent",class:"text-grey"})]),_:1}),e(U,{modelValue:a.leftDrawerOpen,"onUpdate:modelValue":p[0]||(p[0]=o=>a.leftDrawerOpen=o),"show-if-above":"",bordered:""},{default:t(()=>[e(D,null,{default:t(()=>[e(s,{header:""},{default:t(()=>[V]),_:1}),e(r,v(w(a.homeLink)),null,16),e(s,{header:""},{default:t(()=>[H]),_:1}),(n(!0),u(d,null,c(a.appUILinks,o=>(n(),l(r,_({key:o.title},o),null,16))),128)),e(s,{header:""},{default:t(()=>[N]),_:1}),(n(!0),u(d,null,c(a.appFunctionLinks,o=>(n(),l(r,_({key:o.title},o),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),e(F,null,{default:t(()=>[e(f)]),_:1})]),_:1})}var re=h(P,[["render",$]]);export{re as default};