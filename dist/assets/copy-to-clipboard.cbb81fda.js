import{aI as n,aJ as r}from"./index.fe5066fd.js";function c(o){const e=document.createElement("textarea");e.value=o,e.contentEditable="true",e.style.position="fixed";const t=()=>{};n(t),document.body.appendChild(e),e.focus(),e.select();const a=document.execCommand("copy");return e.remove(),r(t),a}function s(o){return navigator.clipboard!==void 0?navigator.clipboard.writeText(o):new Promise((e,t)=>{const a=c(o);a?e(!0):t(a)})}export{s as c};
