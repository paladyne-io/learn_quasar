import{Q as m}from"./QCarouselSlide.efad60d2.js";import{Q as f}from"./QTable.bef20363.js";import{r as l,I as p,i as _,j as h,k as o,l as e,aK as v,x as t,q as c,n as b}from"./index.5aff0604.js";import{Q as k}from"./QCard.8e97be60.js";import{Q as x}from"./QPage.7820131b.js";import"./touch.70a9dd44.js";import"./selection.28907003.js";import"./QSeparator.42dae9a7.js";import"./use-dark.3ed48953.js";import"./use-timeout.3cc5e849.js";import"./scroll.d068e769.js";import"./use-tick.23e33080.js";import"./use-key-composition.bc68747c.js";import"./uid.42677368.js";import"./QItem.5e5f19f5.js";import"./QItemLabel.bda6d7ba.js";import"./use-form.031b2270.js";import"./format.a33550d6.js";import"./use-checkbox.2bde7476.js";import"./use-fullscreen.ebe50e74.js";const C=t("h1",{class:"slide-group__header",key:"title"},[b("FLIPing Slides With "),t("code",null,"<transition-group>")],-1),Q=t("img",{alt:"Dog image",src:"/images/dog.png",key:"img"},null,-1),w=t("div",{class:"text-center heading full-width",key:"label"}," Reggie ",-1),y={class:"full-width text-center"},B={class:"text-center q-pa-md"},S={class:"text-center q-pa-md"},X={__name:"MyDogAppPage4",setup(T){const s=l(!1),r=l("image"),n=l("Reggie").value+"'s stats";p(()=>{console.log("mounted")});const d=[{name:"name",required:!0,label:"Exercise",align:"left",field:a=>a.name,format:a=>`${a}`,sortable:!0},{name:"Time",align:"left",label:"Time (m)",field:"time",sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0}],g=[{name:"Walking",time:30,calories:159,fat:6},{name:"Running in park",time:30,calories:237,fat:9},{name:"Sleeping",time:90,calories:10,fat:1},{name:"Chasing cars",time:10,calories:200,fat:3.7},{name:"Chasing cats",time:10,calories:100,fat:8},{name:"Chasing tail",time:30,calories:50,fat:10}];function i(){console.log("showDogStats: "+s.value),s.value=!s.value,s.value?r.value="stats":r.value="image"}function u(a){console.log("sg BeforeLeave element: "+a)}return(a,N)=>(_(),h(x,{class:"flex flex-center column justify-start q-mt-sm"},{default:o(()=>[e(k,null,{default:o(()=>[e(v,{tag:"div",class:"slide-group",name:"flip",onBeforeLeave:u},{default:o(()=>[C,e(m,{name:"image",onClick:i,key:"slide1"},{default:o(()=>[Q,w]),_:1}),e(m,{height:"500px",name:"stats",key:"slide2"},{default:o(()=>[e(f,{dense:"",title:n,rows:g,columns:d,"row-key":"name",onClick:i})]),_:1})]),_:1}),t("div",y,[t("div",B,[e(c,{label:n,color:"blue",onClick:i})])]),t("div",S,[e(c,{label:"Home",color:"green",to:"/"})])]),_:1})]),_:1}))}};export{X as default};