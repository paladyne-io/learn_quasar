<template>
<div class="center flex-center x-center">
  <!--
  <div class="heading q-pa-md text-center">Rocket Man</div>
  -->
  <q-scroll-area ref="scrollAreaRef" class="center flex-center x-center" :visible="sbVisible" style="height: 600px; width: 500px;">
    <div ref="bg" class="x-center animation-frame">
        <div ref="rocket" class="rocket-box image-stack">
        <div class="image-stack__item image-stack__item--bottom">
        <q-img v-if="enginesOn"
          width="90px"
          alt="Rocket with engines on - image"
          src="images/rocket.png"
        />
         <q-img v-else ref="rocket" class="rocket-box"
          width="90px"
          alt="Rocket image"
          src="images/rocket_noflame.png"
        />
        </div>
        <div v-show="explosion" class="image-stack__item image-stack__item--top">
        <q-img
          width="140px"
          alt="animated explosion"
          src="images/explosion.gif"
        />
          </div>
      </div>
    </div>
  </q-scroll-area>
<div class="center flex-center x-center  q-gutter-xs  row">

      <q-input style="max-width: 100px"
        label="Boost"
        type="number"
        outlined
        v-model.number="launchHeight"
      />

      <q-btn
        label="Launch"
        icon="rocket"
        color="primary"
        @click="launch"
      >
      </q-btn>
      <q-btn label="Reset" icon="clear" color="secondary" @click="reset">
      </q-btn>

 </div>
    <div v-if="debug" class="q-pa-sm">
    Rocket loc: {{ rocketLoc }} px
    </div>
    <div class="q-pa-sm">
      Sound Effects from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=25179">Pixabay</a>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const debug = false

/* is the scrollbar visible? */
const sbVisible = false

const done = ref(false)
const explosion = ref(false)
const falling = ref(false)
const enginesOn = ref(false)
const start = ref()
const previousTimeStamp = ref()
const rocket = ref(null)
const bg = ref(null)
const scrollAreaRef = ref(null)
// const animationWindowHeight = ref(700)
const rocketLoc = ref(0)
const launchHeight = ref(300)
const maxAnimationTime = ref(9000)
const rocketsInitialLocation = ref()

/* Sounds from Pixabay - https://pixabay.com/sound-effects/ */
const launchSound = new Audio('sounds/rocket9s.m4a')
const successSound = new Audio('sounds/success-fanfare-trumpets-6185.mp3')
const explosionSound = new Audio('sounds/hq-explosion-6288.mp3')
const failureSound = new Audio('sounds/failure2.m4a')

onMounted(() => {
  console.log('mounted. initing game...')
  init()
})

function stopExplosion () {
  console.log('stopExplosion')
  reset()
}

function startLaunch () {
  console.log('startLaunch')
  launchSound.volume = 0.4
  launchSound.play()
  enginesOn.value = true
}

function startFall () {
  console.log('startFall')
  falling.value = true
  failureSound.volume = 0.4
  failureSound.play()
}

function explodeRocket () {
  console.log('Explode')
  explosion.value = true
  explosionSound.volume = 0.4
  explosionSound.play()
  // enginesOn.value = false
  setTimeout(() => stopExplosion(), 3000)
}

function fallRocket () {
  console.log('fallRocket')
  enginesOn.value = false
  start.value = null
  previousTimeStamp.value = null
  done.value = false
  startFall()
  setTimeout(() => window.requestAnimationFrame(fall), 1000)
}

/*
const testData = 'some data'
const posX = ref(100)

const location = computed(() => {
  return 'width:300px;height:100; left:' + posX.value + 'px;border:1px solid #000; position: absolute;'
})
*/

function init () {
  // rocketsInitialLocation.value = rocket.value.getBoundingClientRect()
  // const yPos2 = rocket.value.getBoundingClientRect().y
  // console.log('Initial y pos: ' + yPos2 + 'px')
  scrollAreaRef.value.setScrollPosition('vertical', launchHeight.value)
  // setInterval(moveObjectToRight, 10)
}

/*

function pause () {
  console.log('Pausing...')
}

function waitAWhile (s) {
  setTimeout(() => pause(), 2000)
}
*/

function notifyMessage (msg) {
  $q.notify(msg)
}

function launch () {
  reset()
  if (launchHeight.value > 999) {
    notifyMessage('Too much boost.')
    setTimeout(() => explodeRocket(), 1000)
    return
  }

  const i = 0
  if (i === 0) {
    // const mySound = new Audio('sounds/rocket9s.m4a')
    // const mySound = new Audio('images/rocketmp3-94928.mp3')
    startLaunch()
    setTimeout(() => window.requestAnimationFrame(fly), 1000)
  }
}

function reset () {
  console.log('reset...')

  rocket.value.style.transform = `translateY(${0}px)`
  rocketsInitialLocation.value = rocket.value.getBoundingClientRect()
  rocketLoc.value = rocketsInitialLocation.value.y

  // console.log('rocketloc: ' + rocketLoc.value + 'px')
  // console.log('rocketsInitialLocation: ' + JSON.stringify(rocketsInitialLocation.value))

  scrollAreaRef.value.setScrollPosition('vertical', launchHeight.value + 100)
  start.value = null
  previousTimeStamp.value = null
  done.value = false
  explosion.value = false
  falling.value = false
  enginesOn.value = false
}

function fall (timestamp) {
  // console.log('fall start value: ', start.value)

  if (start.value === undefined || (!start.value)) {
    start.value = timestamp
  }
  const elapsed = timestamp - start.value

  // console.log('fall elapsed: ', elapsed)
  // console.log('element x loc: ' + rocket.value.style.x)
  // console.log('element: ' + rocket.value)
  // console.log('element x loc: ' + rocketsInitialLocation.value.x)

  if (isNaN(elapsed)) {
    return
  }

  // console.log('previousTimeStamp.value: ', previousTimeStamp.value)
  // console.log('timestamp: ', timestamp)

  if (previousTimeStamp.value !== timestamp) {
    // Math.min() is used here to make sure the element stops at exactly 300px
    const count = Math.min(Math.round(0.1 * elapsed), launchHeight.value)

    if (isNaN(count)) {
      return
    }

    const scrollPosition = (count)
    if (launchHeight.value > 200) {
      scrollAreaRef.value.setScrollPosition('vertical', scrollPosition)
    }
    rocket.value.style.transform = `translateY(${count - launchHeight.value}px)`

    if (count === launchHeight.value) {
      done.value = true
      console.log('Animation done')
    }
  }

  if (elapsed < maxAnimationTime.value) {
    // Stop the animation after maxAnimationTime
    previousTimeStamp.value = timestamp
    if (!done.value) {
      // console.log('equest next frame (fall)...')
      window.requestAnimationFrame(fall)
    }
  } else { // animation is finished

  }
}

function fly (timestamp) {
  if (falling.value) {
    console.log('fly method called when falling.. Ignored')
    return
  }
  if (start.value === undefined || (!start.value)) {
    start.value = timestamp
  }
  const elapsed = timestamp - start.value
  if (isNaN(elapsed)) {
    return
  }

  if (previousTimeStamp.value !== timestamp) {
    // Math.min() is used here to make sure the element stops at exactly 300px
    const count = Math.min(Math.round(0.1 * elapsed), launchHeight.value)

    if (isNaN(count)) {
      return
    }

    const scrollPosition = (400 - count)
    rocket.value.style.transform = `translateY(${-count}px)`

    console.log('scroll area scroll position: ', scrollPosition)
    scrollAreaRef.value.setScrollPosition('vertical', scrollPosition)

    if (count >= launchHeight.value) {
      done.value = true
      checkResult()
      return
    }
  }

  if (elapsed < maxAnimationTime.value) {
    // Stop the animation after maxAnimationTime
    previousTimeStamp.value = timestamp
    if (!done.value) {
      window.requestAnimationFrame(fly)
    }
  } else { // animation is finished
    checkResult()
  }

  function checkResult () {
    rocketLoc.value = rocket.value.getBoundingClientRect().y
    console.log('rocketLoc: ', rocketLoc.value)
    // waitAWhile(2000)

    if (rocketLoc.value < -20) {
      console.log('Went past the moon.')
      notifyMessage('You went too far! Less boost.')
      setTimeout(() => reset(), 2000)
      // alert('You went too far!')
    } else if (rocketLoc.value > 200) {
      console.log('Animation done - falling...')
      notifyMessage('Not enough juice! Add more boost.')
      setTimeout(() => fallRocket(), 2000)
    } else if (rocketLoc.value < 80) {
      // alert('The Eagle has landed!')
      successSound.volume = 0.4
      successSound.play()
      notifyMessage('The Eagle has landed!')
      // play da-da sound
    } else {
      explodeRocket()
    }
  }
}
</script>

<style>
 .animation-frame{
    background-image:  url("/images/background_stars.png");
    border: solid;
    border-color: black;
    width: 500px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: bottom;
  }

  .rocket-box{
     /* background: #f00; */
     margin-top: auto;
     margin-left: auto;
     margin-right: auto;
  }

/* https://bricampgomez.com/blog/how-to-overlap-images-in-css/ */
/* https://gridbyexample.com/learn/ */

.image-stack {
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
}

.image-stack__item--bottom {
  grid-column: 4 / -1;
  grid-row: 1;
}

.image-stack__item--top {
  grid-row: 1;
  grid-column: 1 / span 11;
  padding-top: 20%;
  z-index: 1; /* tells the browser to make this image on top */
}

</style>
