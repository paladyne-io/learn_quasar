import{Q as Dt}from"./QBtn.f4ecedc3.js";import{c as H,h as se,a as At,b as Rt,d as Xe,e as Wt}from"./render.23045fd0.js";import{c as v,h as y,r as E,f as ht,o as te,n as ne,j as F,k as He,g as N,l as D,w as q,a as Ie,m as pe,p as Ft,s as Nt,q as gt,v as jt,t as Me,H as Ue,u as V,x as Yt,P as Xt,y as Ut,z as de,A as Se,B as Ke,C as qe,D as Qe,E as Te,G as pt,I as Kt,J as fe,b as Gt,K as De,_ as Ae,L as R,M as J,N as C,d as T,O as bt,Q as K,R as re,S as Ce,U as Jt,V as Ge,W as Je,F as Ze,X as et,Y as tt,Z as nt}from"./index.809357e1.js";import{Q as W}from"./QItemLabel.0db2804b.js";import{Q as Re}from"./QItem.71feca48.js";import{Q as Z}from"./QItemSection.cdca15d7.js";import{Q as ge}from"./QIcon.8de5dda0.js";import{u as We,a as Fe}from"./use-dark.dcb2121a.js";import{v as Zt,u as yt,c as ot,g as en}from"./use-router-link.15dbf710.js";import{u as tn,b as ve}from"./format.e5fda044.js";import{Q as xe}from"./QList.f9b344b3.js";import"./QSpinner.f224ad85.js";import"./use-size.d235411e.js";var nn=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const a=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:a.value},se(n.default))}}),on=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const a=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:a.value},se(n.default))}});function an(){const e=E(!ht.value);return e.value===!1&&te(()=>{e.value=!0}),e}const wt=typeof ResizeObserver!="undefined",it=wt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ve=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let a=null,l,t={width:-1,height:-1};function i(c){c===!0||e.debounce===0||e.debounce==="0"?s():a===null&&(a=setTimeout(s,e.debounce))}function s(){if(clearTimeout(a),a=null,l){const{offsetWidth:c,offsetHeight:o}=l;(c!==t.width||o!==t.height)&&(t={width:c,height:o},n("resize",t))}}const f=N();if(Object.assign(f.proxy,{trigger:i}),wt===!0){let c;return te(()=>{ne(()=>{l=f.proxy.$el.parentNode,l&&(c=new ResizeObserver(i),c.observe(l),s())})}),F(()=>{clearTimeout(a),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),He}else{let h=function(){clearTimeout(a),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",i,D.passive),o=void 0)},k=function(){h(),l&&l.contentDocument&&(o=l.contentDocument.defaultView,o.addEventListener("resize",i,D.passive),s())};const c=an();let o;return te(()=>{ne(()=>{l=f.proxy.$el,l&&k()})}),F(h),()=>{if(c.value===!0)return y("object",{style:it.style,tabindex:-1,type:"text/html",data:it.url,"aria-hidden":"true",onLoad:k})}}}}),ln=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:a}){const{proxy:{$q:l}}=N(),t=Ie(pe,()=>{console.error("QHeader needs to be child of QLayout")}),i=E(parseInt(e.heightHint,10)),s=E(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),o=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),h=v(()=>e.modelValue===!0&&o.value===!0&&e.reveal===!0),k=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(o.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),L=v(()=>{const u=t.rows.value.top,x={};return u[0]==="l"&&t.left.space===!0&&(x[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(x[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function d(u,x){t.update("header",u,x)}function S(u,x){u.value!==x&&(u.value=x)}function m({height:u}){S(i,u),d("size",u)}function g(u){h.value===!0&&S(s,!0),a("focusin",u)}q(()=>e.modelValue,u=>{d("space",u),S(s,!0),t.animate()}),q(c,u=>{d("offset",u)}),q(()=>e.reveal,u=>{u===!1&&S(s,e.modelValue)}),q(s,u=>{t.animate(),a("reveal",u)}),q(t.scroll,u=>{e.reveal===!0&&S(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const $={};return t.instances.header=$,e.modelValue===!0&&d("size",i.value),d("space",e.modelValue),d("offset",c.value),F(()=>{t.instances.header===$&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=At(n.default,[]);return e.elevated===!0&&u.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(y(Ve,{debounce:0,onResize:m})),y("header",{class:k.value,style:L.value,onFocusin:g},u)}}}),rn=H({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:n,emit:a}){let l=!1,t,i,s,f,c,o;function h(){t&&t(),t=null,l=!1,clearTimeout(s),clearTimeout(f),i!==void 0&&i.removeEventListener("transitionend",c),c=null}function k(m,g,$){m.style.overflowY="hidden",g!==void 0&&(m.style.height=`${g}px`),m.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,t=$}function L(m,g){m.style.overflowY=null,m.style.height=null,m.style.transition=null,h(),g!==o&&a(g)}function d(m,g){let $=0;i=m,l===!0?(h(),$=m.offsetHeight===m.scrollHeight?0:void 0):o="hide",k(m,$,g),s=setTimeout(()=>{m.style.height=`${m.scrollHeight}px`,c=u=>{(Object(u)!==u||u.target===m)&&L(m,"show")},m.addEventListener("transitionend",c),f=setTimeout(c,e.duration*1.1)},100)}function S(m,g){let $;i=m,l===!0?h():(o="show",$=m.scrollHeight),k(m,$,g),s=setTimeout(()=>{m.style.height=0,c=u=>{(Object(u)!==u||u.target===m)&&L(m,"hide")},m.addEventListener("transitionend",c),f=setTimeout(c,e.duration*1.1)},100)}return F(()=>{l===!0&&h()}),()=>y(Ft,{css:!1,appear:e.appear,onEnter:d,onLeave:S},n.default)}});const sn={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},_e={xs:2,sm:4,md:8,lg:16,xl:24};var at=H({name:"QSeparator",props:{...We,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=N(),a=Fe(e,n.proxy.$q),l=v(()=>e.vertical===!0?"vertical":"horizontal"),t=v(()=>` q-separator--${l.value}`),i=v(()=>e.inset!==!1?`${t.value}-${sn[e.inset]}`:""),s=v(()=>`q-separator${t.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),f=v(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const o=e.spaced===!0?`${_e.md}px`:e.spaced in _e?`${_e[e.spaced]}px`:e.spaced,h=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${h[0]}`]=c[`margin${h[1]}`]=o}return c});return()=>y("hr",{class:s.value,style:f.value,"aria-orientation":l.value})}});const kt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Lt=["before-show","show","before-hide","hide"];function St({showing:e,canShow:n,hideOnRouteChange:a,handleShow:l,handleHide:t,processOnMount:i}){const s=N(),{props:f,emit:c,proxy:o}=s;let h;function k(u){e.value===!0?S(u):L(u)}function L(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||n!==void 0&&n(u)!==!0)return;const x=f["onUpdate:modelValue"]!==void 0;x===!0&&(c("update:modelValue",!0),h=u,ne(()=>{h===u&&(h=void 0)})),(f.modelValue===null||x===!1)&&d(u)}function d(u){e.value!==!0&&(e.value=!0,c("before-show",u),l!==void 0?l(u):c("show",u))}function S(u){if(f.disable===!0)return;const x=f["onUpdate:modelValue"]!==void 0;x===!0&&(c("update:modelValue",!1),h=u,ne(()=>{h===u&&(h=void 0)})),(f.modelValue===null||x===!1)&&m(u)}function m(u){e.value!==!1&&(e.value=!1,c("before-hide",u),t!==void 0?t(u):c("hide",u))}function g(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?d:m)(h)}q(()=>f.modelValue,g),a!==void 0&&Zt(s)===!0&&q(()=>o.$route.fullPath,()=>{a.value===!0&&e.value===!0&&S()}),i===!0&&te(()=>{g(f.modelValue)});const $={show:L,hide:S,toggle:k};return Object.assign(o,$),$}const G=Nt({}),un=Object.keys(yt);var lt=H({name:"QExpansionItem",props:{...yt,...kt,...We,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Lt,"click","after-show","after-hide"],setup(e,{slots:n,emit:a}){const{proxy:{$q:l}}=N(),t=Fe(e,l),i=E(e.modelValue!==null?e.modelValue:e.defaultOpened),s=E(null),{hide:f,toggle:c}=St({showing:i});let o,h;const k=v(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),L=v(()=>{if(e.contentInsetLevel===void 0)return null;const p=l.lang.rtl===!0?"Right":"Left";return{["padding"+p]:e.contentInsetLevel*56+"px"}}),d=v(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),S=v(()=>{const p={};return un.forEach(O=>{p[O]=e[O]}),p}),m=v(()=>d.value===!0||e.expandIconToggle!==!0),g=v(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||l.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),$=v(()=>e.disable!==!0&&(d.value===!0||e.expandIconToggle===!0));q(()=>e.group,p=>{h!==void 0&&h(),p!==void 0&&I()});function u(p){d.value!==!0&&c(p),a("click",p)}function x(p){p.keyCode===13&&b(p,!0)}function b(p,O){O!==!0&&s.value!==null&&s.value.focus(),c(p),Me(p)}function _(){a("after-show")}function Q(){a("after-hide")}function I(){o===void 0&&(o=tn()),i.value===!0&&(G[e.group]=o);const p=q(i,A=>{A===!0?G[e.group]=o:G[e.group]===o&&delete G[e.group]}),O=q(()=>G[e.group],(A,oe)=>{oe===o&&A!==void 0&&A!==o&&f()});h=()=>{p(),O(),G[e.group]===o&&delete G[e.group],h=void 0}}function M(){const p={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},O=[y(ge,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:g.value})];return $.value===!0&&(Object.assign(p,{tabindex:0,onClick:b,onKeyup:x}),O.unshift(y("div",{ref:s,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),y(Z,p,()=>O)}function z(){let p;return n.header!==void 0?p=[].concat(n.header()):(p=[y(Z,()=>[y(W,{lines:e.labelLines},()=>e.label||""),e.caption?y(W,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&p[e.switchToggleSide===!0?"push":"unshift"](y(Z,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>y(ge,{name:e.icon})))),e.disable!==!0&&p[e.switchToggleSide===!0?"unshift":"push"](M()),p}function j(){const p={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return m.value===!0&&(p.clickable=!0,p.onClick=u,d.value===!0&&Object.assign(p,S.value)),y(Re,p,z)}function ue(){return gt(y("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:L.value},se(n.default)),[[jt,i.value]])}function Y(){const p=[j(),y(rn,{duration:e.duration,onShow:_,onHide:Q},ue)];return e.expandSeparator===!0&&p.push(y(at,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),y(at,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),p}return e.group!==void 0&&I(),F(()=>{h!==void 0&&h()}),()=>y("div",{class:k.value},[y("div",{class:"q-expansion-item__container relative-position"},Y())])}});function cn(e,n,a){let l;function t(){l!==void 0&&(Ue.remove(l),l=void 0)}return F(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>a.value===!0,handler:n},Ue.add(l)}}}const dn=[null,document,document.body,document.scrollingElement,document.documentElement];function fn(e,n){let a=en(n);if(a===void 0){if(e==null)return window;a=e.closest(".scroll,.scroll-y,.overflow-auto")}return dn.includes(a)?window:a}function qt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Tt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let me;function $e(){if(me!==void 0)return me;const e=document.createElement("p"),n=document.createElement("div");ot(e,{width:"100%",height:"200px"}),ot(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const a=e.offsetWidth;n.style.overflow="scroll";let l=e.offsetWidth;return a===l&&(l=n.clientWidth),n.remove(),me=a-l,me}function vn(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let ae=0,Ee,ze,le,Be=!1,rt,st,ee;function mn(e){hn(e)&&Me(e)}function hn(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=Yt(e),a=e.shiftKey&&!e.deltaX,l=!a&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=a||l?e.deltaY:e.deltaX;for(let i=0;i<n.length;i++){const s=n[i];if(vn(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function ut(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function he(e){Be!==!0&&(Be=!0,requestAnimationFrame(()=>{Be=!1;const{height:n}=e.target,{clientHeight:a,scrollTop:l}=document.scrollingElement;(le===void 0||n!==window.innerHeight)&&(le=a-n,document.scrollingElement.scrollTop=l),l>le&&(document.scrollingElement.scrollTop-=Math.ceil((l-le)/8))}))}function ct(e){const n=document.body,a=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(n);Ee=Tt(window),ze=qt(window),rt=n.style.left,st=n.style.top,n.style.left=`-${Ee}px`,n.style.top=`-${ze}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(a===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",he,D.passiveCapture),window.visualViewport.addEventListener("scroll",he,D.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ut,D.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",mn,D.notPassive),e==="remove"&&(V.is.ios===!0&&(a===!0?(window.visualViewport.removeEventListener("resize",he,D.passiveCapture),window.visualViewport.removeEventListener("scroll",he,D.passiveCapture)):window.removeEventListener("scroll",ut,D.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=rt,n.style.top=st,window.scrollTo(Ee,ze),le=void 0)}function gn(e){let n="add";if(e===!0){if(ae++,ee!==void 0){clearTimeout(ee),ee=void 0;return}if(ae>1)return}else{if(ae===0||(ae--,ae>0))return;if(n="remove",V.is.ios===!0&&V.is.nativeMobile===!0){clearTimeout(ee),ee=setTimeout(()=>{ct(n),ee=void 0},100);return}}ct(n)}function pn(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,gn(n))}}}function bn(){let e;return F(()=>{clearTimeout(e)}),{registerTimeout(n,a){clearTimeout(e),e=setTimeout(n,a)},removeTimeout(){clearTimeout(e)}}}const Ne={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},yn=Object.keys(Ne);Ne.all=!0;function dt(e){const n={};for(const a of yn)e[a]===!0&&(n[a]=!0);return Object.keys(n).length===0?Ne:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function ft(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function wn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Xt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Oe(e,n,a){const l=Qe(e);let t,i=l.left-n.event.x,s=l.top-n.event.y,f=Math.abs(i),c=Math.abs(s);const o=n.direction;o.horizontal===!0&&o.vertical!==!0?t=i<0?"left":"right":o.horizontal!==!0&&o.vertical===!0?t=s<0?"up":"down":o.up===!0&&s<0?(t="up",f>c&&(o.left===!0&&i<0?t="left":o.right===!0&&i>0&&(t="right"))):o.down===!0&&s>0?(t="down",f>c&&(o.left===!0&&i<0?t="left":o.right===!0&&i>0&&(t="right"))):o.left===!0&&i<0?(t="left",f<c&&(o.up===!0&&s<0?t="up":o.down===!0&&s>0&&(t="down"))):o.right===!0&&i>0&&(t="right",f<c&&(o.up===!0&&s<0?t="up":o.down===!0&&s>0&&(t="down")));let h=!1;if(t===void 0&&a===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,h=!0,t==="left"||t==="right"?(l.left-=i,f=0,i=0):(l.top-=s,c=0,s=0)}return{synthetic:h,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:l,direction:t,isFirst:n.event.isFirst,isFinal:a===!0,duration:Date.now()-n.event.time,distance:{x:f,y:c},offset:{x:i,y:s},delta:{x:l.left-n.event.lastX,y:l.top-n.event.lastY}}}}let kn=0;var Pe=Rt({name:"touch-pan",beforeMount(e,{value:n,modifiers:a}){if(a.mouse!==!0&&V.has.touch!==!0)return;function l(i,s){a.mouse===!0&&s===!0?Me(i):(a.stop===!0&&qe(i),a.prevent===!0&&Ke(i))}const t={uid:"qvtp_"+kn++,handler:n,modifiers:a,direction:dt(a),noop:He,mouseStart(i){ft(i,t)&&Ut(i)&&(de(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(ft(i,t)){const s=i.target;de(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(V.is.firefox===!0&&Se(e,!0),t.lastEvt=i,s===!0||a.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const o=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Ke(o),i.cancelBubble===!0&&qe(o),Object.assign(o,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:o}}qe(i)}const{left:f,top:c}=Qe(i);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(i){if(t.event===void 0)return;const s=Qe(i),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=i;const o=t.event.mouse===!0,h=()=>{l(i,o),a.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),o===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),wn(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,a.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),o===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{S(),d()},50):S()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:d,synthetic:S}=Oe(i,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&h(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=S===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||o===!0&&t.modifiers.mouseAllDir===!0){h(),t.event.detected=!0,t.move(i);return}const k=Math.abs(f),L=Math.abs(c);k!==L&&(t.direction.horizontal===!0&&k>L||t.direction.vertical===!0&&k<L||t.direction.up===!0&&k<L&&c<0||t.direction.down===!0&&k<L&&c>0||t.direction.left===!0&&k>L&&f<0||t.direction.right===!0&&k>L&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(Te(t,"temp"),V.is.firefox===!0&&Se(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Oe(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=Oe(i===void 0?t.lastEvt:i,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,a.mouse===!0&&de(t,"main",[[e,"mousedown","mouseStart",`passive${a.mouseCapture===!0?"Capture":""}`]]),V.has.touch===!0&&de(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchpan;a!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&a.end(),a.handler=n.value),a.direction=dt(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),Te(n,"main"),Te(n,"temp"),V.is.firefox===!0&&Se(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const vt=150;var Ln=H({name:"QDrawer",inheritAttrs:!1,props:{...kt,...We,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Lt,"on-layout","mini-state"],setup(e,{slots:n,emit:a,attrs:l}){const t=N(),{proxy:{$q:i}}=t,s=Fe(e,i),{preventBodyScroll:f}=pn(),{registerTimeout:c}=bn(),o=Ie(pe,()=>{console.error("QDrawer needs to be child of QLayout")});let h,k,L;const d=E(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),S=v(()=>e.mini===!0&&d.value!==!0),m=v(()=>S.value===!0?e.miniWidth:e.width),g=E(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),$=v(()=>e.persistent!==!0&&(d.value===!0||Ct.value===!0));function u(r,w){if(Q(),r!==!1&&o.animate(),P(0),d.value===!0){const B=o.instances[A.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),X(1),o.isContainer.value!==!0&&f(!0)}else X(0),r!==!1&&we(!1);c(()=>{r!==!1&&we(!0),w!==!0&&a("show",r)},vt)}function x(r,w){I(),r!==!1&&o.animate(),X(0),P(j.value*m.value),ke(),w!==!0&&c(()=>{a("hide",r)},vt)}const{show:b,hide:_}=St({showing:g,hideOnRouteChange:$,handleShow:u,handleHide:x}),{addToHistory:Q,removeFromHistory:I}=cn(g,_,$),M={belowBreakpoint:d,hide:_},z=v(()=>e.side==="right"),j=v(()=>(i.lang.rtl===!0?-1:1)*(z.value===!0?1:-1)),ue=E(0),Y=E(!1),p=E(!1),O=E(m.value*j.value),A=v(()=>z.value===!0?"left":"right"),oe=v(()=>g.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:m.value:0),be=v(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(z.value?"R":"L")>-1||i.platform.is.ios===!0&&o.isContainer.value===!0),ie=v(()=>e.overlay===!1&&g.value===!0&&d.value===!1),Ct=v(()=>e.overlay===!0&&g.value===!0&&d.value===!1),xt=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&Y.value===!1?" hidden":"")),_t=v(()=>({backgroundColor:`rgba(0,0,0,${ue.value*.4})`})),je=v(()=>z.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),$t=v(()=>z.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Et=v(()=>{const r={};return o.header.space===!0&&je.value===!1&&(be.value===!0?r.top=`${o.header.offset}px`:o.header.space===!0&&(r.top=`${o.header.size}px`)),o.footer.space===!0&&$t.value===!1&&(be.value===!0?r.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(r.bottom=`${o.footer.size}px`)),r}),zt=v(()=>{const r={width:`${m.value}px`,transform:`translateX(${O.value}px)`};return d.value===!0?r:Object.assign(r,Et.value)}),Bt=v(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ot=v(()=>`q-drawer q-drawer--${e.side}`+(p.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(be.value===!0||ie.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(je.value===!0?" q-drawer--top-padding":""))),Pt=v(()=>{const r=i.lang.rtl===!0?e.side:A.value;return[[Pe,It,void 0,{[r]:!0,mouse:!0}]]}),Qt=v(()=>{const r=i.lang.rtl===!0?A.value:e.side;return[[Pe,Ye,void 0,{[r]:!0,mouse:!0}]]}),Vt=v(()=>{const r=i.lang.rtl===!0?A.value:e.side;return[[Pe,Ye,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ye(){Mt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}q(d,r=>{r===!0?(h=g.value,g.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&h!==!1&&(g.value===!0?(P(0),X(0),ke()):b(!1))}),q(()=>e.side,(r,w)=>{o.instances[w]===M&&(o.instances[w]=void 0,o[w].space=!1,o[w].offset=0),o.instances[r]=M,o[r].size=m.value,o[r].space=ie.value,o[r].offset=oe.value}),q(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ye()}),q(()=>e.behavior+e.breakpoint,ye),q(o.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&ye()}),q(o.scrollbarWidth,()=>{P(g.value===!0?0:void 0)}),q(oe,r=>{U("offset",r)}),q(ie,r=>{a("on-layout",r),U("space",r)}),q(z,()=>{P()}),q(m,r=>{P(),Le(e.miniToOverlay,r)}),q(()=>e.miniToOverlay,r=>{Le(r,m.value)}),q(()=>i.lang.rtl,()=>{P()}),q(()=>e.mini,()=>{e.modelValue===!0&&(Ht(),o.animate())}),q(S,r=>{a("mini-state",r)});function P(r){r===void 0?ne(()=>{r=g.value===!0?0:m.value,P(j.value*r)}):(o.isContainer.value===!0&&z.value===!0&&(d.value===!0||Math.abs(r)===m.value)&&(r+=j.value*o.scrollbarWidth.value),O.value=r)}function X(r){ue.value=r}function we(r){const w=r===!0?"remove":o.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function Ht(){clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),p.value=!0,k=setTimeout(()=>{p.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function It(r){if(g.value!==!1)return;const w=m.value,B=ve(r.distance.x,0,w);if(r.isFinal===!0){B>=Math.min(75,w)===!0?b():(o.animate(),X(0),P(j.value*w)),Y.value=!1;return}P((i.lang.rtl===!0?z.value!==!0:z.value)?Math.max(w-B,0):Math.min(0,B-w)),X(ve(B/w,0,1)),r.isFirst===!0&&(Y.value=!0)}function Ye(r){if(g.value!==!0)return;const w=m.value,B=r.direction===e.side,ce=(i.lang.rtl===!0?B!==!0:B)?ve(r.distance.x,0,w):0;if(r.isFinal===!0){Math.abs(ce)<Math.min(75,w)===!0?(o.animate(),X(1),P(0)):_(),Y.value=!1;return}P(j.value*ce),X(ve(1-ce/w,0,1)),r.isFirst===!0&&(Y.value=!0)}function ke(){f(!1),we(!0)}function U(r,w){o.update(e.side,r,w)}function Mt(r,w){r.value!==w&&(r.value=w)}function Le(r,w){U("size",r===!0?e.miniWidth:w)}return o.instances[e.side]=M,Le(e.miniToOverlay,m.value),U("space",ie.value),U("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),te(()=>{a("on-layout",ie.value),a("mini-state",S.value),h=e.showIfAbove===!0;const r=()=>{(g.value===!0?u:x)(!1,!0)};if(o.totalWidth.value!==0){ne(r);return}L=q(o.totalWidth,()=>{L(),L=void 0,g.value===!1&&e.showIfAbove===!0&&d.value===!1?b(!1):r()})}),F(()=>{L!==void 0&&L(),clearTimeout(k),g.value===!0&&ke(),o.instances[e.side]===M&&(o.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(gt(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Pt.value)),r.push(Xe("div",{ref:"backdrop",class:xt.value,style:_t.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Vt.value)));const w=S.value===!0&&n.mini!==void 0,B=[y("div",{...l,key:""+w,class:[Bt.value,l.class]},w===!0?n.mini():se(n.default))];return e.elevated===!0&&g.value===!0&&B.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Xe("aside",{ref:"content",class:Ot.value,style:zt.value},B,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>Qt.value)),y("div",{class:"q-drawer-container"},r)}}}),Sn=H({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:a}}=N(),l=Ie(pe,()=>{console.error("QPageContainer needs to be child of QLayout")});pt(Kt,!0);const t=v(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>y("div",{class:"q-page-container",style:t.value},se(n.default))}});const{passive:mt}=D,qn=["both","horizontal","vertical"];var Tn=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>qn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;q(()=>e.scrollTarget,()=>{c(),f()});function s(){l!==null&&l();const k=Math.max(0,qt(t)),L=Tt(t),d={top:k-a.position.top,left:L-a.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const S=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";a.position={top:k,left:L},a.directionChanged=a.direction!==S,a.delta=d,a.directionChanged===!0&&(a.direction=S,a.inflectionPoint=a.position),n("scroll",{...a})}function f(){t=fn(i,e.scrollTarget),t.addEventListener("scroll",o,mt),o(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",o,mt),t=void 0)}function o(k){if(k===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[L,d]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{d(L),l=null}}}const h=N();return te(()=>{i=h.proxy.$el.parentNode,f()}),F(()=>{l!==null&&l(),c()}),Object.assign(h.proxy,{trigger:o,getPosition:()=>a}),He}}),Cn=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:a}){const{proxy:{$q:l}}=N(),t=E(null),i=E(l.screen.height),s=E(e.container===!0?0:l.screen.width),f=E({position:0,direction:"down",inflectionPoint:0}),c=E(0),o=E(ht.value===!0?0:$e()),h=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),L=v(()=>o.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),d=v(()=>o.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function S(b){if(e.container===!0||document.qScrollPrevented!==!0){const _={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=_,e.onScroll!==void 0&&a("scroll",_)}}function m(b){const{height:_,width:Q}=b;let I=!1;i.value!==_&&(I=!0,i.value=_,e.onScrollHeight!==void 0&&a("scroll-height",_),$()),s.value!==Q&&(I=!0,s.value=Q),I===!0&&e.onResize!==void 0&&a("resize",b)}function g({height:b}){c.value!==b&&(c.value=b,$())}function $(){if(e.container===!0){const b=i.value>c.value?$e():0;o.value!==b&&(o.value=b)}}let u;const x={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:i,containerHeight:c,scrollbarWidth:o,totalWidth:v(()=>s.value+o.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:fe({size:0,offset:0,space:!1}),right:fe({size:300,offset:0,space:!1}),footer:fe({size:0,offset:0,space:!1}),left:fe({size:300,offset:0,space:!1}),scroll:f,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(b,_,Q){x[b][_]=Q}};if(pt(pe,x),$e()>0){let Q=function(){b=null,_.classList.remove("hide-scrollbar")},I=function(){if(b===null){if(_.scrollHeight>l.screen.height)return;_.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(Q,300)},M=function(z){b!==null&&z==="remove"&&(clearTimeout(b),Q()),window[`${z}EventListener`]("resize",I)},b=null;const _=document.body;q(()=>e.container!==!0?"add":"remove",M),e.container!==!0&&M("add"),Gt(()=>{M("remove")})}return()=>{const b=Wt(n.default,[y(Tn,{onScroll:S}),y(Ve,{onResize:m})]),_=y("div",{class:h.value,style:k.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:t},[y(Ve,{onResize:g}),y("div",{class:"absolute-full",style:L.value},[y("div",{class:"scroll",style:d.value},[_])])]):_}}});const xn=De({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function _n(e,n,a,l,t,i){return R(),J(Re,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:C(()=>[e.icon?(R(),J(Z,{key:0,avatar:""},{default:C(()=>[T(ge,{name:e.icon},null,8,["name"])]),_:1})):bt("",!0),T(Z,null,{default:C(()=>[T(W,null,{default:C(()=>[K(re(e.title),1)]),_:1}),T(W,{caption:""},{default:C(()=>[K(re(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var $n=Ae(xn,[["render",_n]]);const En=De({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:""},icon:{type:String,default:""}}});function zn(e,n,a,l,t,i){return R(),J(Re,{clickable:"",to:e.link},{default:C(()=>[e.icon?(R(),J(Z,{key:0,avatar:""},{default:C(()=>[T(ge,{name:e.icon},null,8,["name"])]),_:1})):bt("",!0),T(Z,null,{default:C(()=>[T(W,null,{default:C(()=>[K(re(e.title),1)]),_:1}),T(W,{caption:""},{default:C(()=>[K(re(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Bn=Ae(En,[["render",zn]]);const On={title:"Send Feedback",caption:"Your comments and suggestions",icon:"fa fa-pen",link:"feedback"},Pn={title:"Preferences",caption:"App settings",icon:"fa  fa-gear",link:"preferences"},Qn=[{title:"Prolouge",caption:"Prolouge",icon:"school",link:"prologue"},{title:"Intro",caption:"Introduction",icon:"school",link:"intro"},{title:"Let's Start",caption:"Preparation and installation",icon:"school",link:"startprogramming"},{title:"Hello World",caption:"Make it your own",icon:"school",link:"helloworld"},{title:"Programming Basics",caption:"Make it do stuff",icon:"school",link:"programming1"},{title:"Add a library",caption:"Extend it",icon:"school",link:"images"},{title:"Sending email",caption:"Communicate with your users",icon:"school",link:"sendemail"}],Vn=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Hn=De({name:"MainLayout",components:{EssentialLink:$n,AppLink:Bn},setup(){const e=E(!1);return{essentialLinks:Vn,navigationLinks:Qn,leftDrawerOpen:e,feedbackLink:On,preferencesLink:Pn,toggleLeftDrawer(){e.value=!e.value}}}}),In=K(" Learning Quasar "),Mn=K(" Navigation Links "),Dn=K(" This app "),An=K(" Other Links ");function Rn(e,n,a,l,t,i){const s=Ce("AppLink"),f=Ce("EssentialLink"),c=Ce("router-view");return R(),J(Cn,{view:"lHh Lpr lFf"},{default:C(()=>[T(ln,{elevated:""},{default:C(()=>[T(on,null,{default:C(()=>[T(Dt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),T(nn,null,{default:C(()=>[In]),_:1}),Jt("div",null,"Quasar v"+re(e.$q.version),1)]),_:1})]),_:1}),T(Ln,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[0]||(n[0]=o=>e.leftDrawerOpen=o),"show-if-above":"",bordered:""},{default:C(()=>[T(xe,null,{default:C(()=>[T(W,{header:""},{default:C(()=>[Mn]),_:1}),T(lt,{icon:"perm_identity",label:"Lesson Links",caption:"Links to tutorials in this app","default-opened":""},{default:C(()=>[(R(!0),Ge(Ze,null,Je(e.navigationLinks,o=>(R(),J(s,nt({key:o.title},o),null,16))),128))]),_:1})]),_:1}),T(xe,null,{default:C(()=>[T(W,{header:""},{default:C(()=>[Dn]),_:1}),T(s,et(tt(e.feedbackLink)),null,16),T(s,et(tt(e.preferencesLink)),null,16)]),_:1}),T(xe,null,{default:C(()=>[T(W,{header:""},{default:C(()=>[An]),_:1}),T(lt,{icon:"perm_identity",label:"Quasar Links",caption:"Links related to Quasar","default-closed":""},{default:C(()=>[(R(!0),Ge(Ze,null,Je(e.essentialLinks,o=>(R(),J(f,nt({key:o.title},o),null,16))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),T(Sn,null,{default:C(()=>[T(c)]),_:1})]),_:1})}var oo=Ae(Hn,[["render",Rn]]);export{oo as default};
