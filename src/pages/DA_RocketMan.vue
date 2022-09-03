<template>
<div class="center flex-center x-center" style="min-height: inherit;">
  <!--
  <div class="heading q-pa-md text-center">Rocket Man</div>
  -->
  <q-scroll-area ref="scrollAreaRef" class="center flex-center x-center" :visible="sbVisible" style="height: 100vh;">
    <div ref="bg" class="x-center animation-frame">
        <div ref="rocket"  class="rocket-box image-stack">
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
        <div v-if="explosion" class="image-stack__item image-stack__item--top">
        <q-img
          width="140px"
          alt="animated explosion"
          src="images/explosion.gif"
        />
        </div>
      </div>
      <div v-if="debug" class="text-white q-pa-sm row full-width ">
      Rocket loc: {{ finalRocketLoc }} px
      <br>
      Boost: {{ boost }}
    </div>

    </div>
  </q-scroll-area>
  <div v-if="controlsVisible" class="center flex-center x-center q-gutter-xs row">
      <!--
      <q-input style="max-width: 100px"
        label="Boost"
        type="number"
        outlined
        v-model.number="launchHeight"
      />
      -->
    <div class="q-pa-md" >
    <q-badge class="q-pa-sm" color="pink">
      Boost: {{ boost }} (100 to 1500)
    </q-badge>
    <div class="row justify-around" style="width: 360px;" >
      <q-slider
        v-model="boost"
        color="red"
        :min="100"
        :max="1500"
        label
        switch-label-side
        label-always
      />
    </div>
      </div>
      <div class="row justify-around" style="width: 360px;">
      <q-btn
        label="Launch"
        icon="rocket"
        color="primary"
        @click="launch"
      >
      </q-btn>
      <q-btn label="Reset" icon="clear" color="secondary" @click="reset">
      </q-btn>
      <q-btn style="max-width: 100px "
        label="Quit"
        color="orange"
        @click="quit"
        to="/"
      />

      </div>
         <div class="row q-pa-sm row full-width">
         Sound Effects from&nbsp;<a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=25179">Pixabay</a>
    </div>
 </div>

  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const debug = true

/* is the scrollbar visible? */
const sbVisible = false

const boost = ref(300)
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
const finalRocketLoc = ref(0)
const launchHeight = ref(300)
const maxAnimationTime = ref(9000)
const rocketsInitialLocation = ref()
const controlsVisible = ref(true)

/* Sounds from Pixabay - https://pixabay.com/sound-effects/ */
const launchSound = new Audio('sounds/rocket9s.m4a')
const successSound = new Audio('sounds/success-fanfare-trumpets-6185.mp3')
const explosionSound = new Audio('sounds/hq-explosion-6288.mp3')
const failureSound = new Audio('sounds/failure2.m4a')

onMounted(() => {
  console.log('mounted. initing game...')
  init()
})

function quit () {
  console.log('quit')
  reset()
}

function stopExplosion () {
  console.log('stopExplosion')
  reset()
}

function startLaunch () {
  console.log('startLaunch')
  launchSound.volume = 0.4
  launchSound.play()
  enginesOn.value = true
  controlsVisible.value = false
}

function startFall () {
  console.log('startFall')
  falling.value = true
  failureSound.volume = 0.4
  failureSound.play()
}

function explodeRocket () {
  console.log('Explode')
  explosion.value = true // shows the explosion graphic
  explosionSound.volume = 0.4
  explosionSound.play()
  // enginesOn.value = false
  setTimeout(() => stopExplosion(), 4000)
  // controlsVisible.value = true // or reset
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

function explodeAndFallOver () {
  explosion.value = true // shows the explosion graphic
  console.log('fallOverRocket...')

  rocket.value.classList.add('fallover')
  explosionSound.volume = 0.4
  explosionSound.play()

  // console.log('Rocket classes: ' + JSON.stringify(rocket.value.classList))
  setTimeout(() => reset(), 2000) // will remove fallover
}

function init () {
  // rocketsInitialLocation.value = rocket.value.getBoundingClientRect()
  // const yPos2 = rocket.value.getBoundingClientRect().y
  // console.log('Initial y pos: ' + yPos2 + 'px')
  scrollAreaRef.value.setScrollPosition('vertical', launchHeight.value)
  // rocket.value.style.transform = `translateY(${60}px)` // ??
  // setInterval(moveObjectToRight, 10)
}

function notifyMessage (msg) {
  $q.notify(msg)
}

function launch () {
  reset()

  const i = 0
  if (i === 0) {
    startLaunch()

    if (boost.value > 999) {
      notifyMessage('Too much boost!')
      explodeAndFallOver()
      return
    }
    setTimeout(() => window.requestAnimationFrame(fly), 1000)
  }
}

function reset () {
  console.log('reset...')
  rocket.value.classList.remove('fallover')

  rocket.value.style.transform = `translateY(${0}px)`
  rocketsInitialLocation.value = rocket.value.getBoundingClientRect()
  rocketLoc.value = rocketsInitialLocation.value.y

  // rocket.value.style.transform = 'none'

  // console.log('rocketloc: ' + rocketLoc.value + 'px')
  // console.log('rocketsInitialLocation: ' + JSON.stringify(rocketsInitialLocation.value))

  scrollAreaRef.value.setScrollPosition('vertical', launchHeight.value)
  start.value = null
  previousTimeStamp.value = null
  done.value = false
  explosion.value = false
  falling.value = false
  enginesOn.value = false
  controlsVisible.value = true

  // finalRocketLoc.value = 0
  // fallOverRocket()
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
    const count = Math.min(Math.round(0.1 * elapsed), boost.value)

    if (isNaN(count)) {
      return
    }

    // console.log('count: ', count)

    const scrollPosition = (count)
    if (launchHeight.value > 200) {
      scrollAreaRef.value.setScrollPosition('vertical', scrollPosition)
    }
    rocket.value.style.transform = `translateY(${count - boost.value}px)`

    if (count === boost.value) {
      done.value = true
      console.log('Animation done')
      controlsVisible.value = true // or reset
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
    controlsVisible.value = true // or reset
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
    const count = Math.min(Math.round(0.1 * elapsed), boost.value)

    if (isNaN(count)) {
      return
    }

    const scrollPosition = (360 - count)
    rocket.value.style.transform = `translateY(${-count}px)`

    // console.log('scroll area scroll position: ', scrollPosition)
    scrollAreaRef.value.setScrollPosition('vertical', scrollPosition)

    if (count >= boost.value) {
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
    finalRocketLoc.value = rocket.value.getBoundingClientRect().y

    console.log('finalRocketLoc: ', finalRocketLoc.value)
    // waitAWhile(2000)

    if (rocketLoc.value < -20) {
      console.log('Went past the moon.')
      notifyMessage('You went too far! Less boost.')
      setTimeout(() => reset(), 2000)
      // alert('You went too far!')
    } else if (rocketLoc.value > 100) {
      console.log('Animation done - falling...')
      notifyMessage('Not enough juice! Add more boost.')
      setTimeout(() => fallRocket(), 2000)
    } else if (rocketLoc.value < 60) {
      // alert('The Eagle has landed!')
      successSound.volume = 0.4
      successSound.play()
      notifyMessage('The Eagle has landed!')
      controlsVisible.value = true // or reset
    } else {
      explodeRocket()
    }
  }
}
</script>

<style>
 .animation-frame{
    background-image:  url("/images/background_stars.png");
    /*
    border: solid;
    border-color: black;
    */
    width: 100%;
    min-width: 414px;
    max-width: 560px;
    height: 100%;
    min-height: 800px;
    max-height: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: bottom;
  }

 /*
  .fallover {
    transform: rotate(90deg) !Important ;
    transform-origin: center, 10%;
  }
  */

  .fallover {
    transform-origin: center, 10%;
    animation: fallover-slowly 2s;
  }

 @keyframes fallover-slowly {
  from { transform: rotate(0deg)}
  to { transform: rotate(90deg)
  }
 }

/*
  @keyframes fallover-slowly {

    0% {
        transform: rotate(0deg);
     }
     20% {
        transform: rotate(30deg);
     }
     50% {
        transform: rotate(45deg);
     }
     70% {
        transform: rotate(60deg);
     }
     100% {
        transform: rotate(90deg);
     }
}
*/

  .rocket-box{
     /* background: #f00; */
     /* height:151px; */
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
  padding-top: 50%;
  z-index: 1; /* tells the browser to make this image on top */
}

</style>
