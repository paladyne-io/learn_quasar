import{Q as se}from"./QImg.af198b46.js";import{c as Be,d as Le,r as s,f as Pe,j as a,aI as lt,w as Ne,as as at,at as ot,o as Fe,h as m,a4 as rt,l as xe,k as he,cT as ue,cU as Ce,b8 as nt,ba as ce,b0 as it,aj as st,X as ut,cV as ct,cW as vt,p as dt,V as ft,x as J,H as ee,A as X,z as we,G as j,F as ve,B as de,C as te,y as Me,D as fe}from"./index.16939dca.js";import{Q as qe,a as mt}from"./QScrollObserver.a55622da.js";import{T as be}from"./TouchPan.b882b347.js";import{b as F}from"./format.a33550d6.js";import{Q as bt}from"./QBadge.1c354abd.js";import{u as ht}from"./use-quasar.49ba074b.js";import"./touch.70a9dd44.js";import"./selection.e5f82d2d.js";const $e=["vertical","horizontal"],me={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Te={prevent:!0,mouse:!0,mouseAllDir:!0},Ae=r=>r>=250?50:Math.ceil(r/5);var gt=Be({name:"QScrollArea",props:{...Le,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(r,{slots:R,emit:V}){const v=s(!1),e=s(!1),y=s(!1),u={vertical:s(0),horizontal:s(0)},l={vertical:{ref:s(null),position:s(0),size:s(0)},horizontal:{ref:s(null),position:s(0),size:s(0)}},{proxy:S}=he(),_=Pe(r,S.$q);let g,h;const p=s(null),C=a(()=>"q-scrollarea"+(_.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=a(()=>{const o=l.vertical.size.value-u.vertical.value;if(o<=0)return 0;const n=F(l.vertical.position.value/o,0,1);return Math.round(n*1e4)/1e4}),l.vertical.thumbHidden=a(()=>(r.visible===null?y.value:r.visible)!==!0&&v.value===!1&&e.value===!1||l.vertical.size.value<=u.vertical.value+1),l.vertical.thumbStart=a(()=>l.vertical.percentage.value*(u.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=a(()=>Math.round(F(u.vertical.value*u.vertical.value/l.vertical.size.value,Ae(u.vertical.value),u.vertical.value))),l.vertical.style=a(()=>({...r.thumbStyle,...r.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=a(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=a(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=a(()=>{const o=l.horizontal.size.value-u.horizontal.value;if(o<=0)return 0;const n=F(Math.abs(l.horizontal.position.value)/o,0,1);return Math.round(n*1e4)/1e4}),l.horizontal.thumbHidden=a(()=>(r.visible===null?y.value:r.visible)!==!0&&v.value===!1&&e.value===!1||l.horizontal.size.value<=u.horizontal.value+1),l.horizontal.thumbStart=a(()=>l.horizontal.percentage.value*(u.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=a(()=>Math.round(F(u.horizontal.value*u.horizontal.value/l.horizontal.size.value,Ae(u.horizontal.value),u.horizontal.value))),l.horizontal.style=a(()=>({...r.thumbStyle,...r.horizontalThumbStyle,[S.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=a(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=a(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const k=a(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?r.contentStyle:r.contentActiveStyle),D=[[be,o=>{N(o,"vertical")},void 0,{vertical:!0,...Te}]],w=[[be,o=>{N(o,"horizontal")},void 0,{horizontal:!0,...Te}]];function M(){const o={};return $e.forEach(n=>{const i=l[n];o[n+"Position"]=i.position.value,o[n+"Percentage"]=i.percentage.value,o[n+"Size"]=i.size.value,o[n+"ContainerSize"]=u[n].value}),o}const q=lt(()=>{const o=M();o.ref=S,V("scroll",o)},0);function d(o,n,i){if($e.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?Ce:ue)(p.value,n,i)}function $({height:o,width:n}){let i=!1;u.vertical.value!==o&&(u.vertical.value=o,i=!0),u.horizontal.value!==n&&(u.horizontal.value=n,i=!0),i===!0&&P()}function B({position:o}){let n=!1;l.vertical.position.value!==o.top&&(l.vertical.position.value=o.top,n=!0),l.horizontal.position.value!==o.left&&(l.horizontal.position.value=o.left,n=!0),n===!0&&P()}function O({height:o,width:n}){l.horizontal.size.value!==n&&(l.horizontal.size.value=n,P()),l.vertical.size.value!==o&&(l.vertical.size.value=o,P())}function N(o,n){const i=l[n];if(o.isFirst===!0){if(i.thumbHidden.value===!0)return;h=i.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const L=me[n],I=u[n].value,z=(i.size.value-I)/(I-i.thumbSize.value),T=o.distance[L.dist],A=h+(o.direction===L.dir?1:-1)*T*z;W(A,n)}function K(o,n){const i=l[n];if(i.thumbHidden.value!==!0){const L=o[me[n].offset];if(L<i.thumbStart.value||L>i.thumbStart.value+i.thumbSize.value){const I=L-i.thumbSize.value/2;W(I/u[n].value*i.size.value,n)}i.ref.value!==null&&i.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function H(o){K(o,"vertical")}function U(o){K(o,"horizontal")}function P(){v.value===!0?clearTimeout(g):v.value=!0,g=setTimeout(()=>{v.value=!1},r.delay),r.onScroll!==void 0&&q()}function W(o,n){p.value[me[n].scroll]=o}function Z(){y.value=!0}function G(){y.value=!1}let Q=null;return Ne(()=>S.$q.lang.rtl,o=>{p.value!==null&&ue(p.value,Math.abs(l.horizontal.position.value)*(o===!0?-1:1))}),at(()=>{Q={top:l.vertical.position.value,left:l.horizontal.position.value}}),ot(()=>{if(Q===null)return;const o=p.value;o!==null&&(ue(o,Q.left),Ce(o,Q.top))}),Fe(q.cancel),Object.assign(S,{getScrollTarget:()=>p.value,getScroll:M,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:d,setScrollPercentage(o,n,i){d(o,n*(l[o].size.value-u[o].value)*(o==="horizontal"&&S.$q.lang.rtl===!0?-1:1),i)}}),()=>m("div",{class:C.value,onMouseenter:Z,onMouseleave:G},[m("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:r.tabindex!==void 0?r.tabindex:void 0},[m("div",{class:"q-scrollarea__content absolute",style:k.value},rt(R.default,[m(qe,{debounce:0,onResize:O})])),m(mt,{axis:"both",onScroll:B})]),m(qe,{debounce:0,onResize:$}),m("div",{class:l.vertical.barClass.value,style:[r.barStyle,r.verticalBarStyle],"aria-hidden":"true",onMousedown:H}),m("div",{class:l.horizontal.barClass.value,style:[r.barStyle,r.horizontalBarStyle],"aria-hidden":"true",onMousedown:U}),xe(m("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),D),xe(m("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),w)])}});const Re="q-slider__marker-labels",pt=r=>({value:r}),kt=({marker:r})=>m("div",{key:r.value,style:r.style,class:r.classes},r.label),Ve=[34,37,40,33,39,38],yt={...Le,...it,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:r=>r>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},St=["pan","update:modelValue","change"];function _t({updateValue:r,updatePosition:R,getDragging:V,formAttrs:v}){const{props:e,emit:y,slots:u,proxy:{$q:l}}=he(),S=Pe(e,l),_=ct(v),g=s(!1),h=s(!1),p=s(!1),C=s(!1),k=a(()=>e.vertical===!0?"--v":"--h"),D=a(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),w=a(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(l.lang.rtl===!0)),M=a(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),q=a(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),d=a(()=>e.disable!==!0&&e.readonly!==!0&&M.value<q.value),$=a(()=>(String(e.step).trim().split(".")[1]||"").length),B=a(()=>e.step===0?1:e.step),O=a(()=>d.value===!0?e.tabindex||0:-1),N=a(()=>e.max-e.min),K=a(()=>q.value-M.value),H=a(()=>ae(M.value)),U=a(()=>ae(q.value)),P=a(()=>e.vertical===!0?w.value===!0?"bottom":"top":w.value===!0?"right":"left"),W=a(()=>e.vertical===!0?"height":"width"),Z=a(()=>e.vertical===!0?"width":"height"),G=a(()=>e.vertical===!0?"vertical":"horizontal"),Q=a(()=>{const t={role:"slider","aria-valuemin":M.value,"aria-valuemax":q.value,"aria-orientation":G.value,"data-step":e.step};return e.disable===!0?t["aria-disabled"]="true":e.readonly===!0&&(t["aria-readonly"]="true"),t}),o=a(()=>`q-slider q-slider${k.value} q-slider--${g.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(d.value===!0?" q-slider--editable":""))+(p.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(S.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+k.value:""));function n(t){const c="q-slider__"+t;return`${c} ${c}${k.value} ${c}${k.value}${D.value}`}function i(t){const c="q-slider__"+t;return`${c} ${c}${k.value}`}const L=a(()=>{const t=e.selectionColor||e.color;return"q-slider__selection absolute"+(t!==void 0?` text-${t}`:"")}),I=a(()=>i("markers")+" absolute overflow-hidden"),z=a(()=>i("track-container")),T=a(()=>n("pin")),A=a(()=>n("label")),E=a(()=>n("text-container")),le=a(()=>n("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),De=a(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),Ie=a(()=>{const t={[Z.value]:e.trackSize};return e.trackImg!==void 0&&(t.backgroundImage=`url(${e.trackImg}) !important`),t}),je=a(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),ge=a(()=>{const t={[P.value]:`${100*H.value}%`,[W.value]:`${100*(U.value-H.value)}%`};return e.innerTrackImg!==void 0&&(t.backgroundImage=`url(${e.innerTrackImg}) !important`),t});function Oe(t){const{min:c,max:f,step:b}=e;let x=c+t*(f-c);if(b>0){const Y=(x-c)%b;x+=(Math.abs(Y)>=b/2?(Y<0?-1:1)*b:0)-Y}return $.value>0&&(x=parseFloat(x.toFixed($.value))),F(x,M.value,q.value)}function ae(t){return N.value===0?0:(t-e.min)/N.value}function He(t,c){const f=st(t),b=e.vertical===!0?F((f.top-c.top)/c.height,0,1):F((f.left-c.left)/c.width,0,1);return F(w.value===!0?1-b:b,H.value,U.value)}const pe=a(()=>nt(e.markers)===!0?e.markers:B.value),ke=a(()=>{const t=[],c=pe.value,f=e.max;let b=e.min;do t.push(b),b+=c;while(b<f);return t.push(f),t}),ye=a(()=>{const t=` ${Re}${k.value}-`;return Re+`${t}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${t}${w.value===!0?"rtl":"ltr"}`}),oe=a(()=>e.markerLabels===!1?null:Ee(e.markerLabels).map((t,c)=>({index:c,value:t.value,label:t.label||t.value,classes:ye.value+(t.classes!==void 0?" "+t.classes:""),style:{..._e(t.value),...t.style||{}}}))),Se=a(()=>({markerList:oe.value,markerMap:Ye.value,classes:ye.value,getStyle:_e})),Qe=a(()=>{if(K.value!==0){const t=100*pe.value/K.value;return{...ge.value,backgroundSize:e.vertical===!0?`2px ${t}%`:`${t}% 2px`}}return null});function Ee(t){if(t===!1)return null;if(t===!0)return ke.value.map(pt);if(typeof t=="function")return ke.value.map(f=>{const b=t(f);return ce(b)===!0?{...b,value:f}:{value:f,label:b}});const c=({value:f})=>f>=e.min&&f<=e.max;return Array.isArray(t)===!0?t.map(f=>ce(f)===!0?f:{value:f}).filter(c):Object.keys(t).map(f=>{const b=t[f],x=Number(f);return ce(b)===!0?{...b,value:x}:{value:x,label:b}}).filter(c)}function _e(t){return{[P.value]:`${100*(t-e.min)/N.value}%`}}const Ye=a(()=>{if(e.markerLabels===!1)return null;const t={};return oe.value.forEach(c=>{t[c.value]=c}),t});function Ke(){if(u["marker-label-group"]!==void 0)return u["marker-label-group"](Se.value);const t=u["marker-label"]||kt;return oe.value.map(c=>t({marker:c,...Se.value}))}const Ue=a(()=>[[be,We,void 0,{[G.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function We(t){t.isFinal===!0?(C.value!==void 0&&(R(t.evt),t.touch===!0&&r(!0),C.value=void 0,y("pan","end")),g.value=!1,p.value=!1):t.isFirst===!0?(C.value=V(t.evt),R(t.evt),r(),g.value=!0,y("pan","start")):(R(t.evt),r())}function ze(){p.value=!1}function Xe(t){R(t,V(t)),r(),h.value=!0,g.value=!0,document.addEventListener("mouseup",re,!0)}function re(){h.value=!1,g.value=!1,r(!0),ze(),document.removeEventListener("mouseup",re,!0)}function Ge(t){R(t,V(t)),r(!0)}function Je(t){Ve.includes(t.keyCode)&&r(!0)}function Ze(t){if(e.vertical===!0)return null;const c=l.lang.rtl!==e.reverse?1-t:t;return{transform:`translateX(calc(${2*c-1} * ${e.thumbSize} / 2 + ${50-100*c}%))`}}function et(t){const c=a(()=>h.value===!1&&(p.value===t.focusValue||p.value==="both")?" q-slider--focus":""),f=a(()=>`q-slider__thumb q-slider__thumb${k.value} q-slider__thumb${k.value}-${w.value===!0?"rtl":"ltr"} absolute non-selectable`+c.value+(t.thumbColor.value!==void 0?` text-${t.thumbColor.value}`:"")),b=a(()=>({width:e.thumbSize,height:e.thumbSize,[P.value]:`${100*t.ratio.value}%`,zIndex:p.value===t.focusValue?2:void 0})),x=a(()=>t.labelColor.value!==void 0?` text-${t.labelColor.value}`:""),Y=a(()=>Ze(t.ratio.value)),ne=a(()=>"q-slider__text"+(t.labelTextColor.value!==void 0?` text-${t.labelTextColor.value}`:""));return()=>{const ie=[m("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[m("path",{d:e.thumbPath})]),m("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(ie.push(m("div",{class:T.value+" absolute fit no-pointer-events"+x.value},[m("div",{class:A.value,style:{minWidth:e.thumbSize}},[m("div",{class:E.value,style:Y.value},[m("span",{class:ne.value},t.label.value)])])])),e.name!==void 0&&e.disable!==!0&&_(ie,"push")),m("div",{class:f.value,style:b.value,...t.getNodeData()},ie)}}function tt(t,c,f,b){const x=[];e.innerTrackColor!=="transparent"&&x.push(m("div",{key:"inner",class:je.value,style:ge.value})),e.selectionColor!=="transparent"&&x.push(m("div",{key:"selection",class:L.value,style:t.value})),e.markers!==!1&&x.push(m("div",{key:"marker",class:I.value,style:Qe.value})),b(x);const Y=[ut("div",{key:"trackC",class:z.value,tabindex:c.value,...f.value},[m("div",{class:De.value,style:Ie.value},x)],"slide",d.value,()=>Ue.value)];if(e.markerLabels!==!1){const ne=e.switchMarkerLabelsSide===!0?"unshift":"push";Y[ne](m("div",{key:"markerL",class:le.value},Ke()))}return Y}return Fe(()=>{document.removeEventListener("mouseup",re,!0)}),{state:{active:g,focus:p,preventFocus:h,dragging:C,editable:d,classes:o,tabindex:O,attributes:Q,step:B,decimals:$,trackLen:N,innerMin:M,innerMinRatio:H,innerMax:q,innerMaxRatio:U,positionProp:P,sizeProp:W,isReversed:w},methods:{onActivate:Xe,onMobileClick:Ge,onBlur:ze,onKeyup:Je,getContent:tt,getThumbRenderFn:et,convertRatioToModel:Oe,convertModelToRatio:ae,getDraggingRatio:He}}}const zt=()=>({});var xt=Be({name:"QSlider",props:{...yt,modelValue:{required:!0,default:null,validator:r=>typeof r=="number"||r===null},labelValue:[String,Number]},emits:St,setup(r,{emit:R}){const{proxy:{$q:V}}=he(),{state:v,methods:e}=_t({updateValue:k,updatePosition:w,getDragging:D,formAttrs:vt(r)}),y=s(null),u=s(0),l=s(0);function S(){l.value=r.modelValue===null?v.innerMin.value:F(r.modelValue,v.innerMin.value,v.innerMax.value)}Ne(()=>`${r.modelValue}|${v.innerMin.value}|${v.innerMax.value}`,S),S();const _=a(()=>e.convertModelToRatio(l.value)),g=a(()=>v.active.value===!0?u.value:_.value),h=a(()=>{const d={[v.positionProp.value]:`${100*v.innerMinRatio.value}%`,[v.sizeProp.value]:`${100*(g.value-v.innerMinRatio.value)}%`};return r.selectionImg!==void 0&&(d.backgroundImage=`url(${r.selectionImg}) !important`),d}),p=e.getThumbRenderFn({focusValue:!0,getNodeData:zt,ratio:g,label:a(()=>r.labelValue!==void 0?r.labelValue:l.value),thumbColor:a(()=>r.thumbColor||r.color),labelColor:a(()=>r.labelColor),labelTextColor:a(()=>r.labelTextColor)}),C=a(()=>v.editable.value!==!0?{}:V.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:M,onBlur:e.onBlur,onKeydown:q,onKeyup:e.onKeyup});function k(d){l.value!==r.modelValue&&R("update:modelValue",l.value),d===!0&&R("change",l.value)}function D(){return y.value.getBoundingClientRect()}function w(d,$=v.dragging.value){const B=e.getDraggingRatio(d,$);l.value=e.convertRatioToModel(B),u.value=r.snap!==!0||r.step===0?B:e.convertModelToRatio(l.value)}function M(){v.focus.value=!0}function q(d){if(!Ve.includes(d.keyCode))return;dt(d);const $=([34,33].includes(d.keyCode)?10:1)*v.step.value,B=([34,37,40].includes(d.keyCode)?-1:1)*(v.isReversed.value===!0?-1:1)*(r.vertical===!0?-1:1)*$;l.value=F(parseFloat((l.value+B).toFixed(v.decimals.value)),v.innerMin.value,v.innerMax.value),k()}return()=>{const d=e.getContent(h,v.tabindex,C,$=>{$.push(p())});return m("div",{ref:y,class:v.classes.value+(r.modelValue===null?" q-slider--no-value":""),...v.attributes.value,"aria-valuenow":r.modelValue},d)}}});const Ct={class:"center flex-center x-center",style:{"min-height":"inherit"}},wt={class:"image-stack__item image-stack__item--bottom"},Mt={key:0,class:"image-stack__item image-stack__item--top"},qt={key:0,class:"text-white q-pa-sm row full-width"},$t=j("br",null,null,-1),Tt={key:0,class:"center flex-center x-center q-gutter-xs row"},At={class:"q-pa-md"},Rt={class:"row justify-around",style:{width:"360px"}},Bt={class:"row justify-around",style:{width:"360px"}},Lt=j("div",{class:"row q-pa-sm row full-width"},[te(" Sound Effects from\xA0"),j("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=25179"},"Pixabay")],-1),Qt={__name:"DA_RocketMan",setup(r){const R=ht(),V=!1,v=!1,e=s(300),y=s(!1),u=s(!1),l=s(!1),S=s(!1),_=s(),g=s(),h=s(null),p=s(null),C=s(null),k=s(0),D=s(0),w=s(300),M=s(9e3),q=s(),d=s(!0),$=new Audio("sounds/rocket9s.m4a"),B=new Audio("sounds/success-fanfare-trumpets-6185.mp3"),O=new Audio("sounds/hq-explosion-6288.mp3"),N=new Audio("sounds/failure2.m4a");ft(()=>{console.log("mounted. initing game..."),Q()});function K(){console.log("quit"),i()}function H(){console.log("stopExplosion"),i()}function U(){console.log("startLaunch"),$.volume=.4,$.play(),S.value=!0,d.value=!1}function P(){console.log("startFall"),l.value=!0,N.volume=.4,N.play()}function W(){u.value=!0,O.volume=.4,O.play(),setTimeout(()=>H(),4e3)}function Z(){console.log("fallRocket"),S.value=!1,_.value=null,g.value=null,y.value=!1,P(),setTimeout(()=>window.requestAnimationFrame(L),1e3)}function G(){u.value=!0,h.value.classList.add("fallover"),O.volume=.4,O.play(),setTimeout(()=>i(),2e3)}function Q(){C.value.setScrollPosition("vertical",w.value)}function o(z){R.notify(z)}function n(){i();{if(U(),e.value>999){o("Too much boost!"),G();return}setTimeout(()=>window.requestAnimationFrame(I),1e3)}}function i(){console.log("reset..."),h.value.classList.remove("fallover"),h.value.style.transform=`translateY(${0}px)`,q.value=h.value.getBoundingClientRect(),k.value=q.value.y,C.value.setScrollPosition("vertical",w.value),_.value=null,g.value=null,y.value=!1,u.value=!1,l.value=!1,S.value=!1,d.value=!0}function L(z){(_.value===void 0||!_.value)&&(_.value=z);const T=z-_.value;if(!isNaN(T)){if(g.value!==z){const A=Math.min(Math.round(.1*T),e.value);if(isNaN(A))return;const E=A;w.value>200&&C.value.setScrollPosition("vertical",E),h.value.style.transform=`translateY(${A-e.value}px)`,A===e.value&&(y.value=!0,console.log("Animation done"),d.value=!0)}T<M.value?(g.value=z,y.value||window.requestAnimationFrame(L)):d.value=!0}}function I(z){if(l.value){console.log("fly method called when falling.. Ignored");return}(_.value===void 0||!_.value)&&(_.value=z);const T=z-_.value;if(isNaN(T))return;if(g.value!==z){const E=Math.min(Math.round(.1*T),e.value);if(isNaN(E))return;const le=360-E;if(h.value.style.transform=`translateY(${-E}px)`,C.value.setScrollPosition("vertical",le),E>=e.value){y.value=!0,A();return}}T<M.value?(g.value=z,y.value||window.requestAnimationFrame(I)):A();function A(){k.value=h.value.getBoundingClientRect().y,D.value=h.value.getBoundingClientRect().y,console.log("finalRocketLoc: ",D.value),k.value<-20?(console.log("Went past the moon."),o("You went too far! Less boost."),setTimeout(()=>i(),2e3)):k.value>100?(console.log("Animation done - falling..."),o("Not enough juice! Add more boost."),setTimeout(()=>Z(),2e3)):k.value<60?(B.volume=.4,B.play(),o("The Eagle has landed!"),d.value=!0):W()}}return(z,T)=>(J(),ee("div",Ct,[X(gt,{ref_key:"scrollAreaRef",ref:C,class:"center flex-center x-center",visible:v,style:{height:"100vh"}},{default:we(()=>[j("div",{ref_key:"bg",ref:p,class:"x-center animation-frame"},[j("div",{ref_key:"rocket",ref:h,class:"rocket-box image-stack"},[j("div",wt,[S.value?(J(),Me(se,{key:0,width:"90px",alt:"Rocket with engines on - image",src:"/images/rocket.png"})):(J(),Me(se,{key:1,ref_key:"rocket",ref:h,class:"rocket-box",width:"90px",alt:"Rocket image",src:"/images/rocket_noflame.png"},null,512))]),u.value?(J(),ee("div",Mt,[X(se,{width:"140px",alt:"animated explosion",src:"/images/explosion.gif"})])):de("",!0)],512),V?(J(),ee("div",qt,[te(" Rocket loc: "+fe(D.value)+" px ",1),$t,te(" Boost: "+fe(e.value),1)])):de("",!0)],512)]),_:1},512),d.value?(J(),ee("div",Tt,[j("div",At,[X(bt,{class:"q-pa-sm",color:"pink"},{default:we(()=>[te(" Boost: "+fe(e.value)+" (100 to 1500) ",1)]),_:1}),j("div",Rt,[X(xt,{modelValue:e.value,"onUpdate:modelValue":T[0]||(T[0]=A=>e.value=A),color:"red",min:100,max:1500,label:"","switch-label-side":"","label-always":""},null,8,["modelValue"])])]),j("div",Bt,[X(ve,{label:"Launch",icon:"rocket",color:"blue",onClick:n}),X(ve,{label:"Reset",icon:"clear",color:"secondary",onClick:i}),X(ve,{style:{"max-width":"100px"},label:"Quit",color:"orange",onClick:K,to:"/"})]),Lt])):de("",!0)]))}};export{Qt as default};
