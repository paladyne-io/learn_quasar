import{Q as m}from"./QTable.808ae4f3.js";import{o as h,q as u,t as g,x as p,D as e,d as i,b4 as l,C as r,z as t}from"./index.f13e7601.js";import{Q as b}from"./QPage.c2324645.js";import{u as f}from"./use-quasar.6869b5c6.js";import"./QSeparator.d4d1ca46.js";import"./use-dark.2d788bd7.js";import"./use-timeout.c45345d7.js";import"./scroll.a7399acb.js";import"./use-tick.a658fd54.js";import"./use-key-composition.1e26cba8.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.68b830c4.js";import"./QItemSection.fabbef01.js";import"./QItemLabel.4648180b.js";import"./selection.1c7b5cda.js";import"./use-form.333c5739.js";import"./use-checkbox.f0abbe40.js";const _=e("div",{class:"heading q-pa-md"},"Adding data to a table",-1),w=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of assigning data and reactivity. ",-1),v=e("div",{class:"q-pa-md"},[t(" A simple element such as a button probably only requires setting a label, however other more complex components, such as a table, might require loading various types of data. A javaScript object can be described with "),e("b",null,"JSON"),t(" (JavaScript Object Notation). JSON can describe an array or a set of named elements. It is often used to save data and to send it over the network (to and from a server). ")],-1),y=e("div",{class:"q-pa-md full-width text-center text-bold"}," Some simple examples of JSON ",-1),q=e("div",{class:"q-pa-md"},[t(" A plain array: "),e("pre",null,`{"John", "Sarah", "Hiroyuki", "Maria"}
`)],-1),x=e("div",{class:"q-pa-md"}," Describing an object (or a person). ",-1),S=e("pre",null,'{"name":"John", "age":25, "hobbies":["running", "swimming", "reading"]}',-1),T=t(' Within JSON "[ ]" is used to describe an array, or list, of items. '),N=e("div",{class:"q-pa-md"}," A table is a form of array. An array is a set of data than can be arranged in a grid. ",-1),R=e("pre",null,`Header 1    Header 2     Header 3
  Row 1         H2/R1         H3/R1
  Row 2         H2/R2         H3/R2
  Row 3         H2/R3         H3/R3`,-1),k=e("div",{class:"q-pa-md"},[t(" Many components in Vue and Quasar use a "),e("b",null,"model"),t(". A model is a representation of the data that applies to the component. The data used by the component are contained in the model and when the data in the model changes, the display will change. This might seem difficult to understand at first but it is related the concept of reactivity. The component (such as a table) reacts to the changes in the model. Also, if the component is editable, changing the data inside the component will update the model. This is sometimes called 2-way binding. ")],-1),D=e("div",{class:"q-pa-md"}," Let's look at in terms of our example app. We want to load the table data and save it when it is changed by the user. (Using local storage means that the data is saved even after we close the page or app.) ",-1),A=e("pre",null,`let columns = [
  {
    name: 'exercise', label: 'Exercise', field: 'exercise', align: 'left'
  },
  {
    name: 'time', label: 'Time', field: 'time'
  },
  {
    name: 'calories', label: 'Calories', field: 'calories'
  }
]
let rows = [
  {
    exercise: 'Walking', time: 30, calories: 100
  },
  {
    exercise: 'Chasing cars', time: 60, calories: 400
  }
]`,-1),H=e("div",{class:"q-pa-md"},` A small side note here about data types. Plain words such as names are called 'strings' and they have to be enclosed by single (') or double quotes ("). Numbers however do not have quotes. There is a small but important difference between 1 and "1". There are some other types but numbers and strings are the most commonly used in the UI. `,-1),J=e("div",{class:"q-pa-md"},' The syntax for a table looks like this and you can see the columns are assigned to the variable "columns" and rows to "rows" ',-1),C=e("pre",null,`<q-table
  dense
  title="Data"
  :rows="rows"
  :columns="columns"
  row-key="name"
/>
`,-1),I=e("div",{class:"q-pa-md"},` So the data is displayed in the table like this. Note the heading which is specified in "title" and the ':' before rows and columns which means 'look up the data from JavaScript'. `,-1),O={class:"q-pa-md full-width"},Q=e("div",{class:"q-pa-md"}," Now we have to add functions to read and write this data to local storage. ",-1),W=e("pre",null,` function saveTableData () {
  console.log('Saving Table Data...')
  try {
    $q.localStorage.set('rows', rows)
    $q.localStorage.set('columns', columns)
  } catch (e) {
    // data wasn't successfully written due to
    // a Web Storage API error
    console.log('Error saving data: ' + e)
  }
}

function readTableData () {
   console.log('Reading Table Data...')
  try {
    rows = $q.localStorage.getItem('rows')
    columns = $q.localStorage.getItem('columns')
  } catch (e) {
    // data wasn't successfully saved due to
    // a Web Storage API error
    console.log('Error getting data: ' + e)
  }
}

`,-1),E=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),j=e("div",{class:"q-pa-md text-center full-width"}," Coming soon - using an online database... ",-1),$={class:"text-center q-pa-md"},le={__name:"DA_DataTable",setup(B){h(()=>{console.log("Mounted. Reading table data..."),d(),c(),console.log("Rows: "+a),console.log("Columns: "+o),console.log("Rows: "+JSON.stringify(a)),console.log("Columns: "+JSON.stringify(o))});const s=f();let o=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],a=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:60,calories:400}];function c(){try{a=s.localStorage.getItem("rows"),o=s.localStorage.getItem("columns")}catch(n){console.log("Error getting data: "+n)}}function d(){console.log("saving TableData..."),console.log("Rows: "+a);try{s.localStorage.set("rows",a),s.localStorage.set("columns",o)}catch(n){console.log("Error saving data: "+n)}}return(n,M)=>(u(),g(b,{class:"flex flex-center"},{default:p(()=>[_,w,v,y,q,x,S,T,N,R,k,D,A,H,J,C,I,e("div",O,[i(m,{dense:"",title:"Data",rows:l(a),columns:l(o),"row-key":"name"},null,8,["rows","columns"])]),Q,W,E,j,e("div",$,[i(r,{label:"Home",color:"green",to:"/"}),i(r,{class:"q-ma-md",label:"Time for a  Game?",color:"blue",to:"../gameapp/rm_game/"})])]),_:1}))}};export{le as default};
