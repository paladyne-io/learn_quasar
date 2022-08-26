import{Q as _}from"./QCard.ca82f2fe.js";import{Q as g}from"./QItem.87795a80.js";import{Q as v}from"./QPage.dc878fe2.js";import{R as y}from"./use-router-link.c6998c77.js";import{Q as m}from"./QInput.784d044a.js";import{Q as b}from"./QBtn.2602dc31.js";import{r as d,o as w,n as p,A as q,z as e,am as x,d as n,F as k,_ as C,m as S,p as h,q as c,y as T,k as j,u as t}from"./index.2cb900a2.js";import"./use-dark.fdf330d5.js";import"./render.89c73a8b.js";import"./use-key-composition.1ebc182e.js";import"./QIcon.98fbb88b.js";import"./use-size.ccee50a5.js";import"./QSpinner.bf66351e.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./use-form.25ebc042.js";const Q={class:"container q-pa-sm q-ma-md"},V=["onSubmit"],E={class:"text-center q-pa-md full-width"},N={__name:"UserContactDummy",setup(u){const s=d(),l=d(""),i=d("");w(()=>{console.log("this.onMounted")});function r(){if(console.log("send email..."),!s.value){alert("Please type a message.");return}alert("This is a test email from: "+l.value+" with message: "+s.value)}return(f,a)=>(p(),q(k,null,[e("div",Q,[e("form",{ref:"form",onSubmit:x(r,["prevent"])},[n(m,{autogrow:"",type:"textarea",name:"message",label:"Message:",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=o=>s.value=o)},null,8,["modelValue"]),n(m,{id:"from_name",type:"text",label:"Your name: ",modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value=o),name:"from_name",placeholder:"Your Name"},null,8,["modelValue"]),n(m,{id:"reply_to",type:"email",label:"Your email address:",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=o=>i.value=o),name:"reply_to",placeholder:"Your email address"},null,8,["modelValue"])],40,V)]),e("div",E,[n(b,{class:"q-ml-md",label:"Send email",size:"md",icon:"fa fa-paper-plane",color:"green",onClick:r})])],64))}};const Y=S({name:"EmailSendingPage",components:{UserContactComp:N},setup(){return{}}}),P=e("div",{class:"q-pa-md text-h5 text-bold"}," Email sending",-1),$=e("div",{class:"q-pt-sm"}," This article explains how to add a form to your app that will allow users to send an email with their comments or suggestions. ",-1),I=e("div",{class:"q-pt-sm text-subheader"}," Background ",-1),M=e("div",{class:"q-pt-sm"},[t(" As presented previously, you can extend the functionality of your app by adding libraries. We can add the "),e("b",null,"emailjs"),t(" library to send emails from our app and collect feedback from users. A free account with emailjs allows you to send/receive 200 emails per month. Beyond this you will need to sign up for a paid account. Please look at the "),e("a",{href:"https://www.emailjs.com/"},"emaijs"),t(" webpage for other options such as adding a captcha to prevent spam. I recommend that you "),e("a",{href:"https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp",target:"_blank",rel:"noopener noreferrer"}," create a gmail account"),t(" to use specifically for the email sender. ")],-1),U=e("div",{class:"q-pt-sm"}," Note that this exercise is focused on the app. You should look at the instructions on the emailjs website explaining how to create and test a template, connect your email account etc. ",-1),B=e("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),z=e("div",{class:"q-pt-sm text-subheader"},[t(" 1. Install the "),e("b",null,"emailjs"),t(" library ")],-1),A=e("div",{class:"q-pt-sm"},` For this task you need to use the terminal again. Type "control c" (press the 'control' and 'c' keys at the same time) to exit the Quasar development environment. Then install the library by entering the following command: `,-1),F=e("pre",null,"npm install @emailjs/browser --save",-1),D=e("div",{class:"q-pt-sm"}," Assuming there are no errors, the library is now installed so relaunch the Quasar development environment by typing 'quasar dev' ",-1),R=e("div",{class:"q-pt-md text-subheader"}," 2. Import and customize the library ",-1),W=e("div",{class:"q-pt-sm"},[t(" After adding the library to your project, you have to add it to the page or component in the script section. If the file doesn't have a script section, add one like this: "),e("pre",null,`    <script setup>
      import { ref } from 'vue'
      import emailjs from '@emailjs/browser'

      const message = ref()
      const fromName = ref('')
      const replyTo = ref('')

      function sendEmail () {
        console.log('send email...')
        if (!message.value) {
          alert('Please type a message.')
          return
        }
        alert('This is a test email from: ' + fromName.value + ' with message: ' + message.value)
      }
    <\/script>
  `)],-1),G=e("div",{class:"q-pt-md text-subheader"}," 3. Modify the template to display the user entry fields ",-1),H=e("div",{class:"q-pt-sm"},[t(" In the "),e("b",null,"template"),t(" section of your page or component, add the presentation (html) code below. This is a simple html form with three fields (message, from_name and reply_to email address ) and a 'Send' button. Study it so you can get an idea of how the email js code submits each field. (The name of each field is used in the template you create on the emailjs website.) ")],-1),J=e("pre",null,`  <div class="container q-pa-sm q-ma-md">
    <form ref="form" @submit.prevent="sendEmail">
         <q-input
          autogrow
          type="textarea"
          name="message"
          label="Message:"
          v-model="newMessage"
        />
        <q-input
          id="from_name"
          type="text"
          label="Your name: "
          v-model="fromName"
          name="from_name"
          placeholder="Your Name"
        />
        <q-input
          id="reply_to"
          type="email"
          label="Your email address:"
          v-model="replyTo"
          name="reply_to"
          placeholder="Your email address"
          />
    </form>
  </div>
  <div class="text-center q-pa-md full-width">
     <q-btn
      class="q-ml-md"
      label="Send email"
      size="md"
      icon="fa fa-paper-plane"
      color="green"
      @click="sendEmail"
    />
  </div>
`,-1),K={class:"q-pt-sm"},L=t(" This will display like this: "),O=t(` You can't send an email with this form but to see how it works, click the "Send Feedback" menu in the side menu. `),X={class:"row text-subheader q-pt-sm"},Z=t(" Previous ");function ee(u,s,l,i,r,f){const a=T("UserContactComp");return p(),h(v,{class:"flex-center q-pa-md"},{default:c(()=>[P,e("div",null,[n(_,{flat:"",class:"q-pa-md"},{default:c(()=>[$,I,M,U,B,z,A,F,D,R,W,G,H,J,e("div",K,[L,n(a),O])]),_:1}),e("div",X,[j((p(),h(g,{class:"col",clickable:"",to:"startprogramming",onClick:s[0]||(s[0]=o=>u.link="startprogramming")},{default:c(()=>[Z]),_:1})),[[y]])])])]),_:1})}var ge=C(Y,[["render",ee]]);export{ge as default};
