import{c as ve,r as b,a as c,$ as se,w,o as de,R as Me,ao as Pe,h as A,d as xe,Q as ce,U as De,g as he,aH as Fe,D as Z,W as Ve,Z as He,G as ze,H as Qe}from"./index.7a166512.js";import{Q as ge}from"./QScrollObserver.6faefd12.js";import{u as J,r as Ee}from"./use-tick.d666b489.js";import{d as fe}from"./use-timeout.20f7cddd.js";function We(t,x,$){const g=$===!0?["left","right"]:["top","bottom"];return`absolute-${x===!0?g[0]:g[1]}${t?` text-${t}`:""}`}const Oe=["left","center","right","justify"];var Ne=ve({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:t=>Oe.includes(t)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(t,{slots:x,emit:$}){const{proxy:g}=he(),{$q:l}=g,{registerTick:R}=J(),{registerTick:y}=J(),{registerTick:z}=J(),{registerTimeout:k,removeTimeout:Q}=fe(),{registerTimeout:D,removeTimeout:E}=fe(),B=b(null),m=b(null),q=b(t.modelValue),f=b(!1),T=b(!0),F=b(!1),W=b(!1),M=c(()=>l.platform.is.desktop===!0||t.mobileArrows===!0),h=[],a=b(0),v=b(!1);let V,Y,S,I=M.value===!0?ee:se;const me=c(()=>({activeClass:t.activeClass,activeColor:t.activeColor,activeBgColor:t.activeBgColor,indicatorClass:We(t.indicatorColor,t.switchIndicator,t.vertical),narrowIndicator:t.narrowIndicator,inlineLabel:t.inlineLabel,noCaps:t.noCaps})),be=c(()=>{const e=a.value,o=q.value;for(let n=0;n<e;n++)if(h[n].name.value===o)return!0;return!1}),we=c(()=>`q-tabs__content--align-${f.value===!0?"left":W.value===!0?"justify":t.align}`),Te=c(()=>`q-tabs row no-wrap items-center q-tabs--${f.value===!0?"":"not-"}scrollable q-tabs--${t.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${M.value===!0&&t.outsideArrows===!0?"outside":"inside"}`+(t.dense===!0?" q-tabs--dense":"")+(t.shrink===!0?" col-shrink":"")+(t.stretch===!0?" self-stretch":"")),ye=c(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+we.value+(t.contentClass!==void 0?` ${t.contentClass}`:"")+(l.platform.is.mobile===!0?" scroll":"")),O=c(()=>t.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),U=c(()=>t.vertical!==!0&&l.lang.rtl===!0),G=c(()=>Ee===!1&&U.value===!0);w(U,I),w(()=>t.modelValue,e=>{K({name:e,setCurrent:!0,skipEmit:!0})}),w(()=>t.outsideArrows,()=>{H()}),w(M,e=>{I=e===!0?ee:se,H()});function K({name:e,setCurrent:o,skipEmit:n,fromRoute:u}){q.value!==e&&(n!==!0&&t["onUpdate:modelValue"]!==void 0&&$("update:modelValue",e),(o===!0||t["onUpdate:modelValue"]===void 0)&&(qe(q.value,e),q.value=e))}function H(){R(()=>{p({width:B.value.offsetWidth,height:B.value.offsetHeight})})}function p(e){if(O.value===void 0||m.value===null)return;const o=e[O.value.container],n=Math.min(m.value[O.value.scroll],Array.prototype.reduce.call(m.value.children,(s,i)=>s+(i[O.value.content]||0),0)),u=o>0&&n>o;f.value=u,u===!0&&y(I),W.value=o<parseInt(t.breakpoint,10)}function qe(e,o){const n=e!=null&&e!==""?h.find(s=>s.name.value===e):null,u=o!=null&&o!==""?h.find(s=>s.name.value===o):null;if(n&&u){const s=n.tabIndicatorRef.value,i=u.tabIndicatorRef.value;clearTimeout(V),s.style.transition="none",s.style.transform="none",i.style.transition="none",i.style.transform="none";const r=s.getBoundingClientRect(),d=i.getBoundingClientRect();i.style.transform=t.vertical===!0?`translate3d(0,${r.top-d.top}px,0) scale3d(1,${d.height?r.height/d.height:1},1)`:`translate3d(${r.left-d.left}px,0,0) scale3d(${d.width?r.width/d.width:1},1,1)`,z(()=>{V=setTimeout(()=>{i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}u&&f.value===!0&&P(u.rootRef.value)}function P(e){const{left:o,width:n,top:u,height:s}=m.value.getBoundingClientRect(),i=e.getBoundingClientRect();let r=t.vertical===!0?i.top-u:i.left-o;if(r<0){m.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(r),I();return}r+=t.vertical===!0?i.height-s:i.width-n,r>0&&(m.value[t.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(r),I())}function ee(){const e=m.value;if(e!==null){const o=e.getBoundingClientRect(),n=t.vertical===!0?e.scrollTop:Math.abs(e.scrollLeft);U.value===!0?(T.value=Math.ceil(n+o.width)<e.scrollWidth-1,F.value=n>0):(T.value=n>0,F.value=t.vertical===!0?Math.ceil(n+o.height)<e.scrollHeight:Math.ceil(n+o.width)<e.scrollWidth)}}function te(e){C(),Y=setInterval(()=>{Re(e)===!0&&C()},5)}function oe(){te(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function C(){clearInterval(Y)}function Ce(e,o){const n=Array.prototype.filter.call(m.value.children,d=>d===o||d.matches&&d.matches(".q-tab.q-focusable")===!0),u=n.length;if(u===0)return;if(e===36)return P(n[0]),n[0].focus(),!0;if(e===35)return P(n[u-1]),n[u-1].focus(),!0;const s=e===(t.vertical===!0?38:37),i=e===(t.vertical===!0?40:39),r=s===!0?-1:i===!0?1:void 0;if(r!==void 0){const d=U.value===!0?-1:1,L=n.indexOf(o)+r*d;return L>=0&&L<u&&(P(n[L]),n[L].focus({preventScroll:!0})),!0}}const Le=c(()=>G.value===!0?{get:e=>Math.abs(e.scrollLeft),set:(e,o)=>{e.scrollLeft=-o}}:t.vertical===!0?{get:e=>e.scrollTop,set:(e,o)=>{e.scrollTop=o}}:{get:e=>e.scrollLeft,set:(e,o)=>{e.scrollLeft=o}});function Re(e){const o=m.value,{get:n,set:u}=Le.value;let s=!1,i=n(o);const r=e<i?-1:1;return i+=r*5,i<0?(s=!0,i=0):(r===-1&&i<=e||r===1&&i>=e)&&(s=!0,i=e),u(o,i),I(),s}function ae(e,o){for(const n in e)if(e[n]!==o[n])return!1;return!0}function Se(){let e=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const n=h.filter(r=>r.routeData!==void 0&&r.routeData.hasRouterLink.value===!0),{hash:u,query:s}=g.$route,i=Object.keys(s).length;for(const r of n){const d=r.routeData.exact.value===!0;if(r.routeData[d===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:L,query:N,matched:$e,href:ke}=r.routeData.resolvedLink.value,X=Object.keys(N).length;if(d===!0){if(L!==u||X!==i||ae(s,N)===!1)continue;e=r.name.value;break}if(L!==""&&L!==u||X!==0&&ae(N,s)===!1)continue;const _={matchedLen:$e.length,queryDiff:i-X,hrefLen:ke.length-L.length};if(_.matchedLen>o.matchedLen){e=r.name.value,o=_;continue}else if(_.matchedLen!==o.matchedLen)continue;if(_.queryDiff<o.queryDiff)e=r.name.value,o=_;else if(_.queryDiff!==o.queryDiff)continue;_.hrefLen>o.hrefLen&&(e=r.name.value,o=_)}e===null&&h.some(r=>r.routeData===void 0&&r.name.value===q.value)===!0||K({name:e,setCurrent:!0})}function _e(e){if(Q(),v.value!==!0&&B.value!==null&&e.target&&typeof e.target.closest=="function"){const o=e.target.closest(".q-tab");o&&B.value.contains(o)===!0&&(v.value=!0,f.value===!0&&P(o))}}function Ae(){k(()=>{v.value=!1},30)}function j(){le.avoidRouteWatcher===!1?D(Se):E()}function re(){if(S===void 0){const e=w(()=>g.$route.fullPath,j);S=()=>{e(),S=void 0}}}function Be(e){h.push(e),a.value++,H(),e.routeData===void 0||g.$route===void 0?D(()=>{if(f.value===!0){const o=q.value,n=o!=null&&o!==""?h.find(u=>u.name.value===o):null;n&&P(n.rootRef.value)}}):(re(),e.routeData.hasRouterLink.value===!0&&j())}function Ie(e){h.splice(h.indexOf(e),1),a.value--,H(),S!==void 0&&e.routeData!==void 0&&(h.every(o=>o.routeData===void 0)===!0&&S(),j())}const le={currentModel:q,tabProps:me,hasFocus:v,hasActiveTab:be,registerTab:Be,unregisterTab:Ie,verifyRouteModel:j,updateModel:K,onKbdNavigate:Ce,avoidRouteWatcher:!1};De(Fe,le);function ie(){clearTimeout(V),C(),S!==void 0&&S()}let ue;return de(ie),Me(()=>{ue=S!==void 0,ie()}),Pe(()=>{ue===!0&&re(),H()}),()=>{const e=[A(ge,{onResize:p}),A("div",{ref:m,class:ye.value,onScroll:I},xe(x.default))];return M.value===!0&&e.push(A(ce,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(T.value===!0?"":" q-tabs__arrow--faded"),name:t.leftIcon||l.iconSet.tabs[t.vertical===!0?"up":"left"],onMousedownPassive:oe,onTouchstartPassive:oe,onMouseupPassive:C,onMouseleavePassive:C,onTouchendPassive:C}),A(ce,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:t.rightIcon||l.iconSet.tabs[t.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:C,onMouseleavePassive:C,onTouchendPassive:C})),A("div",{ref:B,class:Te.value,role:"tablist",onFocusin:_e,onFocusout:Ae},e)}}}),Xe=ve({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:x,emit:$}){const{proxy:{$q:g}}=he(),l=ze(Qe,Z);if(l===Z)return console.error("QFooter needs to be child of QLayout"),Z;const R=b(parseInt(t.heightHint,10)),y=b(!0),z=b(Ve.value===!0||l.isContainer.value===!0?0:window.innerHeight),k=c(()=>t.reveal===!0||l.view.value.indexOf("F")>-1||g.platform.is.ios&&l.isContainer.value===!0),Q=c(()=>l.isContainer.value===!0?l.containerHeight.value:z.value),D=c(()=>{if(t.modelValue!==!0)return 0;if(k.value===!0)return y.value===!0?R.value:0;const a=l.scroll.value.position+Q.value+R.value-l.height.value;return a>0?a:0}),E=c(()=>t.modelValue!==!0||k.value===!0&&y.value!==!0),B=c(()=>t.modelValue===!0&&E.value===!0&&t.reveal===!0),m=c(()=>"q-footer q-layout__section--marginal "+(k.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(E.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(k.value!==!0?" hidden":""):"")),q=c(()=>{const a=l.rows.value.bottom,v={};return a[0]==="l"&&l.left.space===!0&&(v[g.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),a[2]==="r"&&l.right.space===!0&&(v[g.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),v});function f(a,v){l.update("footer",a,v)}function T(a,v){a.value!==v&&(a.value=v)}function F({height:a}){T(R,a),f("size",a)}function W(){if(t.reveal!==!0)return;const{direction:a,position:v,inflectionPoint:V}=l.scroll.value;T(y,a==="up"||v-V<100||l.height.value-Q.value-v-R.value<300)}function M(a){B.value===!0&&T(y,!0),$("focusin",a)}w(()=>t.modelValue,a=>{f("space",a),T(y,!0),l.animate()}),w(D,a=>{f("offset",a)}),w(()=>t.reveal,a=>{a===!1&&T(y,t.modelValue)}),w(y,a=>{l.animate(),$("reveal",a)}),w([R,l.scroll,l.height],W),w(()=>g.screen.height,a=>{l.isContainer.value!==!0&&T(z,a)});const h={};return l.instances.footer=h,t.modelValue===!0&&f("size",R.value),f("space",t.modelValue),f("offset",D.value),de(()=>{l.instances.footer===h&&(l.instances.footer=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const a=He(x.default,[A(ge,{debounce:0,onResize:F})]);return t.elevated===!0&&a.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),A("footer",{class:m.value,style:q.value,onFocusin:M},a)}}});export{Ne as Q,Xe as a};
