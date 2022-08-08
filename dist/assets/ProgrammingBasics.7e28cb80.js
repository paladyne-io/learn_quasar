import{Q as m}from"./QItemLabel.da6d8d20.js";import{a as d}from"./QBtn.ed481541.js";import{Q as p}from"./QItemSection.27713675.js";import{Q as a}from"./QItem.657af415.js";import{Q as f}from"./QList.21ebb759.js";import{Q as g}from"./QCard.f70413e5.js";import{Q as v}from"./QPage.85cff9ba.js";import{R as r}from"./use-router-link.a2c7a1d6.js";import{_ as b,K as _,L as l,M as c,N as o,U as e,d as s,q as h,Q as t}from"./index.bb9b4ba7.js";import"./QSpinner.1b83a069.js";import"./use-dark.8ed95cee.js";const y=_({name:"HelloWorld",components:{},setup(){function i(){alert("You clicked me!")}return{btnClicked:i}}}),w=e("div",{class:"q-pa-md text-h5 text-bold"}," Programming Basics",-1),k=e("div",{class:"text-subheader q-pt-sm"}," The world is your stage ",-1),q=e("div",{class:"q-pt-sm"}," Your mission today is to get to this: ",-1),x=e("div",{class:"q-pt-sm"}," This is the basic order of tasks. ",-1),C=t(" 1. Add interactivty "),I=e("div",{class:"q-pt-sm"}," So far we have covered how to set up and use Quasar and how to create, modify and navigate between pages. I'd like to focus this exercise on showing how to actually program some activity. ",-1),Q=e("div",{class:"q-pt-sm"},[t(" Each Vue page or component (xx.vue file) can have up to 3 sections: "),e("ul",null,[e("li",null,[t("the "),e("b",null,"template"),t(" section which contains html, including custom components and some vue elements")]),e("li",null,[t("the "),e("b",null,"script"),t(" section which is javascript, with some unique functions and 'hooks'")]),e("li",null,[t("the "),e("b",null,"style"),t(" section which is css")])])],-1),T=e("div",{class:"q-pt-sm"}," Simply speaking, the template is what the page contains, the script is what it does and the style is how it looks. ",-1),P=e("div",{class:"q-pt-sm"}," In traditional web design these 3 types are usually separated into 3 files. The JavaScript file (xx.js) and the css file (xx.css) are imported - most often in the header - of the HTML file (xx.html). Why combine them into one file? ",-1),j=e("div",{class:"q-pt-sm"},[t(" This is called a SingleFileComponent and you can read more about it "),e("a",{href:"https://vuejs.org/guide/scaling-up/sfc.html"},"here"),t(". ")],-1),B=e("div",{class:"q-pt-sm"},[e("q",null,"In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic, and styles are inherently coupled, and colocating them actually makes the component more cohesive and maintainable. ")],-1),S=e("div",{class:"q-pt-sm"}," When you integrate all 3 types of code into one file this becomes a stand-alone object that you can use in other parts of your app. It comes fully formed and ready to work. If you decide later to modify this component, everywhere it is used will gain the benefit of the improvements. Of course this is a double-edged sword as if you do something wrong it could affect other parts of your app. Embedding the behaviour (logic) inside an object is a key principle of Object Oriented Programming. Thinking in terms of independent objects and their interactions will make your code more usable and easier to manage. Once you get used to it I don't think you will want to do it another way. ",-1),M=e("div",{class:"q-pt-sm"},[t(" Some areas we will cover: "),e("ul",null,[e("li",null,"Handling user activity such as a button click"),e("li",null,"script setup"),e("li",null,"Composition vs Options API")]),t(" What we will come back to later: "),e("ul",null,[e("li",null,"Reactivity"),e("li",null,"v-if and v-for"),e("li",null,"Props and emits"),e("li",null,"Local storage"),e("li",null,"Axios, i18n and boot files")]),e("div",{class:"q-pt-sm"},' 1. In the previous article we added a navigation button with a "to" element. More often you would add "@click=methodName" to the button like this: '),e("div",{class:"q-pa-sm bg-blue-2"},[e("pre",null,`   <q-btn label="Test button" color="blue" @click="btnClicked"> </q-btn>
`)]),t(" btnClicked is the name of the function that will be called in the Script section. If you are completely new to programming and would like to understand terms such as function, method, parameter, variable etc., click here. ")],-1),N=t(" When you click the button, code in the btnClicked function will run. "),$={class:"text-center"},J=e("div",{class:"q-pt-sm"},[t(' In version 3.2 of Vue, "script setup" was added as a new simpler way to format and use Javascript. '),e("a",{href:"https://vuejs.org/api/sfc-script-setup.html"},"Read more"),t(". ")],-1),L=t(" It looks like this. "),O=e("div",{class:"q-pa-sm bg-blue-2"},[e("pre",null,`  <script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
      console.log('mounted')
    })

    function btnClicked () {
      alert('btnClicked')
    }
  <\/script>
`)],-1),V=e("div",{class:"q-pt-sm"}," The onMounted function is a special function provided by vue. It is called when the component or page is loaded. It can be useful to check something or run some code when the page is first displayed. For example, to check whether the app is running on a mobile device, what language the device is using etc. ",-1),W=e("div",{class:"q-pt-sm"}," Note the use of alert() and console.log() which are two useful Javascript methods. alert() will display a pop-up message to the user. console.log() will print a message to the JavaScript console which can be seen by choosing 'Display Javscript Console' in your browser. ",-1),A=e("div",{class:"q-pt-sm"}," Both of these methods are very useful for debugging your code. This is the process of testing and fixing code. For exampe you can add a call to console.log() at the begning of a function to make sure it is being called when you expect it to be. You can also use it to print out the result of calculations or the value of variables to check that they are what you expect. ",-1),R={class:"q-pt-sm"},F=t(" Click the button to see the whole page. "),H={class:"text-center"},Y={class:"row text-subheader q-pt-sm"},D=t(" Previous "),E=e("div",{style:{"text-align":"right"},class:"full-width"}," Next: Add a library ",-1);function U(i,n,z,K,G,X){return l(),c(v,{class:"flex-center q-pa-md"},{default:o(()=>[w,e("div",null,[s(g,{flat:"",class:"q-pa-md"},{default:o(()=>[k,q,x,s(f,null,{default:o(()=>[s(a,null,{default:o(()=>[s(p,null,{default:o(()=>[s(m,{class:"q-pt-md text-subheader"},{default:o(()=>[C]),_:1}),I,Q,T,P,j,B,S,M,N,e("div",$,[s(d,{label:"Test button",color:"blue",onClick:i.btnClicked},null,8,["onClick"])]),J,L,O,V,W,A,e("div",R,[F,e("div",H,[s(d,{label:"My Page 2",color:"green",to:"/mypage2"})])])]),_:1})]),_:1})]),_:1}),e("div",Y,[h((l(),c(a,{class:"col",clickable:"",to:"intro",onClick:n[0]||(n[0]=u=>i.link="intro")},{default:o(()=>[D]),_:1})),[[r]]),h((l(),c(a,{class:"col",clickable:"",to:"images",onClick:n[1]||(n[1]=u=>i.link="images")},{default:o(()=>[E]),_:1})),[[r]])])]),_:1})])]),_:1})}var re=b(y,[["render",U]]);export{re as default};
