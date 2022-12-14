import{c as W,o as J,h as u,T as me,s as pe,u as X,r as j,a as _,w as H,g as he,b as ve,v as ke,d as be,Q as V,e as Le,f as Z,_ as ee,i as s,j as p,k as i,l as o,m as _e,n as B,t as F,p as N,q as we,x as ye,y as I,z as T,F as x,A as U,B as z,C as q}from"./index.5aff0604.js";import{A as Se,Q as Ie,a as Te,b as xe,c as qe}from"./AppLink.61bb54ec.js";import{Q as te}from"./QItem.5e5f19f5.js";import{u as Qe,a as Ce,b as Ae,Q as $,c as D}from"./use-timeout.3cc5e849.js";import{Q as A}from"./QItemLabel.bda6d7ba.js";import{Q as K}from"./QSeparator.42dae9a7.js";import{u as Be,a as $e}from"./use-dark.3ed48953.js";import{u as Y}from"./uid.42677368.js";import{Q as Ee,a as De}from"./QLayout.30632e72.js";import"./QScrollObserver.0f333484.js";import"./scroll.d068e769.js";import"./TouchPan.94975130.js";import"./touch.70a9dd44.js";import"./selection.28907003.js";import"./format.a33550d6.js";var Pe=W({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:h,emit:S}){let c=!1,m,l,r,w,d,a;function y(){m&&m(),m=null,c=!1,clearTimeout(r),clearTimeout(w),l!==void 0&&l.removeEventListener("transitionend",d),d=null}function f(n,g,k){n.style.overflowY="hidden",g!==void 0&&(n.style.height=`${g}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,c=!0,m=k}function v(n,g){n.style.overflowY=null,n.style.height=null,n.style.transition=null,y(),g!==a&&S(g)}function P(n,g){let k=0;l=n,c===!0?(y(),k=n.offsetHeight===n.scrollHeight?0:void 0):a="hide",f(n,k,g),r=setTimeout(()=>{n.style.height=`${n.scrollHeight}px`,d=b=>{(Object(b)!==b||b.target===n)&&v(n,"show")},n.addEventListener("transitionend",d),w=setTimeout(d,e.duration*1.1)},100)}function O(n,g){let k;l=n,c===!0?y():(a="show",k=n.scrollHeight),f(n,k,g),r=setTimeout(()=>{n.style.height=0,d=b=>{(Object(b)!==b||b.target===n)&&v(n,"hide")},n.addEventListener("transitionend",d),w=setTimeout(d,e.duration*1.1)},100)}return J(()=>{c===!0&&y()}),()=>u(me,{css:!1,appear:e.appear,onEnter:P,onLeave:O},h.default)}});const Q=pe({}),Oe=Object.keys(X);var C=W({name:"QExpansionItem",props:{...X,...Qe,...Be,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Ce,"click","afterShow","afterHide"],setup(e,{slots:h,emit:S}){const{proxy:{$q:c}}=he(),m=$e(e,c),l=j(e.modelValue!==null?e.modelValue:e.defaultOpened),r=j(null),w=Y(),{show:d,hide:a,toggle:y}=Ae({showing:l});let f,v;const P=_(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),O=_(()=>{if(e.contentInsetLevel===void 0)return null;const t=c.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=_(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),g=_(()=>{const t={};return Oe.forEach(L=>{t[L]=e[L]}),t}),k=_(()=>n.value===!0||e.expandIconToggle!==!0),b=_(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||c.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),ne=_(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),ae=_(()=>({expanded:l.value===!0,detailsId:e.targetUid,toggle:y,show:d,hide:a})),M=_(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:c.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":w,"aria-label":t}});H(()=>e.group,t=>{v!==void 0&&v(),t!==void 0&&G()});function oe(t){n.value!==!0&&y(t),S("click",t)}function ie(t){t.keyCode===13&&R(t,!0)}function R(t,L){L!==!0&&r.value!==null&&r.value.focus(),y(t),Le(t)}function le(){S("afterShow")}function se(){S("afterHide")}function G(){f===void 0&&(f=Y()),l.value===!0&&(Q[e.group]=f);const t=H(l,E=>{E===!0?Q[e.group]=f:Q[e.group]===f&&delete Q[e.group]}),L=H(()=>Q[e.group],(E,ge)=>{ge===f&&E!==void 0&&E!==f&&a()});v=()=>{t(),L(),Q[e.group]===f&&delete Q[e.group],v=void 0}}function re(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[u(V,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:b.value})];return ne.value===!0&&(Object.assign(t,{tabindex:0,...M.value,onClick:R,onKeyup:ie}),L.unshift(u("div",{ref:r,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),u($,t,()=>L)}function ue(){let t;return h.header!==void 0?t=[].concat(h.header(ae.value)):(t=[u($,()=>[u(A,{lines:e.labelLines},()=>e.label||""),e.caption?u(A,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](u($,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>u(V,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](re()),t}function ce(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return k.value===!0&&(t.clickable=!0,t.onClick=oe,Object.assign(t,n.value===!0?g.value:M.value)),u(te,t,ue)}function de(){return ve(u("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:O.value,id:w},be(h.default)),[[ke,l.value]])}function fe(){const t=[ce(),u(Pe,{duration:e.duration,onShow:le,onHide:se},de)];return e.expandSeparator===!0&&t.push(u(K,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),u(K,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),t}return e.group!==void 0&&G(),J(()=>{v!==void 0&&v()}),()=>u("div",{class:P.value},[u("div",{class:"q-expansion-item__container relative-position"},fe())])}});const He=Z({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Ne(e,h,S,c,m,l){return s(),p(te,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:i(()=>[e.icon?(s(),p($,{key:0,avatar:""},{default:i(()=>[o(V,{name:e.icon},null,8,["name"])]),_:1})):_e("",!0),o($,null,{default:i(()=>[o(A,null,{default:i(()=>[B(F(e.title),1)]),_:1}),o(A,{caption:""},{default:i(()=>[B(F(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var je=ee(He,[["render",Ne]]);const Ve={title:"Send Feedback",caption:"Your comments and suggestions",icon:"fa fa-pen",link:"feedback"},Fe={title:"Preferences",caption:"App settings",icon:"fa  fa-gear",link:"preferences"},Me=[{title:"Image Grid layout",caption:"Image grid demo (Colcade)",icon:"fas fa-border-all",link:"examples/imagegrid"},{title:"Transition demo",caption:"About Quasars",icon:"star",link:"examples/transitions"},{title:"Image Gallery",caption:"Quasar's QCarousel with transitions",icon:"fa-solid fa-images",link:"examples/qcarousel"}],Re=[{title:"My Pet",caption:"Let's build a simple app",icon:"fas fa-dog",link:"dummyapp/"},{title:"Rocket Man",caption:"A simple demo game",icon:"rocket",link:"gameapp/rm_game"}],Ge=[{title:"Supabase Intro",caption:"The back end",icon:"fas fa-database",link:"/supabase/"}],Ue=[{title:"Components",caption:"components",icon:"school",link:"components"}],ze=[{title:"Prologue",caption:"",icon:"school",link:"prologue"},{title:"Introduction",caption:"",icon:"school",link:"intro"},{title:"Lesson 1",caption:"Preparation and installation",icon:"school",link:"startprogramming"},{title:"Lesson 2",caption:"Hello World",icon:"school",link:"helloworld"},{title:"Lesson 3",caption:"Programming Basics",icon:"school",link:"programming1"},{title:"Lesson 4",caption:"Add a library",icon:"school",link:"images"},{title:"Lesson 5",caption:"Send emails",icon:"school",link:"sendemail"}],Ke=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Ye=Z({name:"MainLayout",components:{EssentialLink:je,AppLink:Se},setup(){const e=j(!1);return{essentialLinks:Ke,navigationLinks:ze,exampleLinks:Me,supabaseLinks:Ge,course2List:Ue,demoAppLinks:Re,leftDrawerOpen:e,feedbackLink:Ve,preferencesLink:Fe,toggleLeftDrawer(){e.value=!e.value}}}});function We(e,h,S,c,m,l){const r=N("AppLink"),w=N("EssentialLink"),d=N("router-view");return s(),p(Ee,{view:"lHh Lpr lFf"},{default:i(()=>[o(xe,{elevated:""},{default:i(()=>[o(Ie,null,{default:i(()=>[o(we,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),o(Te,null,{default:i(()=>[B(" Learn Quasar ")]),_:1}),ye("div",null,"Quasar v"+F(e.$q.version),1)]),_:1})]),_:1}),o(qe,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":h[0]||(h[0]=a=>e.leftDrawerOpen=a),"show-if-above":"",bordered:""},{default:i(()=>[o(D,null,{default:i(()=>[o(C,{icon:"",label:"Lesson Links",caption:"Links to tutorials in this app","default-opened":""},{default:i(()=>[(s(!0),I(x,null,T(e.navigationLinks,a=>(s(),p(r,q({key:a.title},a),null,16))),128))]),_:1})]),_:1}),o(D,null,{default:i(()=>[o(C,{icon:"",label:"Demo apps",caption:"","default-opened":""},{default:i(()=>[(s(!0),I(x,null,T(e.demoAppLinks,a=>(s(),p(r,q({key:a.title},a),null,16))),128))]),_:1}),o(C,{icon:"",label:"Course 2 Lesson Links",caption:"Moving forward","default-opened":""},{default:i(()=>[(s(!0),I(x,null,T(e.course2List,a=>(s(),p(r,q({key:a.title},a),null,16))),128))]),_:1})]),_:1}),o(C,{icon:"",label:"Demo apps",caption:"","default-opened":""},{default:i(()=>[(s(!0),I(x,null,T(e.demoAppLinks,a=>(s(),p(r,q({key:a.title},a),null,16))),128))]),_:1}),o(C,{icon:"",label:"Vue Component Examples",caption:"","default-opened":""},{default:i(()=>[(s(!0),I(x,null,T(e.exampleLinks,a=>(s(),p(r,q({key:a.title},a),null,16))),128))]),_:1}),o(C,{icon:"",label:"The Back-end (Database)",caption:"","default-opened":""},{default:i(()=>[(s(!0),I(x,null,T(e.supabaseLinks,a=>(s(),p(r,q({key:a.title},a),null,16))),128))]),_:1}),o(D,null,{default:i(()=>[o(A,{header:""},{default:i(()=>[B(" Learn Quasar ")]),_:1}),o(r,U(z(e.feedbackLink)),null,16),o(r,U(z(e.preferencesLink)),null,16)]),_:1}),o(D,null,{default:i(()=>[o(A,{header:""},{default:i(()=>[B(" Other Links ")]),_:1}),o(C,{icon:"",label:"Quasar Links",caption:"Links related to Quasar","default-closed":""},{default:i(()=>[(s(!0),I(x,null,T(e.essentialLinks,a=>(s(),p(w,q({key:a.title},a),null,16))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(De,null,{default:i(()=>[o(d)]),_:1})]),_:1})}var ft=ee(Ye,[["render",We]]);export{ft as default};