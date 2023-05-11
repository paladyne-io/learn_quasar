import{j as Q,k as _,o,h as i,w as a,g as e,Q as D,i as $,a as m,t as b,l as I,e as L,m as S,c as T,d as s,f as r,F as u,p as g,q as h,s as c}from"./index.fe5066fd.js";import{A as V,Q as F,a as B,b as E,c as M}from"./AppLink.6c04258b.js";import{Q as p}from"./QExpansionItem.a92d03dc.js";import{Q as d}from"./QList.1185ed42.js";import{Q as f}from"./QItemLabel.1637ce95.js";import{Q as N,a as O}from"./QLayout.49159951.js";import{Q as v}from"./QItemSection.8463817c.js";import{Q as G}from"./QItem.ea45c247.js";import"./QScrollObserver.b59dd99a.js";import"./TouchPan.9ea112db.js";import"./touch.3df10340.js";import"./selection.cf248e2c.js";import"./format.a33550d6.js";const H=Q({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function j(t,k,y,w,q,C){return o(),i(G,{clickable:"",tag:"a",target:"_blank",href:t.link},{default:a(()=>[t.icon?(o(),i(v,{key:0,avatar:""},{default:a(()=>[e(D,{name:t.icon},null,8,["name"])]),_:1})):$("",!0),e(v,null,{default:a(()=>[e(f,null,{default:a(()=>[m(b(t.title),1)]),_:1}),e(f,{caption:""},{default:a(()=>[m(b(t.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var R=_(H,[["render",j]]);const z={title:"Send Feedback",caption:"Your comments and suggestions",icon:"fa fa-pen",link:"feedback"},U={title:"Preferences",caption:"App settings",icon:"fa  fa-gear",link:"preferences"},W={title:"Privacy Notice",caption:"",icon:"fa-regular fa-shield",link:"privacy"},Y=[{title:"Image Grid layout",caption:"Image grid demo (Colcade)",icon:"fas fa-border-all",link:"examples/imagegrid"},{title:"Transition demo",caption:"About Quasars",icon:"star",link:"examples/transitions"},{title:"Image Gallery",caption:"Quasar's QCarousel with transitions",icon:"fa-solid fa-images",link:"examples/qcarousel"}],J=[{title:"My Pet",caption:"Let's build a simple app",icon:"fas fa-dog",link:"dummyapp/"},{title:"Rocket Man",caption:"A simple demo game",icon:"rocket",link:"gameapp/rm_game"}],K=[{title:"Supabase Intro",caption:"The back end",icon:"fas fa-database",link:"/supabase/"}],X=[{title:"Components",caption:"An introduction to Vue Single File Components",icon:"school",link:"components"}],Z=[{title:"Prologue",caption:"",icon:"school",link:"prologue"},{title:"Introduction",caption:"",icon:"school",link:"intro"}],x=[{title:"Lesson 1",caption:"Preparation and installation",icon:"school",link:"startprogramming"},{title:"Lesson 2",caption:"Hello World",icon:"school",link:"helloworld"},{title:"Lesson 3",caption:"Programming Basics",icon:"school",link:"programming1"},{title:"Lesson 4",caption:"Add a library",icon:"school",link:"images"},{title:"Lesson 5",caption:"Send emails",icon:"school",link:"sendemail"}],ee=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ae=Q({name:"MainLayout",components:{EssentialLink:R,AppLink:V},setup(){const t=I(!1);return{essentialLinks:ee,course1links:x,introLinks:Z,exampleLinks:Y,supabaseLinks:K,course2Links:X,demoAppLinks:J,leftDrawerOpen:t,feedbackLink:z,preferencesLink:U,privacyPageLink:W,toggleLeftDrawer(){t.value=!t.value}}}});function te(t,k,y,w,q,C){const l=L("AppLink"),A=L("EssentialLink"),P=L("router-view");return o(),i(N,{view:"lHh Lpr lFf"},{default:a(()=>[e(E,{elevated:""},{default:a(()=>[e(F,null,{default:a(()=>[e(S,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(B,null,{default:a(()=>[m(" Learn Quasar ")]),_:1}),T("div",null,"Quasar v"+b(t.$q.version),1)]),_:1})]),_:1}),e(M,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":k[0]||(k[0]=n=>t.leftDrawerOpen=n),"show-if-above":"",bordered:""},{default:a(()=>[e(d,null,{default:a(()=>[e(p,{icon:"",label:"","default-opened":""},{default:a(()=>[(o(!0),s(u,null,r(t.introLinks,n=>(o(),i(l,c({key:n.title},n),null,16))),128))]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(p,{icon:"",label:"Course 1 Lesson Links",caption:"Links to tutorials in this app","default-opened":""},{default:a(()=>[(o(!0),s(u,null,r(t.course1links,n=>(o(),i(l,c({key:n.title},n),null,16))),128))]),_:1})]),_:1}),e(d,null,{default:a(()=>[e(p,{icon:"",label:"Course 2 Lesson Links",caption:"Moving forward","default-opened":""},{default:a(()=>[(o(!0),s(u,null,r(t.course2Links,n=>(o(),i(l,c({key:n.title},n),null,16))),128))]),_:1}),e(p,{icon:"",label:"The Back-end (Database)",caption:"","default-opened":""},{default:a(()=>[(o(!0),s(u,null,r(t.supabaseLinks,n=>(o(),i(l,c({key:n.title},n),null,16))),128))]),_:1})]),_:1}),e(p,{icon:"",label:"Demo apps",caption:"","default-opened":""},{default:a(()=>[(o(!0),s(u,null,r(t.demoAppLinks,n=>(o(),i(l,c({key:n.title},n),null,16))),128))]),_:1}),e(p,{icon:"",label:"Vue Component Examples",caption:"","default-opened":""},{default:a(()=>[(o(!0),s(u,null,r(t.exampleLinks,n=>(o(),i(l,c({key:n.title},n),null,16))),128))]),_:1}),e(d,null,{default:a(()=>[e(f,{header:""},{default:a(()=>[m(" Learn Quasar (This app) ")]),_:1}),e(l,g(h(t.feedbackLink)),null,16),e(l,g(h(t.preferencesLink)),null,16),e(l,g(h(t.privacyPageLink)),null,16)]),_:1}),e(d,null,{default:a(()=>[e(f,{header:""},{default:a(()=>[m(" Other Links ")]),_:1}),e(p,{icon:"",label:"Quasar Links",caption:"Links related to Quasar","default-closed":""},{default:a(()=>[(o(!0),s(u,null,r(t.essentialLinks,n=>(o(),i(A,c({key:n.title},n),null,16))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(O,null,{default:a(()=>[e(P)]),_:1})]),_:1})}var Le=_(ae,[["render",te]]);export{Le as default};