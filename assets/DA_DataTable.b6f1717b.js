import{Q as d}from"./QTable.38cbd432.js";import{o as m,q as h,t as g,x as u,D as e,d as n,b4 as l,C as i,z as p}from"./index.93d6983e.js";import{Q as f}from"./QPage.e5fbbf15.js";import{u as b}from"./use-quasar.f2afe7b7.js";import"./QSeparator.934b5e58.js";import"./use-dark.d44dd802.js";import"./use-timeout.43148a28.js";import"./selection.c458aef1.js";import"./use-tick.e008fbe9.js";import"./use-key-composition.d78708c5.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.4a9565c1.js";import"./QItemSection.1c4c147c.js";import"./QItemLabel.dbca4559.js";import"./use-form.851f5b58.js";import"./use-checkbox.55735a4c.js";const w=e("div",{class:"heading q-pa-md"},"Adding data to a table",-1),_=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of assigning data and reactivity. ",-1),v=e("div",{class:"q-pa-md"}," A simple element such as a button probably only requires setting a label, however other more complex elements might require loading various types of data. A javascript object can be described with JSON (JavaScript Object Notation). JSON is a set of named objects. A table is actually a form of array. An array is a set of data than can be arranged in a grid. ",-1),x=e("pre",null,`  Header 1    Header 2     Header 3
  Row 1         H2/R1         H3/R1
  Row 2         H2/R2         H3/R2
  Row 3         H2/R3         H3/R3
  `,-1),y=e("div",{class:"q-pa-md"},[p(" Many elements in Vue and Quasar use a model. A model is a representation of the data that applies to the element. The contents of the element are contained in the model and when you add or change data in the model the display will change. This might seem difficult to understand at first but it is related the concept of reactivity. The element (such as a table) reacts to the changes in the model. Also if the element is editable, changing the data will update the model. "),e("div",{class:"q-pa-md"}," Let's look at in terms of our example app. We want to load the table data and save it if it changed by the user. (Using local storage means that the data is saved even after we close the page or app.) "),e("pre",null,`let columns = [
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
]

`)],-1),q=e("div",{class:"q-pa-md"},' The syntax for a table looks like this and you can see the columns are assigned to the variable "columns" and rows to "rows" ',-1),S=e("pre",null,`  <q-table
    dense
    title="Data"
    :rows="rows"
    :columns="columns"
    row-key="name"
  />
`,-1),T=e("div",{class:"q-pa-md"},' So the data is displayed in the table like this (note the heading which is specified in "title" ) ',-1),R={class:"q-pa-md full-width"},D=e("div",{class:"q-pa-md"}," Now we had to add functions to read and write this data to local storage.DA_RocketMan",-1),k=e("pre",null,` function saveTableData () {
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

`,-1),A=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),N=e("div",{class:"q-pa-md text-center full-width"}," Next - connecting our 'getData' function to the table. ",-1),H={class:"text-center q-pa-md full-width"},C={class:"text-center q-pa-md"},Y={__name:"DA_DataTable",setup(I){m(()=>{console.log("mounted. Reading table data..."),c(),r(),console.log("Rows: "+t),console.log("Columns: "+a),console.log("Rows: "+JSON.stringify(t)),console.log("Columns: "+JSON.stringify(a))});const o=b();let a=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],t=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:60,calories:400}];function r(){try{t=o.localStorage.getItem("rows"),a=o.localStorage.getItem("columns")}catch(s){console.log("Error getting data: "+s)}}function c(){console.log("saving TableData..."),console.log("Rows: "+t);try{o.localStorage.set("rows",t),o.localStorage.set("columns",a)}catch(s){console.log("Error saving data: "+s)}}return(s,Q)=>(h(),g(f,{class:"flex flex-center"},{default:u(()=>[w,_,v,x,y,q,S,T,e("div",R,[n(d,{dense:"",title:"Data",rows:l(t),columns:l(a),"row-key":"name"},null,8,["rows","columns"])]),D,k,A,N,e("div",H,[n(i,{label:"Loading data to a table",color:"primary"})]),e("div",C,[n(i,{label:"Home",color:"green",to:"/"})])]),_:1}))}};export{Y as default};
