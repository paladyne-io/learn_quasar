<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Supabase</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer bordered>
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey">
        <!--
        <q-route-tab name="Example 1" :label="$t('example_1')" to="/2" />
        <q-route-tab name="Example 2" :label="$t('example_2')" to="/3" />
        <q-route-tab name="Example 3" :label="$t('example_3')" to="/5" />
        -->
        <q-route-tab name="UI Example 1" label="Transitions" to="/examples/transitions" @click="hideLeftDrawer" />
        <q-route-tab name="UI Example 2" label="Image Grid" to="/examples/imagegrid" @click="hideLeftDrawer" />
        <q-route-tab name="UI Example 3" label="Image Gallery" to="/examples/qcarousel" @click="hideLeftDrawer" />

      </q-tabs>
    </q-footer>
    <!-- Instead of listening for emitted click events from AppLink component
    we can just listen for (@)click event directly
    For future reference see here: https://stackoverflow.com/questions/69367711/vue-3-emit-never-firing
    -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <AppLink v-bind="homeLink" />
        <q-item-label header>Examples</q-item-label>
        <AppLink v-for="link in ExamplesList" :key="link.title" @click="toggleLeftDrawer" @clicked="testClicked"
          v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue' // defineComponent
// import EssentialLink from 'components/EssentialLink.vue'
import AppLink from 'components/AppLink.vue'

const homeLink = {
  title: 'Home',
  caption: 'Back to where it all began',
  icon: 'home',
  link: '/'
}

const ExamplesList = [
  {
    title: 'Transitions',
    caption: '',
    icon: 'star',
    link: 'transitions'

  },
  {
    title: 'Image Grid',
    caption: 'Image grid demo using Colcade)',
    icon: 'fas fa-border-all',
    link: 'imagegrid'
  },
  {
    title: 'Image Gallery',
    caption: 'Quasar\'s Carousel with transitions',
    icon: 'fa-solid fa-images',
    link: 'qcarousel'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  console.log('toggleLeftDrawer')
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function testClicked() {
  console.log('testClicked')
}

function hideLeftDrawer() {
  console.log('hide LeftDrawer')
  leftDrawerOpen.value = false
}

/*
function itemClicked (elem) {
  console.log('itemClicked xxx: ' + elem)
}
*/

</script>
