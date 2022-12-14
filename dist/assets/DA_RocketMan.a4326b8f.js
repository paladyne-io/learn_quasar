import{Q as ue}from"./QImg.399f6eac.js";import{u as Re,a as Pe}from"./use-dark.730c1ba6.js";import{Q as Ce,a as at}from"./QScrollObserver.33a4b3e8.js";import{T as be}from"./TouchPan.490def55.js";import{c as he,r as u,a as o,an as ot,w as Ne,S as nt,ap as rt,o as Fe,h as f,$ as Ve,d as we,g as ge,a9 as it,aB as ut,aD as se,L as st,f as ct,J as vt,j as G,z as ee,m as X,l as qe,y as j,x as ce,n as ve,p as te,k as Me,t as de}from"./index.2b580301.js";import{b as V}from"./format.a33550d6.js";import{s as $e,d as fe}from"./scroll.51dba5cf.js";import{u as dt,a as ft,c as mt}from"./use-form.78b89a35.js";import{u as bt}from"./use-quasar.7d9a075c.js";import"./touch.70a9dd44.js";import"./selection.d9867a99.js";const Be=["vertical","horizontal"],me={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Te={prevent:!0,mouse:!0,mouseAllDir:!0},Ae=a=>a>=250?50:Math.ceil(a/5);var ht=he({name:"QScrollArea",props:{...Re,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(a,{slots:C,emit:P}){const v=u(!1),e=u(!1),y=u(!1),s={vertical:u(0),horizontal:u(0)},l={vertical:{ref:u(null),position:u(0),size:u(0)},horizontal:{ref:u(null),position:u(0),size:u(0)}},{proxy:p}=ge(),_=Pe(a,p.$q);let g,h;const S=u(null),w=o(()=>"q-scrollarea"+(_.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=o(()=>{const n=l.vertical.size.value-s.vertical.value;if(n<=0)return 0;const r=V(l.vertical.position.value/n,0,1);return Math.round(r*1e4)/1e4}),l.vertical.thumbHidden=o(()=>(a.visible===null?y.value:a.visible)!==!0&&v.value===!1&&e.value===!1||l.vertical.size.value<=s.vertical.value+1),l.vertical.thumbStart=o(()=>l.vertical.percentage.value*(s.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=o(()=>Math.round(V(s.vertical.value*s.vertical.value/l.vertical.size.value,Ae(s.vertical.value),s.vertical.value))),l.vertical.style=o(()=>({...a.thumbStyle,...a.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=o(()=>{const n=l.horizontal.size.value-s.horizontal.value;if(n<=0)return 0;const r=V(Math.abs(l.horizontal.position.value)/n,0,1);return Math.round(r*1e4)/1e4}),l.horizontal.thumbHidden=o(()=>(a.visible===null?y.value:a.visible)!==!0&&v.value===!1&&e.value===!1||l.horizontal.size.value<=s.horizontal.value+1),l.horizontal.thumbStart=o(()=>l.horizontal.percentage.value*(s.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=o(()=>Math.round(V(s.horizontal.value*s.horizontal.value/l.horizontal.size.value,Ae(s.horizontal.value),s.horizontal.value))),l.horizontal.style=o(()=>({...a.thumbStyle,...a.horizontalThumbStyle,[p.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const k=o(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?a.contentStyle:a.contentActiveStyle),D=[[be,n=>{F(n,"vertical")},void 0,{vertical:!0,...Te}]],q=[[be,n=>{F(n,"horizontal")},void 0,{horizontal:!0,...Te}]];function M(){const n={};return Be.forEach(r=>{const i=l[r];n[r+"Position"]=i.position.value,n[r+"Percentage"]=i.percentage.value,n[r+"Size"]=i.size.value,n[r+"ContainerSize"]=s[r].value}),n}const $=ot(()=>{const n=M();n.ref=p,P("scroll",n)},0);function d(n,r,i){if(Be.includes(n)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(n==="vertical"?$e:fe)(S.value,r,i)}function B({height:n,width:r}){let i=!1;s.vertical.value!==n&&(s.vertical.value=n,i=!0),s.horizontal.value!==r&&(s.horizontal.value=r,i=!0),i===!0&&N()}function L({position:n}){let r=!1;l.vertical.position.value!==n.top&&(l.vertical.position.value=n.top,r=!0),l.horizontal.position.value!==n.left&&(l.horizontal.position.value=n.left,r=!0),r===!0&&N()}function O({height:n,width:r}){l.horizontal.size.value!==r&&(l.horizontal.size.value=r,N()),l.vertical.size.value!==n&&(l.vertical.size.value=n,N())}function F(n,r){const i=l[r];if(n.isFirst===!0){if(i.thumbHidden.value===!0)return;h=i.position.value,e.value=!0}else if(e.value!==!0)return;n.isFinal===!0&&(e.value=!1);const R=me[r],I=s[r].value,z=(i.size.value-I)/(I-i.thumbSize.value),T=n.distance[R.dist],A=h+(n.direction===R.dir?1:-1)*T*z;W(A,r)}function K(n,r){const i=l[r];if(i.thumbHidden.value!==!0){const R=n[me[r].offset];if(R<i.thumbStart.value||R>i.thumbStart.value+i.thumbSize.value){const I=R-i.thumbSize.value/2;W(I/s[r].value*i.size.value,r)}i.ref.value!==null&&i.ref.value.dispatchEvent(new MouseEvent(n.type,n))}}function Q(n){K(n,"vertical")}function U(n){K(n,"horizontal")}function N(){v.value===!0?clearTimeout(g):v.value=!0,g=setTimeout(()=>{v.value=!1},a.delay),a.onScroll!==void 0&&$()}function W(n,r){S.value[me[r].scroll]=n}function Z(){y.value=!0}function J(){y.value=!1}let E=null;return Ne(()=>p.$q.lang.rtl,n=>{S.value!==null&&fe(S.value,Math.abs(l.horizontal.position.value)*(n===!0?-1:1))}),nt(()=>{E={top:l.vertical.position.value,left:l.horizontal.position.value}}),rt(()=>{if(E===null)return;const n=S.value;n!==null&&(fe(n,E.left),$e(n,E.top))}),Fe($.cancel),Object.assign(p,{getScrollTarget:()=>S.value,getScroll:M,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:d,setScrollPercentage(n,r,i){d(n,r*(l[n].size.value-s[n].value)*(n==="horizontal"&&p.$q.lang.rtl===!0?-1:1),i)}}),()=>f("div",{class:w.value,onMouseenter:Z,onMouseleave:J},[f("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:a.tabindex!==void 0?a.tabindex:void 0},[f("div",{class:"q-scrollarea__content absolute",style:k.value},Ve(C.default,[f(Ce,{debounce:0,onResize:O})])),f(at,{axis:"both",onScroll:L})]),f(Ce,{debounce:0,onResize:B}),f("div",{class:l.vertical.barClass.value,style:[a.barStyle,a.verticalBarStyle],"aria-hidden":"true",onMousedown:Q}),f("div",{class:l.horizontal.barClass.value,style:[a.barStyle,a.horizontalBarStyle],"aria-hidden":"true",onMousedown:U}),we(f("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),D),we(f("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),q)])}});const gt=["top","middle","bottom"];var St=he({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:a=>gt.includes(a)}},setup(a,{slots:C}){const P=o(()=>a.align!==void 0?{verticalAlign:a.align}:null),v=o(()=>{const e=a.outline===!0&&a.color||a.textColor;return`q-badge flex inline items-center no-wrap q-badge--${a.multiLine===!0?"multi":"single"}-line`+(a.outline===!0?" q-badge--outline":a.color!==void 0?` bg-${a.color}`:"")+(e!==void 0?` text-${e}`:"")+(a.floating===!0?" q-badge--floating":"")+(a.rounded===!0?" q-badge--rounded":"")+(a.transparent===!0?" q-badge--transparent":"")});return()=>f("div",{class:v.value,style:P.value,role:"status","aria-label":a.label},Ve(C.default,a.label!==void 0?[a.label]:[]))}});const Le="q-slider__marker-labels",kt=a=>({value:a}),yt=({marker:a})=>f("div",{key:a.value,style:a.style,class:a.classes},a.label),De=[34,37,40,33,39,38],pt={...Re,...dt,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:a=>a>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},_t=["pan","update:modelValue","change"];function zt({updateValue:a,updatePosition:C,getDragging:P,formAttrs:v}){const{props:e,emit:y,slots:s,proxy:{$q:l}}=ge(),p=Pe(e,l),_=ft(v),g=u(!1),h=u(!1),S=u(!1),w=u(!1),k=o(()=>e.vertical===!0?"--v":"--h"),D=o(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),q=o(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(l.lang.rtl===!0)),M=o(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),$=o(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),d=o(()=>e.disable!==!0&&e.readonly!==!0&&M.value<$.value),B=o(()=>(String(e.step).trim().split(".")[1]||"").length),L=o(()=>e.step===0?1:e.step),O=o(()=>d.value===!0?e.tabindex||0:-1),F=o(()=>e.max-e.min),K=o(()=>$.value-M.value),Q=o(()=>ae(M.value)),U=o(()=>ae($.value)),N=o(()=>e.vertical===!0?q.value===!0?"bottom":"top":q.value===!0?"right":"left"),W=o(()=>e.vertical===!0?"height":"width"),Z=o(()=>e.vertical===!0?"width":"height"),J=o(()=>e.vertical===!0?"vertical":"horizontal"),E=o(()=>{const t={role:"slider","aria-valuemin":M.value,"aria-valuemax":$.value,"aria-orientation":J.value,"data-step":e.step};return e.disable===!0?t["aria-disabled"]="true":e.readonly===!0&&(t["aria-readonly"]="true"),t}),n=o(()=>`q-slider q-slider${k.value} q-slider--${g.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(d.value===!0?" q-slider--editable":""))+(S.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(p.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+k.value:""));function r(t){const c="q-slider__"+t;return`${c} ${c}${k.value} ${c}${k.value}${D.value}`}function i(t){const c="q-slider__"+t;return`${c} ${c}${k.value}`}const R=o(()=>{const t=e.selectionColor||e.color;return"q-slider__selection absolute"+(t!==void 0?` text-${t}`:"")}),I=o(()=>i("markers")+" absolute overflow-hidden"),z=o(()=>i("track-container")),T=o(()=>r("pin")),A=o(()=>r("label")),H=o(()=>r("text-container")),le=o(()=>r("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),Ie=o(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),je=o(()=>{const t={[Z.value]:e.trackSize};return e.trackImg!==void 0&&(t.backgroundImage=`url(${e.trackImg}) !important`),t}),Oe=o(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),Se=o(()=>{const t={[N.value]:`${100*Q.value}%`,[W.value]:`${100*(U.value-Q.value)}%`};return e.innerTrackImg!==void 0&&(t.backgroundImage=`url(${e.innerTrackImg}) !important`),t});function Qe(t){const{min:c,max:m,step:b}=e;let x=c+t*(m-c);if(b>0){const Y=(x-c)%b;x+=(Math.abs(Y)>=b/2?(Y<0?-1:1)*b:0)-Y}return B.value>0&&(x=parseFloat(x.toFixed(B.value))),V(x,M.value,$.value)}function ae(t){return F.value===0?0:(t-e.min)/F.value}function Ee(t,c){const m=it(t),b=e.vertical===!0?V((m.top-c.top)/c.height,0,1):V((m.left-c.left)/c.width,0,1);return V(q.value===!0?1-b:b,Q.value,U.value)}const ke=o(()=>ut(e.markers)===!0?e.markers:L.value),ye=o(()=>{const t=[],c=ke.value,m=e.max;let b=e.min;do t.push(b),b+=c;while(b<m);return t.push(m),t}),pe=o(()=>{const t=` ${Le}${k.value}-`;return Le+`${t}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${t}${q.value===!0?"rtl":"ltr"}`}),oe=o(()=>e.markerLabels===!1?null:Ye(e.markerLabels).map((t,c)=>({index:c,value:t.value,label:t.label||t.value,classes:pe.value+(t.classes!==void 0?" "+t.classes:""),style:{...ze(t.value),...t.style||{}}}))),_e=o(()=>({markerList:oe.value,markerMap:Ke.value,classes:pe.value,getStyle:ze})),He=o(()=>{if(K.value!==0){const t=100*ke.value/K.value;return{...Se.value,backgroundSize:e.vertical===!0?`2px ${t}%`:`${t}% 2px`}}return null});function Ye(t){if(t===!1)return null;if(t===!0)return ye.value.map(kt);if(typeof t=="function")return ye.value.map(m=>{const b=t(m);return se(b)===!0?{...b,value:m}:{value:m,label:b}});const c=({value:m})=>m>=e.min&&m<=e.max;return Array.isArray(t)===!0?t.map(m=>se(m)===!0?m:{value:m}).filter(c):Object.keys(t).map(m=>{const b=t[m],x=Number(m);return se(b)===!0?{...b,value:x}:{value:x,label:b}}).filter(c)}function ze(t){return{[N.value]:`${100*(t-e.min)/F.value}%`}}const Ke=o(()=>{if(e.markerLabels===!1)return null;const t={};return oe.value.forEach(c=>{t[c.value]=c}),t});function Ue(){if(s["marker-label-group"]!==void 0)return s["marker-label-group"](_e.value);const t=s["marker-label"]||yt;return oe.value.map(c=>t({marker:c,..._e.value}))}const We=o(()=>[[be,Xe,void 0,{[J.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function Xe(t){t.isFinal===!0?(w.value!==void 0&&(C(t.evt),t.touch===!0&&a(!0),w.value=void 0,y("pan","end")),g.value=!1,S.value=!1):t.isFirst===!0?(w.value=P(t.evt),C(t.evt),a(),g.value=!0,y("pan","start")):(C(t.evt),a())}function xe(){S.value=!1}function Je(t){C(t,P(t)),a(),h.value=!0,g.value=!0,document.addEventListener("mouseup",ne,!0)}function ne(){h.value=!1,g.value=!1,a(!0),xe(),document.removeEventListener("mouseup",ne,!0)}function Ge(t){C(t,P(t)),a(!0)}function Ze(t){De.includes(t.keyCode)&&a(!0)}function et(t){if(e.vertical===!0)return null;const c=l.lang.rtl!==e.reverse?1-t:t;return{transform:`translateX(calc(${2*c-1} * ${e.thumbSize} / 2 + ${50-100*c}%))`}}function tt(t){const c=o(()=>h.value===!1&&(S.value===t.focusValue||S.value==="both")?" q-slider--focus":""),m=o(()=>`q-slider__thumb q-slider__thumb${k.value} q-slider__thumb${k.value}-${q.value===!0?"rtl":"ltr"} absolute non-selectable`+c.value+(t.thumbColor.value!==void 0?` text-${t.thumbColor.value}`:"")),b=o(()=>({width:e.thumbSize,height:e.thumbSize,[N.value]:`${100*t.ratio.value}%`,zIndex:S.value===t.focusValue?2:void 0})),x=o(()=>t.labelColor.value!==void 0?` text-${t.labelColor.value}`:""),Y=o(()=>et(t.ratio.value)),re=o(()=>"q-slider__text"+(t.labelTextColor.value!==void 0?` text-${t.labelTextColor.value}`:""));return()=>{const ie=[f("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[f("path",{d:e.thumbPath})]),f("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(ie.push(f("div",{class:T.value+" absolute fit no-pointer-events"+x.value},[f("div",{class:A.value,style:{minWidth:e.thumbSize}},[f("div",{class:H.value,style:Y.value},[f("span",{class:re.value},t.label.value)])])])),e.name!==void 0&&e.disable!==!0&&_(ie,"push")),f("div",{class:m.value,style:b.value,...t.getNodeData()},ie)}}function lt(t,c,m,b){const x=[];e.innerTrackColor!=="transparent"&&x.push(f("div",{key:"inner",class:Oe.value,style:Se.value})),e.selectionColor!=="transparent"&&x.push(f("div",{key:"selection",class:R.value,style:t.value})),e.markers!==!1&&x.push(f("div",{key:"marker",class:I.value,style:He.value})),b(x);const Y=[st("div",{key:"trackC",class:z.value,tabindex:c.value,...m.value},[f("div",{class:Ie.value,style:je.value},x)],"slide",d.value,()=>We.value)];if(e.markerLabels!==!1){const re=e.switchMarkerLabelsSide===!0?"unshift":"push";Y[re](f("div",{key:"markerL",class:le.value},Ue()))}return Y}return Fe(()=>{document.removeEventListener("mouseup",ne,!0)}),{state:{active:g,focus:S,preventFocus:h,dragging:w,editable:d,classes:n,tabindex:O,attributes:E,step:L,decimals:B,trackLen:F,innerMin:M,innerMinRatio:Q,innerMax:$,innerMaxRatio:U,positionProp:N,sizeProp:W,isReversed:q},methods:{onActivate:Je,onMobileClick:Ge,onBlur:xe,onKeyup:Ze,getContent:lt,getThumbRenderFn:tt,convertRatioToModel:Qe,convertModelToRatio:ae,getDraggingRatio:Ee}}}const xt=()=>({});var Ct=he({name:"QSlider",props:{...pt,modelValue:{required:!0,default:null,validator:a=>typeof a=="number"||a===null},labelValue:[String,Number]},emits:_t,setup(a,{emit:C}){const{proxy:{$q:P}}=ge(),{state:v,methods:e}=zt({updateValue:k,updatePosition:q,getDragging:D,formAttrs:mt(a)}),y=u(null),s=u(0),l=u(0);function p(){l.value=a.modelValue===null?v.innerMin.value:V(a.modelValue,v.innerMin.value,v.innerMax.value)}Ne(()=>`${a.modelValue}|${v.innerMin.value}|${v.innerMax.value}`,p),p();const _=o(()=>e.convertModelToRatio(l.value)),g=o(()=>v.active.value===!0?s.value:_.value),h=o(()=>{const d={[v.positionProp.value]:`${100*v.innerMinRatio.value}%`,[v.sizeProp.value]:`${100*(g.value-v.innerMinRatio.value)}%`};return a.selectionImg!==void 0&&(d.backgroundImage=`url(${a.selectionImg}) !important`),d}),S=e.getThumbRenderFn({focusValue:!0,getNodeData:xt,ratio:g,label:o(()=>a.labelValue!==void 0?a.labelValue:l.value),thumbColor:o(()=>a.thumbColor||a.color),labelColor:o(()=>a.labelColor),labelTextColor:o(()=>a.labelTextColor)}),w=o(()=>v.editable.value!==!0?{}:P.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:M,onBlur:e.onBlur,onKeydown:$,onKeyup:e.onKeyup});function k(d){l.value!==a.modelValue&&C("update:modelValue",l.value),d===!0&&C("change",l.value)}function D(){return y.value.getBoundingClientRect()}function q(d,B=v.dragging.value){const L=e.getDraggingRatio(d,B);l.value=e.convertRatioToModel(L),s.value=a.snap!==!0||a.step===0?L:e.convertModelToRatio(l.value)}function M(){v.focus.value=!0}function $(d){if(!De.includes(d.keyCode))return;ct(d);const B=([34,33].includes(d.keyCode)?10:1)*v.step.value,L=([34,37,40].includes(d.keyCode)?-1:1)*(v.isReversed.value===!0?-1:1)*(a.vertical===!0?-1:1)*B;l.value=V(parseFloat((l.value+L).toFixed(v.decimals.value)),v.innerMin.value,v.innerMax.value),k()}return()=>{const d=e.getContent(h,v.tabindex,w,B=>{B.push(S())});return f("div",{ref:y,class:v.classes.value+(a.modelValue===null?" q-slider--no-value":""),...v.attributes.value,"aria-valuenow":a.modelValue},d)}}});const wt={class:"center flex-center x-center",style:{"min-height":"inherit"}},qt={class:"image-stack__item image-stack__item--bottom"},Mt={key:0,class:"image-stack__item image-stack__item--top"},$t={key:0,class:"text-white q-pa-sm row full-width"},Bt=j("br",null,null,-1),Tt={key:0,class:"center flex-center x-center q-gutter-xs row"},At={class:"q-pa-md"},Lt={class:"row justify-around",style:{width:"360px"}},Rt={class:"row justify-around",style:{width:"360px"}},Pt=j("div",{class:"row q-pa-sm row full-width"},[te(" Sound Effects from\xA0"),j("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=25179"},"Pixabay")],-1),Kt={__name:"DA_RocketMan",setup(a){const C=bt(),P=!1,v=!1,e=u(300),y=u(!1),s=u(!1),l=u(!1),p=u(!1),_=u(),g=u(),h=u(null),S=u(null),w=u(null),k=u(0),D=u(0),q=u(300),M=u(9e3),$=u(),d=u(!0),B=new Audio("sounds/rocket9s.m4a"),L=new Audio("sounds/success-fanfare-trumpets-6185.mp3"),O=new Audio("sounds/hq-explosion-6288.mp3"),F=new Audio("sounds/failure2.m4a");vt(()=>{console.log("mounted. initing game..."),E()});function K(){console.log("quit"),i()}function Q(){console.log("stopExplosion"),i()}function U(){console.log("startLaunch"),B.volume=.4,B.play(),p.value=!0,d.value=!1}function N(){console.log("startFall"),l.value=!0,F.volume=.4,F.play()}function W(){s.value=!0,O.volume=.4,O.play(),setTimeout(()=>Q(),4e3)}function Z(){console.log("fallRocket"),p.value=!1,_.value=null,g.value=null,y.value=!1,N(),setTimeout(()=>window.requestAnimationFrame(R),1e3)}function J(){s.value=!0,h.value.classList.add("fallover"),O.volume=.4,O.play(),setTimeout(()=>i(),2e3)}function E(){w.value.setScrollPosition("vertical",q.value)}function n(z){C.notify(z)}function r(){i();{if(U(),e.value>999){n("Too much boost!"),J();return}setTimeout(()=>window.requestAnimationFrame(I),1e3)}}function i(){console.log("reset..."),h.value.classList.remove("fallover"),h.value.style.transform=`translateY(${0}px)`,$.value=h.value.getBoundingClientRect(),k.value=$.value.y,w.value.setScrollPosition("vertical",q.value),_.value=null,g.value=null,y.value=!1,s.value=!1,l.value=!1,p.value=!1,d.value=!0}function R(z){(_.value===void 0||!_.value)&&(_.value=z);const T=z-_.value;if(!isNaN(T)){if(g.value!==z){const A=Math.min(Math.round(.1*T),e.value);if(isNaN(A))return;const H=A;q.value>200&&w.value.setScrollPosition("vertical",H),h.value.style.transform=`translateY(${A-e.value}px)`,A===e.value&&(y.value=!0,console.log("Animation done"),d.value=!0)}T<M.value?(g.value=z,y.value||window.requestAnimationFrame(R)):d.value=!0}}function I(z){if(l.value){console.log("fly method called when falling.. Ignored");return}(_.value===void 0||!_.value)&&(_.value=z);const T=z-_.value;if(isNaN(T))return;if(g.value!==z){const H=Math.min(Math.round(.1*T),e.value);if(isNaN(H))return;const le=360-H;if(h.value.style.transform=`translateY(${-H}px)`,w.value.setScrollPosition("vertical",le),H>=e.value){y.value=!0,A();return}}T<M.value?(g.value=z,y.value||window.requestAnimationFrame(I)):A();function A(){k.value=h.value.getBoundingClientRect().y,D.value=h.value.getBoundingClientRect().y,console.log("finalRocketLoc: ",D.value),k.value<-20?(console.log("Went past the moon."),n("You went too far! Less boost."),setTimeout(()=>i(),2e3)):k.value>100?(console.log("Animation done - falling..."),n("Not enough juice! Add more boost."),setTimeout(()=>Z(),2e3)):k.value<60?(L.volume=.4,L.play(),n("The Eagle has landed!"),d.value=!0):W()}}return(z,T)=>(G(),ee("div",wt,[X(ht,{ref_key:"scrollAreaRef",ref:w,class:"center flex-center x-center",visible:v,style:{height:"100vh"}},{default:qe(()=>[j("div",{ref_key:"bg",ref:S,class:"x-center animation-frame"},[j("div",{ref_key:"rocket",ref:h,class:"rocket-box image-stack"},[j("div",qt,[p.value?(G(),Me(ue,{key:0,width:"90px",alt:"Rocket with engines on - image",src:"/images/rocket.png"})):(G(),Me(ue,{key:1,ref_key:"rocket",ref:h,class:"rocket-box",width:"90px",alt:"Rocket image",src:"/images/rocket_noflame.png"},null,512))]),s.value?(G(),ee("div",Mt,[X(ue,{width:"140px",alt:"animated explosion",src:"/images/explosion.gif"})])):ve("",!0)],512),P?(G(),ee("div",$t,[te(" Rocket loc: "+de(D.value)+" px ",1),Bt,te(" Boost: "+de(e.value),1)])):ve("",!0)],512)]),_:1},512),d.value?(G(),ee("div",Tt,[j("div",At,[X(St,{class:"q-pa-sm",color:"pink"},{default:qe(()=>[te(" Boost: "+de(e.value)+" (100 to 1500) ",1)]),_:1}),j("div",Lt,[X(Ct,{modelValue:e.value,"onUpdate:modelValue":T[0]||(T[0]=A=>e.value=A),color:"red",min:100,max:1500,label:"","switch-label-side":"","label-always":""},null,8,["modelValue"])])]),j("div",Rt,[X(ce,{label:"Launch",icon:"rocket",color:"blue",onClick:r}),X(ce,{label:"Reset",icon:"clear",color:"secondary",onClick:i}),X(ce,{style:{"max-width":"100px"},label:"Quit",color:"orange",onClick:K,to:"/"})]),Pt])):ve("",!0)]))}};export{Kt as default};