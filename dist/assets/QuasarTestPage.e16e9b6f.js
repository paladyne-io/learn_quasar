import{_ as T,f as k,r as s,I as q,i as r,j as x,k as n,l as a,b as f,v as m,x as l,T as i,t as v,y as g,m as h,q as _}from"./index.7a166512.js";import{Q as I}from"./QPage.d61366b6.js";const y=k({name:"IndexPage",setup(){const e=s(!1),o=s(!1),t=s(!1),u=s("A quasar is a supermassive black hole feeding on gas at the center of a distant galaxy with mass ranging from millions to tens of billions of solar masses."),c=s("Quasar is short for quasi-stellar radio source, because astronomers first discovered quasars in 1963 as objects that looked like stars but emitted radio waves.");return q(()=>{t.value=!0}),{showText:e,showText2:o,showImage:t,quasarInfo:u,quasarInfo2:c,aboutText1Shown:w,imageShown:d,imageHidden:p,testTransition:b};function d(){e.value=!0}function p(){e.value=!1}function w(){setTimeout(function(){e.value=!1},2e3),setTimeout(function(){o.value=!0},2e3)}function b(){o.value=!1,t.value=!t.value}}}),A={id:"quasar_image",class:"quasar_image",alt:"Quasar image",src:"/images/nasa_images/stsci-h-2010a-d-1280x720.png"},Q={key:0,class:"quasar_image_about2"},S={key:0,class:"credit_text text-h6 full-width text-center text-white"},B={class:"test_btn text-center full-width fixed-bottom"};function C(e,o,t,u,c,d){return r(),x(I,{class:"flex flex-center",style:{background:"black"}},{default:n(()=>[a(i,{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",onAfterEnter:e.imageShown,onAfterLeave:e.imageHidden},{default:n(()=>[f(l("img",A,null,512),[[m,e.showImage]])]),_:1},8,["onAfterEnter","onAfterLeave"]),a(i,{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOut",onAfterEnter:e.aboutText1Shown},{default:n(()=>[f(l("div",{class:"quasar_image_about"},v(e.quasarInfo),513),[[m,e.showText]])]),_:1},8,["onAfterEnter"]),a(i,{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOut"},{default:n(()=>[e.showText2?(r(),g("div",Q,v(e.quasarInfo2),1)):h("",!0)]),_:1}),a(i,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:n(()=>[e.showImage?(r(),g("div",S," Quasar image courtesy of NASA ")):h("",!0)]),_:1}),l("div",B,[a(_,{label:"Test",color:"green",onClick:e.testTransition},null,8,["onClick"]),a(_,{class:"q-ma-md",label:"Menu",color:"blue",to:"/"})])]),_:1})}var O=T(y,[["render",C]]);export{O as default};
