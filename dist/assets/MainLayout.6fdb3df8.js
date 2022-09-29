import{f as Y,j as U,h as l,k as ue,s as ce,u as J,r as O,c as _,w as B,g as de,Q as A,l as fe,v as me,m as ge,n as pe,p as W,_ as X,q as w,t as q,x as o,d as a,y as he,z as T,A as D,B as E,C as ve,D as ke,E as j,G as M,F,H as V,I as R,J as G}from"./index.74a2bfe2.js";import{A as be,Q as _e,a as Le,b as we,c as ye}from"./AppLink.a397667e.js";import{Q as y}from"./QItemLabel.7095c2c2.js";import{Q as Z}from"./QItem.4d06880f.js";import{u as Se,a as Te,b as qe,Q as I,c as P}from"./use-timeout.e7ba8d31.js";import{Q as z}from"./QSeparator.55aefae1.js";import{u as Ie,a as xe}from"./use-dark.851b02cc.js";import{u as Qe}from"./uid.42677368.js";import{Q as Ce,a as $e}from"./QLayout.d1fd364d.js";import"./QScrollObserver.4cf2f466.js";import"./scroll.39d00169.js";import"./TouchPan.76bdf5b6.js";import"./touch.70a9dd44.js";import"./selection.7001b828.js";import"./format.a33550d6.js";var Be=Y({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:g,emit:k}){let u=!1,m,r,c,b,s,i;function d(){m&&m(),m=null,u=!1,clearTimeout(c),clearTimeout(b),r!==void 0&&r.removeEventListener("transitionend",s),s=null}function x(n,f,p){n.style.overflowY="hidden",f!==void 0&&(n.style.height=`${f}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,m=p}function Q(n,f){n.style.overflowY=null,n.style.height=null,n.style.transition=null,d(),f!==i&&k(f)}function S(n,f){let p=0;r=n,u===!0?(d(),p=n.offsetHeight===n.scrollHeight?0:void 0):i="hide",x(n,p,f),c=setTimeout(()=>{n.style.height=`${n.scrollHeight}px`,s=h=>{(Object(h)!==h||h.target===n)&&Q(n,"show")},n.addEventListener("transitionend",s),b=setTimeout(s,e.duration*1.1)},100)}function $(n,f){let p;r=n,u===!0?d():(i="show",p=n.scrollHeight),x(n,p,f),c=setTimeout(()=>{n.style.height=0,s=h=>{(Object(h)!==h||h.target===n)&&Q(n,"hide")},n.addEventListener("transitionend",s),b=setTimeout(s,e.duration*1.1)},100)}return U(()=>{u===!0&&d()}),()=>l(ue,{css:!1,appear:e.appear,onEnter:S,onLeave:$},g.default)}});const L=ce({}),Ee=Object.keys(J);var K=Y({name:"QExpansionItem",props:{...J,...Se,...Ie,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Te,"click","after-show","after-hide"],setup(e,{slots:g,emit:k}){const{proxy:{$q:u}}=de(),m=xe(e,u),r=O(e.modelValue!==null?e.modelValue:e.defaultOpened),c=O(null),{hide:b,toggle:s}=qe({showing:r});let i,d;const x=_(()=>`q-expansion-item q-item-type q-expansion-item--${r.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),Q=_(()=>{if(e.contentInsetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),S=_(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),$=_(()=>{const t={};return Ee.forEach(v=>{t[v]=e[v]}),t}),n=_(()=>S.value===!0||e.expandIconToggle!==!0),f=_(()=>e.expandedIcon!==void 0&&r.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),p=_(()=>e.disable!==!0&&(S.value===!0||e.expandIconToggle===!0));B(()=>e.group,t=>{d!==void 0&&d(),t!==void 0&&N()});function h(t){S.value!==!0&&s(t),k("click",t)}function ee(t){t.keyCode===13&&H(t,!0)}function H(t,v){v!==!0&&c.value!==null&&c.value.focus(),s(t),pe(t)}function te(){k("after-show")}function ne(){k("after-hide")}function N(){i===void 0&&(i=Qe()),r.value===!0&&(L[e.group]=i);const t=B(r,C=>{C===!0?L[e.group]=i:L[e.group]===i&&delete L[e.group]}),v=B(()=>L[e.group],(C,se)=>{se===i&&C!==void 0&&C!==i&&b()});d=()=>{t(),v(),L[e.group]===i&&delete L[e.group],d=void 0}}function ae(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},v=[l(A,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&r.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:f.value})];return p.value===!0&&(Object.assign(t,{tabindex:0,onClick:H,onKeyup:ee}),v.unshift(l("div",{ref:c,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),l(I,t,()=>v)}function ie(){let t;return g.header!==void 0?t=[].concat(g.header()):(t=[l(I,()=>[l(y,{lines:e.labelLines},()=>e.label||""),e.caption?l(y,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](l(I,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>l(A,{name:e.icon})))),e.disable!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](ae()),t}function oe(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return n.value===!0&&(t.clickable=!0,t.onClick=h,S.value===!0&&Object.assign(t,$.value)),l(Z,t,ie)}function le(){return fe(l("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:Q.value},ge(g.default)),[[me,r.value]])}function re(){const t=[oe(),l(Be,{duration:e.duration,onShow:te,onHide:ne},le)];return e.expandSeparator===!0&&t.push(l(z,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),l(z,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),t}return e.group!==void 0&&N(),U(()=>{d!==void 0&&d()}),()=>l("div",{class:x.value},[l("div",{class:"q-expansion-item__container relative-position"},re())])}});const Pe=W({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Oe(e,g,k,u,m,r){return w(),q(Z,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:o(()=>[e.icon?(w(),q(I,{key:0,avatar:""},{default:o(()=>[a(A,{name:e.icon},null,8,["name"])]),_:1})):he("",!0),a(I,null,{default:o(()=>[a(y,null,{default:o(()=>[T(D(e.title),1)]),_:1}),a(y,{caption:""},{default:o(()=>[T(D(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Ae=X(Pe,[["render",Oe]]);const De={title:"Send Feedback",caption:"Your comments and suggestions",icon:"fa fa-pen",link:"feedback"},He={title:"Preferences",caption:"App settings",icon:"fa  fa-gear",link:"preferences"},Ne=[{title:"Prologue",caption:"prologue",icon:"school",link:"prologue"},{title:"Intro",caption:"Introduction",icon:"school",link:"intro"},{title:"Let's Start",caption:"Preparation and installation",icon:"school",link:"startprogramming"},{title:"Hello World",caption:"Make it your own",icon:"school",link:"helloworld"},{title:"Programming Basics",caption:"Make it do stuff",icon:"school",link:"programming1"},{title:"Add a library",caption:"Extend it",icon:"school",link:"images"},{title:"Sending email",caption:"Communicate with your users",icon:"school",link:"sendemail"},{title:"My Pet",caption:"Let's build a simple app",icon:"fas fa-dog",link:"dummyapp/"},{title:"Rocket Man",caption:"A simple demo game",icon:"rocket",link:"gameapp/rm_game"},{title:"About Quasars",caption:"Transition demo",icon:"star",link:"test/quasar"}],je=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Me=W({name:"MainLayout",components:{EssentialLink:Ae,AppLink:be},setup(){const e=O(!1);return{essentialLinks:je,navigationLinks:Ne,leftDrawerOpen:e,feedbackLink:De,preferencesLink:He,toggleLeftDrawer(){e.value=!e.value}}}}),Fe=T(" Learn Quasar "),Ve=T(" Navigation Links "),Re=T(" This app "),Ge=T(" Other Links ");function ze(e,g,k,u,m,r){const c=E("AppLink"),b=E("EssentialLink"),s=E("router-view");return w(),q(Ce,{view:"lHh Lpr lFf"},{default:o(()=>[a(we,{elevated:""},{default:o(()=>[a(_e,null,{default:o(()=>[a(ve,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),a(Le,null,{default:o(()=>[Fe]),_:1}),ke("div",null,"Quasar v"+D(e.$q.version),1)]),_:1})]),_:1}),a(ye,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":g[0]||(g[0]=i=>e.leftDrawerOpen=i),"show-if-above":"",bordered:""},{default:o(()=>[a(P,null,{default:o(()=>[a(y,{header:""},{default:o(()=>[Ve]),_:1}),a(K,{icon:"perm_identity",label:"Lesson Links",caption:"Links to tutorials in this app","default-opened":""},{default:o(()=>[(w(!0),j(F,null,M(e.navigationLinks,i=>(w(),q(c,G({key:i.title},i),null,16))),128))]),_:1})]),_:1}),a(P,null,{default:o(()=>[a(y,{header:""},{default:o(()=>[Re]),_:1}),a(c,V(R(e.feedbackLink)),null,16),a(c,V(R(e.preferencesLink)),null,16)]),_:1}),a(P,null,{default:o(()=>[a(y,{header:""},{default:o(()=>[Ge]),_:1}),a(K,{icon:"perm_identity",label:"Quasar Links",caption:"Links related to Quasar","default-closed":""},{default:o(()=>[(w(!0),j(F,null,M(e.essentialLinks,i=>(w(),q(b,G({key:i.title},i),null,16))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),a($e,null,{default:o(()=>[a(s)]),_:1})]),_:1})}var st=X(Me,[["render",ze]]);export{st as default};
