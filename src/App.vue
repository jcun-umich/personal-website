<template>
  <div id="app">
        <the-desktop-nav id="desktop-nav"/>
        <the-mobile-nav id="mobile-nav"/>
        <div class="view-container">
          <div id="contact" class="contact">
            <button @click="showModal = true" style="font-size: 100%">Contact</button>
          </div>
            <transition name="fade" appear>
              <div class="modal-overlay" v-if="showModal" @click="showModal= false"></div>
            </transition>
            <transition name="slide" appear>
              <div class="modal" v-if="showModal">
                <h1>Contact Me</h1>
                <p style="color: blue">jcun@umich.edu</p>
                <p style="color: orange">1(586)588-5536</p>
                <p style="color: green">46505 Greenbriar Dr, Chesterfield MI, 48051</p>
                <a href="https://www.linkedin.com/in/joshua-cunningham-923622193/" target="_blank">LinkedIn</a>
              </div>
            </transition>
        <router-view/>
        </div>
  </div>
</template>

<script>

import TheDesktopNav from '@/components/TheDesktopNav'
import TheMobileNav from '@/components/TheMobileNav'
export default {
  components: {
    TheDesktopNav,
    TheMobileNav
  },
  name: 'contact',
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="sass" scoped>

.view-container
  width: 100%
  margin: 0 auto
  box-sizing: border-box
#contact
    z-index: 97
    position: absolute
    top: 10px
    right: 30px
    ul
      display: flex
      flex-direction: row
    button
      appearance: none
      outline: none
      border: none
      width: 130%
      height: 40px
      background-color: #4C90F6
      border-radius: 2px
      color: white
      font-family: Arial
      cursor: pointer
      box-shadow: 0px 0px rgba(0,0,0,0)
      transition: 0.4s ease-out
      &:hover
        box-shadow: 5px 5px rgba(0,0,0,.6)
      p
        margin-top: 10%
        font-size: 2vw
        line-height: 21px
        text-align: center
.modal-overlay
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0
  z-index: 98
  background-color: rgba(0,0,0,.3)

.modal
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 99
  width: 100%
  max-width: 400px
  background-color: white
  border-radius: 16px
  padding: 20px
  font-family: Arial
  text-align: center
  h1
    color: red
    font-size: 32px
    font-weight: 700
    margin-bottom: 15px

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s

.fade-enter, .fade-leave-to
  opacity: 0

.slide-enter-active, .slide-leave-active
  transition: transform 1s

.slide-enter, .slide-leave-to
  transform: translateY(-50%) translateX(100vw)

#mobile-nav
  display: none
#desktop-nav
  display: none

</style>
