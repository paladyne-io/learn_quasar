import{f as m,c as r,h as c,m as Q,a as B,r as q,w as d,j as H,K as T,g as _,L as O}from"./index.93d6983e.js";import{Q as L}from"./QScrollObserver.c0801e7c.js";var C=m({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:n}){const s=r(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>c("div",{class:s.value},Q(n.default))}}),S=m({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:n}){const s=r(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>c("div",{class:s.value},Q(n.default))}}),j=m({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:n,emit:s}){const{proxy:{$q:v}}=_(),a=B(O,()=>{console.error("QHeader needs to be child of QLayout")}),f=q(parseInt(t.heightHint,10)),u=q(!0),h=r(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||v.platform.is.ios&&a.isContainer.value===!0),b=r(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?f.value:0;const e=f.value-a.scroll.value.position;return e>0?e:0}),y=r(()=>t.modelValue!==!0||h.value===!0&&u.value!==!0),p=r(()=>t.modelValue===!0&&y.value===!0&&t.reveal===!0),w=r(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),V=r(()=>{const e=a.rows.value.top,o={};return e[0]==="l"&&a.left.space===!0&&(o[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(o[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),o});function l(e,o){a.update("header",e,o)}function i(e,o){e.value!==o&&(e.value=o)}function z({height:e}){i(f,e),l("size",e)}function x(e){p.value===!0&&i(u,!0),s("focusin",e)}d(()=>t.modelValue,e=>{l("space",e),i(u,!0),a.animate()}),d(b,e=>{l("offset",e)}),d(()=>t.reveal,e=>{e===!1&&i(u,t.modelValue)}),d(u,e=>{a.animate(),s("reveal",e)}),d(a.scroll,e=>{t.reveal===!0&&i(u,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const g={};return a.instances.header=g,t.modelValue===!0&&l("size",f.value),l("space",t.modelValue),l("offset",b.value),H(()=>{a.instances.header===g&&(a.instances.header=void 0,l("size",0),l("offset",0),l("space",!1))}),()=>{const e=T(n.default,[]);return t.elevated===!0&&e.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(c(L,{debounce:0,onResize:z})),c("header",{class:w.value,style:V.value,onFocusin:x},e)}}});export{S as Q,C as a,j as b};
