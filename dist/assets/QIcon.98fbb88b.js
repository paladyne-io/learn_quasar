import{a as _,u as S}from"./use-size.ccee50a5.js";import{c as M,h as j,a}from"./render.89c73a8b.js";import{c as g,h as i,g as k}from"./index.2cb900a2.js";const v="0 0 24 24",d=t=>t,m=t=>`ionicons ${t}`,p={"mdi-":t=>`mdi ${t}`,"icon-":d,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":m,"ion-ios":m,"ion-logo":m,"iconfont ":d,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},b={o_:"-outlined",r_:"-round",s_:"-sharp"},y={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},F=new RegExp("^("+Object.keys(p).join("|")+")"),z=new RegExp("^("+Object.keys(b).join("|")+")"),h=new RegExp("^("+Object.keys(y).join("|")+")"),I=/^[Mm]\s?[-+]?\.?\d/,O=/^img:/,Q=/^svguse:/,q=/^ion-/,C=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var A=M({name:"QIcon",props:{..._,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:r}){const{proxy:{$q:u}}=k(),x=S(t),E=g(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),o=g(()=>{let s,e=t.name;if(e==="none"||!e)return{none:!0};if(u.iconMapFn!==null){const n=u.iconMapFn(e);if(n!==void 0)if(n.icon!==void 0){if(e=n.icon,e==="none"||!e)return{none:!0}}else return{cls:n.cls,content:n.content!==void 0?n.content:" "}}if(I.test(e)===!0){const[n,l=v]=e.split("|");return{svg:!0,viewBox:l,nodes:n.split("&&").map(R=>{const[w,$,B]=R.split("@@");return i("path",{style:$,d:w,transform:B})})}}if(O.test(e)===!0)return{img:!0,src:e.substring(4)};if(Q.test(e)===!0){const[n,l=v]=e.split("|");return{svguse:!0,src:n.substring(7),viewBox:l}}let c=" ";const f=e.match(F);if(f!==null)s=p[f[1]](e);else if(C.test(e)===!0)s=e;else if(q.test(e)===!0)s=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${e.substring(3)}`;else if(h.test(e)===!0){s="notranslate material-symbols";const n=e.match(h);n!==null&&(e=e.substring(6),s+=y[n[1]]),c=e}else{s="notranslate material-icons";const n=e.match(z);n!==null&&(e=e.substring(2),s+=b[n[1]]),c=e}return{cls:s,content:c}});return()=>{const s={class:E.value,style:x.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?i(t.tag,s,j(r.default)):o.value.img===!0?i("span",s,a(r.default,[i("img",{src:o.value.src})])):o.value.svg===!0?i("span",s,a(r.default,[i("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?i("span",s,a(r.default,[i("svg",{viewBox:o.value.viewBox},[i("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),i(t.tag,s,a(r.default,[o.value.content])))}}});export{A as Q};
