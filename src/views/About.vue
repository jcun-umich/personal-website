<template>
  <div class="main">
    <mq-layout mq="lg">
    <header>
      <div class="top-row">
        <a href="/home">
        <video disableRemotePlayback autoplay muted loop id="myVideo">
        <source src="../assets/logo.mp4" type="video/mp4">
        </video>
        </a>
        <div class="search-bar">
          <img class="bar" src="../assets/search.png" alt="bar">
          <p>Josh Cunningham</p>
        </div>
      </div>
      <ul class="tabs">
        <li class="tab active"><a style="text-decoration: none; color: inherit" href="/about">All</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/wiki">About</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/resume">Resume</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/portfolio">Portfolio</a></li>
      </ul>
    </header>
    <body>
      <ul class="content">
        <li class="left-side">
          <ul class="links">
            <li><p class="results">About 4 results (0.23 seconds)</p></li>
            <li class="link">
              <p class="url">joshipedia.org > About</p>
             <a href="/wiki" style="text-decoration: none; color: inherit"><h3 class="web-title">About</h3></a>
              <p class="info">Josh Cunningham is a second year student at the College of Engineering at the University of Michigan, intending to major in both Computer Science and...</p>
            </li>
            <li class="link">
              <p class="url">scholar.josh.com > Resume</p>
             <a href="/resume" style="text-decoration: none; color: inherit"><h3 class="web-title">Resume</h3></a>
              <p class="info">Really well made resume that covers the education, work and volunteer experience, and community...</p>
            </li>
            <li class="link">
              <p class="url">JoshTube.com > Portfolio</p>
             <a href="/portfolio" style="text-decoration: none; color: inherit"><h3 class="web-title">Portfolio</h3></a>
              <p class="info">Coding projects made for school and personal practice in a variety of programming languages...</p>
            </li>
              <li class="people-also-ask"><table class="people-also-ask">
              <thead>
              <tr>
              <th>People also ask</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td><p>Why should I hire Josh Cunningham?<br><span class="answer1" style="color: gray">Read his <a href="/resume">resume</a> to find out.</span></p></td></tr>
              <tr>
              <td><p>Is Josh Cunningham a software developer?<br><span class="answer2" style="color: gray">Not officially, but he'd like to think so.</span></p></td></tr>
              <tr>
              <td><p>When is Josh Cunningham graduating?<br><span class="answer3" style="color: gray">Ideally December 2022</span></p></td></tr>
              <tr>
              <td><p>Did Josh Cunningham make this website all by himself?<br><span class="answer" style="color: gray">Yes.</span></p></td></tr>
              </tbody>
              </table>
            </li>
          </ul>
        </li>
        <li class="right-side">
          <div class="container">
            <carousel :loop = "true" :autoplay = "true" :perPage = "1" :paginationEnabled = "false" :easing = "linear" :autoplayHoverPause = "true" :autoplayTimeout = "8000" :centerMode = "false">
            <slide><img width="100%" height="200px" src="../assets/bluetie1_2.png" alt="red shirt pic"></slide>
            </carousel>
          </div>
          <ul>
          <li>
          <div class="title-card">
            <h2>Josh Cunningham</h2>
            <p class="title">Web Developer</p>
          </div>
          </li>
          <li><div id="gallery" class="gallery">
            <button @click="showModal = true" style="font-size: 100%">Gallery</button>
          </div>
            <transition name="fade" appear>
              <div class="modal-overlay" v-if="showModal" @click="showModal= false"></div>
            </transition>
            <transition name="slide" appear>
              <div class="modal" v-if="showModal">
            <carousel :loop = "true" :autoplay = "true" :navigationEnabled = "true" :perPage = "1" :paginationEnabled = "false" :easing = "linear" :autoplayHoverPause = "true" :autoplayTimeout = "8000" :centerMode = "false">
            <slide><img width="325px" height="400px" src="../assets/bluetie2.png" alt="red shirt pic"></slide>
            <slide><img width="400px" height="250px" style="padding: 75px 0" src="../assets/redshirt.png" alt="red shirt pic"></slide>
            <slide><img width="275px" height="400px" src="../assets/redtie1.png" alt="red shirt pic"></slide>
            <slide><img width="400px" height="250px" style="padding: 75px 0" src="../assets/redshirt2.png" alt="red shirt pic"></slide>
            <slide><img width="325px" height="400px" src="../assets/bluetie1.png" alt="red shirt pic"></slide>
            <slide><img width="300px" height="400px" src="../assets/whiteshirt.png" alt="red shirt pic"></slide>
            <slide><img width="275px" height="400px" src="../assets/redtie2.png" alt="red shirt pic"></slide>
            <slide><img width="375px" height="400px" src="../assets/blueshirt.png" alt="red shirt pic"></slide>
            </carousel>
              </div>
            </transition></li>
          </ul>
          <div class="info-card">
            <p class="title">A Future Engineer who can’t decide what type of developement he loves more. He is currently looking for an internship for the summer of 2021.</p>
            <p><span>Born:</span> February 23</p>
            <p><span>Education:</span> University of Michigan, Ann Arbor, Michigan</p>
            <p><span>Interests:</span> Computer Science, Data Science, Programming, Artifical Intelligence, Machine Learning, Web Design, Software Engineering</p>
          </div>
          <h1 class="profiles">Profiles</h1>
          <div class="socials">
            <a style="text-decoration: none" href="https://www.linkedin.com/in/joshua-cunningham-923622193/" target="_blank"><img  class="social" src="../assets/linkedin.png" alt="linkedIn"></a>
            <a style="text-decoration: none" href="https://github.com/jcun-umich/portfolio" target="_blank"><img class="social" src="../assets/github.png" width="25px" height="25px" alt="github"></a>
            <a style="text-decoration: none" href="https://www.instagram.com/jshcnnnghm/" target="_blank"><img class="social" src="../assets/insta.jpg" width="25px" height="25px" alt="instagram"></a>
          </div>
        </li>
      </ul>
    </body>
    </mq-layout>
    <mq-layout mq="sm">
    <div class="header-small">
      <div class="top-row-small">
        <a href="/home">
        <video disableRemotePlayback width="30%" preload="auto" poster="../assets/logo.png" autoplay muted loop id="myVideo-small">
        <source src="../assets/logo.mp4" type="video/mp4">
        <img src="../assets/logo.png" alt="logo">
        </video>
        </a>
      </div>
      <ul class="tabs-small">
        <li class="tab-small"><a style="text-decoration: none; color: #4C90F6; border-bottom: 2px solid #4C90F6" href="/about">All</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/wiki">About</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/resume">Resume</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/portfolio">Portfolio</a></li>
      </ul>
    </div>
    <div class="body-small">
      <ul class="content-small">
        <li class="left-side">
          <ul class="links">
            <li><p class="results">About 4 results (0.23 seconds)</p></li>
            <li class="link">
              <p class="url">joshipedia.org > About</p>
             <a href="/wiki" style="text-decoration: none; color: inherit"><h3 class="web-title">About</h3></a>
              <p class="info">Josh Cunningham is a second year student at the College of Engineering at the University of Michigan, intending to major in both Computer Science and...</p>
            </li>
            <li class="link">
              <p class="url">scholar.josh.com > Resume</p>
             <a href="/resume" style="text-decoration: none; color: inherit"><h3 class="web-title">Resume</h3></a>
              <p class="info">Really well made resume that covers the education, work and volunteer experience, and community...</p>
            </li>
            <li class="link">
              <p class="url">JoshTube.com > Portfolio</p>
             <a href="/portfolio" style="text-decoration: none; color: inherit"><h3 class="web-title">Portfolio</h3></a>
              <p class="info">Coding projects made for school and personal practice in a variety of programming languages...</p>
            </li>
              <li class="people-also-ask"><table class="people-also-ask" style="width: 110%">
              <thead>
              <tr>
              <th>People also ask</th>
              </tr>
              </thead>
              <tbody >
              <tr style="width: 5vw">
              <td style="font-size: 3.5vw"><p>Why should I hire Josh Cunningham?<br><span class="answer1" style="color: gray">Read his <a href="/resume">resume</a> to find out.</span></p></td></tr>
              <tr style="width: 5vw">
              <td style="font-size: 3.5vw"><p>Is Josh Cunningham a software developer?<br><span class="answer2" style="color: gray">Not officially, but he'd like to think so.</span></p></td></tr>
              <tr style="width: 5vw">
              <td style="font-size: 3.5vw"><p>When is Josh Cunningham graduating?<br><span class="answer3" style="color: gray">Ideally December 2022</span></p></td></tr>
              <tr style="width: 5vw">
              <td style="font-size: 3.5vw"><p>Did Josh Cunningham make this website himself?<br><span class="answer" style="color: gray">Yes.</span></p></td></tr>
              </tbody>
              </table>
            </li>
          </ul>
        </li>
        <li class="right-side">
          <div class="container">
            <carousel :loop = "true" :autoplay = "true" :perPage = "1" :paginationEnabled = "false" :easing = "linear" :autoplayHoverPause = "true" :autoplayTimeout = "8000" :centerMode = "false">
            <slide><img width="100%" height="200px" src="../assets/bluetie1_2.png" alt="red shirt pic"></slide>
            </carousel>
          </div>
          <ul>
          <li>
          <div class="title-card">
            <h2>Josh Cunningham</h2>
            <p class="title">Web Developer</p>
          </div>
          </li>
          <li><div id="gallery" class="gallery">
            <button @click="showModal = true" style="font-size: 100%">Gallery</button>
          </div>
            <transition name="fade" appear>
              <div class="modal-overlay" v-if="showModal" @click="showModal= false"></div>
            </transition>
            <transition name="slide" appear>
              <div class="modal" v-if="showModal">
            <carousel :loop = "true" :autoplay = "true" :navigationEnabled = "true" :perPage = "1" :paginationEnabled = "false" :easing = "linear" :autoplayHoverPause = "true" :autoplayTimeout = "8000" :centerMode = "false">
            <slide><img width="80%" height="400px" src="../assets/bluetie2.png" alt="red shirt pic"></slide>
            <slide><img width="90%" height="250px" style="padding: 75px 0" src="../assets/redshirt.png" alt="red shirt pic"></slide>
            <slide><img width="80%" height="400px" src="../assets/redtie1.png" alt="red shirt pic"></slide>
            <slide><img width="90%" height="250px" style="padding: 75px 0" src="../assets/redshirt2.png" alt="red shirt pic"></slide>
            <slide><img width="80%" height="400px" src="../assets/bluetie1.png" alt="red shirt pic"></slide>
            <slide><img width="80%" height="400px" src="../assets/whiteshirt.png" alt="red shirt pic"></slide>
            <slide><img width="80%" height="400px" src="../assets/redtie2.png" alt="red shirt pic"></slide>
            <slide><img width="90%" height="400px" src="../assets/blueshirt.png" alt="red shirt pic"></slide>
            </carousel>
              </div>
            </transition></li>
          </ul>
          <div class="info-card">
            <p class="title">A Future Engineer who can’t decide what type of developement he loves more. He is currently looking for an internship for the summer of 2021.</p>
            <p><span>Born:</span> February 23</p>
            <p><span>Education:</span> University of Michigan, Ann Arbor, Michigan</p>
            <p><span>Interests:</span> Computer Science, Data Science, Programming, Artifical Intelligence, Machine Learning, Web Design, Software Engineering</p>
          </div>
          <h1 class="profiles">Profiles</h1>
          <div class="socials">
            <a style="text-decoration: none" href="https://www.linkedin.com/in/joshua-cunningham-923622193/" target="_blank"><img  class="social" src="../assets/linkedin.png" alt="linkedIn"></a>
            <a style="text-decoration: none" href="https://github.com/jcun-umich/portfolio" target="_blank"><img class="social" src="../assets/github.png" width="25px" height="25px" alt="github"></a>
            <a style="text-decoration: none" href="https://www.instagram.com/jshcnnnghm/" target="_blank"><img class="social" src="../assets/insta.jpg" width="25px" height="25px" alt="instagram"></a>
          </div>
        </li>
      </ul>
    </div>
    </mq-layout>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  name: 'gallery',
  data () {
    return {
      showModal: false
    }
  }
}
</script>
<style lang="sass" scoped>
.body-small
  margin: 0 auto
  display: flex
  flex-direction: column
  position: relative
  left: -15%
  width: 100%
  table
    margin-top: 5vw
    position: relative
    fixed-width: 10vw
    tr
      fixed-width: 10vw
    td
      height: .5vw
      transition: 1s
      cursor: pointer
      font-size: 1vw
      p
        font-size: 3vw
      .answer
        position: relative
        top: 0px
        transition: 1s linear
      .answer1
        position: relative
        top: 0px
        font-size: 0
        transition: 1s linear
      .answer2
        position: relative
        top: 0px
        font-size: 0
        transition: 1s linear
      .answer3
        position: relative
        top: 0px
        font-size: 0
        transition: 1s linear
    td:hover
      height: 10vw
      position: relative
      p
        margin-top: -5px
        margin-bottom: 15px
      .answer
        font-size: 3vw
        top: 20px
      .answer1
        font-size: 3vw
        top: 20px
      .answer2
        font-size: 3vw
        top: 20px
      .answer3
        font-size: 3vw
        top: 20px
  tr
    height: 2vw
  td
    max-height: 2vw
    white-space: nowrap
    overflow: hidden
    transition: 1s
    cursor: pointer
  td:hover
    max-height: 4vw
  .content-small
    list-style-type: none
    .left-side
      margin-left: 0
      float: left
      margin-bottom: 3em
      .links
        list-style-type: none
        .link
          display: flex
          flex-direction: column
          margin-bottom: 5px
          .url
            color: #006D12
            font-family: Arial
            margin-bottom: -15px
          .web-title
            color: #051EFF
            margin-bottom: -10px
            font-family: Arial
          .info
            font-family: Arial
            color: black
            font-size: 15px
            max-width: 110%
        .results
          font-size: 4vw
        .people-also-ask
          width: 100%
          td
            font-size: 4vw
    .right-side
      align-items: center
      display: flex
      flex-direction: column
      border: 1px solid #989898
      position: relative
      left: 10%
      .container
        position: relative
        width: 100%
        carousel
          align-items: center
          slide
            width:0%
            img
              position: relative
              border-bottom: 1px solid #989898
      ul
        list-style-type: none
        display: flex
        flex-direction: row
        border-bottom: 1px solid #989898
        position: relative
        align-items: left
        li
          position: relative
          right: 30px
        button
          position: relative
          left: 45px
          margin-top: 20px
          margin-left: 10px
          appearance: none
          outline: none
          border: none
          background-color: #4C90F6
          border-radius: 2px
          color: white
          font-family: Arial
          padding: 2vw
          cursor: pointer
          box-shadow: 0px 0px rgba(0,0,0,0)
          transition: 0.4s ease-out
          &:hover
            box-shadow: 2px 2px rgba(0,0,0,.6)
      .title-card
        width: 100%
        h2
          font-family: Arial
          font-size: 20px
          line-height: 32px
          margin-bottom: 0
          margin-top: 10px
          margin-left: -35px
          margin-right: 20px
        .title
          margin-top: -5px
          font-size: 14px
          color: #999999
          font-family: Arial
          line-height: 23px
          margin-left: -30px
      .info-card
        p
          font-family: Arial
          font-size: 16px
          line-height: 18px
          position: relative
          left: 5px
          width: 95%
      slide
        img
          width: 40%
        span
          font-weight: bold
      .profiles
        font-family: Arial
        margin-top: 1.5em
        font-size: 18px
        line-height: 32px
        color: #6F6F6F
        position: relative
        text-align: left
        left: -7em
      .socials
        display: flex
        flex-direction: row
        position: relative
        text-align: left
        left: -6em
        .social
          margin: 5px
          margin-top: -10px
          width: 30px
          height: 30px
          .modal
            max-width: 200px
.main
  display: flex
  flex-direction: column
  background: white
  overflow-x: hidden
header
  display: flex
  flex-direction: column
  border-bottom: 1px solid #C1C1C1
  .top-row
    display: flex
    flex-direction: row
    margin-bottom: -1em
    video
      position: relative
      width: 85px
      height: 56px
      left: 10px
    .search-bar
      position: relative
      left: 30px
      top: 5px
      display: flex
      background: white
      width: 47vw
      height: 40px
      p
        position: absolute
        left: 15px
        top: -15px
        font-family: Arial
        font-size: 20px
        line-height: 28px
        color: black
        width: 447px
        height: 23px
        padding: 0
      img
        width: 47vw
        height: 55px
        position: absolute
        top: -5px
        left: -15px
  .tabs
    list-style-type: none
    display: flex
    flex-direction: row
    position: relative
    margin-bottom: 0
    left: 100px
    .tab
      font-family: Arial
      margin-right: 5em
      font-style: normal
      font-weight: normal
      font-size: 18px
      line-height: 28px
      text-align: center
    .active
      color: #4C90F6
      border-bottom: 2px solid #4C90F6
body
  table
    td
      transition: 2s
      cursor: pointer
      position: relative
      p
        line-height: 0
        font-size: .9vw
        padding: 0
        position: relative
      .answer
        position: relative
        top: 0px
        font-size: 0
        transition: 1s linear
      .answer1
        position: relative
        top: 0px
        font-size: 0
        transition: 1s linear
      .answer2
        position: relative
        top: 0px
        font-size: 0
        transition: 1s linear
      .answer3
        position: relative
        top: 0px
        font-size: 0
        transition: 1s linear
    td:hover
      height: 3vw
      position: relative
      p
        margin-top: -5px
        margin-bottom: 20px
      .answer
        font-size: .9vw
        top: 25px
      .answer1
        font-size: .9vw
        top: 25px
      .answer2
        font-size: .9vw
        top: 25px
      .answer3
        font-size: .9vw
        top: 25px

  .results
    color: gray
    font-family: Arial
    position: relative
    font-size: 100%
  .content
    display: flex
    flex-direction: row
    list-style-type: none
    position: relative
    left: 2.5%
    .left-side
      display: flex
      flex-direction: column
      width: 60%
      justify-content: left
      .links
        display: flex
        flex-direction: column
        list-style-type: none
        .link
          display: flex
          flex-direction: column
          margin-bottom: 10px
          .url
            color: #006D12
            font-size: 20px
            font-family: Arial
            margin-bottom: -20px
          .web-title
            color: #051EFF
            font-size: 25px
            margin-bottom: -16px
            font-family: Arial
          .info
            font-family: Arial
            font-size: 18px
            line-height: 23px
            color: black
            width: 90%
      .people-also-ask
        width: 80%
    .right-side
      width: 340px
      height: 640px
      position: absolute
      right: 5%
      top: 5%
      border: 1px solid #989898
      .container
        position: relative
        width: 100%
        carousel
          align-items: center
          slide
            width: 100%
            img
              position: relative
              border-bottom: 1px solid #989898
      ul
        list-style-type: none
        display: flex
        flex-direction: row
        border-bottom: 1px solid #989898
        position: relative
        align-items: left
        li
          position: relative
          right: 30px
        button
          position: relative
          left: 50px
          margin-top: 10px
          appearance: none
          outline: none
          border: none
          background-color: #4C90F6
          border-radius: 2px
          color: white
          font-family: Arial
          padding: .75vw
          cursor: pointer
          box-shadow: 0px 0px rgba(0,0,0,0)
          transition: 0.4s ease-out
          &:hover
            box-shadow: 2px 2px rgba(0,0,0,.6)
      .title-card
        h2
          font-family: Arial
          font-size: 20px
          line-height: 32px
          margin-bottom: 0
          margin-top: 10px
        .title
          margin-top: -5px
          font-size: 14px
          color: #999999
          font-family: Arial
          line-height: 23px
      .info-card
        p
          font-family: Arial
          font-size: 16px
          line-height: 18px
          position: relative
          left: 5px
          width: 95%
        span
          font-weight: bold
      .profiles
        font-family: Arial
        margin-top: 1.5em
        font-size: 18px
        line-height: 32px
        color: #6F6F6F
        position: relative
        left: 5px
      .socials
        display: flex
        flex-direction: row
        position: relative
        .social
          margin: 5px
          margin-top: -10px
          width: 30px
          height: 30px
#contact
    position: absolute
    top: 10px
    right: 50px
    ul
      display: flex
      flex-direction: row
.modal-overlay
  position: absolute
  width: 5000px
  top: -10000px
  right: -10000px
  left: -2000px
  bottom: -10000px
  z-index: 98

.modal
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 99
  width: 100%
  max-width: 700px
  height: 400px
  background-color: white
  border-radius: 5px
  padding: 20px
  font-family: Arial
  text-align: center
  -webkit-box-shadow: 0px 15px 60px 40px rgba(0,0,0,0.86)
  -moz-box-shadow: 0px 15px 60px 40px rgba(0,0,0,0.86)
  box-shadow: 0px 10px 30px 10px rgba(0,0,0,0.86)

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s

.fade-enter, .fade-leave-to
  opacity: 0

.slide-enter-active, .slide-leave-active
  transition: opacity 0.5s

.slide-enter, .slide-leave-to
  opacity: 0
.header-small
  display: flex
  flex-direction: column
  overflow: visible
  border-bottom: 1px solid #C1C1C1
  .top-row-small
    display: flex
    flex-direction: row
    align-items: center
    text-align: center
    video
      margin: 0 auto
  .tabs-small
    margin: 0 auto
    width: 100%
    list-style-type: none
    display: flex
    flex-direction: row
    font-family: Arial
    margin-bottom: -.5em
    padding: 0
    .tab-small
      margin: 10px
      width: 25%

</style>
<style scoped>
table.people-also-ask {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #AAAAAA;
  background-color: #FFFFFF;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
table.people-also-ask td, table.people-also-ask th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}
table.people-also-ask tbody td {
  font-size: 18px;
  padding: 10px;
}

table.people-also-ask thead th {
  font-size: 20px;
  font-weight: normal;
  color: #000000;
  text-align: left;
  border-left: 0px solid #D0E4F5;
  padding: 10px;

}
table.people-also-ask thead th:first-child {
  border-left: none;
}

table.people-also-ask tfoot td {
  font-size: 14px;
}
table.people-also-ask tfoot .links {
  text-align: right;
}
table.people-also-ask tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
</style>
