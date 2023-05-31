<template>
  <q-page class="flex-center q-pa-md">
    <div class="q-pa-md text-h5 text-bold"> Components And Slots</div>

    <q-card flat class="q-pa-md">
      <SubHeaderComponentDA mytext="What slots are and how to use them" />

      <div class="q-pt-sm">
        For reference:
        <a href="https://vuejs.org/guide/components/slots.html">Vue Slots</a>
      </div>

      <div class="q-pt-sm">
        Sorry. It's not written yet. Check back soon!
      </div>

      <div class="row text-subheader q-pt-sm">
        <q-item class="col" clickable v-ripple to="intro" @click="link = 'intro'">
          Back to the introduction
        </q-item>
        <!--
        <q-item class="col" clickable v-ripple to="slots" @click="link = 'slots'">
          <div style="text-align:right" class="full-width">
            Next: Slots
          </div>
         </q-item>
        -->
      </div>

    </q-card>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SubHeaderComponentDA from 'components/SubHeaderComponentDA.vue'
// import PreComponent from 'components/PreComponent.vue'
// import PreComponentDA from 'components/PreComponentDA.vue'
// import QuoteComponent from 'components/QuoteComponent.vue'

export default defineComponent({
  name: 'ProgrammingStartPage',
  components: { SubHeaderComponentDA }
})
</script>

<style>
.text-subheader {
  font-family: verdana;
  font-size: 16px;
  font-weight: bold;
}
</style>
