import{Q as o}from"./QSpace.75c45a76.js";import{i,j as r,k as s,l as t,x as e,q as n,n as a}from"./index.9c0bb123.js";import{Q as c}from"./QCard.1ac4c934.js";import{Q as u}from"./QPage.b24667f3.js";import"./use-dark.dbce0347.js";const l=e("div",{class:"heading q-pa-md text-h5 text-bold"},"Supabase Introduction",-1),p=e("div",{class:"q-pa-sm"},[e("b",null,[e("a",{href:"https://supabase.com"},"Supabase ")]),a(" is an open-source alternative to "),e("a",{href:"https://firebase.google.com"}," Google's Firebase service"),a(". ")],-1),d=e("div",{class:"q-pa-sm"},[a(" The "),e("a",{href:"https://supabase.com/docs"},"feature list for Supabase"),a(" is growing continuously. It provides much of the functionality that used to require a dedicated server (and all the hassle that goes with it). Supabase provides ways to register and authenticate users, as well as a database to store information as well as storage for files (such as profile pictures). Recent additions to the service include edge functions and real-time features that enable your app to use immediate notifications, instant messaging, event synchronization, etc. ")],-1),h=e("div",{class:"q-pa-sm"},[a(" A "),e("a",{href:"https://supabase.com/pricing"}," trial account"),a(" allows you to run two projects for free. You can have more, but only 2 projects can be active at one time. If your project is not used/accessed for a week it will be automatically 'hibernated' but you can restart it. When you are ready, a Pro account costs US$25 per month. Perhaps not cheap but with careful management, it could be used for more than one project and provides a lot of capacity. ")],-1),m=e("div",{class:"q-pa-sm"},[a(" Supabase is easy to integrate with front-end frameworks such as Vue/Quasar and provides a web browser interface to manage the database. Supabase provides documentation explaining how to set up a project for many common frameworks including Vue. "),e("a",{href:"https://supabase.com/docs/guides/with-vue-3"},"Supabase with Vue3")],-1),f=e("div",{class:"q-pa-sm"},[a(" There are some other tutorials online such as "),e("a",{href:"https://vueschool.io/articles/vuejs-tutorials/use-supabase-auth-with-vue-js-3/"},"this one"),a(", that explain in detail how to setup and use Supabase so please refer to them as well if you want to. ")],-1),b=e("div",{class:"q-pa-sm"},[a(" Get started by installing the current (V1) client, used by most tutorials, by running this command: "),e("pre",null,"npm install @supabase/supabase-js "),a(" or the latest "),e("a",{href:"https://supabase.com/blog/supabase-js-v2"}," V2 Release candidate JavaScript Client"),a(": "),e("pre",null,"npm i @supabase/supabase-js@rc")],-1),_=e("div",{class:"q-pa-sm"},[a(" Quasar provides a unique boot file functionality to initialize code when your app starts. There are 2 steps, The first is to add the javascript boot file and the second is to 'activate' it in the boot section of the Quasar.conf (or Quasar.config) file. "),e("pre",null,`// --> boot files are part of "main.js"
// https://v2.quasar.dev/quasar-cli/boot-files
boot: [
  'supabase', 'i18n'
],
`)],-1),v=e("div",null," To be continued... ",-1),g={class:"row full-width text-subheader q-pt-sm"},k={__name:"SupabaseIntroPage",setup(w){return(y,q)=>(i(),r(u,{class:"flex-center q-pa-md"},{default:s(()=>[l,t(c,{flat:"",class:"q-px-md"},{default:s(()=>[p,d,h,m,f,b,_,v,e("div",g,[t(o),t(n,{outline:"",style:{color:"goldenrod"},label:"Home",to:"/"})])]),_:1})]),_:1}))}};export{k as default};
