import{u as N,v as o,x as q,y as Y,z as fe,A as O,l as S,B as s,C as me,D as Ve,E as he,G as ye,H as ze,I as De,J as Me,K as Ie,L as We,M as Ae,N as Pe,O as He,P as ue,R as Ne,S as oe,U as Fe,j as Re,k as Ue,o as re,h as ne,w as D,g as P,Q as je,i as Ee,a as ie,t as se}from"./index.9ddae5f5.js";import{Q as Ke}from"./QScrollObserver.298cd81f.js";import{T as X}from"./TouchPan.b5441e6e.js";import{b as H}from"./format.a33550d6.js";import{Q as de}from"./QItemSection.80e0b81b.js";import{Q as ce}from"./QItemLabel.64a7e020.js";import{Q as Ge}from"./QItem.4a6e4656.js";var rt=N({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:b}){const d=o(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:d.value},Y(b.default))}}),nt=N({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:b}){const d=o(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:d.value,role:"toolbar"},Y(b.default))}}),it=N({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:b,emit:d}){const{proxy:{$q:x}}=he(),r=fe(ye,O);if(r===O)return console.error("QHeader needs to be child of QLayout"),O;const c=S(parseInt(e.heightHint,10)),w=S(!0),T=o(()=>e.reveal===!0||r.view.value.indexOf("H")>-1||x.platform.is.ios&&r.isContainer.value===!0),_=o(()=>{if(e.modelValue!==!0)return 0;if(T.value===!0)return w.value===!0?c.value:0;const l=c.value-r.scroll.value.position;return l>0?l:0}),M=o(()=>e.modelValue!==!0||T.value===!0&&w.value!==!0),a=o(()=>e.modelValue===!0&&M.value===!0&&e.reveal===!0),L=o(()=>"q-header q-layout__section--marginal "+(T.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(M.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=o(()=>{const l=r.rows.value.top,y={};return l[0]==="l"&&r.left.space===!0&&(y[x.lang.rtl===!0?"right":"left"]=`${r.left.size}px`),l[2]==="r"&&r.right.space===!0&&(y[x.lang.rtl===!0?"left":"right"]=`${r.right.size}px`),y});function v(l,y){r.update("header",l,y)}function i(l,y){l.value!==y&&(l.value=y)}function p({height:l}){i(c,l),v("size",l)}function f(l){a.value===!0&&i(w,!0),d("focusin",l)}s(()=>e.modelValue,l=>{v("space",l),i(w,!0),r.animate()}),s(_,l=>{v("offset",l)}),s(()=>e.reveal,l=>{l===!1&&i(w,e.modelValue)}),s(w,l=>{r.animate(),d("reveal",l)}),s(r.scroll,l=>{e.reveal===!0&&i(w,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const n={};return r.instances.header=n,e.modelValue===!0&&v("size",c.value),v("space",e.modelValue),v("offset",_.value),me(()=>{r.instances.header===n&&(r.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const l=Ve(b.default,[]);return e.elevated===!0&&l.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(q(Ke,{debounce:0,onResize:p})),q("header",{class:L.value,style:g.value,onFocusin:f},l)}}});const ve=150;var st=N({name:"QDrawer",inheritAttrs:!1,props:{...ze,...De,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Me,"onLayout","miniState"],setup(e,{slots:b,emit:d,attrs:x}){const r=he(),{proxy:{$q:c}}=r,w=Ie(e,c),{preventBodyScroll:T}=Fe(),{registerTimeout:_,removeTimeout:M}=We(),a=fe(ye,O);if(a===O)return console.error("QDrawer needs to be child of QLayout"),O;let L,g=null,v;const i=S(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),p=o(()=>e.mini===!0&&i.value!==!0),f=o(()=>p.value===!0?e.miniWidth:e.width),n=S(e.showIfAbove===!0&&i.value===!1?!0:e.modelValue===!0),l=o(()=>e.persistent!==!0&&(i.value===!0||ge.value===!0));function y(t,u){if(be(),t!==!1&&a.animate(),h(0),i.value===!0){const m=a.instances[W.value];m!==void 0&&m.belowBreakpoint===!0&&m.hide(!1),B(1),a.isContainer.value!==!0&&T(!0)}else B(0),t!==!1&&K(!1);_(()=>{t!==!1&&K(!0),u!==!0&&d("show",t)},ve)}function Z(t,u){we(),t!==!1&&a.animate(),B(0),h($.value*f.value),G(),u!==!0?_(()=>{d("hide",t)},ve):M()}const{show:F,hide:V}=Ae({showing:n,hideOnRouteChange:l,handleShow:y,handleHide:Z}),{addToHistory:be,removeFromHistory:we}=Pe(n,V,l),I={belowBreakpoint:i,hide:V},k=o(()=>e.side==="right"),$=o(()=>(c.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),ee=S(0),Q=S(!1),R=S(!1),te=S(f.value*$.value),W=o(()=>k.value===!0?"left":"right"),U=o(()=>n.value===!0&&i.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:f.value:0),j=o(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(k.value?"R":"L")>-1||c.platform.is.ios===!0&&a.isContainer.value===!0),z=o(()=>e.overlay===!1&&n.value===!0&&i.value===!1),ge=o(()=>e.overlay===!0&&n.value===!0&&i.value===!1),ke=o(()=>"fullscreen q-drawer__backdrop"+(n.value===!1&&Q.value===!1?" hidden":"")),qe=o(()=>({backgroundColor:`rgba(0,0,0,${ee.value*.4})`})),ae=o(()=>k.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Be=o(()=>k.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ce=o(()=>{const t={};return a.header.space===!0&&ae.value===!1&&(j.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Be.value===!1&&(j.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Se=o(()=>{const t={width:`${f.value}px`,transform:`translateX(${te.value}px)`};return i.value===!0?t:Object.assign(t,Ce.value)}),xe=o(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Te=o(()=>`q-drawer q-drawer--${e.side}`+(R.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(w.value===!0?" q-drawer--dark q-dark":"")+(Q.value===!0?" no-transition":n.value===!0?"":" q-layout--prevent-focus")+(i.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(j.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ae.value===!0?" q-drawer--top-padding":""))),pe=o(()=>{const t=c.lang.rtl===!0?e.side:W.value;return[[X,_e,void 0,{[t]:!0,mouse:!0}]]}),$e=o(()=>{const t=c.lang.rtl===!0?W.value:e.side;return[[X,le,void 0,{[t]:!0,mouse:!0}]]}),Qe=o(()=>{const t=c.lang.rtl===!0?W.value:e.side;return[[X,le,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function E(){Le(i,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}s(i,t=>{t===!0?(L=n.value,n.value===!0&&V(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(n.value===!0?(h(0),B(0),G()):F(!1))}),s(()=>e.side,(t,u)=>{a.instances[u]===I&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[t]=I,a[t].size=f.value,a[t].space=z.value,a[t].offset=U.value}),s(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&E()}),s(()=>e.behavior+e.breakpoint,E),s(a.isContainer,t=>{n.value===!0&&T(t!==!0),t===!0&&E()}),s(a.scrollbarWidth,()=>{h(n.value===!0?0:void 0)}),s(U,t=>{C("offset",t)}),s(z,t=>{d("onLayout",t),C("space",t)}),s(k,()=>{h()}),s(f,t=>{h(),J(e.miniToOverlay,t)}),s(()=>e.miniToOverlay,t=>{J(t,f.value)}),s(()=>c.lang.rtl,()=>{h()}),s(()=>e.mini,()=>{e.modelValue===!0&&(Oe(),a.animate())}),s(p,t=>{d("miniState",t)});function h(t){t===void 0?ue(()=>{t=n.value===!0?0:f.value,h($.value*t)}):(a.isContainer.value===!0&&k.value===!0&&(i.value===!0||Math.abs(t)===f.value)&&(t+=$.value*a.scrollbarWidth.value),te.value=t)}function B(t){ee.value=t}function K(t){const u=t===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Oe(){g!==null&&clearTimeout(g),r.proxy&&r.proxy.$el&&r.proxy.$el.classList.add("q-drawer--mini-animate"),R.value=!0,g=setTimeout(()=>{g=null,R.value=!1,r&&r.proxy&&r.proxy.$el&&r.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function _e(t){if(n.value!==!1)return;const u=f.value,m=H(t.distance.x,0,u);if(t.isFinal===!0){m>=Math.min(75,u)===!0?F():(a.animate(),B(0),h($.value*u)),Q.value=!1;return}h((c.lang.rtl===!0?k.value!==!0:k.value)?Math.max(u-m,0):Math.min(0,m-u)),B(H(m/u,0,1)),t.isFirst===!0&&(Q.value=!0)}function le(t){if(n.value!==!0)return;const u=f.value,m=t.direction===e.side,A=(c.lang.rtl===!0?m!==!0:m)?H(t.distance.x,0,u):0;if(t.isFinal===!0){Math.abs(A)<Math.min(75,u)===!0?(a.animate(),B(1),h(0)):V(),Q.value=!1;return}h($.value*A),B(H(1-A/u,0,1)),t.isFirst===!0&&(Q.value=!0)}function G(){T(!1),K(!0)}function C(t,u){a.update(e.side,t,u)}function Le(t,u){t.value!==u&&(t.value=u)}function J(t,u){C("size",t===!0?e.miniWidth:u)}return a.instances[e.side]=I,J(e.miniToOverlay,f.value),C("space",z.value),C("offset",U.value),e.showIfAbove===!0&&e.modelValue!==!0&&n.value===!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!0),He(()=>{d("onLayout",z.value),d("miniState",p.value),L=e.showIfAbove===!0;const t=()=>{(n.value===!0?y:Z)(!1,!0)};if(a.totalWidth.value!==0){ue(t);return}v=s(a.totalWidth,()=>{v(),v=void 0,n.value===!1&&e.showIfAbove===!0&&i.value===!1?F(!1):t()})}),me(()=>{v!==void 0&&v(),g!==null&&(clearTimeout(g),g=null),n.value===!0&&G(),a.instances[e.side]===I&&(a.instances[e.side]=void 0,C("size",0),C("offset",0),C("space",!1))}),()=>{const t=[];i.value===!0&&(e.noSwipeOpen===!1&&t.push(Ne(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pe.value)),t.push(oe("div",{ref:"backdrop",class:ke.value,style:qe.value,"aria-hidden":"true",onClick:V},void 0,"backdrop",e.noSwipeBackdrop!==!0&&n.value===!0,()=>Qe.value)));const u=p.value===!0&&b.mini!==void 0,m=[q("div",{...x,key:""+u,class:[xe.value,x.class]},u===!0?b.mini():Y(b.default))];return e.elevated===!0&&n.value===!0&&m.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(oe("aside",{ref:"content",class:Te.value,style:Se.value},m,"contentclose",e.noSwipeClose!==!0&&i.value===!0,()=>$e.value)),q("div",{class:"q-drawer-container"},t)}}});const Je=Re({name:"AppLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:""},icon:{type:String,default:""}},methods:{itemClicked(e){console.log("clicked: "+e),this.$emit("clicked")}}});function Xe(e,b,d,x,r,c){return re(),ne(Ge,{clickable:"",to:e.link,onClick:e.itemClicked},{default:D(()=>[e.icon?(re(),ne(de,{key:0,avatar:""},{default:D(()=>[P(je,{name:e.icon},null,8,["name"])]),_:1})):Ee("",!0),P(de,null,{default:D(()=>[P(ce,null,{default:D(()=>[ie(se(e.title),1)]),_:1}),P(ce,{caption:""},{default:D(()=>[ie(se(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to","onClick"])}var dt=Ue(Je,[["render",Xe]]);export{dt as A,nt as Q,rt as a,it as b,st as c};
