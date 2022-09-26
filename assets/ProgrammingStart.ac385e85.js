import{Q as c}from"./QImg.2c273129.js";import{Q as s}from"./QItemLabel.1dfa9773.js";import{_ as l,p,B as r,q as u,t as h,x as a,d as o,D as e,C as i,z as t}from"./index.214a8f10.js";import{Q as m}from"./QSpace.cb7a0936.js";import{Q as _}from"./QCard.6d960d12.js";import{Q as f}from"./QPage.48994b99.js";import{S as y}from"./SubHeaderComponentDA.79ecd27a.js";import"./use-dark.33a3c39e.js";import"./use-quasar.bdb1de90.js";const g=p({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:y}}),w=e("div",{class:"q-pa-md text-h5 text-bold"}," Programming Start",-1),b=e("div",{class:"q-pt-sm"}," Your goal today is to get to this: ",-1),v=e("div",{class:"q-pt-sm"}," This is the basic order of tasks (assuming you have a PC). ",-1),q={class:"q-pt-sm"},k=t(" 1. "),S=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),P=t(" (Highly recommended) "),C=t(" 2. "),Q=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),x=t(" * Download and run one of the "),I=e("b",null,"LTS",-1),A=t(" installers appropriate for your computer. "),T=t(" 3. "),Y=e("b",null,"Install Quasar CLI and create your app",-1),j=t(". To do these steps you can use the Terminal application (Mac), "),V=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),L=t(" or PowerShell (Windows), or the Terminal window in Visual Studio Code. If you have not used the Mac Terminal or Windows Command Prompt it might be better to try the Terminal window in Visual Studio Code first. "),$=t("Click here for details"),D=t(". "),B=e("br",null,null,-1),M=t("The $ character represents the shell prompt. It might appear as a %. Enter commands after this symbol and press Return or Enter to run them. "),E=e("pre",null,`$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar"
`,-1),N=e("div",{class:"q-pt-sm"}," Answer the questions, following the prompts. See below for an example. Of course you can/should choose your own Project folder, Package name and Project product name and put your own contact Information after Author. ",-1),W=e("div",{class:"q-pt-sm"}," * When installing Quasar you will be given the choice of using Vite or Webpack. If you don't have a strong preference, I recommend you choose Vite as its faster. (Suprising or not, 'Vite' means quick in French.) ",-1),H=e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`,-1),O=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),U=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('", followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),z=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. You can verify the current working directory by typing 'pwd' and change it by typing 'cd ' ('cd' followed by a space) and then the full path. ",-1),F=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`,-1),G=e("div",{class:"q-pt-sm"}," An easy way to get the full path to a folder is to drag and drop the folder/directory on to the Terminal window after \u201Ccd \u201D. ",-1),J=e("div",{class:"q-pt-sm"},` In the directory/folder that you chose you will find a folder named after your app. This is your project folder. Open it in Visual Studio Code by choosing "Open folder\u2026" from the File menu. Another way is to type "code ." in the terminal after the "Quasar \u2022 SUCCESS" message to open the working directory. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `,-1),K=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `,-1),R={class:"q-pt-sm"},X=t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),Z={class:"q-pt-sm"},ee=t("If something didn't work, please use the "),te=t(" feedback form"),oe=t(" to get help. "),ae={class:"row q-pt-md"},se={class:"row full-width text-subheader q-pt-sm"};function ne(re,ie,de,ce,le,pe){const d=r("SubHeaderComponentDA"),n=r("router-link");return u(),h(f,{class:"flex-center q-pa-md"},{default:a(()=>[w,o(_,{flat:"",class:"q-pa-md"},{default:a(()=>[o(d,{mytext:"Getting started programming with Quasar (Preparation)"}),b,o(c,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),v,e("div",q,[o(s,null,{default:a(()=>[k,S,P]),_:1}),o(s,{class:"q-pt-md"},{default:a(()=>[C,Q,x,I,A]),_:1}),o(s,{class:"q-pt-md"},{default:a(()=>[T,Y,j,V,L,o(n,{to:"/vscodeterminal"},{default:a(()=>[$]),_:1}),D,B,M]),_:1}),E,N,W,H,O,U,z,F,G,J,K,e("div",R,[X,e("div",Z,[ee,o(n,{to:"feedback"},{default:a(()=>[te]),_:1}),oe])])]),e("div",ae,[e("div",se,[o(i,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"programming1"}),o(m),o(i,{outline:"",style:{color:"goldenrod","text-align":"right"},label:" Next: Making it your own",to:"images"})])])]),_:1})]),_:1})}var ve=l(g,[["render",ne]]);export{ve as default};
