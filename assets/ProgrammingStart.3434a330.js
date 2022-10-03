import{Q as c}from"./QImg.a53bae18.js";import{Q as n}from"./QItemLabel.64fd465e.js";import{_ as l,p,B as r,q as u,t as h,x as a,d as o,D as e,C as i,z as t}from"./index.8cf353f0.js";import{Q as _}from"./QSpace.e03c54cd.js";import{Q as m}from"./QCard.a5ac03f2.js";import{Q as f}from"./QPage.558f241d.js";import{S as y}from"./SubHeaderComponentDA.5a6676c2.js";import"./use-dark.aa18e6e6.js";import"./use-quasar.87e52cc4.js";const g=p({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:y}}),w=e("div",{class:"q-pa-md text-h5 text-bold"}," Start Programming",-1),b=e("div",{class:"q-pt-sm"}," Your goal today is to get to this: ",-1),v=e("div",{class:"q-pt-sm"}," This is the order of tasks. ",-1),q={class:"q-pt-sm"},k=t(" 1. "),S=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),P=t(" (Highly recommended) "),C=t(" 2. "),Q=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),x=t(" Download and run one of the "),I=e("b",null,"LTS",-1),T=t(" installers appropriate for your computer. "),Y=t(" 3. "),j=e("b",null,"Install Quasar CLI and create your app",-1),A=t("*. To do these steps you can use the Terminal application (Mac), "),V=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),L=t(" or PowerShell (Windows), or the Terminal window in Visual Studio Code. If you have not used the Mac Terminal or Windows Command Prompt I suggest you use the Terminal window in Visual Studio Code. "),$=t("Click here for details"),D=t(". "),B=e("br",null,null,-1),M=e("br",null,null,-1),E=t("The $ character represents the shell prompt. It might appear as a %. Type commands after this symbol and press "),N=e("b",null,"Return",-1),W=t(" or "),H=e("b",null,"Enter",-1),z=t(" \u23CE to run them. "),O=e("pre",null,`$ yarn global add @quasar/cli
$ yarn create quasar

# or:

$ npm i -g @quasar/cli
$ npm init quasar
`,-1),U=e("div",{class:"q-pt-sm"}," Proceed with the application initialization process by answering the questions following the prompts. See below for an example. You can/should choose your own Project folder, Package name and Project product name and put your own contact information after Author. ",-1),F=e("div",{class:"q-pt-sm"}," * When creating a project with Quasar you will be given the choice of using Vite or Webpack If you don't have a strong preference, I recommend you choose Vite as it's faster. (Surprising or not, 'Vite' means quick in French.) ",-1),G=e("pre",null,`dcs@Darrens-MacBook-Pro github_projects %  npm init quasar
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
`,-1),J=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),K=e("div",{class:"q-pt-sm"},[t(' After creating your first app, and entering the above commands ("cd '),e("i",null,"your_project_name"),t('", followed by "quasar dev"), you should see the default Quasar app screen as displayed at the top of this page. ')],-1),R=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. You can verify the current working directory by typing 'pwd'. ",-1),X=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar %  quasar dev
`,-1),Z=t(" The current working directory can be changed by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory onto the Terminal window after \u201Ccd \u201D. "),ee=e("div",{class:"q-pt-sm"},` Open your project folder in Visual Studio Code by choosing "Open folder\u2026" from the File menu or by typing "code ." in the terminal after the "Quasar \u2022 SUCCESS" message. If you have already entered 'quasar dev', hold down the "control" and "c" keys together to stop the program (exit the development environment). `,-1),te=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as Unknown command "dev" when you enter 'quasar dev' it is probably because your working directory changed. `,-1),oe={class:"q-pt-sm"},ae=t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),ne={class:"q-pt-sm"},se=t("If something didn't work, please use the "),re=t(" feedback form"),ie=t(" to get help. "),de={class:"row q-pt-md"},ce={class:"row full-width text-subheader q-pt-sm"};function le(pe,ue,he,_e,me,fe){const d=r("SubHeaderComponentDA"),s=r("router-link");return u(),h(f,{class:"flex-center q-pa-md"},{default:a(()=>[w,o(m,{flat:"",class:"q-pa-md"},{default:a(()=>[o(d,{mytext:"Getting started with Quasar (Preparation)"}),b,o(c,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),v,e("div",q,[o(n,null,{default:a(()=>[k,S,P]),_:1}),o(n,{class:"q-pt-md"},{default:a(()=>[C,Q,x,I,T]),_:1}),o(n,{class:"q-pt-md"},{default:a(()=>[Y,j,A,V,L,o(s,{to:"/vscodeterminal"},{default:a(()=>[$]),_:1}),D,B,M,E,N,W,H,z]),_:1}),O,U,F,G,J,K,R,X,Z,ee,te,e("div",oe,[ae,e("div",ne,[se,o(s,{to:"feedback"},{default:a(()=>[re]),_:1}),ie])])]),e("div",de,[e("div",ce,[o(i,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"introduction"}),o(_),o(i,{outline:"",style:{color:"goldenrod","text-align":"right"},label:" Next: Making it your own",to:"helloworld"})])])]),_:1})]),_:1})}var Ce=l(g,[["render",le]]);export{Ce as default};
