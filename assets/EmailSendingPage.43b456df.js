import{Q as f}from"./QCard.e5cf0a39.js";import{Q as g}from"./QItem.acc1828e.js";import{Q as v}from"./QPage.5f3fd23d.js";import{R as y}from"./use-router-link.383b28db.js";import{Q as d}from"./QInput.286adb4b.js";import{a as b}from"./QBtn.ab82839f.js";import{r as m,o as w,L as p,V as x,U as e,a2 as k,d as n,F as q,_ as C,K as V,M as h,N as c,S as Q,q as S,Q as t}from"./index.74cda128.js";import"./use-dark.3aba77a5.js";import"./QSpinner.b7cf0ab8.js";import"./format.e5fda044.js";const j={class:"container q-pa-sm q-ma-md",style:{"background-color":"linen"}},T=["onSubmit"],U={class:"text-center q-pa-md full-width"},$={__name:"UserContactDummy",setup(u){const o=m(),i=m(""),l=m("");w(()=>{console.log("this.onMounted")});function r(){if(console.log("send email..."),!o.value){alert("Please type a message.");return}alert("This is a test email from: "+i.value+" with message: "+o.value)}return(_,a)=>(p(),x(q,null,[e("div",j,[e("form",{ref:"form",onSubmit:k(r,["prevent"])},[n(d,{autogrow:"",type:"textarea",name:"message",label:"Message:",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s)},null,8,["modelValue"]),n(d,{id:"from_name",type:"text",label:"Your name: ",modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=s=>i.value=s),name:"from_name",placeholder:"Your Name"},null,8,["modelValue"]),n(d,{id:"reply_to",type:"email",label:"Your email address:",modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=s=>l.value=s),name:"reply_to",placeholder:"Your email address"},null,8,["modelValue"])],40,T)]),e("div",U,[n(b,{class:"q-ml-md",label:"Send email",size:"md",icon:"fas fa-copy",color:"green",onClick:r})])],64))}};const E=V({name:"EmailSendingPage",components:{UserContactComp:$},setup(){return{}}}),I=e("div",{class:"q-pa-md text-h5 text-bold"}," Email sending",-1),N=e("div",{class:"q-pt-sm"}," This article explains how to add a form to your app that will allow users to send an email with their comments or suggestions. ",-1),P=e("div",{class:"q-pt-sm text-subheader"}," Background ",-1),B=e("div",{class:"q-pt-sm"},[t(" As presented previously, you can extend the functionality of your app by adding libraries. We can add the "),e("b",null,"emailjs"),t(" library to send emails from our app and collect feedback from users. A free account with emailjs allows you to send/receive 200 emails per month. Beyond this you will need to sign up for a paid account. Please look at the "),e("a",{href:"https://www.emailjs.com/"},"emaijs"),t(" webpage for other options such as adding a captcha to prevent spam. I recommend that you "),e("a",{href:"https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp",target:"_blank",rel:"noopener noreferrer"}," create a gmail account"),t(" to use specifically for the email sender. ")],-1),M=e("div",{class:"q-pt-sm"}," Note that this exercise is focused on the app. You should look at the instructions on the emailjs website explaining how to create and test a template, connect your email account etc. ",-1),Y=e("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),A=e("div",{class:"q-pt-sm text-subheader"},[t(" 1. Install the "),e("b",null,"emailjs"),t(" library ")],-1),F=e("div",{class:"q-pt-sm"},[t(` For this task you need to use the terminal again. Type "control c" (press the 'control' key and 'c' key at the same time) to exit the Quasar development environment. Then install the library by entering the following command: `),e("div",{class:"q-pa-sm"},[e("b",null," npm install @emailjs/browser --save ")]),t(" Assuming there are no errors, the library is now installed so relaunch the Quasar development environment by typing 'quasar dev' ")],-1),z=e("div",{class:"q-pt-md text-subheader"}," 2. Import and customise the library ",-1),D=e("div",{class:"q-pt-sm"}," After adding the library to your project, you have to add it to the page or component in the script section. If the file doesn't have a script section, add one like this: ",-1),R=e("div",{class:"q-pt-md text-subheader"}," 3. Modify the template to display the entry fields ",-1),W=e("div",{class:"q-px-sm"},[t(" In the "),e("b",null,"template"),t(" section of your page or component, add the presentation (html) code below. This is a simple html form. Study it so you can get an idea of how the email js code submits each field (using the name as a tag). ")],-1),G={class:"q-pt-sm"},K=t(" This will display like this: "),L=t(` You can't send an email with this form but to see how it works, click the "Send Feedback" menu in the side menu. `),H={class:"row text-subheader q-pt-sm"},J=t(" Previous ");function O(u,o,i,l,r,_){const a=Q("UserContactComp");return p(),h(v,{class:"flex-center q-pa-md"},{default:c(()=>[I,e("div",null,[n(f,{flat:"",class:"q-pa-md"},{default:c(()=>[N,P,B,M,Y,A,F,z,D,R,W,e("div",G,[K,n(a),L])]),_:1}),e("div",H,[S((p(),h(g,{class:"col",clickable:"",to:"startprogramming",onClick:o[0]||(o[0]=s=>u.link="startprogramming")},{default:c(()=>[J]),_:1})),[[y]])])])]),_:1})}var re=C(E,[["render",O]]);export{re as default};
