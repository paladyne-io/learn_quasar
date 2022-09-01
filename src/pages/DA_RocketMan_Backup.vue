<template>
<div>
  <div class="heading q-pa-md text-center">Rocket Man</div>
  <q-scroll-area ref="scrollAreaRef" :visible="sbVisible" style="height: 600px; width: 700px;">
    <div ref="bg" class="x-center animation-frame">
        <div ref="rocket" class="rocket-box">
          <q-img v-if="!explosion"
          width="90px"
          alt="Rocket image"
          src="images/rocket.png"
        />
         <q-img v-else ref="rocket" class="rocket-box"
          width="150px"
          alt="animated explosion"
          src="images/explosion.gif"
        />
      </div>
    </div>
  </q-scroll-area>
  </div>

    <!--
        <q-page class="flex flex-center">
        <div class="flex flex-center">
      <q-parallax :height="800" :speed="0.5">
      <template v-slot:media>
        <img src="images/background_stars.png">
      </template>
    -->

    <div class="q-pa-md " style="max-width: 800px">
    <div class="q-gutter-xs row ">

      <q-input  style="max-width: 200px"
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

     Rocket loc: {{ rocketLoc }} px
  </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { notify, useQuasar } from 'quasar'

// let start, previousTimeStamp
// let done = false

// const position = ref(300)

const sbVisible = false

const done = ref(false)
const explosion = ref(false)
const falling = ref(false)
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

const mySound = new Audio('sounds/rocket9s.m4a')

const $q = useQuasar

// const { setScrollPosition } = scroll // takes an element

onMounted(() => {
  console.log('mounted. initing game...')
  init()
})

function stopExplosion () {
  console.log('stopExplosion')
  reset()
  // explosion.value = false
}

function explodeRocket () {
  console.log('Explode')
  explosion.value = true
  setTimeout(() => stopExplosion(), 3000)
}

function fallRocket () {
  console.log('fallRocket')
  start.value = null
  previousTimeStamp.value = null
  done.value = false
  falling.value = true
  window.requestAnimationFrame(fall)
  // fall()
}

// const $q = useQuasar()

/*
const testData = 'some data'
const posX = ref(100)

const location = computed(() => {
  return 'width:300px;height:100; left:' + posX.value + 'px;border:1px solid #000; position: absolute;'
})
*/

function init () {
  // rocketsInitialLocation.value = rocket.value.getBoundingClientRect()
  const yPos2 = rocket.value.getBoundingClientRect().y
  console.log('Initial y pos: ' + yPos2 + 'px')
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
  // animateScroll()
  reset()
  const i = 0
  if (i === 0) {
    // const mySound = new Audio('sounds/rocket9s.m4a')
    // const mySound = new Audio('images/rocketmp3-94928.mp3')
    mySound.volume = 0.4
    mySound.play()
    window.requestAnimationFrame(fly)
  }
  // window.requestAnimationFrame(moveBgImage)
  // moveBgImage()
  // setInterval(moveObjectToRight, 5)
}

function reset () {
  console.log('reset...')

  // const xPos = rocketsInitialLocation.value.x
  // const yPos = rocketsInitialLocation.value.y

  // console.log('left xpos: ' + xPos + 'px')
  // console.log('Top ypos: ' + yPos + 'px')

  // rocket.value.style.x = xPos + 'px'
  // rocket.value.style.top = yPos + 'px'
  // rocket.value.style.y = 960 + 'px'
  // rocket.value.style.transform = 'translateY(-500px)'

  rocket.value.style.transform = `translateY(${0}px)`
  rocketsInitialLocation.value = rocket.value.getBoundingClientRect()
  rocketLoc.value = rocketsInitialLocation.value.y

  console.log('rocketloc: ' + rocketLoc.value + 'px')
  console.log('rocketsInitialLocation: ' + JSON.stringify(rocketsInitialLocation.value))

  scrollAreaRef.value.setScrollPosition('vertical', launchHeight.value + 200)
  start.value = null
  previousTimeStamp.value = null
  done.value = false
  explosion.value = false
  falling.value = false
}

/*
function moveObjectUp () {
  posY.value += 1
}

function moveObjectDown () {
  posY.value -= 1
}

function moveObjectToRight () {
  posX.value += 1
}

function moveObjectToLeft () {
  posX.value -= 1
}
*/

/*
function resetAnimation (timestamp) {
  reset()
}
*/

/*
function animateScroll () {
  scrollAreaRef.value.setScrollPosition('vertical', 0, 500)
  // position.value = Math.floor(Math.random() * 1001) * 20
}
*/

/*
function moveBgImage (timestamp) {
  if (start === undefined) {
    start = timestamp
  }
  const elapsed = timestamp - start

  // console.log('element x loc: ' + rocket.value.style.x)
  // console.log('element: ' + rocket.value)
  // console.log('element x loc: ' + rocketsInitialLocation.value.x)

  if (previousTimeStamp !== timestamp) {
    // Math.min() is used here to make sure the element stops at exactly 300px
    const count = Math.min(0.1 * elapsed, launchHeight.value)
    // console.log('count: ' + count)

    bg.value.style.transform = `translateY(${count}px)`
    if (count === launchHeight.value) {
      done = true
    }
  }
}
*/

// const x = ref(true)

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

    // let scrollPosition = 0
    scrollAreaRef.value.setScrollPosition('vertical', scrollPosition)

    // scrollPosition = (launchHeight.value) // set to bottom
    rocket.value.style.transform = `translateY(${count - launchHeight.value}px)`

    /*
    if (x.value === true) {
      console.log('move bg... ')
      bg.value.style.transform = `translateY(${count}px)`
    }
    x.value = !x.value
    */

    // console.log('count: ', count)
    // console.log('launchHeight.value: ', launchHeight.value)
    // console.log('scroll area scroll position: ', scrollPosition)

    // scrollAreaRef.value.setScrollPosition('vertical', scrollPosition)

    if (count === launchHeight.value) {
      done.value = true
      console.log('Animation done')
    }
  }

  if (elapsed < maxAnimationTime.value) {
    // Stop the animation after maxAnimationTime
    previousTimeStamp.value = timestamp
    if (!done.value) {
      console.log('fall request next frame...')
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

  console.log('fly elapsed: ', elapsed)

  // console.log('element x loc: ' + rocket.value.style.x)
  // console.log('element: ' + rocket.value)
  // console.log('element x loc: ' + rocketsInitialLocation.value.x)

  if (isNaN(elapsed)) {
    return
  }

  // let scrollPosition = 0

  if (previousTimeStamp.value !== timestamp) {
    // Math.min() is used here to make sure the element stops at exactly 300px
    const count = Math.min(Math.round(0.1 * elapsed), launchHeight.value)

    if (isNaN(count)) {
      return
    }

    // scrollPosition = (launchHeight.value - count)
    const scrollPosition = (400 - count)
    rocket.value.style.transform = `translateY(${-count}px)`

    /*
    if (x.value === true) {
      console.log('move bg... ')
      bg.value.style.transform = `translateY(${count}px)`
    }
    x.value = !x.value
    */
    // console.log('count: ', count)
    // console.log('launchHeight.value: ', launchHeight.value)
    console.log('scroll area scroll position: ', scrollPosition)

    // rocketLoc.value = rocket.value.getBoundingClientRect().y
    // console.log('rocketLoc: ', rocketLoc.value)

    // if (scrollPosition < 300) {
    // scrollPosition = 300
    // }

    // if (rocketLoc.value < 300) {
    // if (rocketLoc.value > (animationWindowHeight.value / 2) + 20) {
    scrollAreaRef.value.setScrollPosition('vertical', scrollPosition)
    // const i = 0
    // if (i === 0) return

    // count = 90
    // return
    // }

    if (count >= launchHeight.value) {
      done.value = true
      checkResult()

      // const yPos = rocket.value.getBoundingClientRect().y
      // console.log('ypos: ' + yPos + 'px')
      // const topPos = rocket.value.style.top
      // console.log('Top : ' + topPos + 'px')
      // rocket.value.style.position = 'fixed'
      // rocket.value.style.top = yPos + 'px'

      // rocket.value.style.transform = 'translateY(-200px)'
      // window.requestAnimationFrame(resetAnimation)
      // const yPos2 = rocket.value.getBoundingClientRect().y
      // console.log('ypos2: ' + yPos2 + 'px')

      // start.value = null
      // count = 0
      // elapsed = 0
      // resetAnimation()

      // return
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

    if (rocketLoc.value < 0) {
      console.log('Went past the moon.')
      alert('You went too far!')
    } else if (rocketLoc.value > 200) {
      console.log('Animation done - falling...')
      notifyMessage('Not enough juice!')
      setTimeout(() => fallRocket(), 1000)
    } else if (rocketLoc.value < 80) {
      alert('The Eagle has landed!')
    } else {
      explodeRocket()
    }
  }
}
</script>

<style>
 .animation-frame{
    background-image:  url("images/background_stars.png");
    border: solid;
    border-color: black;
    width: 1000px;
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
</style>
