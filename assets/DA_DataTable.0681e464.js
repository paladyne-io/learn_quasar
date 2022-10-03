import{Q as m}from"./QTable.26d493c9.js";import{o as h,q as u,t as g,x as p,D as e,d as l,b4 as i,C as r,z as o}from"./index.8cf353f0.js";import{Q as b}from"./QPage.558f241d.js";import{u as f}from"./use-quasar.87e52cc4.js";import"./QSeparator.c0c7e595.js";import"./use-dark.aa18e6e6.js";import"./use-timeout.2db8c619.js";import"./scroll.1966a2b5.js";import"./use-tick.8de82201.js";import"./use-key-composition.140d3645.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.dc38f12c.js";import"./QItemLabel.64fd465e.js";import"./selection.8aa531eb.js";import"./use-form.0951d1d3.js";import"./use-checkbox.f274ce17.js";const w=e("div",{class:"heading q-pa-md"},"Adding data to a table",-1),_=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of assigning data and reactivity. ",-1),v=e("div",{class:"q-pa-md"},[o(" A simple element such as a button probably only requires setting a label, however other more complex components, such as a table, might require loading various types of data. A javaScript object can be described with "),e("a",{href:"https://www.json.org/json-en.html"},[e("b",null,"JSON")]),o(" (JavaScript Object Notation). JSON can describe an object, an array or a set of named elements. It is often used to save data and to send it over the network (to and from a server). ")],-1),y=e("div",{class:"q-pa-md full-width text-center text-bold"}," Some simple examples of JSON ",-1),x=e("div",{class:"q-pa-md full-width text-center"}," A plain JSON array is used to contain a list of items. ",-1),q=e("pre",null,`["John", "Sarah", "Hiroyuki", "Maria"]
`,-1),S=e("div",{class:"q-pa-md full-width text-center"}," An object (in this case a person) can be described by adding named elements between {}. An array is added inside the object. ",-1),T=e("pre",null,'{"name":"John", "age":25, "hobbies":["running", "swimming", "reading"]}',-1),C=e("div",{class:"full-width text-center q-pa-md"}," A table is comprised of an array of data arranged in a grid. ",-1),N=e("pre",null,`Column 1   Column 2     Column 3
  Row 1           C2/R1         C3/R1
  Row 2           C2/R2         C3/R2
  Row 3           C2/R3         C3/R3`,-1),R=e("div",{class:"q-pa-md"},[o(" Many components in Vue and Quasar use a "),e("b",null,"model"),o(". A model is a representation of the data that applies to the component. The data used by the component are contained in the model and when the data in the model changes, the display will change. This might seem difficult to understand at first but it is related to the concept of "),e("b",null,"reactivity"),o(". The component (such as a table) reacts to the changes in the model. Also, if the component is editable, changing the data inside the component will update the model. This is known as 2-way binding. ")],-1),k=e("div",{class:"q-pa-md"}," Let's look at this further using our example app. We want to load the table data and save it when it is changed by the user. (Using local storage means that the data is saved even after we close the page or app.) ",-1),A=e("pre",null,`let columns = [
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
]`,-1),D=e("div",{class:"q-pa-md"},` A small side note here about data types. Plain words such as names are called 'strings' and they have to be enclosed by single (') or double quotes ("). Numbers however do not have quotes. There is a small but important difference between 1 and "1". There are some other types but numbers and strings are the most commonly used in the UI. `,-1),J=e("div",{class:"q-pa-md"},' The syntax for a table looks like this and you can see the columns are assigned to the variable "columns" and rows to "rows" ',-1),j=e("pre",null,`<q-table
  dense
  title="Data"
  :rows="rows"
  :columns="columns"
  row-key="name"
/>
`,-1),I=e("div",{class:"q-pa-md"},` So the data is displayed in the table as shown below. Note the heading which is specified in "title" and the ':' before rows and columns which means 'look up the data from JavaScript'. `,-1),O={class:"q-pa-md full-width"},Q=e("div",{class:"q-pa-md"}," Now we have to add functions to read and write this data to local storage. ",-1),E=e("pre",null,` function saveTableData () {
  console.log('Saving Table Data...')
  try {
    $q.localStorage.set('rows', rows)
    $q.localStorage.set('columns', columns)
  } catch (e) {
    // data wasn't successfully saved due to
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
    // data wasn't successfully read due to
    // a Web Storage API error
    console.log('Error reading data: ' + e)
  }
}

`,-1),W=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),$=e("div",{class:"q-pa-md text-center full-width"}," Coming soon - using an online database... ",-1),B={class:"text-center q-pa-md"},le={__name:"DA_DataTable",setup(M){h(()=>{console.log("Mounted. Reading table data..."),d(),c(),console.log("Rows: "+a),console.log("Columns: "+t),console.log("Rows: "+JSON.stringify(a)),console.log("Columns: "+JSON.stringify(t))});const s=f();let t=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],a=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:60,calories:400}];function c(){try{a=s.localStorage.getItem("rows"),t=s.localStorage.getItem("columns")}catch(n){console.log("Error reading data: "+n)}}function d(){console.log("saving TableData..."),console.log("Rows: "+a);try{s.localStorage.set("rows",a),s.localStorage.set("columns",t)}catch(n){console.log("Error saving data: "+n)}}return(n,P)=>(u(),g(b,{class:"flex flex-center"},{default:p(()=>[w,_,v,y,x,q,S,T,C,N,R,k,A,D,J,j,I,e("div",O,[l(m,{dense:"",title:"Data",rows:i(a),columns:i(t),"row-key":"name"},null,8,["rows","columns"])]),Q,E,W,$,e("div",B,[l(r,{label:"Home",color:"green",to:"/"}),l(r,{class:"q-ma-md",label:"Time for a  Game?",color:"blue",to:"../gameapp/rm_game/"})])]),_:1}))}};export{le as default};
