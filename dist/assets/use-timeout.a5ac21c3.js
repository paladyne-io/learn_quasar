import{w as H,O as Y,o as $,g as A,M,f as z,c as D,h as F,m as Q,j as W,P as x,R as p,S as d,n as j,U as O}from"./index.3225310d.js";import{u as R,a as _}from"./use-dark.e7b8f4a0.js";import{g as I,a as K,h as G}from"./scroll.7d26dd1a.js";const re={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},le=["before-show","show","before-hide","hide"];function se({showing:e,canShow:o,hideOnRouteChange:l,handleShow:r,handleHide:s,processOnMount:m}){const i=A(),{props:n,emit:a,proxy:L}=i;let u;function X(t){e.value===!0?y(t):V(t)}function V(t){if(n.disable===!0||t!==void 0&&t.qAnchorHandled===!0||o!==void 0&&o(t)!==!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(a("update:modelValue",!0),u=t,M(()=>{u===t&&(u=void 0)})),(n.modelValue===null||c===!1)&&q(t)}function q(t){e.value!==!0&&(e.value=!0,a("before-show",t),r!==void 0?r(t):a("show",t))}function y(t){if(n.disable===!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(a("update:modelValue",!1),u=t,M(()=>{u===t&&(u=void 0)})),(n.modelValue===null||c===!1)&&P(t)}function P(t){e.value!==!1&&(e.value=!1,a("before-hide",t),s!==void 0?s(t):a("hide",t))}function E(t){n.disable===!0&&t===!0?n["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):t===!0!==e.value&&(t===!0?q:P)(u)}H(()=>n.modelValue,E),l!==void 0&&Y(i)===!0&&H(()=>L.$route.fullPath,()=>{l.value===!0&&e.value===!0&&y()}),m===!0&&$(()=>{E(n.modelValue)});const S={show:V,hide:y,toggle:X};return Object.assign(L,S),S}var ie=z({name:"QList",props:{...R,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const l=A(),r=_(e,l.proxy.$q),s=D(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>F("div",{class:s.value},Q(o.default))}});function ne(e,o,l){let r;function s(){r!==void 0&&(x.remove(r),r=void 0)}return W(()=>{e.value===!0&&s()}),{removeFromHistory:s,addToHistory(){r={condition:()=>l.value===!0,handler:o},x.add(r)}}}let v=0,b,g,w,T=!1,C,k,f;function J(e){N(e)&&j(e)}function N(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=O(e),l=e.shiftKey&&!e.deltaX,r=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),s=l||r?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const i=o[m];if(G(i,r))return r?s<0&&i.scrollTop===0?!0:s>0&&i.scrollTop+i.clientHeight===i.scrollHeight:s<0&&i.scrollLeft===0?!0:s>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function B(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function h(e){T!==!0&&(T=!0,requestAnimationFrame(()=>{T=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:r}=document.scrollingElement;(w===void 0||o!==window.innerHeight)&&(w=l-o,document.scrollingElement.scrollTop=r),r>w&&(document.scrollingElement.scrollTop-=Math.ceil((r-w)/8))}))}function U(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:s}=window.getComputedStyle(o);b=I(window),g=K(window),C=o.style.left,k=o.style.top,o.style.left=`-${b}px`,o.style.top=`-${g}px`,s!=="hidden"&&(s==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",h,d.passiveCapture),window.visualViewport.addEventListener("scroll",h,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",B,d.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",J,d.notPassive),e==="remove"&&(p.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",h,d.passiveCapture),window.visualViewport.removeEventListener("scroll",h,d.passiveCapture)):window.removeEventListener("scroll",B,d.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=C,o.style.top=k,window.scrollTo(b,g),w=void 0)}function Z(e){let o="add";if(e===!0){if(v++,f!==void 0){clearTimeout(f),f=void 0;return}if(v>1)return}else{if(v===0||(v--,v>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){clearTimeout(f),f=setTimeout(()=>{U(o),f=void 0},100);return}}U(o)}function ae(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Z(o))}}}function ue(){let e;return W(()=>{clearTimeout(e)}),{registerTimeout(o,l){clearTimeout(e),e=setTimeout(o,l)},removeTimeout(){clearTimeout(e)}}}export{ie as Q,le as a,se as b,ue as c,ne as d,ae as e,re as u};
