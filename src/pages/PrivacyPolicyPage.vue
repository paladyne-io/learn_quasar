<template>
  <q-page class="flex">
    <PrivacyPolicy :review_notice="false" />
  </q-page>
  <div class="text-center q-pa-md">
    <q-btn label="Home" color="green" to="/"></q-btn>
  </div>
</template>
<script>
import PrivacyPolicy from 'src/components/PrivacyPolicy.vue'

export default {
  name: 'PrivacyPolicyPage',
  components: { PrivacyPolicy }
}

</script>
