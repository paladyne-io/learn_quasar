<template>
<q-page class="flex-center q-pa-md">
<div class="q-pa-md text-h5 text-bold"> Making it your own </div>

<div>
  <q-card flat class="q-pa-md">
    <div class="text-subheader q-pt-sm">
      The world is your canvas
    </div>

    <div class="q-pt-sm">
      Your mission today is to get to this:
    </div>

<q-img src="images/QuasarAppTopPage.png" alt="Quasar default app screen"> </q-img>

<div class="q-pt-sm">
  This is the basic order of tasks.
</div>

<q-list>
   <q-item>
      <q-item-section>
       <q-item-label class="q-pt-md text-subheader" >
        1. Add your own pictures and text
        </q-item-label>

<q-item-label class="q-pt-md text-subheader" >
2. Add a new page
</q-item-label>

<div class="q-pt-sm">
1. Copy a previous page or write and save a new page.
It can be as simple as something like this (the default Quasar 'IndexPage.vue' page).
Note that the file name has to have 2 or more words, like <b>'MyPage.vue'</b>.
</div>
<div class="q-pa-sm bg-blue-2">
<pre>
&lt;template&gt;
  &lt; q-p_ge class="flex flex-center"&gt;
      &lt;img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;
</pre>
</div>
<div class="q-pt-sm">
2. Add this page to the router. Locate the file "routes.js" in the router folder.
Copy and paste one of the children, then rename the <b>path</b> and <b>page title</b> as below.
 Make sure to add a comma after the previous child.
 'path' is the name that will appear after the "/" in the browser's address bar*.
</div>
<div class="q-pa-sm bg-blue-2">
<pre>
  { path: '<b>mypage</b>', component: () => import('pages/<b>MyPage.vue</b>') }
</pre>
</div>
<div class="q-pt-sm">
*You may notice the "#" in the address. Don't worry about it for now.
 It is the default mode and can be changed in the Quasar.conf file.
</div>
<q-item-label class="q-pt-md text-subheader">
3. Install a library
</q-item-label>

<div class="q-pt-sm">
1. As mentioned previously, you can extend the functionality of your app by adding other libraries.
For example, we can add the popular vue-chartjs library to add graphs.

For this, you need to use the terminal again.
Type "control c" (press the 'control' key and 'c' key at the same time) to exit the running program. Then follow the instructions to install the library.
Usually, these are shown on the installation page.

https://www.npmjs.com/package/vue-chartjs

It is common to be something like, "npm install vue-chartjs"
In this case, the installation says to use this command:

npm i vue-chartjs chart.js
<div class="q-pa-sm bg-blue-2">
<pre>
dcs@Darrens-MacBook-Pro learn_quasar % npm install vue-chartjs

added 2 packages, and audited 459 packages in 5s

94 packages are looking for funding
  run `npm fund` for details

6 moderate severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
dcs@Darrens-MacBook-Pro learn_quasar %

</pre>
</div>
The library is now installed so you need to relaunch the Quasar dev environment by typing 'quasar dev'
<div class="tip q-pt-sm">
<q-item-label class="bulb">Tip:</q-item-label> lUse the up/down arrow keys on your keyboard to select previous shell commands so you don't have to retype them.
</div>
2. After adding the library to your project you need to add it to the page or component in teh script section of yourh page.
If your page file doesn't have a script section, add one like this:
<div class="q-pa-sm bg-blue-2">
<pre>
&lt;script&gt;
import { defineComponent } from 'vue'
<b>import { Bar } from 'vue-chartjs'</b>

export default defineComponent({
  name: '<b>MyPage</b>'
})
&lt;/script&gt;
</pre>
</div>
Ensure to add this line as shown above.
<div class="q-pa-sm bg-blue-2">
<pre>
import { Bar } from 'vue-chartjs'
</pre>
</div>

Finally, in the template section of your page, add:
&lt;bar/&gt;
</div>

<Bar />

</q-item-section>
    </q-item>
    </q-list>

<div class="row text-subheader q-pt-sm">
    <q-item class="col"
          clickable
          v-ripple
          to="intro"
          @click="link = 'intro'"
        >
        Previous
    </q-item>
</div>
</q-card>
</div>
</q-page>
</template>

<script>
import { h, defineComponent } from 'vue' //, onMounted, version
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
  // Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
  name: 'HelloWorld',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    }
  },
  setup (props) {
    /*
    onMounted(() => {
    // console.log('uuid:' + uuid.value)
      alert('Vue version :' + version)
    })
    */

    const chartData = {
      labels: [
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ],
      datasets: [
        {
          label: 'Company Sales',
          backgroundColor: ['#0f96d9', '#0f96d9', '#0f96d9', '#0f96d9', '#0f96d9'],
          data: [3.0, 2.0, 2.8, 3.2, 3.6]
        }
      ]
    }
    const chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      width: 300,
      scales: {
        y: {
          min: 0,
          max: 5.0,
          stepSize: 0.5,
          reverse: false,
          beginAtZero: true
        }
      }
    }
    return () =>
      h(Bar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles
        // plugins: props.plugins
      })
  }
})
</script>

<style>
.text-subheader {
  font-family: verdana;
  font-size: 16px;
  font-weight: bold;
  color:darkblue;
}
</style>
