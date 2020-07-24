<template>
  <div class="main">
    <mq-layout mq="lg">
    <body>
      <video disableRemotePlayback autoplay muted loop id="myVideo">
        <source src="../assets/logo.mp4" type="video/mp4">
      </video>
      <div class="search-bar">
        <img class="mag" src="../assets/bar2.png" alt="bar">
        <p class="moving-text">Josh Cunningham is
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </p>
      </div>
      <a href="/about" style="margin: 0 auto"><button class="lucky">
        <p>I'm Feeling Lucky</p>
      </button></a>
    </body>
    </mq-layout>
    <mq-layout mq="sm">
      <div class="body2">
        <video disableRemotePlayback autoplay muted loop id="myVideo">
        <source src="../assets/logo.mp4" type="video/mp4">
      </video>
      <a href="/about" style="margin: 0 auto; color: white"><button class="lucky" style="color: white; font-size: 4vw">
        I'm Feeling Lucky
      </button></a>
      </div>
    </mq-layout>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['an engineer', 'a developer', 'an entrepreneur', 'an innovator', 'your next intern?'],
      typingSpeed: 50,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText () {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true
        }
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus) {
          this.typeStatus = true
        }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0
        }
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  },
  created () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  }
}
</script>
<style lang="sass" scoped>
.main
  display: flex
  flex-direction: column
  background: white
  body
    margin: 0 auto
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    flex-direction: column
    video
      margin: 0 auto
      width: 40%
    .search-bar
      margin: 0 auto
      width: 800px
      height: 40px
      margin-bottom: 2em
      .moving-text
        position: absolute
        left: 60px
        top: 182.5px
        font-family: Arial
        font-size: 20px
        line-height: 28px
        color: black
        width: 447px
        height: 23px
        padding: 0
      .mag
        width: 800px
        height: 50px
        margin: 0 auto
    .lucky
      appearance: none
      border: none
      cursor: pointer
      margin-top: 1em
      width: 166px
      height: 43px
      background: #4C90F6
      border-radius: 2px
      margin: 0 auto
      text-align: center
      align-items: center
      box-shadow: 0px 0px rgba(0,0,0,0)
      transition: 0.4s ease-out
      &:hover
        background: rgb(0, 255, 64)
      p
       width: 144px
       height: 20px
       font-size: 18px
       line-height: 21px
       text-align: center
       font-family: Arial
       margin: 0 auto
       padding: 12px 0
       color: white
.body2
  text-align: center
  position: fixed
  top: 50%
  left: 50%
  -webkit-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
  button
    appearance: none
    border: none
    cursor: pointer
    margin-top: 1em
    width: 166px
    height: 43px
    background: #4C90F6
    border-radius: 2px
    margin: 0 auto
    text-align: center
    align-items: center
    box-shadow: 0px 0px rgba(0,0,0,0)
    transition: 0.4s ease-out
    &:hover
      background: rgb(0, 255, 64)
    p
     width: 144px
     height: 20px
     font-size: 18px
     line-height: 21px
     text-align: center
     font-family: Arial
     margin: 0 auto
     padding: 12px 0
     color: white
  p
    font-family: Arial
</style>
<style scoped>

</style>
