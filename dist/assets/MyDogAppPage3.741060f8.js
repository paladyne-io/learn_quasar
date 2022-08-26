import{u as H,a as O,b as W,Q as F}from"./QCarouselSlide.777c1482.js";import{u as j,a as G,b as J,Q as K}from"./QTable.24327630.js";import{Q as _}from"./QBtn.2602dc31.js";import{u as X,a as Y}from"./use-dark.fdf330d5.js";import{c as Z,e as ee,a as te}from"./render.89c73a8b.js";import{c as s,w as M,o as A,f as ae,h as r,af as ne,g as oe,r as x,n as ie,p as le,q as v,y as re,d as c,z as i,u as b}from"./index.2cb900a2.js";import{Q as se}from"./QCard.ca82f2fe.js";import{Q as ce}from"./QPage.dc878fe2.js";import"./touch.70a9dd44.js";import"./selection.255ff2e9.js";import"./use-router-link.c6998c77.js";import"./QIcon.98fbb88b.js";import"./use-size.ccee50a5.js";import"./QSeparator.3e708cb0.js";import"./use-tick.d2600f28.js";import"./use-key-composition.1ebc182e.js";import"./QSpinner.bf66351e.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.87795a80.js";import"./QItemSection.828d90da.js";import"./QItemLabel.070b2558.js";import"./use-form.25ebc042.js";import"./use-checkbox.02dcda63.js";const ue=["top","right","bottom","left"],me=["regular","flat","outline","push","unelevated"];var de=Z({name:"QCarousel",props:{...X,...H,...j,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>me.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ue.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...G,...O],setup(e,{slots:l}){const{proxy:{$q:n}}=oe(),I=Y(e,n);let d,g;const{updatePanelsList:q,getPanelContent:w,panelDirectives:f,goToPanel:p,previousPanel:o,nextPanel:u,getEnabledPanels:C,panelIndex:m}=W(),{inFullscreen:T}=J(),E=s(()=>T.value!==!0&&e.height!==void 0?{height:e.height}:{}),y=s(()=>e.vertical===!0?"vertical":"horizontal"),z=s(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(T.value===!0?" fullscreen":"")+(I.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${y.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Q.value}`:"")),$=s(()=>{const t=[e.prevIcon||n.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||n.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&n.lang.rtl===!0?t.reverse():t}),B=s(()=>e.navigationIcon||n.iconSet.carousel.navigationIcon),R=s(()=>e.navigationActiveIcon||B.value),Q=s(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),k=s(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));M(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(d),S())}),M(()=>e.autoplay,t=>{t?S():clearInterval(d)});function S(){const t=ne(e.autoplay)===!0?e.autoplay:5e3;d=setTimeout(t>=0?u:o,Math.abs(t))}A(()=>{e.autoplay&&S()}),ae(()=>{clearInterval(d)});function D(t,h){return r("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${t} q-carousel__navigation--${Q.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[r("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},C().map(h))])}function U(){const t=[];if(e.navigation===!0){const h=l["navigation-icon"]!==void 0?l["navigation-icon"]:a=>r(_,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),P=g-1;t.push(D("buttons",(a,N)=>{const V=a.props.name,L=m.value===N;return h({index:N,maxIndex:P,name:V,active:L,btnProps:{icon:L===!0?R.value:B.value,size:"sm",...k.value},onClick:()=>{p(V)}})}))}else if(e.thumbnails===!0){const h=e.controlColor!==void 0?` text-${e.controlColor}`:"";t.push(D("thumbnails",P=>{const a=P.props;return r("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+h,src:a.imgSrc||a["img-src"],onClick:()=>{p(a.name)}})}))}return e.arrows===!0&&m.value>=0&&((e.infinite===!0||m.value>0)&&t.push(r("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${y.value} absolute flex flex-center`},[r(_,{icon:$.value[0],...k.value,onClick:o})])),(e.infinite===!0||m.value<g-1)&&t.push(r("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${y.value} absolute flex flex-center`},[r(_,{icon:$.value[1],...k.value,onClick:u})]))),te(l.control,t)}return()=>(g=q(l),r("div",{class:z.value,style:E.value},[ee("div",{class:"q-carousel__slides-container"},w(),"sl-cont",e.swipeable,()=>f.value)].concat(U())))}});const ve=i("img",{alt:"Dog image",src:"images/dog.png"},null,-1),ge=i("div",{class:"text-center heading full-width"}," Reggie ",-1),fe={class:"text-center q-pa-md"},he=i("div",{class:"q-ma-md"},[i("b",null,"Method:"),b(" Use a QCarousel with its built in transition triggers, 'transition-prev' and 'transition-next'. The transition is triggered when the slide is changed. ")],-1),_e=i("pre",null,`  <q-carousel height="500px"
    v-model="slides"
      transition-prev="flip-right"
      transition-next="flip-left"
      transition-duration="1500">
    <q-carousel-slide name="image" @click="showDogStats">
    </q-carousel-slide>
  </q-carousel>
  `,-1),be=i("div",{class:"q-pa-md"},[i("b",null," Issues."),b(" The transition is smooth but there is a delay afterwards and the top part of the stats table is visible underneath. ")],-1),pe={class:"q-pa-md"},xe=b(" Let's try "),qe=b("another way"),we=b(". "),Ce={class:"text-center q-pa-md"},Ge={__name:"MyDogAppPage3",setup(e){const l=x(!1),n=x("image"),d=x("Reggie").value+"'s stats",g=x("Show/Hide stats");A(()=>{console.log("mounted")});const q=[{name:"name",required:!0,label:"Exercise",align:"left",field:o=>o.name,format:o=>`${o}`,width:"400px",headerStyle:"width: 400px",sortable:!0},{name:"Time",align:"left",label:"Time (m)",field:"time",sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0}],w=[{name:"Walking",time:30,calories:159,fat:6},{name:"Running in park",time:30,calories:237,fat:9},{name:"Sleeping",time:90,calories:10,fat:1},{name:"Chasing cars",time:10,calories:200,fat:3.7},{name:"Chasing cats",time:10,calories:100,fat:8},{name:"Chasing tail",time:30,calories:50,fat:10}];function f(){console.log("showDogStats: "+l.value),l.value=!l.value,l.value?n.value="stats":n.value="image"}function p(o){console.log("sg BeforeLeave element: "+o)}return(o,u)=>{const C=re("router-link");return ie(),le(ce,{class:"q-mt-sm"},{default:v(()=>[c(se,{flat:"",class:""},{default:v(()=>[c(de,{height:"500px",modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=m=>n.value=m),"transition-prev":"flip-right","transition-next":"flip-left","transition-duration":"1500",onBeforeTransition:u[1]||(u[1]=m=>p(o.$el)),animated:""},{default:v(()=>[c(F,{name:"image",class:"text-center",onClick:f},{default:v(()=>[ve,ge]),_:1}),c(F,{height:"500px",name:"stats"},{default:v(()=>[c(K,{width:"400px",dense:"",title:d,rows:w,columns:q,"row-key":"name",onClick:f})]),_:1})]),_:1},8,["modelValue"]),i("div",fe,[c(_,{label:g.value,color:"blue",onClick:f},null,8,["label"])]),he,_e,be,i("div",pe,[xe,c(C,{to:"5"},{default:v(()=>[qe]),_:1}),we]),i("div",Ce,[c(_,{label:"Home",color:"green",to:"/"})])]),_:1})]),_:1})}}};export{Ge as default};
