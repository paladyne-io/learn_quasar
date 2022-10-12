import{Q as l}from"./QImg.d876043f.js";import{Q as a}from"./QItemLabel.3e2e2945.js";import{_ as c,p,B as n,q as h,t as u,x as s,d as o,D as e,C as r,z as t}from"./index.a22c2f30.js";import{Q as _}from"./QSpace.20a373cd.js";import{Q as m}from"./QCard.cda2e4b2.js";import{Q as f}from"./QPage.3bd23c4f.js";import{S as g}from"./SubHeaderComponentDA.8ccb7377.js";import{c as y}from"./copy-to-clipboard.7a0543b4.js";import"./use-dark.c4060b36.js";import"./use-quasar.38ce4ab8.js";const b=p({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:g}});y("some text").then(()=>{}).catch(()=>{});const w=e("div",{class:"q-pa-md text-h5 header"},"Getting started with Quasar",-1),v=e("div",{class:"q-pt-sm"}," Your goal today is to get to this: ",-1),k=e("div",{class:"q-pt-sm"}," This is the order of tasks. ",-1),q={class:"q-pt-sm"},S=t(" 1. "),P=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),Q=t(" (Highly recommended) "),C=t(" 2. "),x=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),I=t(" by downloading and running the "),T=e("b",null,"LTS",-1),Y=t(" installer appropriate for your computer. "),j=t(" 3. "),A=e("b",null,"Install Quasar CLI",-1),V=t(". To perform this and the following steps it is necessary to use the Terminal application (Mac) or the "),L=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),$=t(" or PowerShell (Windows.) "),M=e("br",null,null,-1),B=e("br",null,null,-1),D=t("If you have not used these applications before, I suggest you use the Terminal in Visual Studio Code. "),N=e("a",{href:"/vscodeterminal"},"Click here for details",-1),E=t(". "),H=e("br",null,null,-1),U=e("br",null,null,-1),W=t("The $ character represents the shell prompt. It might appear as a %. Type commands after this symbol and press "),z=e("b",null,"Return",-1),O=t(" or "),F=e("b",null,"Enter",-1),G=t(" \u23CE to run them. "),J=e("pre",null,[t(""),e("span",{class:"disable-select"},"$ "),t(`npm i -g @quasar/cli
`),e("span",{class:"disable-select"},"or"),t(`
`),e("span",{class:"disable-select"},"$ "),t(`yarn global add @quasar/cli
`)],-1),K=t(" *If you experience problems installing Quasar on a Mac, try installing Node using nvm (Node Version Manager). "),R=t("Click here for details"),X=t(". "),Z=e("div",{class:"q-pt-sm"}," 4. Use the Quasar CLI to create your app by entering one of the following commands.",-1),ee=e("pre",null,[t(""),e("span",{class:"disable-select"},"$ "),t(`npm init quasar
`),e("span",{class:"disable-select"},"or"),t(`
`),e("span",{class:"disable-select"},"$ "),t(`yarn create quasar
`)],-1),te=e("div",{class:"q-pt-sm"}," 5. Proceed with the Quasar initialization process by answering the questions following the prompts. See below for an example. You can/should choose your own Project folder, Package name and Project product name and put your own contact information after Author. ",-1),oe=e("div",{class:"q-pt-sm"}," * When creating a project with Quasar you will be given the choice of using Vite or Webpack. If you don't have a strong preference, I recommend you choose Vite as it's faster. (Surprising or not, 'Vite' means quick in French.) ",-1),se=e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`,-1),ae=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),ne=e("div",{class:"q-pt-sm"},[t(` After creating your first app, and entering the commands after 'To get started:' ("cd `),e("i",null,"your_project_name"),t('", followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),re=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. You can verify the current working directory by typing 'pwd'. ",-1),ie=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`,-1),de=t(" The current working directory can be changed by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory onto the Terminal window after \u201Ccd \u201D. "),le=e("div",{class:"q-pt-sm"},` Open your project folder in Visual Studio Code by choosing "Open folder\u2026" from the File menu or by typing "code ." in the terminal after the "Quasar \u2022 SUCCESS" message. If you have already entered 'quasar dev', press the "control" and "c" keys together to stop the program (exit the development environment). `,-1),ce=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" after entering 'quasar dev' it is probably because your working directory changed. `,-1),pe=e("div",{class:"q-pt-sm"},[t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),e("div",{class:"q-pt-sm"},[t("If something didn't work, please use the "),e("a",{href:"feedback"}," feedback form"),t(" to get help. ")])],-1),he={class:"row q-pt-md"},ue={class:"row full-width text-subheader q-pt-sm"};function _e(me,fe,ge,ye,be,we){const i=n("SubHeaderComponentDA"),d=n("router-link");return h(),u(f,{class:"flex-center q-pa-sm"},{default:s(()=>[w,o(m,{flat:"",class:"q-pa-md"},{default:s(()=>[o(i,{mytext:"Preparation"}),v,o(l,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),k,e("div",q,[o(a,null,{default:s(()=>[S,P,Q]),_:1}),o(a,{class:"q-pt-md"},{default:s(()=>[C,x,I,T,Y,o(a,{class:"q-pt-md"},{default:s(()=>[j,A,V,L,$,M,B,D,N,E,H,U,W,z,O,F,G]),_:1}),J,K,o(d,{to:"/nvm_install"},{default:s(()=>[R]),_:1}),X]),_:1}),Z,ee,te,oe,se,ae,ne,re,ie,de,le,ce,pe]),e("div",he,[e("div",ue,[o(r,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"intro"}),o(_),o(r,{outline:"",style:{color:"goldenrod","text-align":"right"},label:" Next: Make it your own",to:"helloworld"})])])]),_:1})]),_:1})}var Ye=c(b,[["render",_e]]);export{Ye as default};
