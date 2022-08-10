import{c as d,r as u,w as j,j as k,h as l,p as Q}from"./index.809357e1.js";import{Q as I}from"./QSpinner.f224ad85.js";import{c as $,h as E}from"./render.23045fd0.js";const F={ratio:[String,Number]};function H(e,a){return d(()=>{const r=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const L=16/9;var U=$({name:"QImg",props:{...F,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:L},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:r}){const m=u(e.initialRatio),v=H(e,m);let t;const n=[u(null),u(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],s=u(0),c=u(!1),g=u(!1),b=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),q=d(()=>({width:e.width,height:e.height})),C=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),w=d(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));j(()=>h(),S);function h(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(i){if(clearTimeout(t),g.value=!1,i===null){c.value=!1,n[0].value=null,n[1].value=null;return}c.value=!0,n[s.value].value=i}function T({target:i}){t!==null&&(clearTimeout(t),m.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,y(i,1))}function y(i,o){t===null||o===1e3||(i.complete===!0?z(i):t=setTimeout(()=>{y(i,o+1)},50))}function z(i){t!==null&&(s.value=s.value===1?0:1,n[s.value].value=null,c.value=!1,g.value=!1,r("load",i.currentSrc||i.src))}function N(i){clearTimeout(t),c.value=!1,g.value=!0,n[0].value=null,n[1].value=null,r("error",i)}function B(i,o){return l("div",{class:"q-img__container absolute-full",key:i},o)}function _(i){const o=n[i].value,f={key:"img_"+i,class:C.value,style:w.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...o};return s.value===i?(f.class+=" q-img__image--waiting",Object.assign(f,{onLoad:T,onError:N})):f.class+=" q-img__image--loaded",B("img"+i,l("img",f))}function R(){return c.value!==!0?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},E(a[g.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[l(I,{color:e.spinnerColor,size:e.spinnerSize})])}return S(h()),k(()=>{clearTimeout(t),t=null}),()=>{const i=[];return v.value!==null&&i.push(l("div",{key:"filler",style:v.value})),g.value!==!0&&(n[0].value!==null&&i.push(_(0)),n[1].value!==null&&i.push(_(1))),i.push(l(Q,{name:"q-transition--fade"},R)),l("div",{class:b.value,style:q.value,role:"img","aria-label":e.alt},i)}}});export{U as Q};
