import{r as m,I as _,i as u,y as g,x as e,aF as v,l as a,q as c,F as y,_ as b,f as w,j as q,k as p,p as x,n as t}from"./index.b3183231.js";import{Q as k}from"./QSpace.fe98a9c4.js";import{Q as S}from"./QCard.cf6a3650.js";import{Q as j}from"./QPage.1e4de2e9.js";import{Q as d}from"./QInput.5bb4ddef.js";import"./use-dark.aace1c71.js";import"./use-key-composition.41d249e4.js";import"./uid.42677368.js";import"./use-form.2288ae7a.js";const T={class:"container q-pa-sm q-ma-md"},C=["onSubmit"],N={class:"text-center q-pa-md full-width"},V={__name:"UserContactDummy",setup(h){const o=m(),l=m(""),i=m("");_(()=>{console.log("this.onMounted")});function r(){if(console.log("send email..."),!o.value){alert("Please type a message.");return}alert("This is a test email from: "+l.value+" with message: "+o.value)}return(f,s)=>(u(),g(y,null,[e("div",T,[e("form",{ref:"form",onSubmit:v(r,["prevent"])},[a(d,{autogrow:"",type:"textarea",name:"message",label:"Message:",modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=n=>o.value=n)},null,8,["modelValue"]),a(d,{id:"from_name",type:"text",label:"Your name: ",modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=n=>l.value=n),name:"from_name",placeholder:"Your Name"},null,8,["modelValue"]),a(d,{id:"reply_to",type:"email",label:"Your email address:",modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=n=>i.value=n),name:"reply_to",placeholder:"Your email address"},null,8,["modelValue"])],40,C)]),e("div",N,[a(c,{class:"q-ml-md",label:"Send email",size:"md",icon:"fa fa-paper-plane",color:"green",onClick:r})])],64))}};const E=w({name:"EmailSendingPage",components:{UserContactComp:V},setup(){return{}}}),Q=e("div",{class:"q-pa-md text-h5 header"}," Email sending",-1),Y=e("div",{class:"q-pt-sm"}," This article explains how to add a form to your app that will allow users to send an email with their comments or suggestions. ",-1),P=e("div",{class:"q-pt-sm text-subheader"}," Background ",-1),B=e("div",{class:"q-pt-sm"},[t(" As presented previously, you can extend the functionality of your app by adding libraries. We can add the "),e("b",null,"emailjs"),t(" library to send emails from our app and collect feedback from users. A free account with emailjs allows you to send/receive 200 emails per month. Beyond this you will need to sign up for a paid account. Please look at the "),e("a",{href:"https://www.emailjs.com/"},"emaijs"),t(" webpage for other options such as adding a captcha to prevent spam. I recommend that you "),e("a",{href:"https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp",target:"_blank",rel:"noopener noreferrer"}," create a gmail account"),t(" to use specifically for the email sender. ")],-1),I=e("div",{class:"q-pt-sm"}," Note that this exercise is focused on the app. You should look at the instructions on the emailjs website explaining how to create and test a template, connect your email account etc. ",-1),M=e("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),U=e("div",{class:"q-pt-sm text-subheader"},[t(" 1. Install the "),e("b",null,"emailjs"),t(" library ")],-1),$=e("div",{class:"q-pt-sm"},` For this task, you need to use the terminal again. Type "control c" (press the 'control' and 'c' keys at the same time) to exit the Quasar development environment. Then install the library by entering the following command: `,-1),F=e("pre",null,"npm install @emailjs/browser --save",-1),A=e("div",{class:"q-pt-sm"}," Assuming there are no errors, the library is now installed so relaunch the Quasar development environment by typing 'quasar dev' ",-1),z=e("div",{class:"q-pt-md text-subheader"}," 2. Import and customize the library ",-1),W=e("div",{class:"q-pt-sm"},[t(" After adding the library to your project, you have to add it to the page or component in the script section. If the file doesn't have a script section, add one like this: "),e("pre",null,`  <script setup>
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
        alert('This is a test email from: ' + fromName.value +
        ' with message: ' + message.value)
    }
  <\/script>
`)],-1),D=e("div",{class:"q-pt-md text-subheader"}," 3. Modify the template to display the user entry fields ",-1),G=e("div",{class:"q-pt-sm"},[t(" In the "),e("b",null,"template"),t(" section of your page or component, add the presentation (html) code below. This is a simple html form with three fields (message, from_name and reply_to email address) and a 'Send' button. Study it so you can get an idea of how the email js code submits each field. (The name of each field is used in the template you create on the emailjs website.) ")],-1),H=e("pre",null,`  <div class="container q-pa-sm q-ma-md">
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
`,-1),J={class:"q-pt-sm"},K={class:"row full-width text-subheader q-pt-sm"};function L(h,o,l,i,r,f){const s=x("UserContactComp");return u(),q(j,{class:"flex-center q-pa-md"},{default:p(()=>[Q,e("div",null,[a(S,{flat:"",class:"q-pa-md"},{default:p(()=>[Y,P,B,I,M,U,$,F,A,z,W,D,G,H,e("div",J,[t(" This will display like this: "),a(s),t(` You can't send an email with this form but to see how it works, click the "Send Feedback" menu in the side menu. `)]),e("div",K,[a(c,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"images"}),a(k),a(c,{outline:"",style:{color:"goldenrod","text-align":"right"},label:"Next: Build an app",to:"/dummyapp/"})])]),_:1})])]),_:1})}var ne=b(E,[["render",L]]);export{ne as default};
