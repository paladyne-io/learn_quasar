import{w as T,j as Y,a as ye,g as K,a3 as pe,c as b,h as k,r as P,a4 as xe,a5 as Ce,a6 as we,t as Se,n as U,a7 as Me,a8 as qe,o as ve,f as Re,B as H,p as _e,a9 as Ve,u as Fe,C as re}from"./index.ca4b58f2.js";import{Q as ne}from"./QBtn.29e54f4b.js";import{u as Ae,a as Be,Q as Ee}from"./QSpinner.ac370021.js";import{u as $e,a as Oe}from"./use-dark.4e42368a.js";import{c as me,j as Pe,h as Q}from"./use-router-link.d034ee9c.js";import{b as Te,u as ze}from"./format.e5fda044.js";function Ie({validate:e,resetValidation:t,requiresQForm:u}){const o=ye(pe,!1);if(o!==!1){const{props:f,proxy:h}=K();Object.assign(h,{validate:e,resetValidation:t}),T(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),o.unbindComponent(h)):o.bindComponent(h)}),f.disable!==!0&&o.bindComponent(h),Y(()=>{f.disable!==!0&&o.unbindComponent(h)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const oe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ue=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ie=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,W=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,J=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>oe.test(e),hexaColor:e=>ue.test(e),hexOrHexaColor:e=>ie.test(e),rgbColor:e=>W.test(e),rgbaColor:e=>J.test(e),rgbOrRgbaColor:e=>W.test(e)||J.test(e),hexOrRgbColor:e=>oe.test(e)||W.test(e),hexaOrRgbaColor:e=>ue.test(e)||J.test(e),anyColor:e=>ie.test(e)||W.test(e)||J.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const je={...Ae,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ee=50,ge=2*ee,he=ge*Math.PI,Ne=Math.round(he*1e3)/1e3;me({name:"QCircularProgress",props:{...je,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=K(),o=Be(e),f=b(()=>{const M=(u.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),h=b(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=b(()=>ge/(1-e.thickness/2)),S=b(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),p=b(()=>Te(e.value,e.min,e.max)),y=b(()=>he*(1-(p.value-e.min)/(e.max-e.min))),F=b(()=>e.thickness/2*v.value);function R({thickness:M,offset:A,color:B,cls:N}){return k("circle",{class:"q-circular-progress__"+N+(B!==void 0?` text-${B}`:""),style:h.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":Ne,"stroke-dashoffset":A,cx:v.value,cy:v.value,r:ee})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(k("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ee-F.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(R({cls:"track",thickness:F.value,offset:0,color:e.trackColor})),M.push(R({cls:"circle",thickness:F.value,offset:y.value,color:e.color}));const A=[k("svg",{class:"q-circular-progress__svg",style:f.value,viewBox:S.value,"aria-hidden":"true"},M)];return e.showValue===!0&&A.push(k("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[k("div",p.value)])),k("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:o.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},Pe(t.internal,A))}}});const De=["rejected"],Le=[...De,"start","finish","added","removed"],Ze=()=>!0;function Ue(e){const t={};return e.forEach(u=>{t[u]=Ze}),t}Ue(Le);const Ke=[!0,!1,"ondemand"],He={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ke.includes(e)}};function Qe(e,t){const{props:u,proxy:o}=K(),f=P(!1),h=P(null),v=P(null);Ie({validate:B,resetValidation:A});let S=0,p;const y=b(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),F=b(()=>u.disable!==!0&&y.value===!0),R=b(()=>u.error===!0||f.value===!0),M=b(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:h.value);T(()=>u.modelValue,()=>{N()}),T(()=>u.reactiveRules,O=>{O===!0?p===void 0&&(p=T(()=>u.rules,()=>{N(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),T(e,O=>{O===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,F.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&_())});function A(){S++,t.value=!1,v.value=null,f.value=!1,h.value=null,_.cancel()}function B(O=u.modelValue){if(F.value!==!0)return!0;const z=++S;t.value!==!0&&u.lazyRules!==!0&&(v.value=!0);const $=(q,a)=>{f.value!==q&&(f.value=q);const n=a||void 0;h.value!==n&&(h.value=n),t.value=!1},E=[];for(let q=0;q<u.rules.length;q++){const a=u.rules[q];let n;if(typeof a=="function"?n=a(O):typeof a=="string"&&se[a]!==void 0&&(n=se[a](O)),n===!1||typeof n=="string")return $(!0,n),!1;n!==!0&&n!==void 0&&E.push(n)}return E.length===0?($(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return z===S&&$(!1),!0;const a=q.find(n=>n===!1||typeof n=="string");return z===S&&$(a!==void 0,a),a===void 0},q=>(z===S&&(console.error(q),$(!0)),!1)))}function N(O){F.value===!0&&u.lazyRules!=="ondemand"&&(v.value===!0||u.lazyRules!==!0&&O!==!0)&&_()}const _=xe(B,0);return Y(()=>{p!==void 0&&p(),_.cancel()}),Object.assign(o,{resetValidation:A,validate:B}),Ce(o,"hasError",()=>R.value),{isDirtyModel:v,hasRules:y,hasError:R,errorMessage:M,validate:B,resetValidation:A}}const de=/^on[A-Z]/;function We(e,t){const u={listeners:P({}),attributes:P({})};function o(){const f={},h={};for(const v in e)v!=="class"&&v!=="style"&&de.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)de.test(v)===!0&&(h[v]=t.props[v]);u.attributes.value=f,u.listeners.value=h}return we(o),o(),u}let te=[],Je=[];function be(e){Je.length===0?e():te.push(e)}function Xe(e){te=te.filter(t=>t!==e)}function le(e){return e===void 0?`f_${ze()}`:e}function ae(e){return e!=null&&(""+e).length>0}const Ye={...$e,...He,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ge=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function et(){const{props:e,attrs:t,proxy:u,vnode:o}=K();return{isDark:Oe(e,u.$q),editable:b(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:P(!1),focused:P(!1),hasPopupOpen:!1,splitAttrs:We(t,o),targetUid:P(le(e.for)),rootRef:P(null),targetRef:P(null),controlRef:P(null)}}function tt(e){const{props:t,emit:u,slots:o,attrs:f,proxy:h}=K(),{$q:v}=h;let S;e.hasValue===void 0&&(e.hasValue=b(()=>ae(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:d}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:d,focus:n}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:p,hasRules:y,hasError:F,errorMessage:R,resetValidation:M}=Qe(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=b(()=>t.bottomSlots===!0||t.hint!==void 0||y.value===!0||t.counter===!0||t.error!==null),N=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),_=b(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(z.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(F.value===!0?" q-field--error":"")+(F.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),O=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(F.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),z=b(()=>t.labelSlot===!0||t.label!==void 0),$=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&F.value!==!0?` text-${t.labelColor}`:"")),E=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=b(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});T(()=>t.for,l=>{e.targetUid.value=le(l)});function a(){const l=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(l===null||l.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==l&&m.focus({preventScroll:!0}))}function n(){be(a)}function c(){Xe(a);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function s(l){clearTimeout(S),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function d(l,m){clearTimeout(S),S=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),m!==void 0&&m())})}function i(l){Se(l),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),U(()=>{M(),v.platform.is.mobile!==!0&&(p.value=!1)})}function x(){const l=[];return o.prepend!==void 0&&l.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:H},o.prepend())),l.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),F.value===!0&&t.noErrorIcon===!1&&l.push(I("error",[k(ne,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(I("inner-loading-append",o.loading!==void 0?o.loading():[k(Ee,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(I("inner-clearable-append",[k(ne,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),o.append!==void 0&&l.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:H},o.append())),e.getInnerAppend!==void 0&&l.push(I("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):o.rawControl!==void 0?l.push(o.rawControl()):o.control!==void 0&&l.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},o.control(E.value))),z.value===!0&&l.push(k("div",{class:$.value},Q(o.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(Q(o.default))}function w(){let l,m;F.value===!0?R.value!==null?(l=[k("div",{role:"alert"},R.value)],m=`q--slot-error-${R.value}`):(l=Q(o.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[k("div",t.hint)],m=`q--slot-hint-${t.hint}`):(l=Q(o.hint),m="q--slot-hint"));const r=t.counter===!0||o.counter!==void 0;if(t.hideBottomSpace===!0&&r===!1&&l===void 0)return;const C=k("div",{key:m,class:"q-field__messages col"},l);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?C:k(_e,{name:"q-transition--field-message"},()=>C),r===!0?k("div",{class:"q-field__counter"},o.counter!==void 0?o.counter():e.computedCounter.value):null])}function I(l,m){return m===null?null:k("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}Object.assign(h,{focus:n,blur:c});let D=!1;return Me(()=>{D=!0}),qe(()=>{D===!0&&t.autofocus===!0&&h.focus()}),ve(()=>{Re.value===!0&&t.for===void 0&&(e.targetUid.value=le()),t.autofocus===!0&&h.focus()}),Y(()=>{clearTimeout(S)}),function(){const m=e.getControl===void 0&&o.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...q.value}:q.value;return k("label",{ref:e.rootRef,class:[_.value,f.class],style:f.style,...m},[o.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:H},o.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:O.value,tabindex:-1,...e.controlEvents},x()),B.value===!0?w():null]),o.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:H},o.after()):null])}}const ce={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},X={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ke=Object.keys(X);ke.forEach(e=>{X[e].regex=new RegExp(X[e].pattern)});const lt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ke.join("")+"])|(.)","g"),fe=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),at={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function rt(e,t,u,o){let f,h,v,S;const p=P(null),y=P(R());function F(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}T(()=>e.type+e.autogrow,A),T(()=>e.mask,a=>{if(a!==void 0)B(y.value,!0);else{const n=E(y.value);A(),e.modelValue!==n&&t("update:modelValue",n)}}),T(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&B(y.value,!0)}),T(()=>e.unmaskedValue,()=>{p.value===!0&&B(y.value)});function R(){if(A(),p.value===!0){const a=z(E(e.modelValue));return e.fillMask!==!1?q(a):a}return e.modelValue}function M(a){if(a<f.length)return f.slice(-a);let n="",c=f;const s=c.indexOf(V);if(s>-1){for(let d=a-c.length;d>0;d--)n+=V;c=c.slice(0,s)+n+c.slice(s)}return c}function A(){if(p.value=e.mask!==void 0&&e.mask.length>0&&F(),p.value===!1){S=void 0,f="",h="";return}const a=ce[e.mask]===void 0?e.mask:ce[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",c=n.replace(fe,"\\$&"),s=[],d=[],i=[];let x=e.reverseFillMask===!0,g="",w="";a.replace(lt,(m,r,C,L,Z)=>{if(L!==void 0){const j=X[L];i.push(j),w=j.negate,x===!0&&(d.push("(?:"+w+"+)?("+j.pattern+"+)?(?:"+w+"+)?("+j.pattern+"+)?"),x=!1),d.push("(?:"+w+"+)?("+j.pattern+")?")}else if(C!==void 0)g="\\"+(C==="\\"?"":C),i.push(C),s.push("([^"+g+"]+)?"+g+"?");else{const j=r!==void 0?r:Z;g=j==="\\"?"\\\\\\\\":j.replace(fe,"\\\\$&"),i.push(j),s.push("([^"+g+"]+)?"+g+"?")}});const I=new RegExp("^"+s.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?$"),D=d.length-1,l=d.map((m,r)=>r===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+m):r===D?new RegExp("^"+m+"("+(w===""?".":w)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+m));v=i,S=m=>{const r=I.exec(m);r!==null&&(m=r.slice(1).join(""));const C=[],L=l.length;for(let Z=0,j=m;Z<L;Z++){const G=l[Z].exec(j);if(G===null)break;j=j.slice(G.shift().length),C.push(...G)}return C.length>0?C.join(""):m},f=i.map(m=>typeof m=="string"?m:V).join(""),h=f.split(V).join(n)}function B(a,n,c){const s=o.value,d=s.selectionEnd,i=s.value.length-d,x=E(a);n===!0&&A();const g=z(x),w=e.fillMask!==!1?q(g):g,I=y.value!==w;s.value!==w&&(s.value=w),I===!0&&(y.value=w),document.activeElement===s&&U(()=>{if(w===h){const l=e.reverseFillMask===!0?h.length:0;s.setSelectionRange(l,l,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const l=d-1;_.right(s,l,l);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const l=e.reverseFillMask===!0?d===0?w.length>g.length?1:0:Math.max(0,w.length-(w===h?0:Math.min(g.length,i)+1))+1:d;s.setSelectionRange(l,l,"forward");return}if(e.reverseFillMask===!0)if(I===!0){const l=Math.max(0,w.length-(w===h?0:Math.min(g.length,i+1)));l===1&&d===1?s.setSelectionRange(l,l,"forward"):_.rightReverse(s,l,l)}else{const l=w.length-i;s.setSelectionRange(l,l,"backward")}else if(I===!0){const l=Math.max(0,f.indexOf(V),Math.min(g.length,d)-1);_.right(s,l,l)}else{const l=d-1;_.right(s,l,l)}});const D=e.unmaskedValue===!0?E(w):w;String(e.modelValue)!==D&&u(D,!0)}function N(a,n,c){const s=z(E(a.value));n=Math.max(0,f.indexOf(V),Math.min(s.length,n)),a.setSelectionRange(n,c,"forward")}const _={left(a,n,c,s){const d=f.slice(n-1).indexOf(V)===-1;let i=Math.max(0,n-1);for(;i>=0;i--)if(f[i]===V){n=i,d===!0&&n++;break}if(i<0&&f[n]!==void 0&&f[n]!==V)return _.right(a,0,0);n>=0&&a.setSelectionRange(n,s===!0?c:n,"backward")},right(a,n,c,s){const d=a.value.length;let i=Math.min(d,c+1);for(;i<=d;i++)if(f[i]===V){c=i;break}else f[i-1]===V&&(c=i);if(i>d&&f[c-1]!==void 0&&f[c-1]!==V)return _.left(a,d,d);a.setSelectionRange(s?n:c,c,"forward")},leftReverse(a,n,c,s){const d=M(a.value.length);let i=Math.max(0,n-1);for(;i>=0;i--)if(d[i-1]===V){n=i;break}else if(d[i]===V&&(n=i,i===0))break;if(i<0&&d[n]!==void 0&&d[n]!==V)return _.rightReverse(a,0,0);n>=0&&a.setSelectionRange(n,s===!0?c:n,"backward")},rightReverse(a,n,c,s){const d=a.value.length,i=M(d),x=i.slice(0,c+1).indexOf(V)===-1;let g=Math.min(d,c+1);for(;g<=d;g++)if(i[g-1]===V){c=g,c>0&&x===!0&&c--;break}if(g>d&&i[c-1]!==void 0&&i[c-1]!==V)return _.leftReverse(a,d,d);a.setSelectionRange(s===!0?n:c,c,"forward")}};function O(a){if(Ve(a)===!0)return;const n=o.value,c=n.selectionStart,s=n.selectionEnd;if(a.keyCode===37||a.keyCode===39){const d=_[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),d(n,c,s,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&c===s?_.left(n,c,s,!0):a.keyCode===46&&e.reverseFillMask===!0&&c===s&&_.rightReverse(n,c,s,!0)}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return $(a);const n=v;let c=0,s="";for(let d=0;d<n.length;d++){const i=a[c],x=n[d];if(typeof x=="string")s+=x,i===x&&c++;else if(i!==void 0&&x.regex.test(i))s+=x.transform!==void 0?x.transform(i):i,c++;else return s}return s}function $(a){const n=v,c=f.indexOf(V);let s=a.length-1,d="";for(let i=n.length-1;i>=0&&s>-1;i--){const x=n[i];let g=a[s];if(typeof x=="string")d=x+d,g===x&&s--;else if(g!==void 0&&x.regex.test(g))do d=(x.transform!==void 0?x.transform(g):g)+d,s--,g=a[s];while(c===i&&g!==void 0&&x.regex.test(g));else return d}return d}function E(a){return typeof a!="string"||S===void 0?typeof a=="number"?S(""+a):a:S(a)}function q(a){return h.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?h.slice(0,-a.length)+a:a+h.slice(a.length)}return{innerValue:y,hasMask:p,moveCursorForPaste:N,updateMaskValue:B,onMaskedKeydown:O}}const nt={name:String};function ot(e){return b(()=>e.name||e.for)}function ut(e,t){function u(){const o=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(o)===o&&("length"in o?Array.from(o):[o]).forEach(h=>{f.items.add(h)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return u()}):b(u)}const it=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,st=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,dt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ct=/[a-z0-9_ -]$/i;function ft(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Fe.is.firefox===!0?ct.test(u.data)===!1:it.test(u.data)===!0||st.test(u.data)===!0||dt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var yt=me({name:"QInput",inheritAttrs:!1,props:{...Ye,...at,...nt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ge,"paste","change"],setup(e,{emit:t,attrs:u}){const o={};let f=NaN,h,v,S,p;const y=P(null),F=ot(e),{innerValue:R,hasMask:M,moveCursorForPaste:A,updateMaskValue:B,onMaskedKeydown:N}=rt(e,t,x,y),_=ut(e,!0),O=b(()=>ae(R.value)),z=ft(i),$=et(),E=b(()=>e.type==="textarea"||e.autogrow===!0),q=b(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),a=b(()=>{const r={...$.splitAttrs.listeners.value,onInput:i,onPaste:d,onChange:w,onBlur:I,onFocus:re};return r.onCompositionstart=r.onCompositionupdate=r.onCompositionend=z,M.value===!0&&(r.onKeydown=N),e.autogrow===!0&&(r.onAnimationend=g),r}),n=b(()=>{const r={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:F.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(r.type=e.type),e.autogrow===!0&&(r.rows=1),r});T(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),T(()=>e.modelValue,r=>{if(M.value===!0){if(v===!0&&(v=!1,String(r)===f))return;B(r)}else R.value!==r&&(R.value=r,e.type==="number"&&o.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete o.value));e.autogrow===!0&&U(g)}),T(()=>e.autogrow,r=>{r===!0?U(g):y.value!==null&&u.rows>0&&(y.value.style.height="auto")}),T(()=>e.dense,()=>{e.autogrow===!0&&U(g)});function c(){be(()=>{const r=document.activeElement;y.value!==null&&y.value!==r&&(r===null||r.id!==$.targetUid.value)&&y.value.focus({preventScroll:!0})})}function s(){y.value!==null&&y.value.select()}function d(r){if(M.value===!0&&e.reverseFillMask!==!0){const C=r.target;A(C,C.selectionStart,C.selectionEnd)}t("paste",r)}function i(r){if(!r||!r.target)return;if(e.type==="file"){t("update:modelValue",r.target.files);return}const C=r.target.value;if(r.target.qComposing===!0){o.value=C;return}if(M.value===!0)B(C,!1,r.inputType);else if(x(C),q.value===!0&&r.target===document.activeElement){const{selectionStart:L,selectionEnd:Z}=r.target;L!==void 0&&Z!==void 0&&U(()=>{r.target===document.activeElement&&C.indexOf(r.target.value)===0&&r.target.setSelectionRange(L,Z)})}e.autogrow===!0&&g()}function x(r,C){p=()=>{e.type!=="number"&&o.hasOwnProperty("value")===!0&&delete o.value,e.modelValue!==r&&f!==r&&(f=r,C===!0&&(v=!0),t("update:modelValue",r),U(()=>{f===r&&(f=NaN)})),p=void 0},e.type==="number"&&(h=!0,o.value=r),e.debounce!==void 0?(clearTimeout(S),o.value=r,S=setTimeout(p,e.debounce)):p()}function g(){const r=y.value;if(r!==null){const C=r.parentNode.style,{overflow:L}=r.style;C.marginBottom=r.scrollHeight-1+"px",r.style.height="1px",r.style.overflow="hidden",r.style.height=r.scrollHeight+"px",r.style.overflow=L,C.marginBottom=""}}function w(r){z(r),clearTimeout(S),p!==void 0&&p(),t("change",r.target.value)}function I(r){r!==void 0&&re(r),clearTimeout(S),p!==void 0&&p(),h=!1,v=!1,delete o.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=R.value!==void 0?R.value:"")})}function D(){return o.hasOwnProperty("value")===!0?o.value:R.value!==void 0?R.value:""}Y(()=>{I()}),ve(()=>{e.autogrow===!0&&g()}),Object.assign($,{innerValue:R,fieldClass:b(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:y,emitValue:x,hasValue:O,floatingLabel:b(()=>O.value===!0||ae(e.displayValue)),getControl:()=>k(E.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:D()}:_.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},D()),k("span",e.shadowText)])});const l=tt($),m=K();return Object.assign(m.proxy,{focus:c,select:s,getNativeElement:()=>y.value}),l}});export{yt as Q};