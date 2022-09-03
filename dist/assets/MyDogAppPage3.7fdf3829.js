import{u as H,a as O,b as j,Q as F}from"./QCarouselSlide.9866e785.js";import{u as W,a as Z,b as G,Q as J}from"./QTable.e359fd4b.js";import{f as K,c as s,w as M,o as z,j as X,h as r,N as Y,Z as ee,g as te,az as ae,C as _,r as p,B as ne,q as oe,t as ie,x as v,d as c,D as i,z as b}from"./index.3225310d.js";import{u as le,a as re}from"./use-dark.e7b8f4a0.js";import{Q as se}from"./QCard.87753cf1.js";import{Q as ce}from"./QPage.3cd68b5f.js";import"./touch.70a9dd44.js";import"./selection.db37f9a9.js";import"./QSeparator.64c8aa61.js";import"./use-timeout.a5ac21c3.js";import"./scroll.7d26dd1a.js";import"./use-tick.d2938feb.js";import"./use-key-composition.0a890572.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.4b9610db.js";import"./QItemSection.d2fecc67.js";import"./QItemLabel.95f8e124.js";import"./use-form.d7a5b228.js";import"./use-checkbox.9b2cd2e3.js";const ue=["top","right","bottom","left"],de=["regular","flat","outline","push","unelevated"];var me=K({name:"QCarousel",props:{...le,...H,...W,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>de.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ue.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Z,...O],setup(e,{slots:l}){const{proxy:{$q:n}}=te(),I=re(e,n);let m,g;const{updatePanelsList:q,getPanelContent:w,panelDirectives:f,goToPanel:x,previousPanel:o,nextPanel:u,getEnabledPanels:C,panelIndex:d}=j(),{inFullscreen:T}=G(),A=s(()=>T.value!==!0&&e.height!==void 0?{height:e.height}:{}),y=s(()=>e.vertical===!0?"vertical":"horizontal"),E=s(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(T.value===!0?" fullscreen":"")+(I.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${y.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Q.value}`:"")),$=s(()=>{const t=[e.prevIcon||n.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||n.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&n.lang.rtl===!0?t.reverse():t}),B=s(()=>e.navigationIcon||n.iconSet.carousel.navigationIcon),R=s(()=>e.navigationActiveIcon||B.value),Q=s(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),k=s(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));M(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(m),S())}),M(()=>e.autoplay,t=>{t?S():clearInterval(m)});function S(){const t=ae(e.autoplay)===!0?e.autoplay:5e3;m=setTimeout(t>=0?u:o,Math.abs(t))}z(()=>{e.autoplay&&S()}),X(()=>{clearInterval(m)});function D(t,h){return r("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${t} q-carousel__navigation--${Q.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[r("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},C().map(h))])}function U(){const t=[];if(e.navigation===!0){const h=l["navigation-icon"]!==void 0?l["navigation-icon"]:a=>r(_,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),P=g-1;t.push(D("buttons",(a,N)=>{const V=a.props.name,L=d.value===N;return h({index:N,maxIndex:P,name:V,active:L,btnProps:{icon:L===!0?R.value:B.value,size:"sm",...k.value},onClick:()=>{x(V)}})}))}else if(e.thumbnails===!0){const h=e.controlColor!==void 0?` text-${e.controlColor}`:"";t.push(D("thumbnails",P=>{const a=P.props;return r("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+h,src:a.imgSrc||a["img-src"],onClick:()=>{x(a.name)}})}))}return e.arrows===!0&&d.value>=0&&((e.infinite===!0||d.value>0)&&t.push(r("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${y.value} absolute flex flex-center`},[r(_,{icon:$.value[0],...k.value,onClick:o})])),(e.infinite===!0||d.value<g-1)&&t.push(r("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${y.value} absolute flex flex-center`},[r(_,{icon:$.value[1],...k.value,onClick:u})]))),ee(l.control,t)}return()=>(g=q(l),r("div",{class:E.value,style:A.value},[Y("div",{class:"q-carousel__slides-container"},w(),"sl-cont",e.swipeable,()=>f.value)].concat(U())))}});const ve=i("img",{alt:"Dog image",src:"images/dog.png"},null,-1),ge=i("div",{class:"text-center heading full-width"}," Reggie ",-1),fe={class:"text-center q-pa-md"},he=i("div",{class:"q-ma-md"},[i("b",null,"Method:"),b(" Use a QCarousel with its built in transition triggers, 'transition-prev' and 'transition-next'. The transition is triggered when the slide is changed. ")],-1),_e=i("pre",null,`  <q-carousel height="500px"
    v-model="slides"
      transition-prev="flip-right"
      transition-next="flip-left"
      transition-duration="1500">
    <q-carousel-slide name="image" @click="showDogStats">
    </q-carousel-slide>
  </q-carousel>
  `,-1),be=i("div",{class:"q-pa-md"},[i("b",null," Issues."),b(" The transition is smooth but there is a delay afterwards and the top part of the stats table is visible underneath. I can't find a way to change the focal point of the transition. ")],-1),xe={class:"q-pa-md"},pe=b(" Let's try "),qe=b("another way"),we=b(". "),Ce={class:"text-center q-pa-md"},He={__name:"MyDogAppPage3",setup(e){const l=p(!1),n=p("image"),m=p("Reggie").value+"'s stats",g=p("Show/Hide stats");z(()=>{console.log("mounted")});const q=[{name:"name",required:!0,label:"Exercise",align:"left",field:o=>o.name,format:o=>`${o}`,width:"400px",headerStyle:"width: 400px",sortable:!0},{name:"Time",align:"left",label:"Time (m)",field:"time",sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0}],w=[{name:"Walking",time:30,calories:159,fat:6},{name:"Running in park",time:30,calories:237,fat:9},{name:"Sleeping",time:90,calories:10,fat:1},{name:"Chasing cars",time:10,calories:200,fat:3.7},{name:"Chasing cats",time:10,calories:100,fat:8},{name:"Chasing tail",time:30,calories:50,fat:10}];function f(){console.log("showDogStats: "+l.value),l.value=!l.value,l.value?n.value="stats":n.value="image"}function x(o){console.log("sg BeforeLeave element: "+o)}return(o,u)=>{const C=ne("router-link");return oe(),ie(ce,{class:"q-mt-sm"},{default:v(()=>[c(se,{flat:"",class:""},{default:v(()=>[c(me,{height:"500px",modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=d=>n.value=d),"transition-prev":"flip-right","transition-next":"flip-left","transition-duration":"1500",onBeforeTransition:u[1]||(u[1]=d=>x(o.$el)),animated:""},{default:v(()=>[c(F,{name:"image",class:"text-center",onClick:f},{default:v(()=>[ve,ge]),_:1}),c(F,{height:"500px",name:"stats"},{default:v(()=>[c(J,{width:"400px",dense:"",title:m,rows:w,columns:q,"row-key":"name",onClick:f})]),_:1})]),_:1},8,["modelValue"]),i("div",fe,[c(_,{label:g.value,color:"blue",onClick:f},null,8,["label"])]),he,_e,be,i("div",xe,[pe,c(C,{to:"da_ui_example_5"},{default:v(()=>[qe]),_:1}),we]),i("div",Ce,[c(_,{label:"Home",color:"green",to:"/"})])]),_:1})]),_:1})}}};export{He as default};
