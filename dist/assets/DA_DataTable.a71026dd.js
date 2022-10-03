import{Q as m}from"./QTable.d1508cba.js";import{o as h,q as u,t as g,x as p,D as e,d as i,b4 as l,C as r,z as n}from"./index.26cc8d54.js";import{Q as b}from"./QPage.d25184c2.js";import{u as f}from"./use-quasar.6367ba83.js";import"./QSeparator.0615ece5.js";import"./use-dark.917d1af0.js";import"./use-timeout.2f21b0ca.js";import"./scroll.d7229a5c.js";import"./use-tick.d96fca1d.js";import"./use-key-composition.9e335d57.js";import"./format.a33550d6.js";import"./uid.42677368.js";import"./QItem.cfc6d39a.js";import"./QItemLabel.d850b386.js";import"./selection.90dfd797.js";import"./use-form.10abb6e1.js";import"./use-checkbox.36cb0dc4.js";const w=e("div",{class:"heading q-pa-md"},"Adding data to a table",-1),_=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of assigning data and reactivity. ",-1),v=e("div",{class:"q-pa-md"},[n(" A simple element such as a button probably only requires setting a label, however other more complex components, such as a table, might require loading various types of data. A javaScript object can be described with "),e("a",{href:"https://www.json.org/json-en.html"},[e("b",null,"JSON")]),n(" (JavaScript Object Notation). JSON can describe an object, an array or a set of named elements. It is often used to save data and to send it over the network (to and from a server). ")],-1),y=e("div",{class:"q-pa-md full-width text-center text-bold"}," Some simple examples of JSON ",-1),x=e("div",{class:"q-pa-md full-width text-center"}," A plain JSON array is used to contain a list of items. ",-1),q=e("pre",null,`["John", "Sarah", "Hiroyuki", "Maria"]
`,-1),S=e("div",{class:"q-pa-md full-width text-center"}," An object (in this case a person) can be described by adding named elements between {}. An array is added inside the object. ",-1),T=e("pre",null,'{"name":"John", "age":25, "hobbies":["running", "swimming", "reading"]}',-1),N=e("div",{class:"full-width text-center q-pa-md"}," A table is comprised of an array of data arranged in a grid. ",-1),R=e("pre",null,`Header 1    Header 2     Header 3
  Row 1         H2/R1         H3/R1
  Row 2         H2/R2         H3/R2
  Row 3         H2/R3         H3/R3`,-1),k=e("div",{class:"q-pa-md"},[n(" Many components in Vue and Quasar use a "),e("b",null,"model"),n(". A model is a representation of the data that applies to the component. The data used by the component are contained in the model and when the data in the model changes, the display will change. This might seem difficult to understand at first but it is related to the concept of reactivity. The component (such as a table) reacts to the changes in the model. Also, if the component is editable, changing the data inside the component will update the model. This is sometimes called 2-way binding. ")],-1),A=e("div",{class:"q-pa-md"}," Let's look at this further using our example app. We want to load the table data and save it when it is changed by the user. (Using local storage means that the data is saved even after we close the page or app.) ",-1),D=e("pre",null,`let columns = [
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
]`,-1),H=e("div",{class:"q-pa-md"},` A small side note here about data types. Plain words such as names are called 'strings' and they have to be enclosed by single (') or double quotes ("). Numbers however do not have quotes. There is a small but important difference between 1 and "1". There are some other types but numbers and strings are the most commonly used in the UI. `,-1),J=e("div",{class:"q-pa-md"},' The syntax for a table looks like this and you can see the columns are assigned to the variable "columns" and rows to "rows" ',-1),j=e("pre",null,`<q-table
  dense
  title="Data"
  :rows="rows"
  :columns="columns"
  row-key="name"
/>
`,-1),C=e("div",{class:"q-pa-md"},` So the data is displayed in the table like this. Note the heading which is specified in "title" and the ':' before rows and columns which means 'look up the data from JavaScript'. `,-1),I={class:"q-pa-md full-width"},O=e("div",{class:"q-pa-md"}," Now we have to add functions to read and write this data to local storage. ",-1),Q=e("pre",null,` function saveTableData () {
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

`,-1),E=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),W=e("div",{class:"q-pa-md text-center full-width"}," Coming soon - using an online database... ",-1),$={class:"text-center q-pa-md"},ie={__name:"DA_DataTable",setup(B){h(()=>{console.log("Mounted. Reading table data..."),d(),c(),console.log("Rows: "+t),console.log("Columns: "+a),console.log("Rows: "+JSON.stringify(t)),console.log("Columns: "+JSON.stringify(a))});const o=f();let a=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],t=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:60,calories:400}];function c(){try{t=o.localStorage.getItem("rows"),a=o.localStorage.getItem("columns")}catch(s){console.log("Error getting data: "+s)}}function d(){console.log("saving TableData..."),console.log("Rows: "+t);try{o.localStorage.set("rows",t),o.localStorage.set("columns",a)}catch(s){console.log("Error saving data: "+s)}}return(s,M)=>(u(),g(b,{class:"flex flex-center"},{default:p(()=>[w,_,v,y,x,q,S,T,N,R,k,A,D,H,J,j,C,e("div",I,[i(m,{dense:"",title:"Data",rows:l(t),columns:l(a),"row-key":"name"},null,8,["rows","columns"])]),O,Q,E,W,e("div",$,[i(r,{label:"Home",color:"green",to:"/"}),i(r,{class:"q-ma-md",label:"Time for a  Game?",color:"blue",to:"../gameapp/rm_game/"})])]),_:1}))}};export{ie as default};
