
<!--
<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup () { return { v$: useVuelidate() } },
  data () {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
  },
  validations () {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email } // Matches this.contact.email
      }
    }
  }
}
</script>
-->

<template>
  <q-card />
</template>

<script setup>

// import { useI18n } from 'vue-i18n'
import { ref, toRef, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { v4 as uuidv4 } from 'uuid'
import { supabaseClient } from 'boot/supabase'

const $q = useQuasar()

// const dataLoaded = ref(false)
const createUUID = true

const learnQuasarSurvey = ref({
  app_version: '',
  want_to_learn: '',
  already_know: '',
  name: '',
  email: '',
  comment: '',
  email_signup: ''
})

const props = defineProps({
  data: Object,
  commit: Boolean
})

learnQuasarSurvey.value = toRef(props, 'data').value

// console.log('learnQuasarSurvey: ' + JSON.stringify(learnQuasarSurvey.value))

// const { t } = useI18n({ useScope: 'global' })

// console.log('evaluate...')
// questionnaire.value.evaluation.score = 3.2

// console.log('evaluation score: ' + evaluation.value.score)
// questionnaire.value.evaluation.recommendation = 'You have to improve your privacy.'
// evaluationExists.value = true

// const evaluationExists = ref(false)
// const surveyResultExists = ref(false)

// const companySizeOptions = ['<5', '5-10', '10-20', '20-50', '100-500', '500+']
// const industryOptions = ['Aerospace', 'Travel', 'Retail', 'Services', 'Transportation', 'Computer & IT', 'Telecommunications', 'Financial', 'Agriculture', 'Construction', 'Education', 'Pharmaceuticals', 'Food & Beverages', 'Health care', 'Hospitality', 'Entertainment', 'News and Media', 'Energy', 'Manufacturing', 'Music', 'Mining', 'Electronics']

/*
const questionnaire = ref({
  title: '',
  description: '',
  company_country: '',
  company_size: '',
  company_website: '',
  contact_name: '',
  contact_email: '',
  industry: '',
  request_followup: false,
  evaluation: { score: 0, recommendation: '' }
})
*/

// const answers = ref([])
// const privacyPolicyExpl = ref(false)
// const showBackgroundInfoPanel = ref(true)

// const questions = ref({})
const uuid = ref(null)

/*
function notify(msg) {
  $q.notify(msg)
}
*/

watch(
  () => props.commit,
  (newValue, oldValue) => {
    // console.log('commit prop changed to: ', newValue, ' | was: ', oldValue)
    // console.log('Save response here')
    // if (newValue === true) {
    saveResponse()
  }
)

// read UUID from localstorage
onMounted(() => {
  if (!createUUID) {
    return
  }
  // console.log('this.UUD: ' + uuid.value)
  uuid.value = readUUID()
  // console.log('uuid check (is null?: ' + (uuid.value === null))
  if (uuid.value === null) {
    console.log('UUID was null. generate UUID here...')
    // generateUUID()
    // writeUUID()
    writeNewUUID()
  }
  // console.log('uuid:' + uuid.value)
  // loadQuestions()
})

async function saveResponse() {
  // console.log('save response...')
  // console.log('comment: ' + learnQuasarSurvey.value.comment)
  // console.log('learnQuasarSurvey: ' + JSON.stringify(learnQuasarSurvey.value))

  if (!uuid.value) {
    // alert(t('save_response_error'))
    // surveyExists.value = false
    console.log('No UUID. Returning.')
    return
  }
  // console.log('uuid: ' + uuid.value)
  // console.log('comment: ' + learnQuasarSurvey.value.comment)

  /*
  if (!learnQuasarSurvey.value.comment) {
    // alert('Please select the company size.')
    // alert(t('select_industry'))
    surveyResultExists.value = false
    console.log('return: ' + surveyResultExists.value)
    return
  }
  */

  /*
  try {
    const { data, count } = await supabaseClient
      .from('learn_quasar_user_surveys')
      .select('id', { count: 'exact' })
      .match({ user_id: uuid.value })
    console.log('Test user exists: ' + JSON.stringify(data))
    console.log('Number of survey results: ' + count)
    if (count > 0) {
      const result = confirm('A survey response is already registered. Do you want to update it?')
      console.log('result: ' + JSON.stringify(result))

      // Add option to delete?
      if (!result) {
        surveyResultExists.value = false
        return
      }
    }
  } catch (error) {
    notify('Error: ' + error.message)
    return
  }
  */

  try {
    const { data, error } = await supabaseClient
      .from('learn_quasar_user_surveys')
      .insert([
        {
          user_id: uuid.value,
          // title: learnQuasarSurvey.value.title,
          app_version: learnQuasarSurvey.value.app_version,
          name: learnQuasarSurvey.value.name,
          email: learnQuasarSurvey.value.email,
          comment: learnQuasarSurvey.value.comment,
          knowledge_level: learnQuasarSurvey.value.knowledge_level,
          want_to_learn: learnQuasarSurvey.value.want_to_learn,
          email_signup: learnQuasarSurvey.value.email_signup
        }
      ])
    // .single()
    if (error) {
      throw (error)
    }
    console.log('Added new survey response with data: ' + JSON.stringify(data))
  } catch (error) {
    console.log('Error: ' + JSON.stringify(error))
    // notify('Sorry there was a an error'))
    // notify(t('save_response_error'))
  }
}

// Connect to Supabase backend to extract then translate the Questions
/*
async function loadQuestions() {
  console.log('loading questions...')

  try {
    const { data, error } = await supabaseClient // , error
      .from('privacy_questions')
      .select('id, question_text, question_title, question_i18n_key, question_title_i18n_key')
      // .match({ user_id: this.user.id })
      .order('id', { ascending: true })
    dataLoaded.value = true
    if (error) {
      console.log('Error: ' + JSON.stringify(error))
      dataLoaded.value = false
      alert('Sorry there was an errror loading the questions. The database might be offline.')
      // throw error
      return
    }

    // console.log('Data: ', data)
    // questionnaires.value.length = 0
    // console.log('questionnaires.value ', questionnaires.value)

    questions.value = data

    // console.log('questionnaires: ', JSON.stringify(questionnaires.value))
    // const { question_text, questionTitles } = questionnaires.value[0]

    console.log('No of questions: ', questions.value.length)
    // console.log('No of questions: ', questionTitles.length)
  } catch (error) {
    // console.log('Error: ' + JSON.stringify(error))
    // if error is "JWT Expired"
    if (error.message === 'JWT Expired') {
      // this.user = null
      // this.notify('Sorry. The session has ended. Please log in again.')
    } else {
      console.log('Error: ' + JSON.stringify(error))
    }
  }
  // console.log("this my tags: " + JSON.stringify(this.my_tags));
}
*/

/*
function showCookieExpl () {
  cookieExpl.value = !cookieExpl.value
}

function showPrivacyPolicyExpl () {
  privacyPolicyExpl.value = !privacyPolicyExpl.value
}
*/

function writeNewUUID() {
  // console.log('writeUUID... ')
  try {
    uuid.value = uuidv4()
    $q.localStorage.set('uuid', uuid.value)
    // console.log('Wrote uuid: ' + uuid.value)
    return true
  } catch (error) {
    console.log('Error reading UUID... ' + error)
  }
  return false
}

function readUUID() {
  // console.log('readUUID... ')
  let thisUuid = null
  try {
    thisUuid = $q.localStorage.getItem('uuid')
    // console.log('Read uuid: ' + thisUuid)
  } catch (error) {
    console.log('Error reading UUID... ' + error)
  }
  return thisUuid
}

/*
function showQuestionPanel() {
  // validate

  console.log('company_size: ' + questionnaire.value.company_size)

  if (!questionnaire.value.company_size) {
    // alert(t('select_company_size'))
    evaluationExists.value = false
    console.log('return: ' + evaluationExists.value)
    return
  }

  if (!questionnaire.value.industry) {
    // alert('Please select the industry.')
    // alert(t('select_industry'))
    evaluationExists.value = false
    console.log('return: ' + evaluationExists.value)
    return
  }
  showBackgroundInfoPanel.value = false // hide and show the Questions panel
}
*/

/*
function evaluate() {
  // store in the database
  saveResponse()
}
*/

/*
async function saveResponse() {
  console.log('save response...')

  if (!uuid.value) {
    // alert(t('save_response_error'))
    evaluationExists.value = false
    return
  }
  console.log('uuid: ' + uuid.value)
  console.log('company_size: ' + questionnaire.value.company_size)

  if (!questionnaire.value.company_size) {
    // alert('Please select the company size.')
    // alert(t('select_industry'))
    evaluationExists.value = false
    console.log('return: ' + evaluationExists.value)
    return
  }

  console.log('answers[].length: ' + answers.value.length)
  console.log('answers: ' + JSON.stringify(answers.value))

  if (answers.value.length < questions.value.length) {
    // if (answers.value.length === 0) {
    // alert('Please answer all the questions.')
    alert(t('answer_all_questions'))
    evaluationExists.value = false
    return
  }

  // console.log('evaluate...')
  questionnaire.value.evaluation.score = 3.2
  // console.log('evaluation score: ' + evaluation.value.score)
  questionnaire.value.evaluation.recommendation = 'You have to improve your privacy.'
  evaluationExists.value = true

  try {
    const { data, count } = await supabaseClient
      .from('privacy_questionaires')
      .select('id', { count: 'exact' })
      .match({ user_id: uuid.value })
    console.log('Test user exists: ' + JSON.stringify(data))
    console.log('Number of questionaires: ' + count)
    if (count > 0) {
      const result = confirm('There is already an existing evaluation. Do you want to update it?')
      console.log('result: ' + JSON.stringify(result))

      // Add option to delete?
      if (!result) {
        evaluationExists.value = false
        return
      }
    }
  } catch (error) {
    notify('Error: ' + error.message)
    return
  }

  try {
    const { data, error } = await supabaseClient
      .from('privacy_questionaires')
      .upsert([
        {
          user_id: uuid.value,
          title: questionnaire.value.title,
          // description: questionnaire.value.description,
          contact_name: questionnaire.value.contact_name,
          contact_email: questionnaire.value.contact_email,
          company_country: questionnaire.value.company_country,
          industry: questionnaire.value.industry,
          company_size: questionnaire.value.company_size,
          company_website: questionnaire.value.company_website,
          result_score: questionnaire.value.evaluation.score,
          result_recommendation: questionnaire.value.evaluation.recommendation,
          request_followup: questionnaire.value.request_followup
        }
      ])
      .single()
    if (error) {
      throw (error)
    }
    console.log('Added new questionnaire response with data: ' + JSON.stringify(data))
  } catch (error) {
    console.log('Error: ' + JSON.stringify(error))
    // notify(t('save_response_error'))
  }
}
*/

/*
  function getTranslatedQuestion(q) {
    // console.log('q: ' + JSON.stringify(q))
    const str = q.question_i18n_key
    return t(str)
  }

function getTranslatedQuestionTitle(q) {
  // console.log('q: ' + JSON.stringify(q))
  const str = q.question_title_i18n_key
  return t(str)
}
*/
</script>
