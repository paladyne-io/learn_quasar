import{Q as d}from"./QTable.59c7302a.js";import{o as m,q as h,t as u,x as g,D as e,d as i,b4 as l,C as p,z as a}from"./index.70d07b41.js";import{Q as b}from"./QPage.0c02c93c.js";import{u as f}from"./use-quasar.55bc1501.js";import"./QSeparator.a926a899.js";import"./use-dark.6d472bbc.js";import"./use-timeout.b48b3c97.js";import"./scroll.e87f7840.js";import"./use-tick.c23b476e.js";import"./use-key-composition.8b5220eb.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.d300dc99.js";import"./QItemSection.263d079c.js";import"./QItemLabel.1474c78a.js";import"./selection.f9af2a5e.js";import"./use-form.23120dbc.js";import"./use-checkbox.5c2ce0b7.js";const w=e("div",{class:"heading q-pa-md"},"Adding data to a table",-1),_=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of assigning data and reactivity. ",-1),v=e("div",{class:"q-pa-md"},[a(" A simple element such as a button probably only requires setting a label, however other more complex components such as a table might, require loading various types of data. A javascript object can be described with "),e("b",null,"JSON"),a(" (JavaScript Object Notation). JSON can describe an array or a set of named elements. It is often used to save data and to send it over the network (to and from a server). ")],-1),y=e("div",{class:"q-pa-md full-width text-center text-bold"}," Some simple examples of JSON ",-1),x=e("div",{class:"q-pa-md"},[a(" A plain array: "),e("pre",null,`{"John", "Sarah", "Hiroyuki", "Maria"}
`)],-1),q=e("div",{class:"q-pa-md"},[a(" Describing an object (or a person). "),e("pre",null,'{"name":"John", "age":25, "hobbies":["running", "swimming", "reading"]}'),a(' Within JSON "[ ]" is used to describe an array or list of items. ')],-1),S=e("div",{class:"q-pa-md"}," A table is a form of array. An array is a set of data than can be arranged in a grid. ",-1),T=e("pre",null,`Header 1    Header 2     Header 3
  Row 1         H2/R1         H3/R1
  Row 2         H2/R2         H3/R2
  Row 3         H2/R3         H3/R3`,-1),N=e("div",{class:"q-pa-md"},[a(" Many components in Vue and Quasar use a "),e("b",null,"model"),a(". A model is a representation of the data that applies to the component. The data used by the component are contained in the model and when the data in the model changes, the display will change. This might seem difficult to understand at first but it is related the concept of reactivity. The component (such as a table) reacts to the changes in the model. Also, if the component is editable, changing the data inside the component will update the model. This is sometimes called 2-way binding. ")],-1),R=e("div",{class:"q-pa-md"}," Let's look at in terms of our example app. We want to load the table data and save it when it is changed by the user. (Using local storage means that the data is saved even after we close the page or app.) ",-1),k=e("pre",null,`let columns = [
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
]`,-1),A=e("div",{class:"q-pa-md"},` A small side note here about data types. Plain words such as names, are called strings and have to be enclosed by single (') or double quotes ("). Numbers however do not have quotes. There is a small but important difference between 1 and "1". There are some other types but numbers and strings are the most commonly used in the UI. `,-1),D=e("div",{class:"q-pa-md"},' The syntax for a table looks like this and you can see the columns are assigned to the variable "columns" and rows to "rows" ',-1),H=e("pre",null,`<q-table
  dense
  title="Data"
  :rows="rows"
  :columns="columns"
  row-key="name"
/>
`,-1),J=e("div",{class:"q-pa-md"},` So the data is displayed in the table like this. Note the heading which is specified in "title" and the ':' before rows and columns which means 'look up the data from Javascript'. `,-1),C={class:"q-pa-md full-width"},I=e("div",{class:"q-pa-md"}," Now we had to add functions to read and write this data to local storage. ",-1),O=e("pre",null,` function saveTableData () {
  console.log('saving TableData...')
  console.log('Rows: ' + rows)

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
  try {
    rows = $q.localStorage.getItem('rows')
    columns = $q.localStorage.getItem('columns')
  } catch (e) {
    // data wasn't successfully saved due to
    // a Web Storage API error
    console.log('Error getting data: ' + e)
  }
}

`,-1),Q=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),W=e("div",{class:"q-pa-md text-center full-width"}," Coming soon - using an online database... ",-1),E={class:"text-center q-pa-md"},ne={__name:"DA_DataTable",setup(j){m(()=>{console.log("mounted. Reading table data..."),c(),r(),console.log("Rows: "+t),console.log("Columns: "+o),console.log("Rows: "+JSON.stringify(t)),console.log("Columns: "+JSON.stringify(o))});const s=f();let o=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],t=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:60,calories:400}];function r(){try{t=s.localStorage.getItem("rows"),o=s.localStorage.getItem("columns")}catch(n){console.log("Error getting data: "+n)}}function c(){console.log("saving TableData..."),console.log("Rows: "+t);try{s.localStorage.set("rows",t),s.localStorage.set("columns",o)}catch(n){console.log("Error saving data: "+n)}}return(n,$)=>(h(),u(b,{class:"flex flex-center"},{default:g(()=>[w,_,v,y,x,q,S,T,N,R,k,A,D,H,J,e("div",C,[i(d,{dense:"",title:"Data",rows:l(t),columns:l(o),"row-key":"name"},null,8,["rows","columns"])]),I,O,Q,W,e("div",E,[i(p,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{ne as default};
