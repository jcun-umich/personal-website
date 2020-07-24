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
          <p>Really cool coding project</p>
        </div>
      </div>
      <ul class="tabs">
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/about">All</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/wiki">About</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/resume">Resume</a></li>
        <li class="tab active"><a style="text-decoration: none; color: inherit" href="/portfolio">Portfolio</a></li>
      </ul>
    </header>
    <body>
      <div class="banner">
      <video disableRemotePlayback autoplay muted loop id="myVideo">
        <source  src="../assets/joshtube.mp4" type="video/mp4">
      </video>
      </div>
      <ul class="videos">
        <li class="video y">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source  src="../assets/dbt.mp4" type="video/mp4">
           </video>
          </div>
          <div class="info">
            <h3>PDB Translator (C++)</h3>
            <p>Part of a research project, this was my first experience with not only C++ but programming in general. The premise was to take a Protein Data Bank file (PDB), which represents the genetic makeup of a protein, and extract the amino acid sequence from the thousands of lines in the file. I eventaully expanded this to translate the entire database of over 200,000 proteins.</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/blob/master/dataBaseTranslator.cpp" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video r">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source src="../assets/hangman.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>Hangman (C++)</h3>
            <p>Using only C++ a guessing word is randomly selected from a database and the player has limited chances to figure out what the word is. This was another fun weekend project. In the future, I'd like to combine this with another prrogramming language to add a visual element.</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/tree/master/Hangman"  style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video b">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source src="../assets/website.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>This Website! (Vue.js)</h3>
            <p>The table found in the About page was initially part of the bootcamp for my Web Development internship. As you can see I took the assignment many steps further to create an over-the-top display of what I can do in my short time learning web developement. This website encapsulates only part of both who I am and what I can do.</p>
            <div class="full"><a href="" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video y">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source src="../assets/blackjack.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>Black Jack (C++)</h3>
            <p>Classic card game using random number generators and basic C++ to create a dealer. This was a fun, independent weekend project!</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/blob/master/blackJack.cpp" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video r">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source  src="../assets/planroute.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>Route Calculator (C++)</h3>
            <p>Originally part of a school project, the code is used to help astronauts navigate from point A to B by locating the nearest planets and creating a route to follow. Could be developed into a makeshift GPS system.</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/blob/master/planRoute.cpp" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
      </ul>
    </body>
    </mq-layout>
    <mq-layout mq="sm">
    <div class="header-small">
      <div class="top-row-small">
        <a href="/home">
        <video disableRemotePlayback width="30%" autoplay muted loop id="myVideo-small">
        <source src="../assets/logo.mp4" type="video/mp4">
        </video>
        </a>
      </div>
      <ul class="tabs-small">
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/about">All</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/wiki">About</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/resume">Resume</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: #4C90F6; border-bottom: 2px solid #4C90F6" href="/portfolio">Portfolio</a></li>
      </ul>
    </div>
    <div class="body-small">
            <div class="banner">
      <video disableRemotePlayback autoplay muted loop id="myVideo">
        <source  src="../assets/joshtube.mp4" type="video/mp4">
      </video>
      </div>
      <ul class="videos">
        <li class="video y">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source  src="../assets/dbt.mp4" type="video/mp4">
           </video>
          </div>
          <div class="info">
            <h3>PDB Translator (C++)</h3>
            <p>Part of a research project, this was my first experience with not only C++ but programming in general. The premise was to take a Protein Data Bank file (PDB), which represents the genetic makeup of a protein, and extract the amino acid sequence from the thousands of lines in the file. I eventaully expanded this to translate the entire database of over 200,000 proteins.</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/blob/master/dataBaseTranslator.cpp" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video r">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source src="../assets/hangman.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>Hangman (C++)</h3>
            <p>Using only C++ a guessing word is randomly selected from a database and the player has limited chances to figure out what the word is. This was another fun weekend project. In the future, I'd like to combine this with another prrogramming language to add a visual element.</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/tree/master/Hangman"  style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video b">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source src="../assets/website.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>This Website! (Vue.js)</h3>
            <p>The table found in the About page was initially part of the bootcamp for my Web Development internship. As you can see I took the assignment many steps further to create an over-the-top display of what I can do in my short time learning web developement. This website encapsulates only part of both who I am and what I can do.</p>
            <div class="full"><a href="" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video y">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source src="../assets/blackjack.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>Black Jack (C++)</h3>
            <p>Classic card game using random number generators and basic C++ to create a dealer. This was a fun, independent weekend project!</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/blob/master/blackJack.cpp" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
        <li class="video r">
          <div class="video-panel">
            <video disableRemotePlayback autoplay muted loop id="myVideo">
              <source  src="../assets/planroute.mp4" type="video/mp4">
            </video>
          </div>
          <div class="info">
            <h3>Route Calculator (C++)</h3>
            <p>Originally part of a school project, the code is used to help astronauts navigate from point A to B by locating the nearest planets and creating a route to follow. Could be developed into a makeshift GPS system.</p>
            <div class="full"><a href="https://github.com/jcun-umich/portfolio/blob/master/planRoute.cpp" style="text-decoration: none; color: white" target="_blank"><p style="font-size: 15px">Full Code</p></a></div>
          </div>
        </li>
      </ul>
    </div>
    </mq-layout>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
.body-small
  display: flex
  flex-direction: column
  margin: 0 auto
  align-items: center
  .banner
    video
      margin: 0 auto
      width: 200px
      height: 204.64px
      margin-bottom: -80px
      margin-top: -10px
  .videos
    list-style-type: none
    display: flex
    flex-direction: column
    position: relative
    .video
      width: 100%
      height: 650px
      margin: 0 auto
      background: white
      box-sizing: border-box
      display: flex
      flex-direction: column
      .video-panel
        width: 400px
        height: 50px
        color: white
        video
          position: relative
          left: 20%
          width: 270px
          height: 150px
          border: .5px solid gray
          -webkit-box-shadow: 0px 10px 62px 0px rgba(0,0,0,0.55)
          -moz-box-shadow: 0px 10px 62px 0px rgba(0,0,0,0.55)
          box-shadow: 0px 10px 62px 0px rgba(0,0,0,0.55)
      .info
        display: flex
        font-family: Arial
        flex-direction: column
        position: relative
        left: 22.5%
        margin-top: 50px
        h3
          margin-bottom: 0
        p
          font-size: 18px
    .full
      margin: 0 auto
      background: #c4302b
      border-radius: 15px
      width: 80px
      text-align: center
      font-weight: bold
      margin-bottom: -10px
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
  display: flex
  flex-direction: column
  margin: 0 auto
  align-items: center
  .banner
    video
      margin: 0 auto
      width: 200px
      height: 204.64px
      margin-bottom: -120px
      margin-top: -40px
  .videos
    list-style-type: none
    display: flex
    flex-direction: column
    .video
      width: 90%
      height: 389px
      margin: 0 auto
      margin-bottom: 20px
      background: white
      border-bottom: 1px solid rgba(0,0,0,.54)
      box-sizing: border-box
      display: flex
      flex-direction: row
      .video-panel
        position: relative
        left: 30px
        top: 10px
        width: 400px
        height: 250px
        color: white
        margin-top: 75px
        margin-right: 8em
        video
          position: relative
          width: 450px
          height: 250px
          border: .5px solid gray
          -webkit-box-shadow: 0px 10px 62px 0px rgba(0,0,0,0.55)
          -moz-box-shadow: 0px 10px 62px 0px rgba(0,0,0,0.55)
          box-shadow: 0px 10px 62px 0px rgba(0,0,0,0.55)
      .info
        display: flex
        font-family: Arial
        padding: 75px 0
        width: 50%
        flex-direction: column
        h3
          margin-bottom: 0
        p
          font-size: 18px
.full
  margin: 0 auto
  background: #c4302b
  border-radius: 15px
  width: 80px
  text-align: center
  font-weight: bold

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
