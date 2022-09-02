import{Q as _}from"./QCard.88c5b9c3.js";import{Q as g}from"./QItem.4a9565c1.js";import{Q as v}from"./QPage.e5fbbf15.js";import{r as m,o as y,q as p,E as b,D as e,aG as w,d as n,C as q,F as x,_ as k,p as C,B as S,t as h,x as d,l as T,z as t,ae as j}from"./index.93d6983e.js";import{Q as c}from"./QInput.22eaeaa7.js";import"./use-dark.d44dd802.js";import"./use-key-composition.d78708c5.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./use-form.851f5b58.js";const E={class:"container q-pa-sm q-ma-md"},V=["onSubmit"],N={class:"text-center q-pa-md full-width"},Q={__name:"UserContactDummy",setup(u){const s=m(),l=m(""),i=m("");y(()=>{console.log("this.onMounted")});function r(){if(console.log("send email..."),!s.value){alert("Please type a message.");return}alert("This is a test email from: "+l.value+" with message: "+s.value)}return(f,a)=>(p(),b(x,null,[e("div",E,[e("form",{ref:"form",onSubmit:w(r,["prevent"])},[n(c,{autogrow:"",type:"textarea",name:"message",label:"Message:",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=o=>s.value=o)},null,8,["modelValue"]),n(c,{id:"from_name",type:"text",label:"Your name: ",modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value=o),name:"from_name",placeholder:"Your Name"},null,8,["modelValue"]),n(c,{id:"reply_to",type:"email",label:"Your email address:",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=o=>i.value=o),name:"reply_to",placeholder:"Your email address"},null,8,["modelValue"])],40,V)]),e("div",N,[n(q,{class:"q-ml-md",label:"Send email",size:"md",icon:"fa fa-paper-plane",color:"green",onClick:r})])],64))}};const Y=C({name:"EmailSendingPage",components:{UserContactComp:Q},setup(){return{}}}),P=e("div",{class:"q-pa-md text-h5 text-bold"}," Email sending",-1),$=e("div",{class:"q-pt-sm"}," This article explains how to add a form to your app that will allow users to send an email with their comments or suggestions. ",-1),B=e("div",{class:"q-pt-sm text-subheader"}," Background ",-1),I=e("div",{class:"q-pt-sm"},[t(" As presented previously, you can extend the functionality of your app by adding libraries. We can add the "),e("b",null,"emailjs"),t(" library to send emails from our app and collect feedback from users. A free account with emailjs allows you to send/receive 200 emails per month. Beyond this you will need to sign up for a paid account. Please look at the "),e("a",{href:"https://www.emailjs.com/"},"emaijs"),t(" webpage for other options such as adding a captcha to prevent spam. I recommend that you "),e("a",{href:"https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp",target:"_blank",rel:"noopener noreferrer"}," create a gmail account"),t(" to use specifically for the email sender. ")],-1),M=e("div",{class:"q-pt-sm"}," Note that this exercise is focused on the app. You should look at the instructions on the emailjs website explaining how to create and test a template, connect your email account etc. ",-1),U=e("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),z=e("div",{class:"q-pt-sm text-subheader"},[t(" 1. Install the "),e("b",null,"emailjs"),t(" library ")],-1),A=e("div",{class:"q-pt-sm"},` For this task you need to use the terminal again. Type "control c" (press the 'control' and 'c' keys at the same time) to exit the Quasar development environment. Then install the library by entering the following command: `,-1),F=e("pre",null,"npm install @emailjs/browser --save",-1),D=e("div",{class:"q-pt-sm"}," Assuming there are no errors, the library is now installed so relaunch the Quasar development environment by typing 'quasar dev' ",-1),G=e("div",{class:"q-pt-md text-subheader"}," 2. Import and customize the library ",-1),W=e("div",{class:"q-pt-sm"},[t(" After adding the library to your project, you have to add it to the page or component in the script section. If the file doesn't have a script section, add one like this: "),e("pre",null,`    <script setup>
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
  `)],-1),R=e("div",{class:"q-pt-md text-subheader"}," 3. Modify the template to display the user entry fields ",-1),H=e("div",{class:"q-pt-sm"},[t(" In the "),e("b",null,"template"),t(" section of your page or component, add the presentation (html) code below. This is a simple html form with three fields (message, from_name and reply_to email address ) and a 'Send' button. Study it so you can get an idea of how the email js code submits each field. (The name of each field is used in the template you create on the emailjs website.) ")],-1),J=e("pre",null,`  <div class="container q-pa-sm q-ma-md">
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
`,-1),K={class:"q-pt-sm"},L=t(" This will display like this: "),O=t(` You can't send an email with this form but to see how it works, click the "Send Feedback" menu in the side menu. `),X={class:"row text-subheader q-pt-sm"},Z=t(" Previous ");function ee(u,s,l,i,r,f){const a=S("UserContactComp");return p(),h(v,{class:"flex-center q-pa-md"},{default:d(()=>[P,e("div",null,[n(_,{flat:"",class:"q-pa-md"},{default:d(()=>[$,B,I,M,U,z,A,F,D,G,W,R,H,J,e("div",K,[L,n(a),O])]),_:1}),e("div",X,[T((p(),h(g,{class:"col",clickable:"",to:"startprogramming",onClick:s[0]||(s[0]=o=>u.link="startprogramming")},{default:d(()=>[Z]),_:1})),[[j]])])])]),_:1})}var ce=k(Y,[["render",ee]]);export{ce as default};
