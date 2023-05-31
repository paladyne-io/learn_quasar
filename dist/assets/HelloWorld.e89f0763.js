import{Q as o}from"./QImg.bc73fd12.js";import{Q as i}from"./QItemLabel.8e8ee09c.js";import{k as l,j as d,o as r,h,w as s,c as e,g as a,a as t,m as n,as as c}from"./index.ed6746cf.js";import{Q as p}from"./QSpace.c63c9356.js";import{Q as u}from"./QPage.c882e0b2.js";var m="/assets/indexpage_screenshot.6c13c1da.png";const g=d({name:"HelloWorld",components:{},setup(){}}),f=e("div",{class:"header q-pa-md"}," Making it your own",-1),_=e("div",{class:"text-subheader q-pt-sm"}," The world is your canvas ",-1),w=e("div",{class:"q-pt-sm"}," Your mission today is to get to this (with any picture and text you choose): ",-1),y={class:"q-pt-sm text-center"},b=e("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),v=e("div",{class:"q-pt-md text-subheader"}," 1. Add your own pictures, text and a button to the main screen. ",-1),x=e("div",{class:"q-pa-sm"},[t(" The first page that is displayed when your app starts up is "),e("b",null,"IndexPage.vue"),t(" in the src folder. In this exercise, we'll modify it. One important feature of Quasar, called hot reloading, enables any changes made to this file (when saved) to be immediately shown. This speeds up programming as you don't have to save, compile and restart the app each time. This is how the file looks in Visual Studio Code. ")],-1),q={class:"q-pa-sm"},Q=e("div",{class:"q-pa-sm"}," To demonstrate hot reloading, type a word such as 'Hello' before '<img' and save the file. In the web browser, you should see the word appear to the left of the Quasar icon. As you will see it requires additional work to get the text to appear in the right place, with the correct size and color etc. We will come to that later. ",-1),T=e("div",{class:"q-pt-md text-subheader"}," Change the image ",-1),k=e("div",{class:"q-pt-sm"},[t(" There are two places where images can be added to the project: "),e("ol",null,[e("li",null,[t("in the "),e("b",null,"public/images"),t(` folder (referenced in Quasar as: 'src="images/img.png')`)]),e("li",null,[t("in the "),e("b",null,"src/assets folder"),t(` (referenced in Quasar as: 'src="~assets/img.png') `)])])],-1),I=e("pre",null,`<img
  alt="My image"
  src="~assets/myimage.png" <- Change this to the name of your image
  style="width: 200px; height: 200px" <- Change the size here
  <!-- Either width or height can be omitted to retain proportions-->
>
`,-1),A=e("div",{class:"q-pt-md text-subheader"}," Add some text ",-1),C=e("div",{class:"q-py-sm"}," We'll add some text below the image for a description, label or accreditation. We add a 'div' around the text as a container to help keep it in the center of the page. ",-1),P=e("pre",null,`<div class="full-width text-center text-h6">
    Quasar image courtesy of NASA
</div>
`,-1),M=e("div",{class:"q-py-sm"},[t(" The words written after 'class=' are keywords Quasar recognizes to help with layout. A list of classes related to typography and layout can be found "),e("a",{href:" https://quasar.dev/style/typography"},"on the Quasar website"),t(". ")],-1),V=e("div",{class:"q-py-sm"},[t(" This button will allow the user to go to a new page we will create next. Note the '"),e("b",null,"q-btn"),t("' tag. This is one of Quasar's prebuilt Vue components mentioned in the introduction. There are many of them with descriptions and examples "),e("a",{href:"https://quasar.dev/vue-components"},"on the Quasar website"),t(". Feel free to change the color, label etc. ")],-1),N=e("pre",null,`<div class="text-center">
  <q-btn label="My Page" color="blue" to="mypage"></q-btn>
</div>
`,-1),j={class:"q-pt-sm"},W=e("i",null,"pagename",-1),S=e("b",null,"'MyPage.vue'",-1),z=e("div",{class:"note q-pt-sm"},` Note. An extension called 'Duplicate action' can be installed in VS Code to allow you to duplicate files in the EXPLORER panel. After installing the extension, right-click on a file to show a menu with "Duplicate file or directory" at the bottom. `,-1),B=e("pre",null,`<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>
`,-1),L=e("div",{class:"q-pt-sm"},[t(` 2. While you have added a new page, Quasar doesn't know about it. You might think that it could be automatically detected but it isn't - you have to add this page to the Router. The router is a common concept for frameworks like Vue. It's job is to manage and load pages. (It took me a while to get my head around this concept so if it's confusing, don't worry.) Locate the file "routes.js" in the router folder. Copy and paste one of the 'children' (the line between {}), then rename the `),e("b",null,"path"),t(" and "),e("b",null,"page title"),t(" as below. Make sure to add a comma after the previous child. "),e("pre",null,[t("{path: '"),e("b",null,"mypage"),t("', component: () => import('pages/"),e("b",null,"MyPage.vue"),t(`') }
`)])],-1),R=e("div",{class:"q-pt-sm"}," If you add a child for a page that doesn't exist you will see an error when you save the Routes.js file. The error will disappear once you add the page (assuming it is the exactly the name specified on the routes file). ",-1),Y=e("div",{class:"q-pt-sm"},` 'path' is the name that will appear after the "/" in the browser's address bar*. `,-1),$=e("div",{class:"q-pt-sm"},` *You may notice the "#" in the address. This 'hash' mode is the default and can be changed in the Quasar.conf file. `,-1),E={class:"row full-width text-subheader q-pt-sm"};function H(D,O,F,X,G,J){return r(),h(u,{class:"flex-center q-pa-md"},{default:s(()=>[f,e("div",null,[a(c,{flat:"","q-card":"",class:"q-pa-md"},{default:s(()=>[_,w,e("div",y,[a(o,{src:"images/MyAppTopPage.png",alt:"Quasar default app screen",style:{"max-width":"500px"}})]),b,e("div",null,[v,x,e("div",q,[a(o,{src:m,alt:"Index page screen in Visual Studio Code",style:{"max-width":"600px"}})]),Q,T,k,t(" You can add your own images to either of these folders and then change the code in the 'img' tag to display them, like this. "),I,A,C,P,M]),a(i,{class:"q-pt-md text-subheader"},{default:s(()=>[t(" Add a button ")]),_:1}),V,N,a(i,{class:"q-pt-md text-subheader"},{default:s(()=>[t(" Add a new page ")]),_:1}),e("div",j,[t(' 1. There are a few ways to create a new page, including using the command, "quasar new page '),W,t(`" in the CLI (Terminal). I find it easiest to copy an existing page (one of the 'xxx.vue' files in the pages folder) or create and save a new file. The contents can be as simple as the default Quasar 'IndexPage.vue' page shown below. The filename must have 2 or more words joined (capitalized, without spaces) like this: `),S,t(". This is called camel case. "),z,B,L,R,Y,$,e("div",E,[a(n,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"startprogramming"}),a(p),a(n,{outline:"",style:{color:"goldenrod","text-align":"right"},label:"Next: Make it move",to:"programming1"})])])]),_:1})])]),_:1})}var ae=l(g,[["render",H]]);export{ae as default};