<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px; background-color:white; padding:14px"
    >
    <div class="full-width text-center">
        Welcome to Learn Quasar...<br>
        Updated: {{updatedDate}}
     </div>
     <div class="full-width text-center">
      <q-toggle
      v-model="darkModeStatus"
      label="Dark mode"
      @click="toggled"
    />
  </div>

    <div class="text-center">
    <q-btn label="Introduction" color="green" to="intro"> </q-btn>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue' //, watchEffect
import { useQuasar } from 'quasar' //, useMeta
/*
  useMeta({
    meta: {
      myKey: { name: 'description', content: 'My Website' }
    }
*/

/*

const metaData = {
  // sets document title
  title: 'Index Page',

  // meta tags
  meta: {
    description: { name: 'description', content: 'Home page' },
    keywords: { name: 'keywords', content: 'Learn Quasar' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title'
      // optional; similar to titleTemplate, but allows templating with other meta properties

      // template (ogTitle) {
       // return `${ogTitle} - My Website`
      }

    }
  },

  // CSS tags
  link: {
    // material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  },

  // JS tags
  script: {
    src: 'coi-serviceworker.min.js'
  },

  // <html> attributes
  htmlAttr: {
    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)'
  }
}
*/

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const $q = useQuasar()
    const darkModeStatus = ref($q.dark.isActive)

    const updatedDate = 'November 24, 2022'

    // useMeta(metaData)

    function toggled () {
      // console.log(darkModeStatus.value)
      $q.dark.toggle()
    }

    return {
      darkModeStatus,
      toggled,
      updatedDate
    }
  }
})

/*
watchEffect((darkModeStatus) => {
  console.log('darkModeStatus: ' + darkModeStatus.value)
  // useQuasar.dark.set(darkModeStatus) // or false or "auto"
})
*/

</script>
