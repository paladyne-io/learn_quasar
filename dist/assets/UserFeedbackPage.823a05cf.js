import{Q as c}from"./QInput.5bb4ddef.js";import{f as g,r as d,_ as f,i as _,y,x as l,aF as v,l as p,q as w,F as I,j as C,p as S}from"./index.b3183231.js";import"./use-key-composition.41d249e4.js";import"./use-dark.aace1c71.js";import"./uid.42677368.js";import"./use-form.2288ae7a.js";const i={_origin:"https://api.emailjs.com"},b=(s,e="https://api.emailjs.com")=>{i._userID=s,i._origin=e},E=(s,e,o)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const h=(s,e,o={})=>new Promise((n,r)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:t})=>{const m=new u(t);m.status===200||m.text==="OK"?n(m):r(m)}),a.addEventListener("error",({target:t})=>{r(new u(t))}),a.open("POST",i._origin+s,!0),Object.keys(o).forEach(t=>{a.setRequestHeader(t,o[t])}),a.send(e)}),M=(s,e,o,n)=>{const r=n||i._userID;E(r,s,e);const a={lib_version:"3.10.0",user_id:r,service_id:s,template_id:e,template_params:o};return h("/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})},P=s=>{let e;if(typeof s=="string"?e=document.querySelector(s):e=s,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},L=(s,e,o,n)=>{const r=n||i._userID,a=P(o);E(r,s,e);const t=new FormData(a);return t.append("lib_version","3.10.0"),t.append("service_id",s),t.append("template_id",e),t.append("user_id",r),h("/api/v1.0/email/send-form",t)};var V={init:b,send:M,sendForm:L};const T=g({name:"UserContactComponent",setup(){const s=d(),e=d(""),o=d("");return{templateParams:d({from_name:e,message:s,reply_to:o}),newMessage:s,fromName:e,replyTo:o}},methods:{sendEmail(){if(!{}.EMAILJS_PUBLIC_KEY||!{}.EMAILJS_SERVICE_ID||!{}.EMAILJS_TEMPLATE_ID){console.log("Error. One or more email service parameters was not supplied."),alert("Error. One or more email service parameters were not supplied.");return}if(!this.templateParams.message){console.log("Error. No message."),alert("Please type a message.");return}if(!this.templateParams.reply_to){console.log("Error. No reply_to email address."),alert("Please type your email address.");return}V.send({}.EMAILJS_SERVICE_ID,{}.EMAILJS_TEMPLATE_ID,this.templateParams,{}.EMAILJS_PUBLIC_KEY).then(s=>{console.log("SUCCESS!",s.text),alert("Email sent")},s=>{console.log("FAILED...",s.text)})}}}),q=l("div",{"no-border":"",class:"q-pa-md",style:{"min-width":"320px"}},[l("div",{class:"q-pa-sm font-semibold"}," If you have any requests or suggestions, please email darren@paladyne.co.jp or fill out the form below. I appreciate your input and will respond to every well-intentioned message. ")],-1),F={class:"container q-pa-sm q-ma-md"},U={class:"field"},N={class:"field"},D={class:"field"},$={class:"text-center q-pa-md full-width"};function j(s,e,o,n,r,a){return _(),y(I,null,[q,l("div",F,[l("form",{ref:"form",onSubmit:e[3]||(e[3]=v((...t)=>s.sendEmail&&s.sendEmail(...t),["prevent"]))},[l("div",U,[p(c,{autogrow:"",type:"textarea",name:"message",label:"Message:",modelValue:s.newMessage,"onUpdate:modelValue":e[0]||(e[0]=t=>s.newMessage=t)},null,8,["modelValue"])]),l("div",N,[p(c,{id:"from_name",type:"text",label:"Your name: ",modelValue:s.fromName,"onUpdate:modelValue":e[1]||(e[1]=t=>s.fromName=t),name:"from_name",placeholder:"Your Name"},null,8,["modelValue"])]),l("div",D,[p(c,{id:"reply_to",type:"email",label:"Your email address:",modelValue:s.replyTo,"onUpdate:modelValue":e[2]||(e[2]=t=>s.replyTo=t),name:"reply_to",placeholder:"Your email address"},null,8,["modelValue"])])],544)]),l("div",$,[p(w,{class:"q-ml-md",label:"Send email",size:"md",icon:"fa fa-paper-plane",color:"green",onClick:s.sendEmail},null,8,["onClick"])])],64)}var k=f(T,[["render",j]]);const A={name:"UserFeedbackPage",components:{UserContactComp:k}};function J(s,e,o,n,r,a){const t=S("UserContactComp");return _(),C(t)}var Q=f(A,[["render",J]]);export{Q as default};