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

        <q-expansion-item
        icon=""
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

      <q-expansion-item
        icon=""
        label="Demo apps"
        caption=""
        default-opened>

        <AppLink
          v-for="link in demoAppLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-expansion-item>

      <q-expansion-item
        icon=""
        label="Examples"
        caption=""
        default-opened>

        <AppLink
          v-for="link in exampleLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-expansion-item>
      <q-list>
        <q-item-label header>
          Learn Quasar
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
        icon=""
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

const exampleLinks = [
  {
    title: 'Image Grid layout',
    caption: 'Imagegrid demo (Colcade)',
    icon: 'fas fa-border-all',
    link: 'examples/imagegrid'
  },
  {
    title: 'Transition demo ',
    caption: 'About Quasars',
    icon: 'star',
    link: 'examples/transtions'
  }
]

const demoAppLinks = [
  {
    title: 'My Pet',
    caption: 'Let\'s build a simple app',
    icon: 'fas fa-dog',
    link: 'dummyapp/'
  },
  {
    title: 'Rocket Man',
    caption: 'A simple demo game',
    icon: 'rocket',
    link: 'gameapp/rm_game'
  }
]

const navlinksList = [
  {
    title: 'Prologue',
    caption: '',
    icon: 'school',
    link: 'prologue'
  },
  {
    title: 'Introduction',
    caption: '',
    icon: 'school',
    link: 'intro'
  },
  {
    title: 'Lesson 1',
    caption: 'Preparation and installation',
    icon: 'school',
    link: 'startprogramming'
  },
  {
    title: 'Lesson 2',
    caption: 'Hello World',
    icon: 'school',
    link: 'helloworld'
  },
  {
    title: 'Lesson 3',
    caption: 'Programming Basics',
    icon: 'school',
    link: 'programming1'
  },
  {
    title: 'Lesson 4',
    caption: 'Add a library',
    icon: 'school',
    link: 'images'
  },
  {
    title: 'Lesson 5',
    caption: 'Send emails',
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
      exampleLinks,
      demoAppLinks,
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
