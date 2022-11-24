import{Q as l}from"./QItem.0e413009.js";import{Q as r}from"./QPage.8dbc33ed.js";import{_ as d,f as _,i as a,j as o,k as i,n as t,x as e,b as c,al as h}from"./index.6766e7f5.js";import"./use-dark.fcf081d7.js";const u=_({name:"DotEnfFilePage",setup(){return{}}}),p=e("div",{class:"q-py-md text-h5 text-bold"},"Dot env file",-1),m=e("div",{class:"q-pt-sm text-subheader"}," Background ",-1),f=e("div",{class:"q-pt-sm"}," The key necessary to use emailjs should not be visible when viewing the source of our app when it is running in a web browser. Using an .env file is a common way to separate keys from the code to keep them away from prying eyes. If you are not aware, beginning a filename with '.' makes it invisible in the file system on your computer. This may make it difficult to edit the file but each OS offers a way to display hidden files. For now you can start with a normal text file and then change the name to '.env' when you save it. Make sure that the format is plain text, not rtf or another styled text format. The contents can be just as below. Replace the text: 'the_key_from_the_emailjs_dashboard' with your key. ",-1),v=e("div",{class:"q-pt-md text-subheader"}," 1. Create and configure a '.env' (dot env) file. ",-1),b=e("div",{class:"q-pa-sm bg-blue-2"},[e("pre",null,`  APP_NAME=learn_quasar
  EMAILJS_PUBLIC_KEY=the_key_from_the_emailjs_dashboard
`)],-1),y=e("div",{class:"q-pt-md text-subheader"}," 2. Install and configure Quasar to use the dot env file ",-1),g=e("div",null,[t(" First, install the "),e("b",null,"dotenv"),t(" library like before, using this command: ")],-1),w=e("div",{class:"q-pa-sm bg-blue-2"}," npm add --include=dev dotenv ",-1),x=e("div",{class:"q-px-sm"}," Then add the following line to the 'build:' section of the Quasar.conf file:",-1),k=e("div",{class:"q-pa-sm bg-blue-2"},[e("b",null,"env: require('dotenv').config().parsed,")],-1),E=e("div",{class:"q-px-sm"}," Now the EMAILJS_PUBLIC_KEY will be read from the '.env' file by Quasar and be accessible in your app like this: ",-1),I=e("div",{class:"q-pa-sm bg-blue-2"},"Const EMAILJS_PUBLIC_KEY-process. env. EMAILJS_PUBLIC_KEY",-1),q=e("div",{class:"q-px-sm"}," You can do the same with the EMAILJS_SERVICE_ID and EMAILJS_TEMPLATE_ID if you like although these are not as sensitive as the API key. ",-1),L={class:"row text-subheader q-pt-sm"};function P(n,s,A,C,M,B){return a(),o(r,{class:"flex-center q-pa-md"},{default:i(()=>[p,t(" This step is to prepare to deploy your app on a public web server. "),e("div",null,[m,f,v,b,y,g,w,x,k,E,I,q,e("div",L,[c((a(),o(l,{class:"col",clickable:"",to:"startprogramming",onClick:s[0]||(s[0]=D=>n.link="startprogramming")},{default:i(()=>[t(" Previous ")]),_:1})),[[h]])])])]),_:1})}var J=d(u,[["render",P]]);export{J as default};
