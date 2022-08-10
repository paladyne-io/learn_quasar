<template>
 <DarkModeComponent>
 <template #component>
  <div class="quote q-px-sm q-my-sm">
  <blockquote><q>
    {{mytext}}
    </q>
  </blockquote>
  </div>
  </template>
</DarkModeComponent>
</template>

<script setup>
import DarkModeComponent from 'components/DarkModeComponent.vue'

defineProps({ mytext: String })
</script>

<!--
background-light and background-dark classes
are added by the DarkMode(Aware)Component
-->

<style scoped>
 div .quote {
  font-family: verdana;
  font-size: 14px;
  font-weight: regular;
  }

  div .background-dark {
    background-color: #darkgrey;
  }

  div .background-light {
    background-color: #lightgrey;
  }

div q {
  quotes: "“" "”" "‘" "’";
}

div q::before {
    content: open-quote;
}

div q::after {
    content: close-quote;
}

</style>
