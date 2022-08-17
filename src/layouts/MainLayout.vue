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

        <q-toolbar-title>
          Learn Quasar
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-list>
        <q-item-label header>
          Navigation Links
        </q-item-label>
        <q-expansion-item
        icon="perm_identity"
        label="Lesson Links"
        caption="Links to tutorials in this app"
        default-opened>

        <AppLink
          v-for="link in navigationLinks"
          :key="link.title"
          v-bind="link"
        />
        </q-expansion-item>
      </q-list>

      <q-list>
        <q-item-label header>
          This app
        </q-item-label>
        <AppLink
           v-bind= "feedbackLink"
        />
        <AppLink
           v-bind= "preferencesLink"
        />
      </q-list>

      <q-list>
        <q-item-label header>
          Other Links
        </q-item-label>
      <q-expansion-item
        icon="perm_identity"
        label="Quasar Links"
        caption="Links related to Quasar"
        default-closed
      >
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import AppLink from 'components/AppLink.vue'

const feedbackLink = {
  title: 'Send Feedback',
  caption: 'Your comments and suggestions',
  icon: 'fa fa-pen',
  link: 'feedback'
}

const preferencesLink = {
  title: 'Preferences',
  caption: 'App settings',
  icon: 'fa  fa-gear',
  link: 'preferences'
}

const navlinksList = [
  {
    title: 'Prologue',
    caption: 'prologue',
    icon: 'school',
    link: 'prologue'
  },
  {
    title: 'Intro',
    caption: 'Introduction',
    icon: 'school',
    link: 'intro'
  },
  {
    title: 'Let\'s Start',
    caption: 'Preparation and installation',
    icon: 'school',
    link: 'startprogramming'
  },
  {
    title: 'Hello World',
    caption: 'Make it your own',
    icon: 'school',
    link: 'helloworld'
  },
  {
    title: 'Programming Basics',
    caption: 'Make it do stuff',
    icon: 'school',
    link: 'programming1'
  },
  {
    title: 'Add a library',
    caption: 'Extend it',
    icon: 'school',
    link: 'images'
  },
  {
    title: 'Sending email',
    caption: 'Communicate with your users',
    icon: 'school',
    link: 'sendemail'
  }
]
const qlinksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink, AppLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: qlinksList,
      navigationLinks: navlinksList,
      leftDrawerOpen,
      feedbackLink,
      preferencesLink,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
