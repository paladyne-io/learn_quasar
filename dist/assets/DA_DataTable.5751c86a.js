import{Q as m}from"./QTable.fca1a29e.js";import{V as h,x as u,y as g,z as p,G as e,A as l,aA as r,F as i,C as a}from"./index.b87445cf.js";import{Q as b}from"./QPage.b83695ee.js";import{u as f}from"./use-quasar.b1481fa5.js";import"./QList.3098613e.js";import"./rtl.b51694b1.js";import"./QItem.7a473e93.js";import"./QItemLabel.4590922d.js";import"./selection.be852dbd.js";import"./format.a33550d6.js";import"./use-fullscreen.4723256e.js";const w=e("div",{class:"heading q-pa-md"},"Adding data to a table",-1),_=e("div",{class:"q-pa-md text-subheader text-center full-width"}," This article explains the basics of assigning data and reactivity. ",-1),v=e("div",{class:"q-pa-md"},[a(" A simple element such as a button probably only requires setting a label, however other more complex components, such as a table, might require loading various types of data. A javaScript object can be described with "),e("a",{href:"https://www.json.org/json-en.html"},[e("b",null,"JSON")]),a(" (JavaScript Object Notation). JSON can describe an object, an array or a set of named elements. It is often used to save data and to send it over the network (to and from a server). ")],-1),y=e("div",{class:"q-pa-md full-width text-center text-bold"}," Some simple examples of JSON ",-1),x=e("div",{class:"q-pa-md full-width text-center"}," A plain JSON array is used to contain a list of items. ",-1),q=e("pre",null,`["John", "Sarah", "Hiroyuki", "Maria"]
`,-1),S=e("div",{class:"q-pa-md full-width text-center"}," An object (in this case a person) can be described by adding named elements between {}. An array is added inside the object. ",-1),T=e("pre",null,'{"name":"John", "age":25, "hobbies":["running", "swimming", "reading"]}',-1),C=e("div",{class:"full-width text-center q-pa-md"}," A table is comprised of an array of data arranged in a grid. ",-1),A=e("pre",null,`Column 1   Column 2     Column 3
  Row 1           C2/R1         C3/R1
  Row 2           C2/R2         C3/R2
  Row 3           C2/R3         C3/R3`,-1),N=e("div",{class:"q-pa-md"},[a(" Many components in Vue and Quasar use a "),e("b",null,"model"),a(". A model is a representation of the data that applies to the component. The data used by the component are contained in the model and when the data in the model changes, the display will change. This might seem difficult to understand at first but it is related to the concept of "),e("b",null,"reactivity"),a(". The component (such as a table) reacts to the changes in the model. Also, if the component is editable, changing the data inside the component will update the model. This is known as 2-way binding. ")],-1),R=e("div",{class:"q-pa-md"}," Let's look at this further using our example app. We want to load the table data and save it when it is changed by the user. (Using local storage means that the data is saved even after we close the page or app.) ",-1),k=e("pre",null,`let columns = [
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
`,-1),I=e("div",{class:"q-pa-md"},` So the data is displayed in the table as shown below. Note the heading which is specified in "title" and the ':' before rows and columns which means 'look up the data from JavaScript'. `,-1),E={class:"q-pa-md full-width"},O=e("div",{class:"q-pa-md"}," Now we have to add functions to read and write this data to local storage. ",-1),Q=e("pre",null,[a(`function saveTableData () {
  console.log('Saving Table Data...')
  try {
    $q.localStorage.`),e("b",null,"set"),a(`('rows', rows)
    $q.localStorage.`),e("b",null,"set"),a(`('columns', columns)
  } catch (e) {
    // data wasn't successfully saved due to
    // a Web Storage API error
    console.log('Error saving data: ' + e)
  }
}

function readTableData () {
  console.log('Reading Table Data...')
  try {
    rows = $q.localStorage.`),e("b",null,"getItem"),a(`('rows')
    columns = $q.localStorage.`),e("b",null,"getItem"),a(`('columns')
  } catch (e) {
    // data wasn't successfully read due to
    // a Web Storage API error
    console.log('Error reading data: ' + e)
  }
}

`)],-1),W=e("div",{class:"q-pa-md"}," Notice the slightly different syntax, when getting data it is called 'getItem'. When saving or writing, it is just called 'set'. ",-1),V=e("div",{class:"q-pa-md text-center full-width"}," Coming soon - using an online database... ",-1),$={class:"text-center q-pa-md"},ee={__name:"DA_DataTable",setup(B){h(()=>{console.log("Mounted. Reading table data..."),d(),c(),console.log("Rows: "+t),console.log("Columns: "+s),console.log("Rows: "+JSON.stringify(t)),console.log("Columns: "+JSON.stringify(s))});const o=f();let s=[{name:"exercise",label:"Exercise",field:"exercise",align:"left"},{name:"time",label:"Time",field:"time"},{name:"calories",label:"Calories",field:"calories"}],t=[{exercise:"Walking",time:30,calories:100},{exercise:"Chasing cars",time:60,calories:400}];function c(){try{t=o.localStorage.getItem("rows"),s=o.localStorage.getItem("columns")}catch(n){console.log("Error reading data: "+n)}}function d(){console.log("saving TableData..."),console.log("Rows: "+t);try{o.localStorage.set("rows",t),o.localStorage.set("columns",s)}catch(n){console.log("Error saving data: "+n)}}return(n,M)=>(u(),g(b,{class:"flex flex-center"},{default:p(()=>[w,_,v,y,x,q,S,T,C,A,N,R,k,D,J,j,I,e("div",E,[l(m,{dense:"",title:"Data",rows:r(t),columns:r(s),"row-key":"name"},null,8,["rows","columns"])]),O,Q,W,V,e("div",$,[l(i,{class:"q-ma-sm",label:"Home",color:"green",to:"/"}),l(i,{class:"q-ma-sm",label:"Examples",color:"orange",to:"../examples/imagegrid"}),l(i,{class:"q-ma-sm",label:"Time for a  Game?",color:"blue",to:"../gameapp/rm_game/"})])]),_:1}))}};export{ee as default};
