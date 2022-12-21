import{c as x,N as B,O as w,Z as L,j as a,h as r,m as E,k as P,R as Q,$ as K,r as u,a0 as k,a1 as z,a2 as g,w as I,a3 as M,a4 as N}from"./index.16939dca.js";import{a as U,Q as R}from"./QScrollObserver.a55622da.js";var A=x({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:c}}=P(),n=B(Q,w);if(n===w)return console.error("QPageContainer needs to be child of QLayout"),w;L(K,!0);const d=a(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>r("div",{class:"q-page-container",style:d.value},E(m.default))}}),D=x({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:c}){const{proxy:{$q:n}}=P(),d=u(null),i=u(n.screen.height),y=u(t.container===!0?0:n.screen.width),S=u({position:0,direction:"down",inflectionPoint:0}),v=u(0),l=u(k.value===!0?0:z()),q=a(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),H=a(()=>t.container===!1?{minHeight:n.screen.height+"px"}:null),T=a(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),W=a(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function F(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};S.value=o,t.onScroll!==void 0&&c("scroll",o)}}function O(e){const{height:o,width:s}=e;let f=!1;i.value!==o&&(f=!0,i.value=o,t.onScrollHeight!==void 0&&c("scrollHeight",o),b()),y.value!==s&&(f=!0,y.value=s),f===!0&&t.onResize!==void 0&&c("resize",e)}function j({height:e}){v.value!==e&&(v.value=e,b())}function b(){if(t.container===!0){const e=i.value>v.value?z():0;l.value!==e&&(l.value=e)}}let h;const $={instances:{},view:a(()=>t.view),isContainer:a(()=>t.container),rootRef:d,height:i,containerHeight:v,scrollbarWidth:l,totalWidth:a(()=>y.value+l.value),rows:a(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:g({size:0,offset:0,space:!1}),right:g({size:300,offset:0,space:!1}),footer:g({size:0,offset:0,space:!1}),left:g({size:300,offset:0,space:!1}),scroll:S,animate(){h!==void 0?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),h=void 0},155)},update(e,o,s){$[e][o]=s}};if(L(Q,$),z()>0){let s=function(){e=null,o.classList.remove("hide-scrollbar")},f=function(){if(e===null){if(o.scrollHeight>n.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(s,300)},p=function(C){e!==null&&C==="remove"&&(clearTimeout(e),s()),window[`${C}EventListener`]("resize",f)},e=null;const o=document.body;I(()=>t.container!==!0?"add":"remove",p),t.container!==!0&&p("add"),M(()=>{p("remove")})}return()=>{const e=N(m.default,[r(U,{onScroll:F}),r(R,{onResize:O})]),o=r("div",{class:q.value,style:H.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?r("div",{class:"q-layout-container overflow-hidden",ref:d},[r(R,{onResize:j}),r("div",{class:"absolute-full",style:T.value},[r("div",{class:"scroll",style:W.value},[o])])]):o}}});export{D as Q,A as a};
