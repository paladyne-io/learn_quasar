import{Q as y}from"./QCard.f961563c.js";import{Q as f}from"./QItem.78e188f6.js";import{Q as b}from"./QPage.a70fc1e0.js";import{r as p,o as w,q as r,E as q,D as e,aG as x,d as n,C as k,F as C,_ as S,p as T,B as j,t as u,x as i,l as _,z as t,ae as v}from"./index.5e050ce2.js";import{Q as h}from"./QInput.b4cd9e91.js";import"./use-dark.baa9f6ef.js";import"./use-key-composition.f5ba70e5.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./use-form.f972d811.js";const E={class:"container q-pa-sm q-ma-md"},N=["onSubmit"],V={class:"text-center q-pa-md full-width"},Q={__name:"UserContactDummy",setup(m){const a=p(),l=p(""),d=p("");w(()=>{console.log("this.onMounted")});function c(){if(console.log("send email..."),!a.value){alert("Please type a message.");return}alert("This is a test email from: "+l.value+" with message: "+a.value)}return(g,s)=>(r(),q(C,null,[e("div",E,[e("form",{ref:"form",onSubmit:x(c,["prevent"])},[n(h,{autogrow:"",type:"textarea",name:"message",label:"Message:",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=o=>a.value=o)},null,8,["modelValue"]),n(h,{id:"from_name",type:"text",label:"Your name: ",modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=o=>l.value=o),name:"from_name",placeholder:"Your Name"},null,8,["modelValue"]),n(h,{id:"reply_to",type:"email",label:"Your email address:",modelValue:d.value,"onUpdate:modelValue":s[2]||(s[2]=o=>d.value=o),name:"reply_to",placeholder:"Your email address"},null,8,["modelValue"])],40,N)]),e("div",V,[n(k,{class:"q-ml-md",label:"Send email",size:"md",icon:"fa fa-paper-plane",color:"green",onClick:c})])],64))}};const Y=T({name:"EmailSendingPage",components:{UserContactComp:Q},setup(){return{}}}),$=e("div",{class:"q-pa-md text-h5 text-bold"}," Email sending",-1),B=e("div",{class:"q-pt-sm"}," This article explains how to add a form to your app that will allow users to send an email with their comments or suggestions. ",-1),P=e("div",{class:"q-pt-sm text-subheader"}," Background ",-1),I=e("div",{class:"q-pt-sm"},[t(" As presented previously, you can extend the functionality of your app by adding libraries. We can add the "),e("b",null,"emailjs"),t(" library to send emails from our app and collect feedback from users. A free account with emailjs allows you to send/receive 200 emails per month. Beyond this you will need to sign up for a paid account. Please look at the "),e("a",{href:"https://www.emailjs.com/"},"emaijs"),t(" webpage for other options such as adding a captcha to prevent spam. I recommend that you "),e("a",{href:"https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp",target:"_blank",rel:"noopener noreferrer"}," create a gmail account"),t(" to use specifically for the email sender. ")],-1),M=e("div",{class:"q-pt-sm"}," Note that this exercise is focused on the app. You should look at the instructions on the emailjs website explaining how to create and test a template, connect your email account etc. ",-1),U=e("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),z=e("div",{class:"q-pt-sm text-subheader"},[t(" 1. Install the "),e("b",null,"emailjs"),t(" library ")],-1),A=e("div",{class:"q-pt-sm"},` For this task you need to use the terminal again. Type "control c" (press the 'control' and 'c' keys at the same time) to exit the Quasar development environment. Then install the library by entering the following command: `,-1),F=e("pre",null,"npm install @emailjs/browser --save",-1),D=e("div",{class:"q-pt-sm"}," Assuming there are no errors, the library is now installed so relaunch the Quasar development environment by typing 'quasar dev' ",-1),G=e("div",{class:"q-pt-md text-subheader"}," 2. Import and customize the library ",-1),W=e("div",{class:"q-pt-sm"},[t(" After adding the library to your project, you have to add it to the page or component in the script section. If the file doesn't have a script section, add one like this: "),e("pre",null,`    <script setup>
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
  `)],-1),R=e("div",{class:"q-pt-md text-subheader"}," 3. Modify the template to display the user entry fields ",-1),H=e("div",{class:"q-pt-sm"},[t(" In the "),e("b",null,"template"),t(" section of your page or component, add the presentation (html) code below. This is a simple html form with three fields (message, from_name and reply_to email address) and a 'Send' button. Study it so you can get an idea of how the email js code submits each field. (The name of each field is used in the template you create on the emailjs website.) ")],-1),J=e("pre",null,`  <div class="container q-pa-sm q-ma-md">
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
`,-1),K={class:"q-pt-sm"},L=t(" This will display like this: "),O=t(` You can't send an email with this form but to see how it works, click the "Send Feedback" menu in the side menu. `),X={class:"row text-subheader q-pt-sm"},Z=t(" Previous: Add an image slider "),ee=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Build a simple app ",-1);function te(m,a,l,d,c,g){const s=j("UserContactComp");return r(),u(b,{class:"flex-center q-pa-md"},{default:i(()=>[$,e("div",null,[n(y,{flat:"",class:"q-pa-md"},{default:i(()=>[B,P,I,M,U,z,A,F,D,G,W,R,H,J,e("div",K,[L,n(s),O])]),_:1}),e("div",X,[_((r(),u(f,{class:"col",clickable:"",to:"images",onClick:a[0]||(a[0]=o=>m.link="images")},{default:i(()=>[Z]),_:1})),[[v]]),_((r(),u(f,{class:"col",clickable:"",to:"dummyapp/",onClick:a[1]||(a[1]=o=>m.link="/dummyapp/")},{default:i(()=>[ee]),_:1})),[[v]])])])]),_:1})}var pe=S(Y,[["render",te]]);export{pe as default};
