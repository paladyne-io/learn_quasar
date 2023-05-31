<template>
  <q-page class="flex-center q-pa-md">
    <div class="q-pa-md text-h5 text-bold"> Components And Slots</div>

    <q-card flat class="q-pa-md">
      <SubHeaderComponentDA mytext="How to use Components" />

      <div class="q-pt-sm">
        Today (November 26, 2022) I added a <router-link to="/preferences">Preferences page</router-link> containing a
        toggle to switch to Dark mode.
        If you don't know what that is you can try it out on the page.
        There is an explanation on Quasar's website <a href="https://quasar.dev/style/dark-mode"> too</a>.

      </div>
      <div class="q-pt-sm">
        <QuoteComponent
          mytext="The advantages of Dark Mode are that:

It enhances visual ergonomics by reducing eye strain.
Provides comfort of use at night or in dark environments.
It conserves battery power mainly if the device screen is OLED or AMOLED, thereby enabling device usage for longer periods without charging." />
      </div>

      <div class="q-pt-sm">
        After spending an hour or two trying to figure out how to use a toggle switch to toggle a function... I got it
        working and, voila!, the colors in the app are suddenly reversed.
        This is a great example where Quasar saves tons of time - giving you functionality out of the box.
        After a fleeting feeling of satisfaction, the next realization is, "but that doesn't look right".
        As the Quasar documentation says,
        &quot; All Quasar components with a dark property will have it automatically set to true. No need to do it
        manually.&quot; which raises the question, what about your own components? What about the places where you
        have added some colors using in-line CSS styles?
      </div>
      <div class="q-pt-sm">
        In my experience, when you start trying to fix something you do a lot of learning along the way.
        So today I made a custom component that switches its appearance based on the mode. This shows the power of vue
        and of components.
        After making this one component I considered how to make it available to other components.
        In Java you might do this by "sub classing" and inheritance, but vue uses composition so I made a parent
        component that is dark mode aware with a slot for other components to fit inside.
      </div>
      <div class="q-pt-sm">
        Today I want to explain about slots and the somewhat similar props while once again urging you to spend time
        understanding and thinking how to 'componentize' your app.
      </div>

      <div class="row text-subheader q-pt-sm">
        <q-item class="col" clickable v-ripple to="intro" @click="link = 'intro'">
          Previous
        </q-item>
        <q-item class="col" clickable v-ripple to="slots" @click="link = 'slots'">
          <div style="text-align:right" class="full-width">
            Next: Slots
          </div>
        </q-item>
      </div>

    </q-card>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SubHeaderComponentDA from 'components/SubHeaderComponentDA.vue'
// import PreComponent from 'components/PreComponent.vue'
// import PreComponentDA from 'components/PreComponentDA.vue'
import QuoteComponent from 'components/QuoteComponent.vue'

export default defineComponent({
  name: 'ProgrammingStartPage',
  components: { SubHeaderComponentDA, QuoteComponent }
})
</script>

<style>
.text-subheader {
  font-family: verdana;
  font-size: 16px;
  font-weight: bold;
}
</style>
