<template>
  <q-page class="flex-center q-pa-md">
    <div class="q-pa-md text-h5 header"> Image carousel </div>

    <div>
      <q-card flat class="q-pa-md">
        <div class="text-subheader q-pt-sm">
          The world is your canvas
        </div>

        <div class="q-pt-sm">
          Your mission today is to get to this:
        </div>

        <div class="q-pt-sm">
          <carousel wrapAround :items-to-show="1">
            <slide v-for="slide in slides" :key="slide.id">
              <div class="row">
                <div class="col-12">
                  <img :src=slide.src />
                </div>
                <div class="col-12">
                  {{ slide.text }}
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>

        <div class="q-pt-sm">
          This is an example to show how to install and import an external library.
          Quasar provides it's own <a href="https://quasar.dev/vue-components/carousel">perfectly good carousel</a>.
          Consider this to be an exercise rather than a recommendation.
          (You can see the Quasar Carousel in the <router-link to="/examples/qcarousel">Examples</router-link>.)
        </div>

        <div class="q-pt-sm">
          This is the basic order of tasks.
        </div>

        <div class="q-pt-sm">
          <q-item-label class="q-pt-sm text-subheader">
            1. Install the library
          </q-item-label>

          <div class="q-pt-sm">
            As mentioned previously, you can extend the functionality of your app by adding libraries.
            For example we can add this <b>vue-carousel</b> library to display images in a slideshow or 'slider'.

            The page that describes the library is here:
            <a href="https://ismail9k.github.io/vue3-carousel/">vue3-carousel</a>
          </div>
          <div class="q-py-sm">
            For this task you need to use the terminal again.
            Press the 'Control' and 'C' keys at the same time to exit the quasar development environment.
            Then follow the instructions to install the library. Usually these are shown on the installation page.
            It is common to be something like, <b>"npm install vue3-carousel"</b>.
          </div>

          <pre>
dcs@Darrens-MacBook-Pro learn_quasar % <b>npm install vue3-carousel</b>

added 1 package, and audited 460 packages in 4s

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

          The library is now installed so you need to relaunch the Quasar development environment by typing 'quasar
          dev' and pressing enter.
          <div class="tip q-py-sm">
            <q-item-label class="bulb">Tip: Use the up/down arrow keys on your keyboard to select previous shell
              commands so you don't have to retype them.
            </q-item-label>
          </div>
          <div>
            Note the vulnerabilities warning. It's a fact of life when working with Vue - and other JavaScript frameworks
            - that libraries, in addition to
            becoming a dependency of your app, also often add their own dependencies.
            It is necessary to keep on eye on these vulnerabilities and fix them wherever possible (by running npm audit
            fix). Also you should remove any libraries that you no longer use by running 'npm uninstall' or <a
              href="https://classic.yarnpkg.com/lang/en/docs/cli/remove/"> yarn remove</a>.
          </div>

          <q-item-label class="q-pt-md text-subheader">
            2. Import and customize the library
          </q-item-label>
          After adding the library to your project, you have to add it to the page or component in the script section.

          If your new page file doesn't have a script section, add one like below.
          (It is common to use only one line to import a library.
          This example is a little more complicated as it also imports some styling for the component from a css
          file. It can be simplified quite a lot by using the &lt;script setup&gt; syntax.)

          <pre>
&lt;script&gt;
  import &#123; defineComponent &#125; from 'vue'
  import 'vue3-carousel/dist/carousel.css'
  import &#123; Carousel, Slide, Pagination, Navigation &#125; from 'vue3-carousel'

  export default defineComponent&#40;&#123;
    name: 'ImageCarouselPage',
    components: &#123;
      Carousel,
      Slide,
      Pagination,
      Navigation
  &#125;,
  setup &#40;&#41; &#123;
    const slides = &#91;
       &#123; id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1',
      text: 'Slide 1' &#125;,
       &#123; id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2',
      text: 'Slide 2' &#125;,
       &#123; id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3',
      text: 'Slide 3' &#125;&#93;

    return &#123;
      slides
    &#125;
  &#125;
&#125;&#41;
&lt;/script&gt;
</pre>

          <div class="q-pa-sm">
            Finally, in the <b>template</b> section of your page or component, add the presentation (html) code:
          </div>

          <pre>
  &lt;carousel :items-to-show="1"&gt;
    &lt;slide v-for="slide in slides" :key="slide.id"&gt;
    &lt;img :src= slide.src /&gt;

    &lt;template #addons&gt;
      &lt;navigation /&gt;
      &lt;pagination /&gt;
    &lt;/template&gt;
  &lt;/carousel&gt;
</pre>

        </div>
        <div>
          It may not be clear exactly what is happening here. For now, just try to remember these steps.
          <ol>
            <li> Install the library using the Terminal (i.e. 'npm install _library_').</li>
            <li> Import it in the script section of the component (file) where you want to use it (i.e. 'import {library}
              from _library_').
            </li>
            <li>If it is a GUI component, add it into the html area (template) in angle brackets (i.e.
              &lt;ImportedComp&gt;...&lt;/ImportedComp&gt; or sometimes just &lt;ImportedComp/&gt;).</li>
          </ol>
        </div>
        <div class="row full-width text-subheader q-pt-sm">
          <q-btn outline style="color: goldenrod" label="Previous" to="programming1" />
          <q-space />
          <q-btn outline style="color: goldenrod;text-align:right;" label="Next: Send emails" to="sendemail" />
        </div>
        <!--
<div class="row text-subheader q-pt-sm">
    <q-item class="col"
          clickable
          v-ripple
          to="programming1"
          @click="link = 'programming1'"
        >
        Previous (Programming basics)
    </q-item>
          <q-item class="col"
            clickable
            v-ripple
            to="sendemail"
            @click="link = 'sendemail'"
          >
          <div style="text-align:right" class="full-width">
            Next: Send emails
        </div>
    </q-item>
</div>
-->
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue' //, onMounted, version
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  name: 'ImageCarouselPage',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup() {
    const slides = [
      { id: 1, name: 'slide1', src: 'https://picsum.photos/800/600?random=1', class: 'np-slider np-slide-1', text: 'Slide 1' },
      { id: 2, name: 'slide2', src: 'https://picsum.photos/800/600?random=2', class: 'np-slider np-slide-1', text: 'Slide 2' },
      { id: 3, name: 'slide3', src: 'https://picsum.photos/800/600?random=3', class: 'np-slider np-slide-1', text: 'Slide 3' }]

    /*
    onMounted(() => {
    // console.log('uuid:' + uuid.value)
      alert('Vue version :' + version)
    })
    */

    return {
      slides
    }
  }
})
</script>

<style>
.np-slide-1 {
  background: url("https://unsplash.it/800?random=1");
}

.np-slide-2 {
  background: url("https://unsplash.it/800?random=2");
}

.np-slide-3 {
  background: url("https://unsplash.it/800?random=3");
}

.np-slide-4 {
  background: url("https://unsplash.it/800?random=4");
}

.np-slide-5 {
  background: url("https://unsplash.it/800?random=5");
}
</style>
