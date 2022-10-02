import{Q as m}from"./QTable.cdeed7b8.js";import{o as h,q as u,t as g,x as p,D as e,d as i,b4 as l,C as r,z as o}from"./index.fe22742e.js";import{Q as b}from"./QPage.618ce965.js";import{u as f}from"./use-quasar.42e29076.js";import"./QSeparator.00b8eb22.js";import"./use-dark.ea222c6f.js";import"./use-timeout.d4a61cf9.js";import"./scroll.b5715f88.js";import"./use-tick.7e15c6dd.js";import"./use-key-composition.7b8959cb.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.d67b22e0.js";import"./QItemLabel.8b7166a1.js";import"./selection.efe5937d.js";import"./use-form.8eea0122.js";import"./use-checkbox.c078a4ff.js";const _=e("div",{class:"heading q-pa-md"},"Adding data to a table",-1),w=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of assigning data and reactivity. ",-1),v=e("div",{class:"q-pa-md"},[o(" A simple element such as a button probably only requires setting a label, however other more complex components, such as a table, might require loading various types of data. A javaScript object can be described with "),e("b",null,"JSON"),o(" (JavaScript Object Notation). JSON can describe an array or a set of named elements. It is often used to save data and to send it over the network (to and from a server). ")],-1),y=e("div",{class:"q-pa-md full-width text-center text-bold"}," Some simple examples of JSON ",-1),x=e("div",{class:"q-pa-md full-width text-center"}," A plain array: ",-1),q=e("pre",null,`{"John", "Sarah", "Hiroyuki", "Maria"}
`,-1),S=e("div",{class:"q-pa-md full-width text-center"}," Describing an object (or a person). ",-1),T=e("pre",null,'{"name":"John", "age":25, "hobbies":["running", "swimming", "reading"]}',-1),N=o(' Within JSON "[ ]" is used to describe an array, or list, of items. '),R=e("div",{class:"q-pa-md"}," A table is a form of array. An array is a set of data than can be arranged in a grid. ",-1),k=e("pre",null,`Header 1    Header 2     Header 3
  Row 1         H2/R1         H3/R1
  Row 2         H2/R2         H3/R2
  Row 3         H2/R3         H3/R3`,-1),D=e("div",{class:"q-pa-md"},[o(" Many components in Vue and Quasar use a "),e("b",null,"model"),o(". A model is a representation of the data that applies to the component. The data used by the component are contained in the model and when the data in the model changes, the display will change. This might seem difficult to understand at first but it is related to the concept of reactivity. The component (such as a table) reacts to the changes in the model. Also, if the component is editable, changing the data inside the component will update the model. This is sometimes called 2-way binding. ")],-1),A=e("div",{class:"q-pa-md"}," Let's look at this further using our example app. We want to load the table data and save it when it is changed by the user. (Using local storage means that the data is saved even after we close the page or app.) ",-1),H=e("pre",null,`let columns = [
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
]`,-1),J=e("div",{class:"q-pa-md"},` A small side note here about data types. Plain words such as names are called 'strings' and they have to be enclosed by single (') or double quotes ("). Numbers however do not have quotes. There is a small but important difference between 1 and "1". There are some other types but numbers and strings are the most commonly used in the UI. `,-1),C=e("div",{class:"q-pa-md"},' The syntax for a table looks like this and you can see the columns are assigned to the variable "columns" and rows to "rows" ',-1),I=e("pre",null,`<q-table
  dense
  title="Data"
  :rows="rows"
  :columns="columns"
  row-key="name"
/>
`,-1),O=e("div",{class:"q-pa-md"},` So the data is displayed in the table like this. Note the heading which is specified in "title" and the ':' before rows and columns which means 'look up the data from JavaScript'. `,-1),Q={class:"q-pa-md full-width"},W=e("div",{class:"q-pa-md"}," Now we have to add functions to read and write this data to local storage. ",-1),E=e("pre",null,` function saveTableData () {
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

`,-1),j=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),$=e("div",{class:"q-pa-md text-center full-width"}," Coming soon - using an online database... ",-1),B={class:"text-center q-pa-md"},le={__name:"DA_DataTable",setup(M){h(()=>{console.log("Mounted. Reading table data..."),d(),c(),console.log("Rows: "+a),console.log("Columns: "+t),console.log("Rows: "+JSON.stringify(a)),console.log("Columns: "+JSON.stringify(t))});const s=f();let t=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],a=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:60,calories:400}];function c(){try{a=s.localStorage.getItem("rows"),t=s.localStorage.getItem("columns")}catch(n){console.log("Error getting data: "+n)}}function d(){console.log("saving TableData..."),console.log("Rows: "+a);try{s.localStorage.set("rows",a),s.localStorage.set("columns",t)}catch(n){console.log("Error saving data: "+n)}}return(n,P)=>(u(),g(b,{class:"flex flex-center"},{default:p(()=>[_,w,v,y,x,q,S,T,N,R,k,D,A,H,J,C,I,O,e("div",Q,[i(m,{dense:"",title:"Data",rows:l(a),columns:l(t),"row-key":"name"},null,8,["rows","columns"])]),W,E,j,$,e("div",B,[i(r,{label:"Home",color:"green",to:"/"}),i(r,{class:"q-ma-md",label:"Time for a  Game?",color:"blue",to:"../gameapp/rm_game/"})])]),_:1}))}};export{le as default};
