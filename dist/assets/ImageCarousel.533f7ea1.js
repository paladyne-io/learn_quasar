import{Q as G}from"./QItemLabel.9594c0b6.js";import{f as Z,r,X as P,I as Ce,J as Ae,Y as Ie,a as J,w as be,aG as qe,h as y,aF as fe,G as b,U as O,_ as Oe,i as W,j as ge,k as I,p as D,x as i,l as M,y as Be,z as Le,F as je,n as f,q as _e,t as Ne}from"./index.7a166512.js";import{Q as Ee}from"./QSpace.f505bcbe.js";import{Q as De}from"./QCard.3b264e6e.js";import{Q as Pe}from"./QPage.d61366b6.js";import"./use-dark.172d2369.js";/**
 * Vue 3 Carousel 0.1.48
 * (c) 2022
 * @license MIT
 */const _={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},ye={itemsToShow:{default:_.itemsToShow,type:Number},itemsToScroll:{default:_.itemsToScroll,type:Number},wrapAround:{default:_.wrapAround,type:Boolean},snapAlign:{default:_.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:_.transition,type:Number},breakpoints:{default:_.breakpoints,type:Object},autoplay:{default:_.autoplay,type:Number},pauseAutoplayOnHover:{default:_.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:_.mouseDrag,type:Boolean},touchDrag:{default:_.touchDrag,type:Boolean},dir:{default:_.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function Ve(t,o){let s;return function(...a){s&&clearTimeout(s),s=setTimeout(()=>{t(...a),s=null},o)}}function Qe(t,o){let s;return function(...a){const c=this;s||(t.apply(c,a),s=!0,setTimeout(()=>s=!1,o))}}function Ue(t){var o,s,a;return t?((s=(o=t[0])===null||o===void 0?void 0:o.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?t:((a=t[0])===null||a===void 0?void 0:a.children)||[]:[]}function $e(t,o){if(t.wrapAround)return o-1;switch(t.snapAlign){case"start":return o-t.itemsToShow;case"end":return o-1;case"center":case"center-odd":return o-Math.ceil(t.itemsToShow/2);case"center-even":return o-Math.ceil(t.itemsToShow/2);default:return 0}}function ze(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function Se(t,o,s,a){return t.wrapAround?o:Math.min(Math.max(o,a),s)}function Ye({slidesBuffer:t,currentSlide:o,snapAlign:s,itemsToShow:a,wrapAround:c,slidesCount:m}){let d=t.indexOf(o);if(d===-1&&(d=t.indexOf(Math.ceil(o))),s==="center"||s==="center-odd"?d-=(a-1)/2:s==="center-even"?d-=(a-2)/2:s==="end"&&(d-=a-1),!c){const l=m-a,p=0;d=Math.max(Math.min(d,l),p)}return d}var Fe=Z({name:"Carousel",props:ye,setup(t,{slots:o,emit:s,expose:a}){var c;const m=r(null),d=r([]),l=r([]),p=r(0),u=r(1);let S,k,A=r({}),x=Object.assign({},_);const n=P(Object.assign({},x)),g=r((c=n.modelValue)!==null&&c!==void 0?c:0),xe=r(0),ee=r(0),L=r(0),j=r(0);O("config",n),O("slidesBuffer",l),O("slidesCount",u),O("currentSlide",g),O("maxSlide",L),O("minSlide",j);function te(){const e=Object.assign(Object.assign({},t),t.settings);A=r(Object.assign({},e.breakpoints)),x=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),ne(x)}function V(){const e=Object.keys(A.value).map(h=>Number(h)).sort((h,T)=>+T-+h);let v=Object.assign({},x);e.some(h=>window.matchMedia(`(min-width: ${h}px)`).matches?(v=Object.assign(Object.assign({},v),A.value[h]),!0):!1),ne(v)}function ne(e){for(let v in e)n[v]=e[v]}const we=Ve(()=>{A.value&&(V(),N()),Q()},16);function Q(){if(!m.value)return;const e=m.value.getBoundingClientRect();p.value=e.width/n.itemsToShow}function N(){u.value=Math.max(d.value.length,1),!(u.value<=0)&&(ee.value=Math.ceil((u.value-1)/2),L.value=$e(n,u.value),j.value=ze(n),g.value=Se(n,g.value,L.value,j.value))}function U(){const e=[...Array(u.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=u.value){let T=(n.itemsToShow!==1?Math.round((u.value-n.itemsToShow)/2):0)-g.value;if(n.snapAlign==="end"?T+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&T++,T<0)for(let C=T;C<0;C++)e.push(Number(e.shift()));else for(let C=0;C<T;C++)e.unshift(Number(e.pop()))}l.value=e}Ce(()=>{A.value&&(V(),N()),Ae(()=>setTimeout(Q,16)),ie(),window.addEventListener("resize",we,{passive:!0})}),Ie(()=>{k&&clearTimeout(k),S&&clearInterval(S)});let w=!1;const $={x:0,y:0},z={x:0,y:0},B=P({x:0,y:0}),Y=r(!1),Te=()=>{Y.value=!0},ke=()=>{Y.value=!1};function oe(e){w=e.type==="touchstart",!(!w&&e.button!==0||E.value)&&(w||e.preventDefault(),$.x=w?e.touches[0].clientX:e.clientX,$.y=w?e.touches[0].clientY:e.clientY,document.addEventListener(w?"touchmove":"mousemove",se,!0),document.addEventListener(w?"touchend":"mouseup",ae,!0))}const se=Qe(e=>{z.x=w?e.touches[0].clientX:e.clientX,z.y=w?e.touches[0].clientY:e.clientY;const v=z.x-$.x,h=z.y-$.y;B.y=h,B.x=v},16);function ae(){const e=n.dir==="rtl"?-1:1,v=Math.sign(B.x)*.4,h=Math.round(B.x/p.value+v)*e;let T=Se(n,g.value-h,L.value,j.value);if(h&&!w){const C=H=>{H.stopPropagation(),window.removeEventListener("click",C,!0)};window.addEventListener("click",C,!0)}q(T),B.x=0,B.y=0,document.removeEventListener(w?"touchmove":"mousemove",se,!0),document.removeEventListener(w?"touchend":"mouseup",ae,!0)}function ie(){!n.autoplay||n.autoplay<=0||(S=setInterval(()=>{n.pauseAutoplayOnHover&&Y.value||F()},n.autoplay))}function le(){S&&(clearInterval(S),S=null),ie()}const E=r(!1);function q(e,v=!1){if(g.value===e||E.value)return;le();const h=u.value-1;if(e>h)return q(e-u.value);if(e<0)return q(e+u.value);E.value=!0,xe.value=g.value,g.value=e,v||s("update:modelValue",g.value),k=setTimeout(()=>{n.wrapAround&&U(),E.value=!1},n.transition)}function F(){let e=g.value+n.itemsToScroll;n.wrapAround||(e=Math.min(e,L.value)),q(e)}function re(){let e=g.value-n.itemsToScroll;n.wrapAround||(e=Math.max(e,j.value)),q(e)}const ue={slideTo:q,next:F,prev:re};O("nav",ue);const de=J(()=>Ye({slidesBuffer:l.value,itemsToShow:n.itemsToShow,snapAlign:n.snapAlign,wrapAround:Boolean(n.wrapAround),currentSlide:g.value,slidesCount:u.value}));O("slidesToScroll",de);const Me=J(()=>{const e=n.dir==="rtl"?-1:1,v=de.value*p.value*e;return{transform:`translateX(${B.x-v}px)`,transition:`${E.value?n.transition:0}ms`}});function ce(){te()}function me(){te(),V(),N(),U(),Q(),le()}function pe(){N(),U()}Object.keys(ye).forEach(e=>{["modelValue"].includes(e)||be(()=>t[e],me)}),ce(),qe(()=>{const e=u.value!==d.value.length;t.modelValue!==void 0&&g.value!==t.modelValue&&q(Number(t.modelValue),!0),e&&pe()});const ve={config:n,slidesBuffer:l,slidesCount:u,slideWidth:p,currentSlide:g,maxSlide:L,minSlide:j,middleSlide:ee};a({updateBreakpointsConfigs:V,updateSlidesData:N,updateSlideWidth:Q,updateSlidesBuffer:U,initCarousel:ce,restartCarousel:me,updateCarousel:pe,slideTo:q,next:F,prev:re,nav:ue,data:ve});const R=o.default||o.slides,X=o.addons,he=P(ve);return()=>{const e=Ue(R==null?void 0:R(he)),v=(X==null?void 0:X(he))||[];d.value=e,e.forEach((C,H)=>C.props.index=H);const h=y("ol",{class:"carousel__track",style:Me.value,onMousedown:n.mouseDrag?fe(oe,["capture"]):null,onTouchstart:n.touchDrag?fe(oe,["capture"]):null},e),T=y("div",{class:"carousel__viewport"},h);return y("section",{ref:m,class:{carousel:!0,"carousel--rtl":n.dir==="rtl"},dir:n.dir,"aria-label":"Gallery",onMouseenter:Te,onMouseleave:ke},[T,v])}}});const Re={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},K=t=>{const o=t.name;if(!o||typeof o!="string")return;const s=Re[o],a=y("path",{d:s}),c=t.title||o,m=y("title",c);return y("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:c},[m,a])};K.props={name:String,title:String};const Xe=(t,{slots:o,attrs:s})=>{const{next:a,prev:c}=o||{},m=b("config",P(Object.assign({},_))),d=b("maxSlide",r(1)),l=b("minSlide",r(1)),p=b("currentSlide",r(1)),u=b("nav",{}),S=m.dir==="rtl",k=y("button",{type:"button",class:["carousel__prev",!m.wrapAround&&p.value<=l.value&&"carousel__prev--in-active",s==null?void 0:s.class],"aria-label":"Navigate to previous slide",onClick:u.prev},(c==null?void 0:c())||y(K,{name:S?"arrowRight":"arrowLeft"})),A=y("button",{type:"button",class:["carousel__next",!m.wrapAround&&p.value>=d.value&&"carousel__next--in-active",s==null?void 0:s.class],"aria-label":"Navigate to next slide",onClick:u.next},(a==null?void 0:a())||y(K,{name:S?"arrowLeft":"arrowRight"}));return[k,A]};var He=Z({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:o}){const s=b("config",P(Object.assign({},_))),a=b("slidesBuffer",r([])),c=b("currentSlide",r(0)),m=b("slidesToScroll",r(0)),d=r(t.index);s.wrapAround&&(l(),be(a,l));function l(){d.value=a.value.indexOf(t.index)}const p=J(()=>{const x=s.itemsToShow;return{width:`${1/x*100}%`,order:d.value.toString()}}),u=()=>t.index===c.value,S=()=>{const x=Math.ceil(m.value),n=Math.floor(m.value+s.itemsToShow);return a.value.slice(x,n).includes(t.index)},k=()=>t.index===a.value[Math.ceil(m.value)-1],A=()=>t.index===a.value[Math.floor(m.value+s.itemsToShow)];return()=>{var x;return y("li",{style:p.value,class:{carousel__slide:!0,"carousel__slide--active":u(),"carousel__slide--visible":S(),"carousel__slide--prev":k(),"carousel__slide--next":A()}},(x=o.default)===null||x===void 0?void 0:x.call(o))}}});const Ge=()=>{const t=b("maxSlide",r(1)),o=b("minSlide",r(1)),s=b("currentSlide",r(1)),a=b("nav",{});function c(l){a.slideTo(l)}const m=l=>{const p=s.value;return p===l||p>t.value&&l>=t.value||p<o.value&&l<=o.value},d=[];for(let l=o.value;l<t.value+1;l++){const p=y("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":m(l)},"aria-label":`Navigate to slide ${l+1}`,onClick:()=>c(l)}),u=y("li",{class:"carousel__pagination-item",key:l},p);d.push(u)}return y("ol",{class:"carousel__pagination"},d)};const We=Z({name:"ImageCarouselPage",components:{Carousel:Fe,Slide:He,Pagination:Ge,Navigation:Xe},setup(){return{slides:[{id:1,name:"slide1",src:"https://picsum.photos/800/600?random=1",class:"np-slider np-slide-1",text:"Slide 1"},{id:2,name:"slide2",src:"https://picsum.photos/800/600?random=2",class:"np-slider np-slide-1",text:"Slide 2"},{id:3,name:"slide3",src:"https://picsum.photos/800/600?random=3",class:"np-slider np-slide-1",text:"Slide 3"}]}}}),Je=i("div",{class:"q-pa-md text-h5 header"}," Image carousel ",-1),Ke=i("div",{class:"text-subheader q-pt-sm"}," The world is your canvas ",-1),Ze=i("div",{class:"q-pt-sm"}," Your mission today is to get to this: ",-1),et={class:"q-pt-sm"},tt={class:"row"},nt={class:"col-12"},ot=["src"],st={class:"col-12"},at={class:"q-pt-sm"},it=i("a",{href:"https://quasar.dev/vue-components/carousel"},"perfectly good carousel",-1),lt=i("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),rt={class:"q-pt-sm"},ut=i("div",{class:"q-pt-sm"},[f(" As mentioned previously, you can extend the functionality of your app by adding libraries. For example we can add this "),i("b",null,"vue-carousel"),f(" library to display images in a slideshow or 'slider'. The page that describes the library is here: "),i("a",{href:"https://ismail9k.github.io/vue3-carousel/"},"vue3-carousel")],-1),dt=i("div",{class:"q-py-sm"},[f(" For this task you need to use the terminal again. Press the 'Control' and 'C' keys at the same time to exit the quasar development environment. Then follow the instructions to install the library. Usually these are shown on the installation page. It is common to be something like, "),i("b",null,'"npm install vue3-carousel"'),f(". ")],-1),ct=i("pre",null,`dcs@Darrens-MacBook-Pro learn_quasar % npm install vue3-carousel

added 1 package, and audited 460 packages in 4s

94 packages are looking for funding
  run \`npm fund\` for details

6 moderate severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run \`npm audit\` for details.
dcs@Darrens-MacBook-Pro learn_quasar %
`,-1),mt={class:"tip q-py-sm"},pt=i("pre",null,`<script>
  import { defineComponent } from 'vue'
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  export default defineComponent({
    name: 'ImageCarouselPage',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
  },
  setup () {
    const slides = [
       { id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1',
      text: 'Slide 1' },
       { id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2',
      text: 'Slide 2' },
       { id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3',
      text: 'Slide 3' }]

    return {
      slides
    }
  }
})
<\/script>
`,-1),vt=i("div",{class:"q-pa-sm"},[f(" Finally, in the "),i("b",null,"template"),f(" section of your page or component, add the presentation (html) code: ")],-1),ht=i("pre",null,`  <carousel :items-to-show="1.0">
    <slide v-for="slide in slides" :key="slide.id">
    <img :src= slide.src />

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
`,-1),ft=i("div",null,[f(" It may not be clear exactly what is happening here. For now, just try to remember the steps. "),i("ol",null,[i("li",null," Install the library using the Terminal"),i("li",null," Import it in the component (file) where you want to use it by adding some code in the script section"),i("li",null," (If it is a GUI component), add it into the html area (template) in angle brackets like this, <ImportedComp>...</ImportedComp> or sometimes just <ImportedComp/>.")])],-1),gt={class:"row full-width text-subheader q-pt-sm"};function _t(t,o,s,a,c,m){const d=D("slide"),l=D("navigation"),p=D("pagination"),u=D("carousel"),S=D("router-link");return W(),ge(Pe,{class:"flex-center q-pa-md"},{default:I(()=>[Je,i("div",null,[M(De,{flat:"",class:"q-pa-md"},{default:I(()=>[Ke,Ze,i("div",et,[M(u,{wrapAround:"","items-to-show":1},{addons:I(()=>[M(l),M(p)]),default:I(()=>[(W(!0),Be(je,null,Le(t.slides,k=>(W(),ge(d,{key:k.id},{default:I(()=>[i("div",tt,[i("div",nt,[i("img",{src:k.src},null,8,ot)]),i("div",st,Ne(k.text),1)])]),_:2},1024))),128))]),_:1})]),i("div",at,[f(" This is an example to show how to install and import an external library. Quasar provides it's own "),it,f(". Consider this to be an exercise rather than a recommendation. (You can see the Quasar Carousel in the "),M(S,{to:"/examples/qcarousel"},{default:I(()=>[f("Examples")]),_:1}),f(".) ")]),lt,i("div",rt,[M(G,{class:"q-pt-sm text-subheader"},{default:I(()=>[f(" 1. Install the library ")]),_:1}),ut,dt,ct,f(" The library is now installed so you need to relaunch the Quasar development environment by typing 'quasar dev'. "),i("div",mt,[M(G,{class:"bulb"},{default:I(()=>[f("Tip: Use the up/down arrow keys on your keyboard to select previous shell commands so you don't have to retype them. ")]),_:1})]),M(G,{class:"q-pt-md text-subheader"},{default:I(()=>[f(" 2. Import and customize the library ")]),_:1}),f(" After adding the library to your project, you have to add it to the page or component in the script section. If your new page file doesn't have a script section, add one like this: "),pt,vt,ht]),ft,i("div",gt,[M(_e,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"programming1"}),M(Ee),M(_e,{outline:"",style:{color:"goldenrod","text-align":"right"},label:"Next: Send emails",to:"sendemail"})])]),_:1})])]),_:1})}var kt=Oe(We,[["render",_t]]);export{kt as default};
