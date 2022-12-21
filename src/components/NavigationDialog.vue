<template>
  <div :class="[darkMode ? 'background-dark' : 'background-light']" class="txt q-px-sm q-my-sm">
    <q-dialog v-model="value">
      <q-card class="my-card">
        <!--
        :label="$t('new_activity')"
        -->

        <q-card-section>
          <div class="col-xs-12 col-sm-6 col-md-4 q-pa-md">
            <div v-if="groupType === 1">
              {{ groupOneText }}
            </div>
            <div v-if="groupType === 2">
              {{ groupTwoText }}
            </div>
            <div v-if="groupType === 3">
              {{ groupThreeText }}
            </div>
          </div>
          <div :class="[props.groupType === 1 ? 'nav-btn-recommend' : 'nav-btn-std']"
            class="col-xs-12 col-sm-6 col-md-4 q-pa-md">
            <q-btn rounded style="width: 280px" class="q-pa-md" icon="fa fa-clock" align="left" to="/trends"
              :outline="olOne" color="blue" label="Background and Trends" />
          </div>

          <div :class="[props.groupType === 2 ? 'nav-btn-recommend' : 'nav-btn-std']"
            class="col-xs-12 col-sm-6 col-md-4 q-pa-md">
            <q-btn rounded style="width: 280px" class="q-pa-md" icon="fa fa-clock" align="left" to="/intro"
              :outline="olTwo" color="blue" label="Introduction" />
          </div>

          <div :class="[props.groupType === 3 ? 'nav-btn-recommend' : 'nav-btn-std']"
            class="col-xs-12 col-sm-6 col-md-4 q-pa-md">
            <q-btn rounded style="width: 280px" class="q-pa-md" icon="fa fa-clock" align="left" to="/startprogramming"
              :outline="olThree" color="blue" label="Getting started" />
          </div>
        </q-card-section>

        <!--
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn fab color="primary" icon="place" class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);" />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Cafe Basilico
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            $・Italian, Cafe
          </div>
          <div class="text-caption text-grey">
            Small plates, salads sandwiches in an intimate setting.
          </div>
        </q-card-section>
      -->
        <q-separator />

        <q-card-actions align="right">
          <q-btn flat color="primary" round icon="close" @click="hide()" />
        </q-card-actions>

      </q-card>
    </q-dialog>

  </div>
</template>

<script setup>
import { ref, toRef, computed, watch } from 'vue'
import { useQuasar } from 'quasar'

const emit = defineEmits(['update:modelValue'])

const $q = useQuasar()
const darkMode = ref($q.dark.isActive)

const groupType = ref(3) // up to 9

const groupOneText = 'Based on your responses, I recommend you read the article about Javascript Frameworks and current trends.'
const groupTwoText = 'Based on your responses, I recommend you start with the Introduction.'
const groupThreeText = 'Based on your responses, I recommend you read the Getting Started page. If you are interested in the background or a general introduction, you can start there also.'

const myvalue = ref(false)

const props = defineProps({
  myProp: Boolean,
  groupType: Number
})

myvalue.value = toRef(props, 'myProp').value
groupType.value = toRef(props, 'groupType').value

const olOne = ref(groupType.value !== 1)
const olTwo = ref(groupType.value !== 2)
const olThree = ref(groupType.value !== 3)

console.log('groupType: ' + groupType.value)

/*
watch(myvalue, (oldVal, newVal) => { // watch it
  console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  // myvalue.value = newVal
})
// myvalue = newpropValue
*/

watch(
  () => props.myProp,
  (newValue, oldValue) => {
    console.log('Prop changed to: ', newValue, ' | was: ', oldValue)
    // if (newValue === 'finished') cardStatus.value = 'border border-success'
    myvalue.value = newValue
  }
)

watch(
  () => props.groupType,
  (newValue, oldValue) => {
    console.log('groupType changed to: ', newValue, ' | was: ', oldValue)
    groupType.value = props.groupType
    // if (newValue === 'finished') cardStatus.value = 'border border-success'
    if (newValue === 1) {
      olOne.value = false
      olTwo.value = true
      olThree.value = true
    } else if (newValue === 2) {
      olOne.value = true
      olTwo.value = false
      olThree.value = true
    } else {
      olOne.value = true
      olTwo.value = true
      olThree.value = false
    }
  }
)

// console.log('myvalue: ', myvalue.value)

function hide() {
  console.log('hide')
  myvalue.value = false
  console.log('emiting value from hide: ', myvalue.value)
  emit('update:modelValue', 'false')
}

const value = computed({
  get() {
    return myvalue.value
  },
  set(value) {
    // myvalue.value = value
    console.log('emiting value from computed: ', value)
    // emit('update:modelValue', value)
  }
})

</script>

<style scoped>
div .txt {
  font-family: verdana;
  font-size: 14px;
  font-weight: bold;
}

.my-card {
  height: 500px;
  width: 360px;
}

div .background-dark {
  background-color: #00356B;
}

div .background-light {
  background-color: #AFDBF5;
}

div .nav-btn-recommended {
  color: #2b6282;
  font-size: 18px;
  font-weight: bold;
}

div .nav-btn-std {
  /* background-color: #2d3d46; */
  font-size: 14px;
  font-weight: regular;
}
</style>
