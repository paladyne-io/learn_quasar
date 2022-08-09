import{Q as r}from"./QItem.acc1828e.js";import{Q as l}from"./QCard.e5cf0a39.js";import{Q as d}from"./QPage.5f3fd23d.js";import{R as u}from"./use-router-link.383b28db.js";import{_ as c,K as p,L as s,M as n,N as a,U as e,d as h,q as m,Q as t}from"./index.74cda128.js";import"./use-dark.3aba77a5.js";const w=p({name:"IndexPage"}),g=e("div",{class:"heading q-pa-md text-h5 text-bold"}," Introduction ",-1),f=e("div",{class:"text-subheader q-py-sm"}," Do you want to build an app, a game or a website with interactive features? Not sure how to start or which software to use? ",-1),y=e("div",{class:"q-py-sm"},[t(" This series of articles and interactive examples will help you to use the "),e("b",null," Quasar "),t("framework to develop applications that can run on a variety of devices. ")],-1),b=e("div",{class:"heading text-subheader q-py-xs q-pt-md"},"Target",-1),v=t(" People who want to develop an app or interactive website. "),_=e("div",{class:"heading text-subheader q-py-xs q-pt-md"},"Level",-1),x=t(" Beginner "),k=e("div",{class:"heading text-subheader q-py-xs q-pt-md"},"Background",-1),q=e("div",null,[t(" Quasar is built on top of "),e("b",null,"Vue"),t(" which is based on JavaScript. The Vue framework was developed by Evan You and is one of the 3 most popular frameworks, along with React and Angular. JavaScript is a programming language that has been around for almost 30 years and has become more popular over time as the internet has grown. Originally a scripting language for web pages, it has evolved while its core functionality was extended by other libraries. Big steps were the introduction of the node.js framework and npm which bundles Javascript into packages and helps users to find and install them. ")],-1),S=e("div",{class:"q-pt-sm"}," Recently Vue was updated from version 2 to version 3.  Quasar version 2 was released in 2021 and is built on Vue version 3. All these versions and numbers can become overwhelming. The main thing to understand is that if you start with Quasar now, you will be using Vue version 3. ",-1),A=e("div",{class:"text-subheader q-pt-sm"},"What is an SPA and/or a 'web app'?",-1),Q=e("div",{class:"q-pt-sm"},[t("A Single Page Application (SPA) is an application that runs in a web browser and dynamically loads data as required instead of refreshing the whole page. A web-browser based app is easier for users to start using but the functionality is limited. Most users do not expect or want a web page to access personal data (such as their contacts) or access their camera, however they would often accept this in an app. An app can also ask users for permission to access data and access to hardware. "),e("div",{class:"q-pt-sm"},"One of the best features of Quasar is that it allows you to choose the kind of app you build without significantly changing your code. You can start off making an SPA that runs in a browser and then later, build a dedicated mobile app or even a desktop app that runs on on a PC (Windows, Mac OS or Linux)."),e("div",{class:"q-pt-sm"},"Quasar also provides many prebuilt components such as buttons, lists and cards and other utilities that will speed up your development."),e("div",{class:"text-subheader q-pt-sm"}," How much does it cost? "),e("div",{class:"q-pt-sm"},"Generally you don't need to buy anything to start. You can download and install everything for free. However to publish your app on Apple's App Store or Google Play store you will need to pay. At the time of writing, the cost is is $100 per year to join Apple's developer program and $25 for Google."),e("div",{class:"text-subheader q-pt-sm"},"Is it difficult to write a program in Quasar and Vue?")],-1),I=e("div",{class:"q-pt-sm"},"It depends on your experience. It\u2019s like learning a language or a musical instrument. It takes time, commitment, practice and perseverance. Sometimes you will feel like you are making good progress and sometimes you will struggle to fix an issue (bug) or implement a new feature. It generally comes down to how well you understand. Sometimes it can be frustrating but it can also be rewarding. There are many resources and tutorials on-line. ",-1),W=e("div",{class:"heading text-subheader q-pt-sm"}," Some things to consider when making an app... ",-1),V=e("div",{class:"q-pt-sm"}," You don't need to decide these things now but it's useful to consider the scope of your app before you start. ",-1),C=e("div",{class:"q-pt-sm"},[e("ul",null,[e("li",null,"Who are your target users?"),e("li",null,"Which Operating Systems will you support ?(IOS, Android, Mac OS, Windows, Linux)"),e("li",null,"Which types of devices will you support? (Mobile or desktop, custom electronic devices)"),e("li",null,"Will you provide support for displaying the interface in other languages (A multi-lingual app)"),e("li",null,"What types of functionality are required? (Do you need to access hardware including the camera, bluetooth/BLE or NFC?)"),e("li",null,"Color scheme, logos, icons and graphics. (Quasar has some features to help with all of these)"),e("li",null,"Dark mode?"),e("li",null,"What kind of data will you store and where will you store it? (Locally - on the device, or in the cloud, or both)"),e("li",null,"How will you manage user data and privacy?"),e("li",null,"Will your app be used for free, paid (one time) or by subscription?"),e("li",null,"Will users log in and manage their own account or profile?"),e("li",null,"Do you need an administration interface? (often known as an Admin dashboard)"),e("li",null,"How will you market your app?")])],-1),P=e("div",{class:"q-pt-sm"}," If you are not sure, it's better to start simple. Complexity will increase as you add new features or deploy to new types of devices. Complexity will slow you down. However implementing certain features can often be leveraged into another app. Gradually you will build up your own library of code and components. ",-1),B=e("div",{class:"heading text-subheader q-pt-sm"}," Break it down ",-1),T=e("div",{class:"q-pt-sm"},"Speaking of components, it is important to understand from the beginning that it is better to create reusable components rather than what\u2019s known as a monolithic app. Such an app, with hundreds or thousands of lines of code in one file, will quickly become unmanageable. The real benefit of frameworks such as Vue and Quasar is that they encourage using code to build components. If you don\u2019t really understand what this means, don't worry. Just think of lego and when you start building your app, continuously ask yourself, can I separate this code into a component that can be reused in the future? This process of writing and then rearranging or separating code is called refactoring. Refactoring your code periodically will reward you with a manageable code base that you can understand, even when you come back to it later. ",-1),N={class:"text-subheader q-pt-sm"},$=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Getting started ",-1);function L(i,o,O,D,G,H){return s(),n(d,{class:"flex-center q-pa-md"},{default:a(()=>[g,e("div",null,[h(l,{flat:"",class:"q-pa-md"},{default:a(()=>[f,y,b,v,_,x,k,q,S,A,Q,I,W,V,C,P,B,T,e("div",N,[m((s(),n(r,{clickable:"",to:"startprogramming",onClick:o[0]||(o[0]=M=>i.link="startprogramming")},{default:a(()=>[$]),_:1})),[[u]])])]),_:1})])]),_:1})}var F=c(w,[["render",L]]);export{F as default};
