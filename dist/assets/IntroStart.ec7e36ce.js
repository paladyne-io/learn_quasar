import{Q as s}from"./QItemLabel.da6d8d20.js";import{Q as d}from"./QItemSection.27713675.js";import{Q as u}from"./QList.21ebb759.js";import{Q as c}from"./QItem.657af415.js";import{Q as p}from"./QCard.f70413e5.js";import{Q as h}from"./QPage.85cff9ba.js";import{R as m}from"./use-router-link.a2c7a1d6.js";import{_ as w,K as f,L as i,M as r,N as t,U as e,d as o,q as g,Q as a}from"./index.bb9b4ba7.js";import"./use-dark.8ed95cee.js";const y=f({name:"IndexPage"}),v=e("div",{class:"heading q-pa-md text-h5 text-bold"}," Introduction ",-1),b=e("div",{class:"text-subheader q-py-sm"}," Do you want to build an app, a game or a website with interactive features? Not sure how to start or which software to use? ",-1),_=e("div",{class:"q-py-sm"},[a(" This series of articles and interactive examples will help you to use the "),e("b",null," Quasar "),a("framework to develop applications that can run on a variety of devices. ")],-1),x=e("div",{class:"heading text-subheader q-py-xs q-pt-md"},"Target",-1),k=a(" People who want to develop an app or interactive website. "),q=e("div",{class:"heading text-subheader q-py-xs q-pt-md"},"Level",-1),Q=a(" Beginner "),S=e("div",{class:"heading text-subheader q-py-xs q-pt-md"},"Background",-1),I=e("div",null,[a(" Quasar is built on top of "),e("b",null,"Vue"),a(" which is based on JavaScript. The Vue framework was developed by Evan You and is one of the 3 most popular frameworks, along with React and Angular. JavaScript is a programming language that has been around for almost 30 years and has become more popular over time as the internet has grown. Originally a scripting language for web pages, it has evolved while its core functionality was extended by other libraries. Big steps were the introduction of the node.js framework and npm which bundles Javascript into packages and helps users to find and install them. ")],-1),A=e("a",{href:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"},"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/",-1),W=e("a",{href:"https://vuejs.org"},"https://vuejs.org",-1),V=e("a",{href:"https://javascript.info/hello-world"},"https://javascript.info/hello-world",-1),C=e("div",{class:"q-pt-sm"}," Recently Vue was updated from version 2 to version 3. Some libraries and tutorials may not yet have been updated so this might be confusing when looking online. Quasar version 2 was released in 2021 and is built on Vue version 3. All these versions and numbers can become overwhelming. The main thing to understand is that if you start with Quasar now, you will be using Vue version 3. ",-1),P=e("div",{class:"text-subheader q-pt-sm"},"What is an SPA and/or a 'web app'?",-1),B=e("div",{class:"q-pt-sm"},[a("A Single Page Application (SPA) is an application that runs in a web browser and dynamically loads data as required instead of refreshing the whole page. A web-browser based app is easier for users to start using but the functionality is limited. Most users do not expect or want a web page to access personal data (such as their contacts) or access their camera, however they would often accept this in an app. An app can also ask users for permission to access data and access to hardware. "),e("div",{class:"q-pt-sm"},"One of the best features of Quasar is that it allows you to choose the kind of app you build without significantly changing your code. You can start off making an SPA that runs in a browser and then later, build a dedicated mobile app or even a desktop app that runs on on a PC (Windows, Mac OS or Linux)."),e("div",{class:"q-pt-sm"},"Quasar also provides many prebuilt components such as buttons, lists and cards and other utilities that will speed up your development."),e("div",{class:"text-subheader q-pt-sm"}," How much does it cost? "),e("div",{class:"q-pt-sm"},"Generally you don't need to buy anything to start. You can download and install everything for free. However to publish your app on Apple's App Store or Google Play store you will need to pay. At the time of writing, the cost is is $100 per year to join Apple's developer program and $25 for Google."),e("div",{class:"text-subheader q-pt-sm"},"Is it difficult to write a program in Quasar and Vue?")],-1),L=e("div",{class:"q-pt-sm"},"It depends on your experience. It\u2019s like learning a language or a musical instrument. It takes time, commitment, practice and perseverance. Sometimes you will feel like you are making good progress and sometimes you will struggle to fix an issue (bug) or implement a new feature. It generally comes down to how well you understand. Sometimes it can be frustrating but it can also be rewarding. There are many resources and tutorials on-line. ",-1),T=e("div",{class:"heading text-subheader q-pt-sm"}," Some things to consider when making an app... ",-1),N=e("div",{class:"q-pt-sm"}," You don't need to decide these things now but it's useful to consider the scope of your app before you start. ",-1),$=e("div",{class:"q-pt-sm"},[e("ul",null,[e("li",null,"Who are your target users?"),e("li",null,"Which Operating Systems will you support ?(IOS, Android, Mac OS, Windows, Linux)"),e("li",null,"Which types of devices will you support? (Mobile or desktop, custom electronic devices)"),e("li",null,"Will you provide support for displaying the interface in other languages (A multi-lingual app)"),e("li",null,"What types of functionality are required? (Do you need to access hardware including the camera, bluetooth/BLE or NFC?)"),e("li",null,"Color scheme, logos, icons and graphics. (Quasar has some features to help with all of these)"),e("li",null,"Dark mode?"),e("li",null,"What kind of data will you store and where will you store it? (Locally - on the device, or in the cloud, or both)"),e("li",null,"How will you manage user data and privacy?"),e("li",null,"Will your app be used for free, paid (one time) or by subscription?"),e("li",null,"Will users log in and manage their own account or profile?"),e("li",null,"Do you need an administration interface? (often known as an Admin dashboard)"),e("li",null,"How will you market your app?")])],-1),j=e("div",{class:"q-pt-sm"}," If you are not sure, it's better to start simple. Complexity will increase as you add new features or deploy to new types of devices. Complexity will slow you down. However implementing certain features can often be leveraged into another app. Gradually you will build up your own library of code and components. ",-1),O=e("div",{class:"heading text-subheader q-pt-sm"}," Break it down ",-1),D=e("div",{class:"q-pt-sm"},"Speaking of components, it is important to understand from the beginning that it is better to create reusable components rather than what\u2019s known as a monolithic app. Such an app, with hundreds or thousands of lines of code in one file, will quickly become unmanageable. The real benefit of frameworks such as Vue and Quasar is that they encourage using code to build components. If you don\u2019t really understand what this means, don't worry. Just think of lego and when you start building your app, continuously ask yourself, can I separate this code into a component that can be reused in the future? This process of writing and then rearranging or separating code is called refactoring. Refactoring your code periodically will reward you with a manageable code base that you can understand, even when you come back to it later. ",-1),G={class:"text-subheader q-pt-sm"},H=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Getting started ",-1);function M(l,n,R,J,Y,E){return i(),r(h,{class:"flex-center q-pa-md"},{default:t(()=>[v,e("div",null,[o(p,{flat:"",class:"q-pa-md"},{default:t(()=>[b,_,x,k,q,Q,S,I,o(u,{class:"q-pa-sm"},{default:t(()=>[o(d,null,{default:t(()=>[o(s,null,{default:t(()=>[A]),_:1}),o(s,null,{default:t(()=>[W]),_:1}),o(s,null,{default:t(()=>[V]),_:1})]),_:1})]),_:1}),C,P,B,L,T,N,$,j,O,D,e("div",G,[g((i(),r(c,{clickable:"",to:"startprogramming",onClick:n[0]||(n[0]=z=>l.link="startprogramming")},{default:t(()=>[H]),_:1})),[[m]])])]),_:1})])]),_:1})}var se=w(y,[["render",M]]);export{se as default};
