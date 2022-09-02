<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Rocket Man</q-toolbar-title>
      </q-toolbar>
    </q-header>

   <!--
    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
      >

        <q-route-tab name="Example 1" :label="$t('example_1')" to="/2" />
        <q-route-tab name="Example 2" :label="$t('example_2')" to="/3" />
        <q-route-tab name="Example 3" :label="$t('example_3')" to="/5" />

        <q-route-tab name="UI Example 1" label="UI Example 1" to="da_ui_example_2" />
        <q-route-tab name="UI Example 2" label="UI Example 2" to="da_ui_example_3" />
        <q-route-tab name="UI Example 3" label="UI Example 3" to="da_ui_example_5" />
        <q-route-tab name="Using Local storage" label="Local storage" to="da_local_storage" />
      </q-tabs>
    </q-footer>
    -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation</q-item-label>
        <AppLink
           v-bind= "homeLink"
        />
        <q-item-label header>UI Examples</q-item-label>
        <AppLink v-for="link in appUILinks" :key="link.title" v-bind="link" />

        <q-item-label header>Other functionality</q-item-label>
        <AppLink v-for="link in appFunctionLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import AppLink from 'components/AppLink.vue'

const homeLink = {
  title: 'Home',
  caption: 'Back to where it all began',
  icon: 'home',
  link: '/'
}

const dummyAppFunctionsList = [
  {
    title: 'TBD',
    caption: '',
    icon: 'school',
    link: ''
  }
]

const dummyAppUIExamplesList = [
  {
    title: 'TBD',
    caption: '',
    icon: 'school',
    link: ''
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    AppLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      appUILinks: dummyAppUIExamplesList,
      appFunctionLinks: dummyAppFunctionsList,
      homeLink,
      leftDrawerOpen,

      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
