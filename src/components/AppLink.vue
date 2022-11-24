<template>
  <q-item
    clickable
    :to=link
<<<<<<< Updated upstream
    @click="itemClicked"
=======
>>>>>>> Stashed changes
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
<<<<<<< Updated upstream
  name: 'AppLink',
=======
  name: 'EssentialLink',
>>>>>>> Stashed changes
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
<<<<<<< Updated upstream
  },
  methods: {

    itemClicked (item) {
      console.log('clicked: ' + item)
      this.$emit('clicked')
    }
  }

=======
  }
>>>>>>> Stashed changes
})
</script>
