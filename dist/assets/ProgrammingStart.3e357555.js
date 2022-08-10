import{Q as b}from"./QImg.7649668a.js";import{Q as s}from"./QItemLabel.0db2804b.js";import{Q as v}from"./QItemSection.cdca15d7.js";import{Q as l}from"./QItem.71feca48.js";import{Q as w}from"./QList.f9b344b3.js";import{Q as k}from"./QCard.e7ebd11c.js";import{Q as q}from"./QPage.9c666c7f.js";import{R as p}from"./use-router-link.15dbf710.js";import{_ as P,S}from"./SubHeaderComponentDA.90d5b990.js";import{_ as m,L as i,M as d,N as a,U as e,R as C,K as Q,S as c,d as o,q as u,Q as t}from"./index.809357e1.js";import"./QSpinner.f224ad85.js";import"./use-size.d235411e.js";import"./render.23045fd0.js";import"./use-dark.dcb2121a.js";import"./use-quasar.27eb2dd0.js";const x={class:"pre q-px-sm q-my-sm"},I={__name:"PreComponentDA",props:{mytext:String},setup(r){return(n,h)=>(i(),d(P,null,{component:a(()=>[e("div",x,[e("pre",null,"  "+C(r.mytext)+`
  `,1)])]),_:1}))}};var A=m(I,[["__scopeId","data-v-755ebd3b"]]);const T=Q({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:S,PreComponentDA:A}}),Y=e("div",{class:"q-pa-md text-h5 text-bold"}," Programming Start",-1),j=e("div",{class:"q-pt-sm"}," Your mission today is to get to this: ",-1),D=e("div",{class:"q-pt-sm"}," This is the basic order of tasks (assuming you have a PC). ",-1),$=t(" 1. "),V=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),L=t(" (Highly recommended) "),M=t(" 2. "),N=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),B=t(" * Download and run one of the "),E=e("b",null,"LTS",-1),W=t(" installers appropriate for your computer. "),H=t(" 3. "),O=e("b",null,"Install Quasar CLI and create your app",-1),R=t(". To do these steps you can use the Terminal application (Mac), "),U=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),z=t(" or PowerShell (Windows), or the Terminal window in Visual Studio Code. If you have not used the Mac Terminal or Windows Command Prompt it might be better to try the Terminal window in Visual Studio Code first. "),F=t("Click here for details"),K=t(". The $ character represents the shell prompt. It might appear as a %. You enter commands after this symbol and press Return or Enter to run them. "),G=t(" * When installing Quasar you will be given the choice of using Vite or Webpack. If you dont have a strong preference, I recommend you choose Vite as its faster. (Suprising or not, 'Vite' means quick in French.) "),J=e("div",{class:"q-pt-sm"}," Answer the questions, following the prompts. See below for an example. Of course you can/should choose your own Project folder, Package name and Project product name and put your own contact Information after Author. ",-1),X=e("div",{class:"bg-blue-2 q-pa-sm"},[e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`)],-1),Z=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),ee=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('" followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),te=e("div",{class:"q-pt-sm"},[t(" If you cannot see the app, please check that the working directory is correct. "),e("div",{class:"bg-blue-2 q-pa-sm"},[e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`)]),e("div",{class:"q-pt-sm"}," You can verify the current working directory by typing 'pwd' and change it by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory on to the Terminal window after \u201Ccd \u201D. ")],-1),oe=e("div",{class:"q-pt-sm"},[t(` In the directory/folder that you chose you will find a folder named after your app. This is your project folder. Open it in Visual Studio Code by choosing "Open folder\u2026" from the File menu. Another way is to type "code ." in the terminal after the the "Quasar \u2022 SUCCESS" message to open the working directory. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `),e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `),e("div",{class:"q-pt-sm"},[t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),e("div",{class:"q-pt-sm"},"If something didn't work, drop a note in the comments* or email me at darren@paladyne.co.jp to get help. (* Comments are coming soon, in a later lesson. ) ")])],-1),ae={class:"row text-subheader q-pt-sm"},ne=t(" Previous "),re=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Making it your own ",-1);function se(r,n,h,ie,de,le){const _=c("SubHeaderComponentDA"),f=c("router-link"),y=c("PreComponentDA");return i(),d(q,{class:"flex-center q-pa-md"},{default:a(()=>[Y,e("div",null,[o(k,{flat:"",class:"q-pa-md"},{default:a(()=>[o(_,{mytext:"Getting started programming with Quasar (Preparation)"}),j,o(b,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),D,o(w,null,{default:a(()=>[o(l,null,{default:a(()=>[o(v,null,{default:a(()=>[o(s,null,{default:a(()=>[$,V,L]),_:1}),o(s,{class:"q-pt-md"},{default:a(()=>[M,N,B,E,W]),_:1}),o(s,{class:"q-pt-md"},{default:a(()=>[H,O,R,U,z,o(f,{to:"/vscodeterminal"},{default:a(()=>[F]),_:1}),K]),_:1}),o(y,{mytext:`
$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar`}),G,o(s,{class:"q-pt-md"})]),_:1})]),_:1})]),_:1}),J,X,Z,ee,te,oe,e("div",ae,[u((i(),d(l,{class:"col",clickable:"",to:"intro",onClick:n[0]||(n[0]=g=>r.link="intro")},{default:a(()=>[ne]),_:1})),[[p]]),u((i(),d(l,{class:"col",clickable:"",to:"helloworld",onClick:n[1]||(n[1]=g=>r.link="helloworld")},{default:a(()=>[re]),_:1})),[[p]])])]),_:1})])]),_:1})}var Se=m(T,[["render",se]]);export{Se as default};
