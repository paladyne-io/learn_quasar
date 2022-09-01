import{r as F,R as X,o as g,f as L,M as z,j as w,$ as x,h as Y,g as R,Y as T,a0 as A,X as m,a1 as j,a2 as h,a3 as b,a4 as q,a5 as y,a6 as S,a7 as C,n as k,w as $}from"./index.55595f4e.js";import{g as O,s as M}from"./touch.70a9dd44.js";import{c as B,d as H,b as Q,a as V}from"./selection.8c108c94.js";function N(){const r=F(!X.value);return r.value===!1&&g(()=>{r.value=!0}),r}const _=typeof ResizeObserver!="undefined",P=_===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var J=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(r,{emit:a}){let i=null,u,e={width:-1,height:-1};function t(s){s===!0||r.debounce===0||r.debounce==="0"?o():i===null&&(i=setTimeout(o,r.debounce))}function o(){if(clearTimeout(i),i=null,u){const{offsetWidth:s,offsetHeight:n}=u;(s!==e.width||n!==e.height)&&(e={width:s,height:n},a("resize",e))}}const l=R();if(Object.assign(l.proxy,{trigger:t}),_===!0){let s;return g(()=>{z(()=>{u=l.proxy.$el.parentNode,u&&(s=new ResizeObserver(t),s.observe(u),o())})}),w(()=>{clearTimeout(i),s!==void 0&&(s.disconnect!==void 0?s.disconnect():u&&s.unobserve(u))}),x}else{let v=function(){clearTimeout(i),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",t,T.passive),n=void 0)},d=function(){v(),u&&u.contentDocument&&(n=u.contentDocument.defaultView,n.addEventListener("resize",t,T.passive),o())};const s=N();let n;return g(()=>{z(()=>{u=l.proxy.$el,u&&d()})}),w(v),()=>{if(s.value===!0)return Y("object",{style:P.style,tabindex:-1,type:"text/html",data:P.url,"aria-hidden":"true",onLoad:d})}}}});function E(r,a,i){const u=S(r);let e,t=u.left-a.event.x,o=u.top-a.event.y,l=Math.abs(t),s=Math.abs(o);const n=a.direction;n.horizontal===!0&&n.vertical!==!0?e=t<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?e=o<0?"up":"down":n.up===!0&&o<0?(e="up",l>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.down===!0&&o>0?(e="down",l>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.left===!0&&t<0?(e="left",l<s&&(n.up===!0&&o<0?e="up":n.down===!0&&o>0&&(e="down"))):n.right===!0&&t>0&&(e="right",l<s&&(n.up===!0&&o<0?e="up":n.down===!0&&o>0&&(e="down")));let v=!1;if(e===void 0&&i===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};e=a.event.lastDir,v=!0,e==="left"||e==="right"?(u.left-=t,l=0,t=0):(u.top-=o,s=0,o=0)}return{synthetic:v,payload:{evt:r,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:u,direction:e,isFirst:a.event.isFirst,isFinal:i===!0,duration:Date.now()-a.event.time,distance:{x:l,y:s},offset:{x:t,y:o},delta:{x:u.left-a.event.lastX,y:u.top-a.event.lastY}}}}let K=0;var Z=A({name:"touch-pan",beforeMount(r,{value:a,modifiers:i}){if(i.mouse!==!0&&m.has.touch!==!0)return;function u(t,o){i.mouse===!0&&o===!0?k(t):(i.stop===!0&&y(t),i.prevent===!0&&q(t))}const e={uid:"qvtp_"+K++,handler:a,modifiers:i,direction:O(i),noop:x,mouseStart(t){M(t,e)&&j(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(M(t,e)){const o=t.target;h(e,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,o){if(m.is.firefox===!0&&b(r,!0),e.lastEvt=t,o===!0||i.stop===!0){if(e.direction.all!==!0&&(o!==!0||e.modifiers.mouseAllDir!==!0)){const n=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&q(n),t.cancelBubble===!0&&y(n),Object.assign(n,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:n}}y(t)}const{left:l,top:s}=S(t);e.event={x:l,y:s,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:s}},move(t){if(e.event===void 0)return;const o=S(t),l=o.left-e.event.x,s=o.top-e.event.y;if(l===0&&s===0)return;e.lastEvt=t;const n=e.event.mouse===!0,v=()=>{u(t,n),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),B(),e.styleCleanup=c=>{if(e.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{p(),c()},50):p()}else c!==void 0&&c()}};if(e.event.detected===!0){e.event.isFirst!==!0&&u(t,e.event.mouse);const{payload:c,synthetic:p}=E(t,e,!1);c!==void 0&&(e.handler(c)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&v(),e.event.lastX=c.position.left,e.event.lastY=c.position.top,e.event.lastDir=p===!0?void 0:c.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||n===!0&&e.modifiers.mouseAllDir===!0){v(),e.event.detected=!0,e.move(t);return}const d=Math.abs(l),f=Math.abs(s);d!==f&&(e.direction.horizontal===!0&&d>f||e.direction.vertical===!0&&d<f||e.direction.up===!0&&d<f&&s<0||e.direction.down===!0&&d<f&&s>0||e.direction.left===!0&&d>f&&l<0||e.direction.right===!0&&d>f&&l>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,o){if(e.event!==void 0){if(C(e,"temp"),m.is.firefox===!0&&b(r,!1),o===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(E(t===void 0?e.lastEvt:t,e).payload);const{payload:l}=E(t===void 0?e.lastEvt:t,e,!0),s=()=>{e.handler(l)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};r.__qtouchpan=e,i.mouse===!0&&h(e,"main",[[r,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),m.has.touch===!0&&h(e,"main",[[r,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[r,"touchmove","noop","notPassiveCapture"]])},updated(r,a){const i=r.__qtouchpan;i!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&i.end(),i.handler=a.value),i.direction=O(a.modifiers))},beforeUnmount(r){const a=r.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),C(a,"main"),C(a,"temp"),m.is.firefox===!0&&b(r,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete r.__qtouchpan)}});const{passive:D}=T,U=["both","horizontal","vertical"];var ee=L({name:"QScrollObserver",props:{axis:{type:String,validator:r=>U.includes(r),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(r,{emit:a}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,e,t;$(()=>r.scrollTarget,()=>{s(),l()});function o(){u!==null&&u();const d=Math.max(0,Q(e)),f=V(e),c={top:d-i.position.top,left:f-i.position.left};if(r.axis==="vertical"&&c.top===0||r.axis==="horizontal"&&c.left===0)return;const p=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:d,left:f},i.directionChanged=i.direction!==p,i.delta=c,i.directionChanged===!0&&(i.direction=p,i.inflectionPoint=i.position),a("scroll",{...i})}function l(){e=H(t,r.scrollTarget),e.addEventListener("scroll",n,D),n(!0)}function s(){e!==void 0&&(e.removeEventListener("scroll",n,D),e=void 0)}function n(d){if(d===!0||r.debounce===0||r.debounce==="0")o();else if(u===null){const[f,c]=r.debounce?[setTimeout(o,r.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];u=()=>{c(f),u=null}}}const v=R();return g(()=>{t=v.proxy.$el.parentNode,l()}),w(()=>{u!==null&&u(),s()}),Object.assign(v.proxy,{trigger:n,getPosition:()=>i}),x}});export{J as Q,Z as T,ee as a};
