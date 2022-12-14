import{Q as D}from"./QImg.51a98af9.js";import{c as q,a as L,h as R,d as A,_ as B,i as C,y as E,aj as T,x as h,j as G,k as v,l as g,z as U,F as P,t as I}from"./index.5aff0604.js";import{Q as b}from"./QCard.8e97be60.js";import{Q as F}from"./QPage.7820131b.js";import"./use-dark.3ed48953.js";var M=q({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(c,{slots:d}){const o=L(()=>`q-card__section q-card__section--${c.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>R(c.tag,{class:o.value},A(d.default))}}),x={exports:{}};/*!
 * Colcade v0.2.0
 * Lightweight masonry layout
 * by David DeSandro
 * MIT license
 */(function(c){(function(d,o){c.exports?c.exports=o():d.Colcade=o()})(window,function(){function o(t,e){if(t=w(t),t&&t.colcadeGUID){var i=m[t.colcadeGUID];return i.option(e),i}this.element=t,this.options={},this.option(e),this.create()}var s=o.prototype;s.option=function(t){this.options=H(this.options,t)};var l=0,m={};s.create=function(){this.errorCheck();var t=this.guid=++l;this.element.colcadeGUID=t,m[t]=this,this.reload(),this._windowResizeHandler=this.onWindowResize.bind(this),this._loadHandler=this.onLoad.bind(this),window.addEventListener("resize",this._windowResizeHandler),this.element.addEventListener("load",this._loadHandler,!0)},s.errorCheck=function(){var t=[];if(this.element||t.push("Bad element: "+this.element),this.options.columns||t.push("columns option required: "+this.options.columns),this.options.items||t.push("items option required: "+this.options.items),t.length)throw new Error("[Colcade error] "+t.join(". "))},s.reload=function(){this.updateColumns(),this.updateItems(),this.layout()},s.updateColumns=function(){this.columns=p(this.options.columns,this.element)},s.updateItems=function(){this.items=p(this.options.items,this.element)},s.getActiveColumns=function(){return this.columns.filter(function(t){var e=getComputedStyle(t);return e.display!="none"})},s.layout=function(){this.activeColumns=this.getActiveColumns(),this._layout()},s._layout=function(){this.columnHeights=this.activeColumns.map(function(){return 0}),this.layoutItems(this.items)},s.layoutItems=function(t){t.forEach(this.layoutItem,this)},s.layoutItem=function(t){var e=Math.min.apply(Math,this.columnHeights),i=this.columnHeights.indexOf(e);this.activeColumns[i].appendChild(t),this.columnHeights[i]+=t.offsetHeight||1},s.append=function(t){var e=this.getQueryItems(t);this.items=this.items.concat(e),this.layoutItems(e)},s.prepend=function(t){var e=this.getQueryItems(t);this.items=e.concat(this.items),this._layout()},s.getQueryItems=function(t){t=y(t);var e=document.createDocumentFragment();return t.forEach(function(i){e.appendChild(i)}),p(this.options.items,e)},s.measureColumnHeight=function(t){var e=this.element.getBoundingClientRect();this.activeColumns.forEach(function(i,n){if(!t||i.contains(t)){var a=i.lastElementChild.getBoundingClientRect();this.columnHeights[n]=a.bottom-e.top}},this)},s.onWindowResize=function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){this.onDebouncedResize()}.bind(this),100)},s.onDebouncedResize=function(){var t=this.getActiveColumns(),e=t.length==this.activeColumns.length,i=!0;this.activeColumns.forEach(function(n,a){i=i&&n==t[a]}),!(e&&i)&&(this.activeColumns=t,this._layout())},s.onLoad=function(t){this.measureColumnHeight(t.target)},s.destroy=function(){this.items.forEach(function(t){this.element.appendChild(t)},this),window.removeEventListener("resize",this._windowResizeHandler),this.element.removeEventListener("load",this._loadHandler,!0),delete this.element.colcadeGUID,delete m[this.guid]},Q(function(){var t=p("[data-colcade]");t.forEach(z)});function z(t){var e=t.getAttribute("data-colcade"),i=e.split(","),n={};i.forEach(function(a){var f=a.split(":"),r=f[0].trim(),u=f[1].trim();n[r]=u}),new o(t,n)}o.data=function(t){t=w(t);var e=t&&t.colcadeGUID;return e&&m[e]},o.makeJQueryPlugin=function(t){if(t=t||window.jQuery,!t)return;t.fn.colcade=function(n){if(typeof n=="string"){var a=Array.prototype.slice.call(arguments,1);return e(this,n,a)}return i(this,n),this};function e(n,a,f){var r;return n.each(function(u,S){var _=t.data(S,"colcade");if(!!_){var k=_[a].apply(_,f);r=r===void 0?k:r}}),r!==void 0?r:n}function i(n,a){n.each(function(f,r){var u=t.data(r,"colcade");u?(u.option(a),u.layout()):(u=new o(r,a),t.data(r,"colcade",u))})}},o.makeJQueryPlugin();function H(t,e){for(var i in e)t[i]=e[i];return t}function y(t){var e=[];if(Array.isArray(t))e=t;else if(t&&typeof t.length=="number")for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function p(t,e){e=e||document;var i=e.querySelectorAll(t);return y(i)}function w(t){return typeof t=="string"&&(t=document.querySelector(t)),t}function Q(t){if(document.readyState=="complete"){t();return}document.addEventListener("DOMContentLoaded",t)}return o})})(x);var V=x.exports;const $={name:"gridCards",data(){return{cards:null}},mounted(){this.loadCards()},beforeUpdate(){this.removeCards()},updated(){this.loadCards()},unmounted(){this.removeCards()},methods:{loadCards(){this.cards=new V(this.$refs.cards,{columns:".col",items:".q-card"})},removeCards(){this.cards&&(this.cards.destroy(),this.cards=null,delete this.cards)}}},J={class:"row q-col-gutter-lg",ref:"cards"},N=h("div",{class:"col col-xs-12 col-sm-6 col-md-4 col-lg-3"},null,-1),O=h("div",{class:"col col-sm-6 col-md-4 col-lg-3 gt-xs"},null,-1),W=h("div",{class:"col col-md-4 col-lg-3 gt-sm"},null,-1),K=h("div",{class:"col col-lg-3 gt-md"},null,-1);function X(c,d,o,s,l,m){return C(),E("div",J,[N,O,W,K,T(c.$slots,"default")],512)}var Y=B($,[["render",X]]);const Z={class:"text-h6"},j={class:"text-subtitle2"},ot={__name:"GridCardPage",setup(c){const d=[{id:1,name:"Image 1",src:"https://picsum.photos/800/600?random=1",description:"This is image 1"},{id:2,name:"Image 2",src:"https://picsum.photos/800/600?random=2",description:"This is image 2"},{id:3,name:"Image 3",src:"https://picsum.photos/800/600?random=3",description:"This is image 3"},{id:4,name:"Image 4",src:"https://picsum.photos/800/600?random=4",description:"This is image 4"}];return(o,s)=>(C(),G(F,{padding:""},{default:v(()=>[g(Y,null,{default:v(()=>[(C(),E(P,null,U(d,l=>g(b,{key:l.id,class:"q-ma-sm"},{default:v(()=>[g(M,null,{default:v(()=>[h("div",Z,I(l.name),1),h("div",j,I(l.description),1),g(D,{alt:"picture",src:l.src},null,8,["src"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}))}};export{ot as default};