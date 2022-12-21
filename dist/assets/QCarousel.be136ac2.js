import{c as M,d as V,f as z,j as o,w as S,V as L,o as O,h as t,X as j,k as U,b8 as X,F as f,a4 as G}from"./index.16939dca.js";import{u as H,a as J,b as K}from"./QCarouselSlide.3cc12bf3.js";import{u as R,a as W,b as Y}from"./use-fullscreen.9314e784.js";const Z=["top","right","bottom","left"],p=["regular","flat","outline","push","unelevated"];var te=M({name:"QCarousel",props:{...V,...H,...R,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>p.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Z.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...W,...J],setup(e,{slots:r}){const{proxy:{$q:l}}=U(),$=z(e,l);let c,s;const{updatePanelsList:T,getPanelContent:B,panelDirectives:D,goToPanel:_,previousPanel:h,nextPanel:q,getEnabledPanels:F,panelIndex:u}=K(),{inFullscreen:x}=Y(),N=o(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),v=o(()=>e.vertical===!0?"vertical":"horizontal"),Q=o(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+($.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${v.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${y.value}`:"")),b=o(()=>{const n=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?n.reverse():n}),C=o(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),A=o(()=>e.navigationActiveIcon||C.value),y=o(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),g=o(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));S(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(c),d())}),S(()=>e.autoplay,n=>{n?d():clearInterval(c)});function d(){const n=X(e.autoplay)===!0?e.autoplay:5e3;c=setTimeout(n>=0?q:h,Math.abs(n))}L(()=>{e.autoplay&&d()}),O(()=>{clearInterval(c)});function P(n,i){return t("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${n} q-carousel__navigation--${y.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[t("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},F().map(i))])}function E(){const n=[];if(e.navigation===!0){const i=r["navigation-icon"]!==void 0?r["navigation-icon"]:a=>t(f,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),m=s-1;n.push(P("buttons",(a,w)=>{const I=a.props.name,k=u.value===w;return i({index:w,maxIndex:m,name:I,active:k,btnProps:{icon:k===!0?A.value:C.value,size:"sm",...g.value},onClick:()=>{_(I)}})}))}else if(e.thumbnails===!0){const i=e.controlColor!==void 0?` text-${e.controlColor}`:"";n.push(P("thumbnails",m=>{const a=m.props;return t("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+i,src:a.imgSrc||a["img-src"],onClick:()=>{_(a.name)}})}))}return e.arrows===!0&&u.value>=0&&((e.infinite===!0||u.value>0)&&n.push(t("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${v.value} absolute flex flex-center`},[t(f,{icon:b.value[0],...g.value,onClick:h})])),(e.infinite===!0||u.value<s-1)&&n.push(t("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${v.value} absolute flex flex-center`},[t(f,{icon:b.value[1],...g.value,onClick:q})]))),G(r.control,n)}return()=>(s=T(r),t("div",{class:Q.value,style:N.value},[j("div",{class:"q-carousel__slides-container"},B(),"sl-cont",e.swipeable,()=>D.value)].concat(E())))}});export{te as Q};
