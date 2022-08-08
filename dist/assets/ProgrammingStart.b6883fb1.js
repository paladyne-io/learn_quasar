import{Q as m}from"./QImg.d397ec45.js";import{Q as n}from"./QItemLabel.da6d8d20.js";import{Q as f}from"./QItemSection.27713675.js";import{Q as r}from"./QItem.657af415.js";import{Q as _}from"./QList.21ebb759.js";import{Q as y}from"./QCard.f70413e5.js";import{Q as g}from"./QPage.85cff9ba.js";import{R as c}from"./use-router-link.a2c7a1d6.js";import{_ as w,K as b,L as i,M as d,N as o,S as v,U as e,d as a,q as p,Q as t}from"./index.bb9b4ba7.js";import"./QSpinner.1b83a069.js";import"./use-dark.8ed95cee.js";const q=b({name:"IndexPage"}),k=e("div",{class:"q-pa-md text-h5 text-bold"}," Programming Start ",-1),P=e("div",{class:"text-subheader q-pt-sm"}," Getting started programming with Quasar (Preparation) ",-1),Q=e("div",{class:"q-pt-sm"}," Your mission today is to get to this: ",-1),S=e("div",{class:"q-pt-sm"}," This is the basic order of tasks (assuming you have a PC). ",-1),C=t(" 1. "),I=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),x=t(" (Highly recommended) "),T=t(" 2. "),Y=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Download and install node.js")],-1),j=t(" * Download and run one of the LTS version installers "),A=t(" 3. "),V=e("b",null,"Install Quasar CLI and create your app",-1),L=t(". To do these steps you can use the Terminal (Mac), "),$=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),M=t(" or PowerShell (Windows), or the Terminal window in Visual Studio Code. If you have not used the Mac Terminal or Windows Command Prompt it might be better to try the Terminal window in Visual Studio Code first. "),D=t("Click here for details"),N=t(". The $ character represents the shell prompt. It might appear as a %. You enter commands after this symbol and press Return or Enter to run them. "),B=e("div",{class:"q-pt-sm bg-blue-2"},[e("pre",null,`$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar
`)],-1),E=t(" * When installing Quasar you will be given the choice of using Vite or Webpack. If you dont have a strong preference, I recommend you choose Vite as its faster. (Suprising or not, 'Vite' means quick in French.) "),W=e("div",{class:"q-pt-sm"}," Answer the questions, following the prompts. See below for an example. Of course you can/should choose your own Project folder, Package name and Project product name and put your own contact Information after Author. ",-1),O=e("div",{class:"bg-blue-2 q-pa-sm"},[e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`)],-1),U=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),R=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('" followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),F=e("div",{class:"q-pt-sm"},[t(" If you cannot see the app, please check that the working directory is correct. "),e("div",{class:"bg-blue-2 q-pa-sm"},[e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`)]),e("div",{class:"q-pt-sm"}," You can verify the current working directory by typing 'pwd' and change it by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory on to the Terminal window after \u201Ccd \u201D. ")],-1),K=e("div",{class:"q-pt-sm"},[t(` In the directory/folder that you chose you will find a folder named after your app. This is your project folder. Open it in Visual Studio Code by choosing "Open folder\u2026" from the File menu. Another way is to type "code ." in the terminal after the the "Quasar \u2022 SUCCESS" message to open the working directory. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `),e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `),e("div",{class:"q-pt-sm"},[t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),e("div",{class:"q-pt-sm"},"If something didn't work, drop a note in the comments* or email me at darren@paladyne.co.jp to get help. (* Comments are coming soon, in a later lesson. ) ")])],-1),z={class:"row text-subheader q-pt-sm"},G=t(" Previous "),H=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Making it your own ",-1);function J(l,s,X,Z,ee,te){const u=v("router-link");return i(),d(g,{class:"flex-center q-pa-md"},{default:o(()=>[k,e("div",null,[a(y,{flat:"",class:"q-pa-md"},{default:o(()=>[P,Q,a(m,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),S,a(_,null,{default:o(()=>[a(r,null,{default:o(()=>[a(f,null,{default:o(()=>[a(n,null,{default:o(()=>[C,I,x]),_:1}),a(n,{class:"q-pt-md"},{default:o(()=>[T,Y,j]),_:1}),a(n,{class:"q-pt-md"},{default:o(()=>[A,V,L,$,M,a(u,{to:"/vscodeterminal"},{default:o(()=>[D]),_:1}),N]),_:1}),B,E,a(n,{class:"q-pt-md"})]),_:1})]),_:1})]),_:1}),W,O,U,R,F,K,e("div",z,[p((i(),d(r,{class:"col",clickable:"",to:"intro",onClick:s[0]||(s[0]=h=>l.link="intro")},{default:o(()=>[G]),_:1})),[[c]]),p((i(),d(r,{class:"col",clickable:"",to:"helloworld",onClick:s[1]||(s[1]=h=>l.link="helloworld")},{default:o(()=>[H]),_:1})),[[c]])])]),_:1})])]),_:1})}var he=w(q,[["render",J]]);export{he as default};
