import{Q as f}from"./QImg.2c2d185e.js";import{Q as s}from"./QItemLabel.070b2558.js";import{Q as l}from"./QItem.87795a80.js";import{Q as y}from"./QCard.ca82f2fe.js";import{Q as g}from"./QPage.dc878fe2.js";import{R as c}from"./use-router-link.c6998c77.js";import{S as w}from"./SubHeaderComponentDA.ac1315ef.js";import{_ as b,m as v,n as r,p as i,q as o,y as p,d as a,z as e,k as u,u as t}from"./index.2cb900a2.js";import"./QSpinner.bf66351e.js";import"./use-size.ccee50a5.js";import"./render.89c73a8b.js";import"./use-dark.fdf330d5.js";import"./use-quasar.87ef8a7f.js";const k=v({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:w}}),q=e("div",{class:"q-pa-md text-h5 text-bold"}," Programming Start",-1),P=e("div",{class:"q-pt-sm"}," Your mission today is to get to this: ",-1),S=e("div",{class:"q-pt-sm"}," This is the basic order of tasks (assuming you have a PC). ",-1),C={class:"q-pt-sm"},Q=t(" 1. "),I=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),x=t(" (Highly recommended) "),A=t(" 2. "),T=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),Y=t(" * Download and run one of the "),j=e("b",null,"LTS",-1),V=t(" installers appropriate for your computer. "),$=t(" 3. "),L=e("b",null,"Install Quasar CLI and create your app",-1),D=t(". To do these steps you can use the Terminal application (Mac), "),M=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),B=t(" or PowerShell (Windows), or the Terminal window in Visual Studio Code. If you have not used the Mac Terminal or Windows Command Prompt it might be better to try the Terminal window in Visual Studio Code first. "),E=t("Click here for details"),N=t(". The $ character represents the shell prompt. It might appear as a %. You enter commands after this symbol and press Return or Enter to run them. "),W=e("pre",null,`$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar"
`,-1),H=t(" * When installing Quasar you will be given the choice of using Vite or Webpack. If you don't have a strong preference, I recommend you choose Vite as its faster. (Suprising or not, 'Vite' means quick in French.) "),O=e("div",{class:"q-pt-sm"}," Answer the questions, following the prompts. See below for an example. Of course you can/should choose your own Project folder, Package name and Project product name and put your own contact Information after Author. ",-1),R=e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`,-1),U=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),z=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('" followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),F=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. ",-1),G=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`,-1),J=e("div",{class:"q-pt-sm"}," You can verify the current working directory by typing 'pwd' and change it by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory on to the Terminal window after \u201Ccd \u201D. ",-1),K=e("div",{class:"q-pt-sm"},` In the directory/folder that you chose you will find a folder named after your app. This is your project folder. Open it in Visual Studio Code by choosing "Open folder\u2026" from the File menu. Another way is to type "code ." in the terminal after the the "Quasar \u2022 SUCCESS" message to open the working directory. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `,-1),X=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `,-1),Z=e("div",{class:"q-pt-sm"},[t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),e("div",{class:"q-pt-sm"},"If something didn't work, drop a note in the comments* or email me at darren@paladyne.co.jp to get help. (* Comments are coming soon, in a later lesson. ) ")],-1),ee={class:"row text-subheader q-pt-sm"},te=t(" Previous "),oe=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Making it your own ",-1);function ae(d,n,ne,se,re,ie){const h=p("SubHeaderComponentDA"),m=p("router-link");return r(),i(g,{class:"flex-center q-pa-md"},{default:o(()=>[q,a(y,{flat:"",class:"q-pa-md"},{default:o(()=>[a(h,{mytext:"Getting started programming with Quasar (Preparation)"}),P,a(f,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),S,e("div",C,[a(s,null,{default:o(()=>[Q,I,x]),_:1}),a(s,{class:"q-pt-md"},{default:o(()=>[A,T,Y,j,V]),_:1}),a(s,{class:"q-pt-md"},{default:o(()=>[$,L,D,M,B,a(m,{to:"/vscodeterminal"},{default:o(()=>[E]),_:1}),N]),_:1}),W,a(s,{class:"q-pt-md"},{default:o(()=>[H]),_:1}),O,R,U,z,F,G,J,K,X,Z]),e("div",ee,[u((r(),i(l,{class:"col",clickable:"",to:"intro",onClick:n[0]||(n[0]=_=>d.link="intro")},{default:o(()=>[te]),_:1})),[[c]]),u((r(),i(l,{class:"col",clickable:"",to:"helloworld",onClick:n[1]||(n[1]=_=>d.link="helloworld")},{default:o(()=>[oe]),_:1})),[[c]])])]),_:1})]),_:1})}var ve=b(k,[["render",ae]]);export{ve as default};
