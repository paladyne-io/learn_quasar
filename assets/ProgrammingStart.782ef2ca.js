import{Q as y}from"./QImg.9220fd6b.js";import{Q as s}from"./QItemLabel.177c8eb2.js";import{Q as c}from"./QItem.6f005c53.js";import{Q as g}from"./QCard.e1dd9fe6.js";import{Q as w}from"./QPage.1015d616.js";import{R as p}from"./use-router-link.c81cbdf8.js";import{S as b}from"./SubHeaderComponentDA.a4927367.js";import{P as v}from"./PreComponentDA.79d68dc8.js";import{_ as k,K as q,L as r,M as i,N as o,S as d,d as a,U as e,q as u,Q as t}from"./index.d95a1abe.js";import"./QSpinner.0e40f2fc.js";import"./use-size.78e911b1.js";import"./render.3623e637.js";import"./use-dark.5faf373a.js";import"./DarkModeComponent.9c61b50e.js";import"./use-quasar.b0362214.js";const P=q({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:b,PreComponentDA:v}}),S=e("div",{class:"q-pa-md text-h5 text-bold"}," Programming Start",-1),C=e("div",{class:"q-pt-sm"}," Your mission today is to get to this: ",-1),Q=e("div",{class:"q-pt-sm"}," This is the basic order of tasks (assuming you have a PC). ",-1),I={class:"q-pt-sm"},x=t(" 1. "),A=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),T=t(" (Highly recommended) "),Y=t(" 2. "),j=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),V=t(" * Download and run one of the "),D=e("b",null,"LTS",-1),$=t(" installers appropriate for your computer. "),L=t(" 3. "),M=e("b",null,"Install Quasar CLI and create your app",-1),N=t(". To do these steps you can use the Terminal application (Mac), "),B=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),E=t(" or PowerShell (Windows), or the Terminal window in Visual Studio Code. If you have not used the Mac Terminal or Windows Command Prompt it might be better to try the Terminal window in Visual Studio Code first. "),W=t("Click here for details"),H=t(". The $ character represents the shell prompt. It might appear as a %. You enter commands after this symbol and press Return or Enter to run them. "),O=t(" * When installing Quasar you will be given the choice of using Vite or Webpack. If you dont have a strong preference, I recommend you choose Vite as its faster. (Suprising or not, 'Vite' means quick in French.) "),U=e("div",{class:"q-pt-sm"}," Answer the questions, following the prompts. See below for an example. Of course you can/should choose your own Project folder, Package name and Project product name and put your own contact Information after Author. ",-1),R=e("div",{class:"bg-blue-2 q-pa-sm"},[e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`)],-1),F=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),K=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('" followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),z=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. ",-1),G=e("div",{class:"bg-blue-2 q-pa-sm"},[e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`)],-1),J=e("div",{class:"q-pt-sm"}," You can verify the current working directory by typing 'pwd' and change it by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory on to the Terminal window after \u201Ccd \u201D. ",-1),X=e("div",{class:"q-pt-sm"},` In the directory/folder that you chose you will find a folder named after your app. This is your project folder. Open it in Visual Studio Code by choosing "Open folder\u2026" from the File menu. Another way is to type "code ." in the terminal after the the "Quasar \u2022 SUCCESS" message to open the working directory. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `,-1),Z=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `,-1),ee=e("div",{class:"q-pt-sm"},[t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),e("div",{class:"q-pt-sm"},"If something didn't work, drop a note in the comments* or email me at darren@paladyne.co.jp to get help. (* Comments are coming soon, in a later lesson. ) ")],-1),te={class:"row text-subheader q-pt-sm"},oe=t(" Previous "),ae=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Making it your own ",-1);function ne(l,n,se,re,ie,de){const m=d("SubHeaderComponentDA"),h=d("router-link"),_=d("PreComponentDA");return r(),i(w,{class:"flex-center q-pa-md"},{default:o(()=>[S,a(g,{flat:"",class:"q-pa-md"},{default:o(()=>[a(m,{mytext:"Getting started programming with Quasar (Preparation)"}),C,a(y,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),Q,e("div",I,[a(s,null,{default:o(()=>[x,A,T]),_:1}),a(s,{class:"q-pt-md"},{default:o(()=>[Y,j,V,D,$]),_:1}),a(s,{class:"q-pt-md"},{default:o(()=>[L,M,N,B,E,a(h,{to:"/vscodeterminal"},{default:o(()=>[W]),_:1}),H]),_:1}),a(_,{mytext:`
$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar`}),a(s,{class:"q-pt-md"},{default:o(()=>[O]),_:1}),U,R,F,K,z,G,J,X,Z,ee]),e("div",te,[u((r(),i(c,{class:"col",clickable:"",to:"intro",onClick:n[0]||(n[0]=f=>l.link="intro")},{default:o(()=>[oe]),_:1})),[[p]]),u((r(),i(c,{class:"col",clickable:"",to:"helloworld",onClick:n[1]||(n[1]=f=>l.link="helloworld")},{default:o(()=>[ae]),_:1})),[[p]])])]),_:1})]),_:1})}var Pe=k(P,[["render",ne]]);export{Pe as default};
