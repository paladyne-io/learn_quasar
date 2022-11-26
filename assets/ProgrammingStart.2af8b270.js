import{Q as d}from"./QImg.caad16fa.js";import{Q as s}from"./QItemLabel.9594c0b6.js";import{_ as c,f as p,i as u,j as h,k as a,p as n,l as o,x as e,n as t,q as r}from"./index.7a166512.js";import{Q as m}from"./QSpace.f505bcbe.js";import{Q as _}from"./QCard.3b264e6e.js";import{Q as f}from"./QPage.d61366b6.js";import{S as g}from"./SubHeaderComponentDA.c368c96b.js";import{c as y}from"./copy-to-clipboard.7a0543b4.js";import"./use-dark.172d2369.js";import"./use-quasar.2822c877.js";const b=p({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:g}});y("some text").then(()=>{}).catch(()=>{});const w=e("div",{class:"q-pa-md text-h5 header"},"Getting started with Quasar",-1),v=e("div",{class:"q-pt-sm"}," The goal for this lesson is to get to this: ",-1),q=e("div",{class:"q-pt-sm"}," This is the order of tasks. ",-1),k={class:"q-pt-sm"},S=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),P=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),Q=e("b",null,"LTS",-1),C=e("b",null,"Install Quasar CLI",-1),x=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),I=e("br",null,null,-1),T=e("br",null,null,-1),j=e("a",{href:"/vscodeterminal"},"Click here for details",-1),A=e("br",null,null,-1),Y=e("br",null,null,-1),V=e("b",null,"Return",-1),L=e("b",null,"Enter",-1),$=e("pre",null,[t(""),e("span",{class:"disable-select"},"$ "),t(`npm i -g @quasar/cli
`),e("span",{class:"disable-select"},"or"),t(`
`),e("span",{class:"disable-select"},"$ "),t(`yarn global add @quasar/cli
`)],-1),M=e("div",{class:"q-pt-sm"}," 4. Use the Quasar CLI to create your app by entering one of the following commands in the terminal.",-1),N=e("pre",null,[t(""),e("span",{class:"disable-select"},"$ "),t(`npm init quasar
`),e("span",{class:"disable-select"},"or"),t(`
`),e("span",{class:"disable-select"},"$ "),t(`yarn create quasar
`)],-1),B=e("div",{class:"q-pt-sm"}," 5. Proceed with the Quasar initialization process by answering the questions following the prompts. See below for an example. You can/should choose your own Project folder, Package name and Project product name and put your own contact information after Author. ",-1),D=e("div",{class:"q-pt-sm"}," * When creating a project with Quasar you will be given the choice of using Vite or Webpack. If you don't have a strong preference, I recommend you choose Vite as it's faster. (Surprising or not, 'vite' means quick in French.) ",-1),E=e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
Need to install the following packages:
  create-quasar
Ok to proceed? (y) y

 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
       Y8b

\u2714 What would you like to build? \u203A App with Quasar CLI, let's go!
\u2714 Project folder: \u2026 learn_quasar
\u2714 Pick Quasar version: \u203A Quasar v2 (Vue 3 | latest and greatest)
\u2714 Pick script type: \u203A Javascript
\u2714 Pick Quasar App CLI variant: \u203A Quasar App CLI with Vite
\u2714 Package name: \u2026 learn-quasar
\u2714 Project product name: (must start with...) \u2026 Learn Quasar App
\u2714 Project description: \u2026 An app to teach Quasar
\u2714 Author: \u2026 darren@paladyne.co.jp
\u2714 Pick your CSS preprocessor: \u203A Sass with SCSS syntax
\u2714 Check the features needed for your project: \u203A ESLint, State Management (Pinia), Vue-i18n
\u2714 Pick an ESLint preset: \u203A Standard

Quasar \u2022  SUCCESS  \u2022 The project has been scaffolded
\u2026

To get started:
  cd learn_quasar
  quasar dev # or: yarn quasar dev # or: npx quasar dev
`,-1),H=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),U=e("div",{class:"q-pt-sm"},[t(` After creating your first app, and entering the commands after 'To get started:' ("cd `),e("i",null,"your_project_name"),t('", followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),W=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. You can verify the current working directory by typing 'pwd'. ",-1),O=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`,-1),F=e("div",{class:"q-pt-sm"},` Open your project folder in Visual Studio Code by choosing "Open folder\u2026" from the File menu or by typing "code ." in the terminal after the "Quasar \u2022 SUCCESS" message. If you have already entered 'quasar dev', press the "control" and "c" keys together to stop the program (exit the development environment). `,-1),z=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as 'Unknown command "dev"' after entering 'quasar dev' it is probably because your working directory changed. `,-1),G=e("div",{class:"q-pt-sm"},[t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),e("div",{class:"q-pt-sm"},[t("If something didn't work, please use the "),e("a",{href:"feedback"}," feedback form"),t(" to get help. ")])],-1),J={class:"row q-pt-md"},K={class:"row full-width text-subheader q-pt-sm"};function R(X,Z,ee,te,oe,ae){const i=n("SubHeaderComponentDA"),l=n("router-link");return u(),h(f,{class:"flex-center q-pa-sm"},{default:a(()=>[w,o(_,{flat:"",class:"q-pa-md"},{default:a(()=>[o(i,{mytext:"Preparation"}),v,o(d,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),q,e("div",k,[o(s,null,{default:a(()=>[t(" 1. "),S,t(" (Highly recommended) ")]),_:1}),o(s,{class:"q-pt-md"},{default:a(()=>[t(" 2. "),P,t(" by downloading and running the "),Q,t(" installer appropriate for your computer. "),o(s,{class:"q-pt-md"},{default:a(()=>[t(" 3. "),C,t(". To perform this and the following steps it is necessary to use the Terminal application (Mac) or the "),x,t(" or PowerShell (Windows). "),I,T,t("If you have not used these applications before, I suggest you use the Terminal in Visual Studio Code. "),j,t(". "),A,Y,t("The $ character represents the shell prompt. It might appear as a %. Type commands after this symbol and press "),V,t(" or "),L,t(" \u23CE to run them. ")]),_:1}),$,t(" *If you experience problems installing Quasar on a Mac, try installing Node using nvm (Node Version Manager). "),o(l,{to:"/nvm_install"},{default:a(()=>[t("Click here for details")]),_:1}),t(". ")]),_:1}),M,N,B,D,E,H,U,W,O,t(" 6. The current working directory can be changed by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory onto the Terminal window after \u201Ccd \u201D. "),F,z,G]),e("div",J,[e("div",K,[o(r,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"intro"}),o(m),o(r,{outline:"",style:{color:"goldenrod","text-align":"right"},label:" Next: Make it your own",to:"helloworld"})])])]),_:1})]),_:1})}var me=c(b,[["render",R]]);export{me as default};
