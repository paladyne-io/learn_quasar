import{Q as l}from"./QImg.2d6bb6e3.js";import{Q as s}from"./QItemLabel.eabcda97.js";import{_ as c,p as h,B as r,q as u,t as p,x as n,d as o,D as e,C as i,z as t}from"./index.3e78c1a9.js";import{Q as m}from"./QSpace.db7b8e2c.js";import{Q as _}from"./QCard.89c13378.js";import{Q as f}from"./QPage.a7fcea3e.js";import{S as g}from"./SubHeaderComponentDA.ccb4f9fd.js";import"./use-dark.ed30f6e9.js";import"./use-quasar.a7ab0b93.js";const y=h({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:g}}),b=e("div",{class:"q-pa-md text-h5 text-bold"}," Start Programming",-1),w=e("div",{class:"q-pt-sm"}," Your goal today is to get to this: ",-1),v=e("div",{class:"q-pt-sm"}," This is the order of tasks. ",-1),q={class:"q-pt-sm"},k=t(" 1. "),S=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),P=t(" (Highly recommended) "),C=t(" 2. "),Q=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),x=t(" by downloading and running the "),I=e("b",null,"LTS",-1),T=t(" installer appropriate for your computer *. "),V=t(" 3. "),Y=e("b",null,"Install Quasar CLI",-1),j=t(". To do this and the following steps you have to use the Terminal application (Mac) or the "),A=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),L=t(" or PowerShell (Windows.) "),M=e("br",null,null,-1),N=e("br",null,null,-1),$=t("If you have not used these applications before, I suggest you use the Terminal in Visual Studio Code. "),B=e("b",null,"On Windows it is recommended to switch from the default PowerShell to the Command Prompt",-1),D=t(". "),E=t("Click here for details"),U=t(". "),W=e("br",null,null,-1),z=e("br",null,null,-1),H=t("The $ character represents the shell prompt. It might appear as a %. Type commands after this symbol and press "),O=e("b",null,"Return",-1),F=t(" or "),G=e("b",null,"Enter",-1),J=t(" \u23CE to run them. "),K=e("pre",null,`$ yarn global add @quasar/cli

# or:

$ npm i -g @quasar/cli
`,-1),R=t(" *If you experience problems installing Quasar on a Mac, try installing Node using nvm (Node Version Manager). "),X=e("pre",null,[t(`1) Install NVM by copying and pasting the curl command below into a terminal window.
    (Check the latest version here: `),e("a",{href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm"),t(`)

   `),e("b",null," curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash  "),t(`

2) Close and reopen the terminal for the System to recognize the changes\u2026

3) check that NVM is installed
     nvm -v

4) Install the latest Long Term Support version of node
     nvm install \u2014lts
`)],-1),Z=e("div",{class:"q-pt-sm"}," 4. Use the QUasar CLI to Create your app by entering one of the following commands.",-1),ee=e("pre",null,`  $ yarn create quasar

  # or:

  $ npm init quasar
  `,-1),te=e("div",{class:"q-pt-sm"}," 5. Proceed with the Quasar initialization process by answering the questions following the prompts. See below for an example. You can/should choose your own Project folder, Package name and Project product name and put your own contact information after Author. ",-1),oe=e("div",{class:"q-pt-sm"}," * When creating a project with Quasar you will be given the choice of using Vite or Webpack If you don't have a strong preference, I recommend you choose Vite as it's faster. (Surprising or not, 'Vite' means quick in French.) ",-1),ne=e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`,-1),se=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),ae=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('", followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),re=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. You can verify the current working directory by typing 'pwd'. ",-1),ie=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`,-1),de=t(" The current working directory can be changed by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory onto the Terminal window after \u201Ccd \u201D. "),le=e("div",{class:"q-pt-sm"},` Open your project folder in Visual Studio Code by choosing "Open folder\u2026" from the File menu or by typing "code ." in the terminal after the "Quasar \u2022 SUCCESS" message. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `,-1),ce=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `,-1),he={class:"q-pt-sm"},ue=t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),pe={class:"q-pt-sm"},me=t("If something didn't work, please use the "),_e=t(" feedback form"),fe=t(" to get help. "),ge={class:"row q-pt-md"},ye={class:"row full-width text-subheader q-pt-sm"};function be(we,ve,qe,ke,Se,Pe){const d=r("SubHeaderComponentDA"),a=r("router-link");return u(),p(f,{class:"flex-center q-pa-md"},{default:n(()=>[b,o(_,{flat:"",class:"q-pa-md"},{default:n(()=>[o(d,{mytext:"Getting started with Quasar (Preparation)"}),w,o(l,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),v,e("div",q,[o(s,null,{default:n(()=>[k,S,P]),_:1}),o(s,{class:"q-pt-md"},{default:n(()=>[C,Q,x,I,T,o(s,{class:"q-pt-md"},{default:n(()=>[V,Y,j,A,L,M,N,$,B,D,o(a,{to:"/vscodeterminal"},{default:n(()=>[E]),_:1}),U,W,z,H,O,F,G,J]),_:1}),K,R]),_:1}),X,Z,ee,te,oe,ne,se,ae,re,ie,de,le,ce,e("div",he,[ue,e("div",pe,[me,o(a,{to:"feedback"},{default:n(()=>[_e]),_:1}),fe])])]),e("div",ge,[e("div",ye,[o(i,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"introduction"}),o(m),o(i,{outline:"",style:{color:"goldenrod","text-align":"right"},label:" Next: Making it your own",to:"helloworld"})])])]),_:1})]),_:1})}var Le=c(y,[["render",be]]);export{Le as default};
