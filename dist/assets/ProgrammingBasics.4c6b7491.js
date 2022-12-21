import{Q as a}from"./QImg.af198b46.js";import{t as l,q as c,x as d,y as r,z as i,A as o,G as e,C as t,F as s,aq as h}from"./index.16939dca.js";import{Q as u}from"./QSpace.13d7dd07.js";import{Q as m}from"./QPage.a134c041.js";const p=c({name:"HelloWorld",components:{},setup(){function n(){alert("You clicked me!")}return{btnClicked:n}}}),f=e("div",{class:"header q-pa-md"}," Programming Basics",-1),g={class:"q-pa-sm"},v=e("div",{class:"q-pt-md text-subheader"}," Adding interactivity ",-1),b=e("div",null," So far we have covered how to set up and use Quasar and how to create, modify and navigate between pages. I'd like to focus this exercise on showing how to program some interactivity. ",-1),y={class:"q-pt-sm"},_=e("ul",null,[e("li",null,[t("the "),e("b",null,"script"),t(" section which is JavaScript, with some unique functions and 'hooks'")]),e("li",null,[t("the "),e("b",null,"template"),t(" section which contains html, including custom components and some vue elements")]),e("li",null,[t("the "),e("b",null,"style"),t(" section which is css")])],-1),w=e("div",{class:"q-pt-sm"}," Simply speaking, the template is what the page contains, the script is what it does and the style is how it looks. ",-1),k=e("div",{class:"q-pt-sm"}," In traditional web design these 3 types are usually separated into 3 files. The JavaScript file (xx.js) and the css file (xx.css) are imported - most often in the header - of the HTML file (xx.html). Why combine them into one file? ",-1),x=e("div",{class:"q-pt-sm"},[t(" This is called a SingleFileComponent which you can read more about "),e("a",{href:"https://vuejs.org/guide/scaling-up/sfc.html"},"here"),t(". ")],-1),q=e("div",{class:"q-pt-sm"},[e("q",null,"In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic, and styles are inherently coupled, and colocating them actually makes the component more cohesive and maintainable. ")],-1),I=e("div",{class:"q-pt-sm"}," When you integrate all 3 types of code into one file this becomes a stand-alone object that you can use in other parts of your app. It comes fully formed and ready to work. If you decide later to modify this component, everywhere it is used will gain the benefit of the improvements. Of course, this is a double-edged sword as if you do something wrong it could affect other parts of your app. Embedding the behavior (logic) inside an object is a key principle of Object Oriented Programming. Thinking in terms of independent objects and their interactions will make your code more usable and easier to manage. Once you get used to it I don't think you will want to do it another way. ",-1),C=e("div",{class:"q-pt-sm"},[t(" Some areas we will cover: "),e("ul",null,[e("li",null,"Handling user activity such as a button click"),e("li",null,"script setup"),e("li",null,"onMounted (lifecycle hooks)")]),t(" What we will come back to later: "),e("ul",null,[e("li",null,"Reactivity"),e("li",null,"Composition vs Options API"),e("li",null,"v-if and v-for"),e("li",null,"Props and slots"),e("li",null,"Local storage"),e("li",null,"Axios, i18n and boot files")]),e("div",{class:"q-pt-sm"},[t(' 1. In the previous article we added a navigation button with a "to" element. If the button is not used for navigation, you should add "@click='),e("i",null,"methodName"),t('" to the button like this: ')]),e("pre",null,`  <q-btn label="Test button"
   color="blue"
   @click="btnClicked">
  </q-btn>"
`)],-1),S=e("b",null,"btnClicked",-1),B=e("div",{class:"q-pt-sm"}," When you click the button, code in the btnClicked function will run. ",-1),T={class:"text-center q-pa-md"},P=e("div",{class:"q-pt-sm"},[t(' In version 3.2 of Vue, "script setup" was added as a new simpler way to format and use JavaScript. '),e("a",{href:"https://vuejs.org/api/sfc-script-setup.html"},"Read more here "),t(" if you are interested. It looks like this. "),e("pre",null,`  <script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
      console.log('mounted')
    })

    function btnClicked () {
      alert('You clicked me!')
    }
  <\/script>
`)],-1),Q=e("div",{class:"q-pt-sm"},[t(" The "),e("b",null,"onMounted"),t(" function is a special function provided by Vue. It is called when the component or page is loaded. It can be useful to check something or run some code when the page is first displayed. For example, to check whether the app is running on a mobile device, what language the device is using etc. ")],-1),V=e("div",{class:"q-pt-sm"},[t(" Note the use of "),e("b",null,"'console.log()"),t("' and '"),e("b",null,"alert()"),t("' which are two useful Javascript methods. alert() displays a pop-up message to the user. console.log() prints a message to the JavaScript console which can be seen by choosing 'Display JavaScript Console' in your browser. ")],-1),j=e("div",{class:"q-pt-sm"}," Both of these methods are very useful for debugging your code. This is the process of testing and fixing code. For example, you can add a call to console.log() at the beginning of a function to make sure it is being called when you expect it to be. You can also use it to print out the result of calculations or the value of variables to check that they are what you expect. ",-1),F={class:"q-pt-sm"},J={class:"text-center q-pa-md"},M={class:"row full-width text-subheader q-pt-sm"};function N(n,A,O,W,$,H){return d(),r(m,{class:"flex-center q-pa-md"},{default:i(()=>[f,o(h,{flat:"",class:"q-pa-md"},{default:i(()=>[e("div",g,[v,b,e("div",y,[t(" Each Vue page or component (xx.vue file) can have up to 3 sections: "),_,o(a,{alt:"BasicVueFile",src:"images/BasicVueFile.png",style:{width:"500px",padding:"4px"}})]),w,k,x,q,I,C,S,t(" is the name of the function that will be called in the Script section. If you are completely new to programming and would like to understand terms such as function, method, parameter, variable etc., don't worry for now. The meanings of these terms should become clear over time. ")]),B,e("div",T,[o(s,{label:"Test button",color:"blue",onClick:n.btnClicked},null,8,["onClick"])]),P,Q,V,j,e("div",F,[t(" Click the button to see the whole page. "),e("div",J,[o(s,{label:"My Page 2",color:"green",to:"/mypage2"})])]),e("div",M,[o(s,{outline:"",style:{color:"goldenrod"},label:"Previous",to:"helloworld"}),o(u),o(s,{outline:"",style:{color:"goldenrod","text-align":"right"},label:"Next: Add a library",to:"images"})])]),_:1})]),_:1})}var z=l(p,[["render",N]]);export{z as default};
