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
          <p>Resumes of people I should hire</p>
        </div>
      </div>
      <ul class="tabs">
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/about">All</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/wiki">About</a></li>
        <li class="tab active"><a style="text-decoration: none; color: inherit" href="/resume">Resume</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/portfolio">Portfolio</a></li>
      </ul>
    </header>
    <body>
          <div class="top-bar">
            <video width="125px" disableRemotePlayback autoplay muted loop id="myVideo">
            <source src="../assets/scholar.mp4" type="video/mp4">
            </video>
            <p>About 1 results (.02 seconds)</p>
          </div>
          <ul style="list-style-type: none" class="columns">
            <li class="left-col">
              <ul style="list-style-type: none" class="dates">
                <li class="date active">Any time</li>
                <li class="date">Since 2020</li>
                <li class="date">Since 2019</li>
                <li class="date">Since 2016</li>
                <li class="date">Custom range...</li>
              </ul>
              <div class="sort">
                <p class="active">Sort by relevance</p>
                <p>Sort by date</p>
              </div>
            </li>
            <li class="right-col">
              <div class="result">
                <a href="/resume2" style="text-decoration: none; color: inherit"><h1 style="color: #051EFF">[RESUME] <span style="font-weight: bold;">Josh Cunningham</span></h1></a>
                <p style="color: #006D12; margin-bottom: -15px">J Cunningham - 2020 - joshcunningham.com</p>
                <p>Really well made resume that covers the education, work and volunteer experience, and community involvement of one Josh Cunningham.</p>
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
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/about">All</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/wiki">About</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: #4C90F6; border-bottom: 2px solid #4C90F6" href="/resume">Resume</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/portfolio">Portfolio</a></li>
      </ul>
    </div>
    <div class="body-small">
      <div class="top-bar">
        <video width="100px" autoplay muted loop id="myVideo">
          <source src="../assets/scholar.mp4" preload="auto" poster="../assets/scholar.png" type="video/mp4">
          <img src="../assets/scholar.png" alt="logo">
        </video>
        <p>About 1 results (.02 seconds)</p>
      </div>
        <ul style="list-style-type: none" class="columns">
            <li class="left-col">
              <ul style="list-style-type: none" class="dates">
                <li class="date active" style="font-size: 3vw">Any time</li>
                <li class="date" style="font-size: 3vw">Since 2020</li>
                <li class="date" style="font-size: 3vw">Since 2019</li>
                <li class="date" style="font-size: 3vw">Since 2016</li>
                <li class="date" style="font-size: 3vw">Custom range...</li>
              </ul>
              <div class="sort">
                <p class="active" style="font-size: 2.5vw; margin-bottom: 0">Sort by relevance</p>
                <p style="font-size: 2.5vw">Sort by date</p>
              </div>
            </li>
            <li class="right-col">
              <div class="result">
                <a href="/resume2" style="text-decoration: none; color: inherit;"><h1 style="color: #051EFF; font-size: 5vw; margin-bottom: -5px">[RESUME] <span style="font-weight: bold;">Josh Cunningham</span></h1></a>
                <p style="color: #006D12; margin-bottom: -5px; font-size: 3vw; width: 100%">J Cunningham - 2020 - joshcunningham.com</p>
                <p style="font-size: 3vw; width: 90%">Really well made resume that covers the education, work and volunteer experience, and community involvement of one Josh Cunningham.</p>
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

.main
  display: flex
  flex-direction: column
  background: white
header
  z-index: 999
  display: flex
  flex-direction: column
  border-bottom: 1px solid #C1C1C1
  .top-row
    z-index: 99
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
  font-family: Arial
  position: relative
  .top-bar
        display: flex
        flex-direction: row
        border-bottom: 1px solid #8D8D8D
        margin-top: 0
        margin-left: 0
        video
          position: relative
          top: -25px
          margin-right: 5em
          left: 0
          margin-bottom: -40px
        p
          position: relative
          color: #989898
          font-size: 20px
  .columns
        display: flex
        flex-direction: row
        .left-col
          display: flex
          flex-direction: column
          position: relative
          .dates
            border-bottom: 1px solid #8D8D8D
            position: relative
            left: -40px
            .active
              color: red
            .date
              position: relative
              left: -15px
              font-size: 18px
              margin-bottom: 10px
          .sort
            display: flex
            flex-direction: column
            p
              font-size: 18px
              margin-bottom: -12px
              position: relative
              left: -15px
            .active
              color: red
        .right-col
          display: flex
          flex-direction: column
          .result
            border-bottom: 1px solid #8D8D8D
            h1
              font-size: 32px
              margin-bottom: 0
              font-weight: normal
              margin-bottom: -15px
            p
              font-size: 20px
              width: 70%
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
.body-small
  display: flex
  flex-direction: column
  font-family: Arial
  .top-bar
    height: 18vw
    width: 100%
    video
      position: relative
      top: -20px
    p
      font-size: 4vw
      margin-left: -50px
  .columns
    .left-col
      width: 40%
      .dates
        position: relative
        left: -60%
      .date
        font-size: 1vw
      .sort
        position: relative
        left: -25%
  .right-col
    width: 100%
    margin-left: -15%
</style>
