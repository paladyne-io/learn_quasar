import{Q as m}from"./QCarouselSlide.e0fcf47e.js";import{Q as f}from"./QTable.4898b777.js";import{y as i,Y as p,o as _,h,w as s,g as e,bm as b,c as a,M as c,as as v,a as k}from"./index.d0600fff.js";import{Q as x}from"./QPage.98f2eec1.js";import"./touch.70a9dd44.js";import"./selection.0f580cd2.js";import"./QList.c005b24c.js";import"./rtl.b51694b1.js";import"./QItem.48ead3da.js";import"./QItemLabel.a843cfd3.js";import"./format.a33550d6.js";import"./use-fullscreen.75f4fae1.js";const C=a("h1",{class:"slide-group__header",key:"title"},[k("FLIPing Slides With "),a("code",null,"<transition-group>")],-1),w=a("img",{alt:"Dog image",src:"/images/dog.png",key:"img"},null,-1),y=a("div",{class:"text-center heading full-width",key:"label"}," Reggie ",-1),Q={class:"full-width text-center"},B={class:"text-center q-pa-md"},S={class:"text-center q-pa-md"},H={__name:"MyDogAppPage4",setup(T){const o=i(!1),n=i("image"),r=i("Reggie").value+"'s stats";p(()=>{console.log("mounted")});const d=[{name:"name",required:!0,label:"Exercise",align:"left",field:t=>t.name,format:t=>`${t}`,sortable:!0},{name:"Time",align:"left",label:"Time (m)",field:"time",sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0}],g=[{name:"Walking",time:30,calories:159,fat:6},{name:"Running in park",time:30,calories:237,fat:9},{name:"Sleeping",time:90,calories:10,fat:1},{name:"Chasing cars",time:10,calories:200,fat:3.7},{name:"Chasing cats",time:10,calories:100,fat:8},{name:"Chasing tail",time:30,calories:50,fat:10}];function l(){console.log("showDogStats: "+o.value),o.value=!o.value,o.value?n.value="stats":n.value="image"}function u(t){console.log("sg BeforeLeave element: "+t)}return(t,q)=>(_(),h(x,{class:"flex flex-center column justify-start q-mt-sm"},{default:s(()=>[e(v,null,{default:s(()=>[e(b,{tag:"div",class:"slide-group",name:"flip",onBeforeLeave:u},{default:s(()=>[C,e(m,{name:"image",onClick:l,key:"slide1"},{default:s(()=>[w,y]),_:1}),e(m,{height:"500px",name:"stats",key:"slide2"},{default:s(()=>[e(f,{dense:"",title:r,rows:g,columns:d,"row-key":"name",onClick:l})]),_:1})]),_:1}),a("div",Q,[a("div",B,[e(c,{label:r,color:"blue",onClick:l})])]),a("div",S,[e(c,{label:"Home",color:"green",to:"/"})])]),_:1})]),_:1}))}};export{H as default};
