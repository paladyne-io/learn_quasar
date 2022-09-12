import{Q as d}from"./QCard.c8cb7f65.js";import{Q as w}from"./QTable.66b628b1.js";import{r,o as x,B as q,q as C,t as S,x as i,d as t,l as m,v as u,D as e,k,C as f,z as l}from"./index.a996f8d0.js";import{Q as T}from"./QPage.93e47c7d.js";import"./use-dark.3f581537.js";import"./QSeparator.40315d60.js";import"./use-timeout.2df3b509.js";import"./scroll.2e50e929.js";import"./use-tick.2e0f2b18.js";import"./use-key-composition.d96164ce.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.9284fc34.js";import"./QItemSection.6b51a90b.js";import"./QItemLabel.17e63169.js";import"./selection.a94885c1.js";import"./use-form.f7e27a42.js";import"./use-checkbox.4eb08771.js";const y=e("div",{class:"heading full-width"},"Reggie",-1),H={class:"q-pa-md"},V={class:"full-width text-center"},Q={class:"text-center q-pa-md"},D=e("div",{class:"q-pa-md"},[e("b",null,"Method:"),l(" Same as the first example, wrap the q-card in a <Transition> with 'v-show' or 'v-if' and a variable (i.e 'dogStatsVisible'). The transition is triggered when the value of the variable is changed. ")],-1),B=e("pre",null,`  <transition
    leave-active-class="animated flipOutY"
    enter-active-class="animated flipInY"
    @after-leave="imageHidden"
  >
  <q-card v-show="dogStatsVisible">
  </transition >
  `,-1),N=e("div",{class:"q-pa-md"},[e("b",null,"Issues."),l(" The stats table is displayed too soon. The flip doesn't reval the other card in a natural way. Can partially fix by 'listening' to the imageHidden or statsHidden events, however the transition effect issue is still not resolved. ")],-1),Y={class:"q-pa-md"},I=l(" We will try some alternative approaches in the "),M=l("next examples"),R=l(". "),A={class:"text-center q-pa-md"},oe={__name:"MyDogAppPage2",setup(L){const a=r(!1),s=r(!0),p=r("Reggie").value+"'s stats",o=r("Show stats");x(()=>{console.log("mounted")});const g=[{name:"name",required:!0,label:"Exercise",align:"left",field:n=>n.name,format:n=>`${n}`,sortable:!0},{name:"Time",align:"left",label:"Time (m)",field:"time",sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0}],v=[{name:"Walking",time:30,calories:159,fat:6},{name:"Running in park",time:30,calories:237,fat:9},{name:"Sleeping",time:90,calories:10,fat:1},{name:"Chasing cars",time:10,calories:200,fat:3.7},{name:"Chasing cats",time:10,calories:100,fat:8},{name:"Chasing tail",time:30,calories:50,fat:10}];function h(){console.log("imageHidden - dogStatsVisible: "+a.value),a.value=!a.value}function c(){console.log("flip"),s.value?(s.value=!1,o.value="Hide stats"):(s.value=!0,a.value=!1,o.value="Show stats")}function _(){console.log("showDogStats: "+a.value),s.value=!1,o.value="Hide stats"}return(n,P)=>{const b=q("router-link");return C(),S(T,{class:"flex flex-center column justify-start q-mt-lg"},{default:i(()=>[t(k,{"leave-active-class":"animated flipOutY","enter-active-class":"animated flipInY",onAfterLeave:h},{default:i(()=>[m(t(d,{flat:"",class:"col column"},{default:i(()=>[e("div",{class:"text-center"},[e("img",{class:"q-ma-md",alt:"Dog image",src:"images/dog.png",onClick:_}),y])]),_:1},512),[[u,s.value]])]),_:1}),m(t(d,{flat:"",class:"col column"},{default:i(()=>[e("div",H,[t(w,{dense:"",title:p,rows:v,columns:g,"row-key":"name",onClick:c})])]),_:1},512),[[u,a.value]]),e("div",V,[e("div",Q,[t(f,{label:o.value,color:"blue",onClick:c},null,8,["label"])])]),D,B,N,e("div",Y,[I,t(b,{to:"da_ui_example_3"},{default:i(()=>[M]),_:1}),R]),e("div",A,[t(f,{label:"Home",color:"green",to:"/"})])]),_:1})}}};export{oe as default};