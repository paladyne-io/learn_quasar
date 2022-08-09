import{c,h as o,g as N,r as O,j as le,p as ue,q as ie,t as q,$ as Q,B as oe,C as re,l as se}from"./index.ca4b58f2.js";import{u as W,a as U,Q as ce}from"./QSpinner.ac370021.js";import{c as V,h as de,f as $,i as ve,u as fe,R as ge}from"./use-router-link.d034ee9c.js";const z="0 0 24 24",A=e=>e,P=e=>`ionicons ${e}`,D={"mdi-":e=>`mdi ${e}`,"icon-":A,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":P,"ion-ios":P,"ion-logo":P,"iconfont ":A,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},H={o_:"-outlined",r_:"-round",s_:"-sharp"},X={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},be=new RegExp("^("+Object.keys(D).join("|")+")"),me=new RegExp("^("+Object.keys(H).join("|")+")"),K=new RegExp("^("+Object.keys(X).join("|")+")"),he=/^[Mm]\s?[-+]?\.?\d/,ye=/^img:/,ke=/^svguse:/,xe=/^ion-/,Ee=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var F=V({name:"QIcon",props:{...W,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:d}){const{proxy:{$q:v}}=N(),y=U(e),k=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=c(()=>{let r,a=e.name;if(a==="none"||!a)return{none:!0};if(v.iconMapFn!==null){const u=v.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(he.test(a)===!0){const[u,h=z]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(S=>{const[n,E,g]=S.split("@@");return o("path",{style:E,d:n,transform:g})})}}if(ye.test(a)===!0)return{img:!0,src:a.substring(4)};if(ke.test(a)===!0){const[u,h=z]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let m=" ";const x=a.match(be);if(x!==null)r=D[x[1]](a);else if(Ee.test(a)===!0)r=a;else if(xe.test(a)===!0)r=`ionicons ion-${v.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(K.test(a)===!0){r="notranslate material-symbols";const u=a.match(K);u!==null&&(a=a.substring(6),r+=X[u[1]]),m=a}else{r="notranslate material-icons";const u=a.match(me);u!==null&&(a=a.substring(2),r+=H[u[1]]),m=a}return{cls:r,content:m}});return()=>{const r={class:k.value,style:y.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?o(e.tag,r,de(d.default)):s.value.img===!0?o("span",r,$(d.default,[o("img",{src:s.value.src})])):s.value.svg===!0?o("span",r,$(d.default,[o("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?o("span",r,$(d.default,[o("svg",{viewBox:s.value.viewBox},[o("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(r.class+=" "+s.value.cls),o(e.tag,r,$(d.default,[s.value.content])))}}});const G={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Be=Object.keys(G),qe={align:{type:String,validator:e=>Be.includes(e)}};function we(e){return c(()=>{const d=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${G[d]}`})}const I={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Le={xs:8,sm:10,md:14,lg:20,xl:24},Re=["button","submit","reset"],Se=/[^\s]\/[^\s]/,Ce={...W,...fe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...qe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function _e(e){const d=U(e,Le),v=we(e),{hasRouterLink:y,hasLink:k,linkTag:s,linkProps:r,navigateToRouterLink:a}=ve("button"),m=c(()=>{const l=e.fab===!1&&e.fabMini===!1?d.value:{};return e.padding!==void 0?Object.assign({},l,{padding:e.padding.split(/\s+/).map(B=>B in I?I[B]+"px":B).join(" "),minWidth:"0",minHeight:"0"}):l}),x=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),u=c(()=>e.disable!==!0&&e.loading!==!0),h=c(()=>u.value===!0?e.tabindex||0:-1),S=c(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),n=c(()=>{const l={tabindex:h.value};return k.value===!0?Object.assign(l,r.value):Re.includes(e.type)===!0&&(l.type=e.type),s.value==="a"?(e.disable===!0?l["aria-disabled"]="true":l.href===void 0&&(l.role="button"),y.value!==!0&&Se.test(e.type)===!0&&(l.type=e.type)):e.disable===!0&&(l.disabled="",l["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(l,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),l}),E=c(()=>{let l;return e.color!==void 0?e.flat===!0||e.outline===!0?l=`text-${e.textColor||e.color}`:l=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(l=`text-${e.textColor}`),`q-btn--${S.value} q-btn--${e.round===!0?"round":`rectangle${x.value===!0?" q-btn--rounded":""}`}`+(l!==void 0?" "+l:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),g=c(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:E,style:m,innerClasses:g,attributes:n,hasRouterLink:y,hasLink:k,linkTag:s,navigateToRouterLink:a,isActionable:u}}const{passiveCapture:f}=se;let w=null,L=null,R=null;var Pe=V({name:"QBtn",props:{...Ce,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:d,emit:v}){const{proxy:y}=N(),{classes:k,style:s,innerClasses:r,attributes:a,hasRouterLink:m,hasLink:x,linkTag:u,navigateToRouterLink:h,isActionable:S}=_e(e),n=O(null),E=O(null);let g=null,l,B;const M=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),J=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:x.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),Y=c(()=>({center:e.round})),Z=c(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),p=c(()=>e.loading===!0?{onMousedown:_,onTouchstartPassive:_,onClick:_,onKeydown:_,onKeyup:_}:S.value===!0?{onClick:j,onKeydown:te,onMousedown:ae,onTouchstart:ne}:{onClick:q}),ee=c(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+k.value,style:s.value,...a.value,...p.value}));function j(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const i=document.activeElement;if(e.type==="submit"&&i!==document.body&&n.value.contains(i)===!1&&i.contains(n.value)===!1){n.value.focus();const T=()=>{document.removeEventListener("keydown",q,!0),document.removeEventListener("keyup",T,f),n.value!==null&&n.value.removeEventListener("blur",T,f)};document.addEventListener("keydown",q,!0),document.addEventListener("keyup",T,f),n.value.addEventListener("blur",T,f)}}if(m.value===!0){const i=()=>{t.__qNavigate=!0,h(t)};v("click",t,i),t.defaultPrevented!==!0&&i()}else v("click",t)}}function te(t){n.value!==null&&(v("keydown",t),Q(t,[13,32])===!0&&L!==n.value&&(L!==null&&C(),t.defaultPrevented!==!0&&(n.value.focus(),L=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",b,!0),n.value.addEventListener("blur",b,f)),q(t)))}function ne(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(w!==n.value&&(w!==null&&C(),w=n.value,g=t.target,g.addEventListener("touchcancel",b,f),g.addEventListener("touchend",b,f)),l=!0,clearTimeout(B),B=setTimeout(()=>{l=!1},200)))}function ae(t){n.value!==null&&(t.qSkipRipple=l===!0,v("mousedown",t),t.defaultPrevented!==!0&&R!==n.value&&(R!==null&&C(),R=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",b,f)))}function b(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(L===n.value&&Q(t,[13,32])===!0){const i=new MouseEvent("click",t);i.qKeyEvent=!0,t.defaultPrevented===!0&&oe(i),t.cancelBubble===!0&&re(i),n.value.dispatchEvent(i),q(t),t.qKeyEvent=!0}v("keyup",t)}C()}}function C(t){const i=E.value;t!==!0&&(w===n.value||R===n.value)&&i!==null&&i!==document.activeElement&&(i.setAttribute("tabindex",-1),i.focus()),w===n.value&&(g!==null&&(g.removeEventListener("touchcancel",b,f),g.removeEventListener("touchend",b,f)),w=g=null),R===n.value&&(document.removeEventListener("mouseup",b,f),R=null),L===n.value&&(document.removeEventListener("keyup",b,!0),n.value!==null&&n.value.removeEventListener("blur",b,f),L=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function _(t){q(t),t.qSkipRipple=!0}return le(()=>{C(!0)}),Object.assign(y,{click:j}),()=>{let t=[];e.icon!==void 0&&t.push(o(F,{name:e.icon,left:e.stack===!1&&M.value===!0,role:"img","aria-hidden":"true"})),M.value===!0&&t.push(o("span",{class:"block"},[e.label])),t=$(d.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(o(F,{name:e.iconRight,right:e.stack===!1&&M.value===!0,role:"img","aria-hidden":"true"}));const i=[o("span",{class:"q-focus-helper",ref:E})];return e.loading===!0&&e.percentage!==void 0&&i.push(o("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[o("span",{class:"q-btn__progress-indicator fit block",style:Z.value})])),i.push(o("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},t)),e.loading!==null&&i.push(o(ue,{name:"q-transition--fade"},()=>e.loading===!0?[o("span",{key:"loading",class:"absolute-full flex flex-center"},d.loading!==void 0?d.loading():[o(ce)])]:null)),ie(o(u.value,ee.value,i),[[ge,J.value,void 0,Y.value]])}}});export{F as Q,Pe as a};