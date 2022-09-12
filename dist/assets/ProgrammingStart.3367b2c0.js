import{Q as f}from"./QImg.7a3b5e20.js";import{Q as n}from"./QItemLabel.17e63169.js";import{Q as l}from"./QItem.9284fc34.js";import{Q as y}from"./QCard.c8cb7f65.js";import{Q as g}from"./QPage.93e47c7d.js";import{_ as w,p as b,B as p,q as r,t as i,x as o,d as a,D as e,l as h,z as t,ae as u}from"./index.a996f8d0.js";import{S as v}from"./SubHeaderComponentDA.dadcb4c0.js";import"./use-dark.3f581537.js";import"./use-quasar.d5492dcb.js";const k=b({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:v}}),q=e("div",{class:"q-pa-md text-h5 text-bold"}," Programming Start",-1),P=e("div",{class:"q-pt-sm"}," Your mission today is to get to this: ",-1),S=e("div",{class:"q-pt-sm"}," This is the basic order of tasks (assuming you have a PC). ",-1),C={class:"q-pt-sm"},Q=t(" 1. "),I=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),x=t(" (Highly recommended) "),A=t(" 2. "),T=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),Y=t(" * Download and run one of the "),j=e("b",null,"LTS",-1),V=t(" installers appropriate for your computer. "),$=t(" 3. "),D=e("b",null,"Install Quasar CLI and create your app",-1),L=t(". To do these steps you can use the Terminal application (Mac), "),M=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),B=t(" or PowerShell (Windows), or the Terminal window in Visual Studio Code. If you have not used the Mac Terminal or Windows Command Prompt it might be better to try the Terminal window in Visual Studio Code first. "),E=t("Click here for details"),N=t(". The $ character represents the shell prompt. It might appear as a %. Enter commands after this symbol and press Return or Enter to run them. "),W=e("pre",null,`$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar"
`,-1),H=e("div",{class:"q-pt-sm"}," Answer the questions, following the prompts. See below for an example. Of course you can/should choose your own Project folder, Package name and Project product name and put your own contact Information after Author. ",-1),O=e("div",{class:"q-pt-sm"}," * When installing Quasar you will be given the choice of using Vite or Webpack. If you don't have a strong preference, I recommend you choose Vite as its faster. (Suprising or not, 'Vite' means quick in French.) ",-1),U=e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
\u2714 Project product name: (must start with letter if building mobile apps) \u2026 Learn Quasar App
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
`,-1),z=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),F=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('", followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),R=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. You can verify the current working directory by typing 'pwd' and change it by typing 'cd ' ('cd' followed by a space) and then the full path. ",-1),G=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`,-1),J=e("div",{class:"q-pt-sm"}," An easy way to get the full path to a folder is to drag and drop the folder/directory on to the Terminal window after \u201Ccd \u201D. ",-1),K=e("div",{class:"q-pt-sm"},` In the directory/folder that you chose you will find a folder named after your app. This is your project folder. Open it in Visual Studio Code by choosing "Open folder\u2026" from the File menu. Another way is to type "code ." in the terminal after the the "Quasar \u2022 SUCCESS" message to open the working directory. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `,-1),X=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `,-1),Z={class:"q-pt-sm"},ee=t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),te={class:"q-pt-sm"},oe=t("If something didn't work, please use the "),ae=t(" feedback form"),se=t(" to get help. "),ne={class:"row text-subheader q-pt-sm"},re=t(" Previous "),ie=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Making it your own ",-1);function de(d,s,ce,le,pe,he){const m=p("SubHeaderComponentDA"),c=p("router-link");return r(),i(g,{class:"flex-center q-pa-md"},{default:o(()=>[q,a(y,{flat:"",class:"q-pa-md"},{default:o(()=>[a(m,{mytext:"Getting started programming with Quasar (Preparation)"}),P,a(f,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),S,e("div",C,[a(n,null,{default:o(()=>[Q,I,x]),_:1}),a(n,{class:"q-pt-md"},{default:o(()=>[A,T,Y,j,V]),_:1}),a(n,{class:"q-pt-md"},{default:o(()=>[$,D,L,M,B,a(c,{to:"/vscodeterminal"},{default:o(()=>[E]),_:1}),N]),_:1}),W,H,O,U,z,F,R,G,J,K,X,e("div",Z,[ee,e("div",te,[oe,a(c,{to:"feedback"},{default:o(()=>[ae]),_:1}),se])])]),e("div",ne,[h((r(),i(l,{class:"col",clickable:"",to:"intro",onClick:s[0]||(s[0]=_=>d.link="intro")},{default:o(()=>[re]),_:1})),[[u]]),h((r(),i(l,{class:"col",clickable:"",to:"helloworld",onClick:s[1]||(s[1]=_=>d.link="helloworld")},{default:o(()=>[ie]),_:1})),[[u]])])]),_:1})]),_:1})}var ke=w(k,[["render",de]]);export{ke as default};