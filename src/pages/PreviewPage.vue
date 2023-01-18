<template>
  <q-page class="flex-center ">
    <div class="header q-px-lg q-py-sm"> Preview </div>
    <div class="subheader q-px-lg q-py-sm"> Please answer these two questions to get a recommendation for where to
      start.
    </div>
    <div class="q-pa-sm">

      <q-form @submit="onSubmit" @reset="onReset" class="form-text q-gutter-md">
        <div class="text-subheader q-px-md">
          {{ questionOne }}
        </div>

        <q-option-group :options="q1AnswerOptions" type="radio" v-model="selectedFromGroup1" />

        <div class="q-px-md">
        </div>
        <div class="text-subheader q-px-md">
          {{ questionTwo }}
        </div>
        <q-option-group :options="q2AnswerOptions" type="radio" v-model="selectedFromGroup2" />
        <q-expansion-item icon="" label="Optional" default-closed>

          <div class="q-px-lg">
            <q-input maxlength="120" v-model="comment" label="Type a comment...">
              <template v-slot:prepend>
                <q-badge class="q-py-xs" color="orange" align="middle">{{
                  "Optional"
                }}</q-badge>
              </template>
            </q-input>

            <q-input maxlength="40" v-model="name" label="Your name...">
              <template v-slot:prepend>
                <q-badge class="q-py-xs" color="orange" align="middle">{{
                    "Optional"
                }}
                </q-badge>
              </template>
            </q-input>

            <q-input maxlength="50" v-model="email" type="email" label="Your email address..." clearable
              :rules="[val => isValidEmail(val) || 'Email is missing']">
              <template v-slot:prepend>
                <q-badge class="q-py-xs" color="orange" align="middle">{{
                  "Optional"
                }}
                </q-badge>
              </template>
            </q-input>

            <div class="q-py-md">
              <q-checkbox :disable="!hasValidEmail()" v-model="emailUpdates" :label="joinMailingList" color="teal" />
            </div>
          </div>
        </q-expansion-item>

        <div class="q-py-md text-center full-width">
          <q-btn label="Submit" type="submit" color="green" />
        </div>
      </q-form>

      <!-- TODO: Change myProp to NavDialogDisplay -->
      <NavigationDialog :groupType="groupType" :myProp="getNavDialogState()" @update:modelValue="closed(value)" />
      <DatabaseFrontendComponent :commit="commit" :data="learnQuasarSurveyResult" />
    </div>
  </q-page>
  <!--
  <button type="button" data-cc="c-settings">Show cookie settings</button>
  <vue-cookie-comply :preferences="preferences" @on-accept-all-cookies="onAccept"
    @on-save-cookie-preferences="onSavePreferences" />
 -->
</template>

<script setup>

import { ref, watch } from 'vue'
import NavigationDialog from 'src/components/NavigationDialog.vue'
import DatabaseFrontendComponent from 'src/components/DatabaseFrontendComponent.vue'

const questionOne = 'What would you like to learn?'
const questionTwo = 'What do you already know?'

const joinMailingList = 'Please email me about updates to this app/website or information about related topics. (Not more than once per month). Your email will only be used to contact you directly and will not be disclosed to third parties. See the Privacy Notice for more information.'

const selectedFromGroup1 = ref(1)
const selectedFromGroup2 = ref(1)

const email = ref(null)
const comment = ref('')
const name = ref('')

// save the data to the database by setting commit to true
const commit = ref(false)

const groupType = ref(1)
const navDialog = ref(false) // is displayed

const emailUpdates = ref(false)

function getNavDialogState() {
  return navDialog.value
}

function closed(modelValue) { // why is model value not passed?
  console.log('closed: modelValue: ', modelValue)
  navDialog.value = false
}

function isValidEmail(val) {
  if (!val || val.length === 0) {
    console.log('no email returning true!')
    return true
  }
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
  return emailPattern.test(val) || 'Invalid email'
}

watch(email, (newValue, oldValue) => {
  if (!newValue) {
    emailUpdates.value = false
  }
})

function hasValidEmail() {
  if (!email.value) {
    return false
  }
  // console.log('isValidEmail(email.value): ' + isValidEmail(email.value))
  const isValid = isValidEmail(email.value)

  if (isValid === 'Invalid email') {
    // console.log('emailUpdates to false!')
    emailUpdates.value = false
  }
  return isValid !== 'Invalid email'
}

const q1AnswerOptions = ref([
  { label: 'What this is about and how it fits into the IT ‘universe’ (but I don’t plan to write anything myself).', value: 1 },
  { label: 'What is needed to start development, to see if it is worthwhile or fits my abilities and goals.', value: 2 },
  { label: 'How to make my own web-app or service based website.', value: 3 }
])

const q2AnswerOptions = ref([
  { label: 'I don\'t know anything about it at all.', value: 1 },
  { label: 'I have created a few web pages or built a small website using a text editor or website builder.', value: 2 },
  { label: 'I have made a WordPress/Drupal or similar site.', value: 3 },
  { label: 'I have written some code in another language such as C, SQL, Pascal, Java or Python...', value: 4 },
  { label: 'I have a good familiarity with web development including HTML, CSS and JavaScript.', value: 5 },
  { label: 'I have learned a JavaScript Framework such as React or Angular.', value: 6 },
  { label: 'I am a developer with hands-on experience and knowledge of Vue.js.', value: 7 }
])

const learnQuasarSurveyResult = ref({
  app_version: '0.3',
  name: '',
  email: '',
  want_to_learn: '',
  knowledge_level: '',
  comment: '',
  email_signup: ''
})

function evaluateIt() {
  const selectedOptionString = (selectedFromGroup1.value.toString() + selectedFromGroup2.value.toString())
  const selectedOptionValue = parseInt(selectedOptionString)
  let gridValue = 1
  // console.log('evaluate: ', selectedOptionValue)

  // let gridValue3 = 9
  /* Alternative way

  if (selectedOptionValue > 34) { // high knowledge
    gridValue3 = 9
  } else if (selectedOptionValue > 31) {
    gridValue3 = 8
  } else if (selectedOptionValue > 30) {
    gridValue3 = 3
  } else if (selectedOptionValue > 24) {
    gridValue3 = 6
  } else if (selectedOptionValue > 21) {
    gridValue3 = 5
  } else if (selectedOptionValue > 20) {
    gridValue3 = 4
  } else if (selectedOptionValue > 14) {
    gridValue3 = 3
  } else if (selectedOptionValue > 11) {
    gridValue3 = 2
  } else {
    gridValue3 = 1
  }
  */

  if (selectedOptionString.startsWith('1')) { // Low motivation to start.
    if (selectedOptionValue > 14) { // high knowledge
      gridValue = 3
    } else if (selectedOptionValue > 11) { // 12 or 13 Medium knowledge
      gridValue = 2
    } else { // 11 low knowledge
      gridValue = 1
    }
  } else if (selectedOptionString.startsWith('2')) { // Some motivation to start.
    if (selectedOptionValue > 24) { // high knowledge
      gridValue = 6
    } else if (selectedOptionValue > 21) { // 22 or 23  Medium knowledge
      gridValue = 5
    } else { // 21 low knowledge
      gridValue = 4
    }
  } else if (selectedOptionString.startsWith('3')) { // Motivated to start
    if (selectedOptionValue > 34) { // high knowledge
      gridValue = 9
    } else if (selectedOptionValue > 31) { // Medium knowledge
      gridValue = 8
    } else { // 31 // Low knowledge
      gridValue = 7
    }
  }
  console.log('Grid value: ' + gridValue)

  if (gridValue < 4) { // gridValue = 1 to 3
    groupType.value = 1
  } else if (gridValue === 4 || gridValue === 5 || gridValue === 7 || gridValue === 8) {
    groupType.value = 2
  } else { // gridValue = 6 or 9
    groupType.value = 3
  }

  console.log('groupType: ' + groupType.value)

  learnQuasarSurveyResult.value.name = name
  learnQuasarSurveyResult.value.email = email
  learnQuasarSurveyResult.value.email_signup = emailUpdates
  learnQuasarSurveyResult.value.comment = comment
  learnQuasarSurveyResult.value.want_to_learn = selectedFromGroup1
  learnQuasarSurveyResult.value.knowledge_level = selectedFromGroup2

  /*
    switch (gridValue) {
      case 1: // No motivation, No knowldege
        console.log('Recommendation: ' + 'Read current trends')
        break
      case 2: // No motivation, some knowldege
        console.log('Recommendation: ' + 'Read intro 1')
        break
      case 3: // No motivation, high knowldege
        console.log('Recommendation: ' + 'Read intro 2')
        break
      case 4: // Some motivation, No knowldege
        console.log('Recommendation: ' + 'Read intro 2')
        break
      case 5: // Some motivation, little knowldege
        console.log('Recommendation: ' + 'Start from intro 2')
        break
      case 6:// Some motivation, little knowldege
        console.log('Recommendation: ' + 'Start from intro 2')
        break
      case 7: // High motivation, No knowldege
        console.log('Recommendation: ' + 'Start from intro')
        break
      case 8: // High motivation, Medium knowldege
        console.log('Recommendation: ' + 'Dive straight in')
        break
      default: // High motivation, High knowldege
        console.log('Recommendation: ' + 'Dive straight in')
        break
    }
    */
}

function onSubmit() {
  // console.log('OK I dddd')
  // console.log('Submit to me: ' + 'Group 1: ' + selectedFromGroup1.value.toString() + ' Group 2:' + selectedFromGroup2.value + '. Comment: ' + comment.value)
  evaluateIt()

  // set commit here to save the data via the DatabaseFrontendComponent!
  commit.value = true
  // console.log('showNavDialog: ' + navDialog.value)
  navDialog.value = true
}

function onReset() {
  console.log('Reset (Not implmenented)')
}

</script>

<style>
.body--dark .q-form {
  color: rgb(255, 255, 255);
}

.body--light .q-form {
  color: rgb(17, 20, 21);
  padding: 4px;
  font-size: 14px;
  font-style: regular;
}

.q-checkbox .enabled {
  font-style: italic;
}

.q-radio {
  padding: 4px;
}
</style>
