import{a as j,u as z}from"./use-dark.dbce0347.js";import{r as C,a as l,h as f,ae as F,Z as R,d as D,af as K,g as L,ag as s,e as x}from"./index.9c0bb123.js";import{u as N,a as M}from"./use-form.b8e854b7.js";function Z(a,v){const e=C(null),c=l(()=>a.disable===!0?null:f("span",{ref:e,class:"no-outline",tabindex:-1}));function m(u){const r=v.value;u!==void 0&&u.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():e.value!==null&&(u===void 0||r!==null&&r.contains(u.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:m}}var G={xs:30,sm:35,md:40,lg:50,xl:60};const U={...z,...K,...N,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(a,v){const{props:e,slots:c,emit:m,proxy:u}=L(),{$q:r}=u,I=j(e,r),p=C(null),{refocusTargetEl:k,refocusTarget:S}=Z(e,p),q=F(e,G),i=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),g=l(()=>{const t=s(e.val);return i.value===!0?e.modelValue.findIndex(o=>s(o)===t):-1}),n=l(()=>i.value===!0?g.value>-1:s(e.modelValue)===s(e.trueValue)),d=l(()=>i.value===!0?g.value===-1:s(e.modelValue)===s(e.falseValue)),h=l(()=>n.value===!1&&d.value===!1),$=l(()=>e.disable===!0?-1:e.tabindex||0),y=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(I.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),_=l(()=>{const t=n.value===!0?"truthy":d.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?n.value===!0:d.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${o}`}),O=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{"^checked":n.value===!0?"checked":void 0,name:e.name,value:i.value===!0?e.val:e.trueValue}),t}),T=M(O),w=l(()=>{const t={tabindex:$.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":h.value===!0?"mixed":n.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function b(t){t!==void 0&&(x(t),S(t)),e.disable!==!0&&m("update:modelValue",A(),t)}function A(){if(i.value===!0){if(n.value===!0){const t=e.modelValue.slice();return t.splice(g.value,1),t}return e.modelValue.concat([e.val])}if(n.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(d.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function B(t){(t.keyCode===13||t.keyCode===32)&&x(t)}function E(t){(t.keyCode===13||t.keyCode===32)&&b(t)}const P=v(n,h);return Object.assign(u,{toggle:b}),()=>{const t=P();e.disable!==!0&&T(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const o=[f("div",{class:_.value,style:q.value,"aria-hidden":"true"},t)];k.value!==null&&o.push(k.value);const V=e.label!==void 0?R(c.default,[e.label]):D(c.default);return V!==void 0&&o.push(f("div",{class:`q-${a}__label q-anchor--skip`},V)),f("div",{ref:p,class:y.value,...w.value,onClick:b,onKeydown:B,onKeyup:E},o)}}export{W as a,X as b,U as u};
