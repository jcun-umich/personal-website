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
            <a href="https://docs.google.com/document/d/1m80brQ6bSwMCpcH9Jezf389aTEB6cvSEKv_-Bgg1cZE/edit?usp=sharing" target="_blank"><button class="resume-button">Add to my library</button></a>
            <a><button class="resume-button">Write a review</button></a>
            <p style="font-size: 24px"><span style="color: red">Subject:</span> Looking for an internship for Summer 2021</p>
          </div>
          <ul style="list-style-type: none" class="columns">
            <li class="left-col">
              <a href="https://docs.google.com/document/d/1m80brQ6bSwMCpcH9Jezf389aTEB6cvSEKv_-Bgg1cZE/edit?usp=sharing" target="_blank"><button class="resume-button2">Download Resume</button></a>
            </li>
            <li class="right-col">
              <img src="../assets/resumee.png" alt="resume">
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
            <a href="https://docs.google.com/document/d/1m80brQ6bSwMCpcH9Jezf389aTEB6cvSEKv_-Bgg1cZE/edit?usp=sharing" target="_blank"><button class="resume-button2">Download Resume</button></a>
      </div>
      <div class="right-col">
        <img src="../assets/resumee.png" alt="resume">
      </div>
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
  background: #F1EDFF
  .top-bar
    background: white
    height: 18vw
    width: 100%
    border-bottom: none
    video
      position: relative
      top: -20px
    p
      font-size: 4vw
      margin-left: -50px
    .resume-button2
            font-size: 12px
            color: white
            background: #ED4D3C
            border-radius: 6px
            padding: 10px
            border: none
            margin-left: -25px
            cursor: pointer
            margin-top: 20%
            position: relative
            right: -90%
            &:hover
              background: red
  .right-col
          width: 100%
          background: #F1EDFF
          align-items: center
          height: 150vw
          img
            width: 90%
            margin: 0 auto
            margin-top: 25px
            margin-left: 5%
.main
  display: flex
  flex-direction: column
  background: white
  overflow-x: hidden
header
  z-index: 99
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
  z-index: 98
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
      margin-left: 10px
    .resume-button
      color: black
      font-size: 12px
      background: #D4D6E8
      border: 1px solid #8D8D8D
      box-sizing: border-box
      padding: 10px
      margin: 5px
      margin-top: 20px
      cursor: pointer
      &:hover
        background: gray
  .columns
        display: flex
        flex-direction: row
        .left-col
          width: 10%
          position: relative
          .resume-button2
            font-size: 12px
            color: white
            background: #ED4D3C
            border-radius: 6px
            padding: 10px
            border: none
            margin-left: -25px
            cursor: pointer
            &:hover
              background: red
        .right-col
          width: 90%
          background: #F1EDFF
          align-items: center
          img
            width: 50%
            margin: 0 auto
            margin-left: 25%
            margin-top: 10px
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
