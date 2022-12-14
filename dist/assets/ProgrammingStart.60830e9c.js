import{Q as d}from"./QImg.8ae16139.js";import{Q as n}from"./QItemLabel.df745265.js";import{k as c,j as u,e as r,o as h,h as p,w as a,g as o,c as e,a as t,m as l,as as m}from"./index.8ed360a4.js";import{Q as _}from"./QSpace.0225cd12.js";import{Q as b}from"./QPage.84ea8d2b.js";import{S as f}from"./SubHeaderComponentDA.00af5326.js";import{c as g}from"./copy-to-clipboard.7a0543b4.js";import"./use-quasar.0067ea06.js";const y=u({name:"ProgrammingStartPage",components:{SubHeaderComponentDA:f}});g("some text").then(()=>{}).catch(()=>{});const w=e("div",{class:"q-pa-md text-h5 header"},"Getting started with Quasar",-1),v=e("div",{class:"q-pt-sm"}," The goal for this lesson is to get to this: ",-1),k=e("div",{class:"q-pt-sm"}," This is the order of tasks. Although it might seem complicated, it should take no longer than 15 minutes (on Windows installing node.js can take longer). ",-1),q={class:"q-pt-sm"},P=e("a",{href:"https://code.visualstudio.com/download"},[e("b",null,"Download and install Visual Studio Code")],-1),S=e("a",{href:"https://nodejs.org/en/download/"},[e("b",null,"Install node.js")],-1),C=e("b",null,"LTS",-1),Q=e("b",null,"Install Quasar CLI",-1),T=e("a",{href:"https://www.lifewire.com/how-to-open-command-prompt-2618089"},"Command Prompt",-1),x=e("br",null,null,-1),I=e("br",null,null,-1),j=e("br",null,null,-1),A=e("br",null,null,-1),Y=e("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar % \u25AF
`,-1),V=e("b",null,"Return",-1),L=e("b",null,"Enter",-1),M=e("pre",null,[t(""),e("span",{class:"disable-select"},"$ "),t(`npm i -g @quasar/cli
`),e("span",{class:"disable-select"},"or"),t(`
`),e("span",{class:"disable-select"},"$ "),t(`yarn global add @quasar/cli
`)],-1),B=e("div",{class:"q-pt-sm"}," 4. Use the Quasar CLI to create your app by entering one of the following commands in the terminal.",-1),N=e("pre",null,[t(""),e("span",{class:"disable-select"},"$ "),t(`npm init quasar
`),e("span",{class:"disable-select"},"or"),t(`
`),e("span",{class:"disable-select"},"$ "),t(`yarn create quasar
`)],-1),$=e("div",{class:"q-pt-sm"}," 5. Proceed with the Quasar initialization process by answering the questions following the prompts. See below for an example. You can/should choose your own Project folder, Package name and Project product name and put your own contact information after Author. ",-1),D=e("div",{class:"q-pt-sm"}," * When creating a project with Quasar you will be given the choice of using Vite or Webpack. If you don't have a strong preference, I recommend you choose Vite as it's faster. (Surprising or not, 'vite' means quick in French.) ",-1),E=e("pre",null,[t("dcs@Darrens-MacBook-Pro github_projects % "),e("b",null," npm init quasar "),t(`
Need to install the following packages:
  create-quasar
Ok to proceed? (y) `),e("b",null,"y"),t(`

 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
       Y8b

\u2714 What would you like to build? \u203A `),e("b",null,"App with Quasar CLI, let's go!"),t(`
\u2714 Project folder: \u2026 `),e("b",null,"learn_quasar"),t(`
\u2714 Pick Quasar version: \u203A `),e("b",null,"Quasar v2 (Vue 3 | latest and greatest)"),t(`
\u2714 Pick script type: \u203A `),e("b",null,"Javascript"),t(`
\u2714 Pick Quasar App CLI variant: \u203A `),e("b",null,"Quasar App CLI with Vite"),t(`
\u2714 Package name: \u2026 `),e("b",null,"learn-quasar"),t(`
\u2714 Project product name: (must start with...) \u2026 `),e("b",null,"Learn Quasar App"),t(`
\u2714 Project description: \u2026 `),e("b",null,"An app to teach Quasar"),t(`
\u2714 Author: \u2026 \u203A `),e("b",null,"darren@paladyne.co.jp"),t(`
\u2714 Pick your CSS preprocessor: \u203A `),e("b",null,"Sass with SCSS syntax"),t(`
\u2714 Check the features needed for your project: \u203A `),e("b",null,"ESLint, State Management (Pinia)"),t(`
\u2714 Pick an ESLint preset: \u203A `),e("b",null,"Standard"),t(`

Quasar \u2022  SUCCESS  \u2022 The project has been scaffolded
\u2026

To get started:
`),e("b",null,"cd learn_quasar"),t(`
`),e("b",null,"quasar dev"),t(` # or: yarn quasar dev # or: npx quasar dev
`)],-1),U=e("div",{class:"text-subheader q-pt-sm"}," You're nearly done! ",-1),W=e("div",{class:"q-pt-sm"},[t(` After creating your first app, and entering the commands after 'To get started:' ("cd `),e("i",null,"your_project_name"),t('", followed by "quasar dev"), you should see the default Quasar app screen as shown at the top of this page. ')],-1),H=e("pre",null,[t(""),e("b",null,"cd learn_quasar"),t(" (<- Change "),e("i",null,"'learn_quasar'"),t(` to the name of your project)
dcs@Darrens-MacBook-Pro learn_quasar % `),e("b",null,"quasar dev"),t(`
`)],-1),O=e("div",{class:"q-pt-sm"}," If you cannot see the app, please check that the working directory is correct. You can verify the current working directory by typing 'pwd'. ",-1),F=e("pre",null,[t("dcs@Darrens-MacBook-Pro learn_quasar % "),e("b",null,"pwd"),t(`

/Users/dcs/documents/learn_quasar
`)],-1),z=e("div",{class:"q-pt-sm"},` 6. Open your project folder in Visual Studio Code by choosing "Open folder\u2026" from the File menu or by typing "code ." in the terminal after the "Quasar \u2022 SUCCESS" message. If you have already entered 'quasar dev', press the "control" and "c" keys together to stop the program (exit the development environment). `,-1),G=e("div",{class:"q-pt-sm"},` The working directory will remain set until you close the Terminal window. If you ever see an error such as 'Unknown command "dev"' after entering 'quasar dev' it is probably because your working directory changed. `,-1),J=e("div",{class:"q-pt-sm"},[t(" If you made it this far, pat yourself on the back, show your friend/partner, make a post on your social platform of choice and take a break to celebrate your progress. "),e("div",{class:"q-pt-sm"},[t("If something didn't work, please use the "),e("a",{href:"feedback"}," feedback form"),t(" to get help. ")])],-1),K={class:"row q-pt-md"},R={class:"row full-width text-subheader q-pt-sm"};function X(Z,ee,te,oe,ae,ne){const i=r("SubHeaderComponentDA"),s=r("router-link");return h(),p(b,{class:"flex-center q-pa-sm"},{default:a(()=>[w,o(m,{flat:"",class:"q-pa-md"},{default:a(()=>[o(i,{mytext:"Preparation"}),v,o(d,{src:"images/QuasarAppTopPage.png",alt:"MyApp menu screen"}),k,e("div",q,[o(n,null,{default:a(()=>[t(" 1. "),P,t(" (Highly recommended) ")]),_:1}),o(n,{class:"q-pt-md"},{default:a(()=>[t(" 2. "),S,t(" by downloading and running the "),C,t(" installer appropriate for your computer. "),o(n,{class:"q-pt-md"},{default:a(()=>[t(" 3. "),Q,t(". To perform this and the following steps it is necessary to use a terminal. You can use the Terminal application (Mac) or the "),T,t(" or PowerShell (Windows). "),x,I,t("If you have not used these applications before, I suggest you use the Terminal in Visual Studio Code. "),o(s,{to:"/vscodeterminal"},{default:a(()=>[t("Click here for details")]),_:1}),t(". "),j,A,t(" Open Visual Studio Code and choose 'New Terminal' from the Terminal menu or click the 'Toggle Panel' icon in the top right. Locate the Terminal area at the bottom with the text that looks like that shown the blue box below. The cursor should be a solid rectangle or a line at the end, indicating it is ready to receive typed commands. "),Y,t(" The % character represents the shell prompt. By convention it is often shown as a $. Type commands after this symbol and press "),V,t(" or "),L,t(" \u23CE to run them. ")]),_:1}),t(" Note. To use yarn instead of npm you might have to install it using the command, 'npm install --global yarn'. "),M,t(" *If you experience problems installing Quasar on a Mac, try installing Node using nvm (Node Version Manager). "),o(s,{to:"/nvm_install"},{default:a(()=>[t("Click here for details")]),_:1}),t(". ")]),_:1}),B,N,$,D,E,U,W,H,O,F,t(" The current working directory can be changed by typing 'cd ' ('cd' followed by a space) and then the full path. An easy way to get the full path to a folder is to drag and drop the folder/directory onto the Terminal window after \u201Ccd \u201D. "),z,G,J]),e("div",K,[e("div",R,[o(l,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"intro"}),o(_),o(l,{outline:"",style:{color:"goldenrod","text-align":"right"},label:" Next: Make it your own",to:"helloworld"})])])]),_:1})]),_:1})}var pe=c(y,[["render",X]]);export{pe as default};
