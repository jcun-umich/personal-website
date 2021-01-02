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
          <p>Super interesting person I want to know more about</p>
        </div>
      </div>
      <ul class="tabs">
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/about">All</a></li>
        <li class="tab active"><a style="text-decoration: none; color: inherit" href="/wiki">About</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/resume">Resume</a></li>
        <li class="tab"><a style="text-decoration: none; color: inherit" href="/portfolio">Portfolio</a></li>
      </ul>
    </header>
    <body>
      <ul class="divs">
        <li class="left-side">
          <video disableRemotePlayback autoplay muted loop id="myVideo">
          <source src="../assets/joshipedia2.mp4" type="video/mp4">
          </video></li>
        <li class="right-side" style="margin-left: 10px">
          <div class="title-card"><h2>Josh Cunningham</h2></div>
          <p style="font-size: 18px; margin-top: 3px">From Joshipedia</p>
          <ul class="top-right">
            <li class="left-top-right">
              <p>Josh Cunningham is a second year student at the College of Engineering at the <a href="https://en.wikipedia.org/wiki/University_of_Michigan" target="_blank" style="text-decoration: none; color: blue">University of Michigan</a>, intending to major in both <a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank" style="text-decoration: none; color: blue">Computer Science</a> and <a href="https://en.wikipedia.org/wiki/Data_science" target="_blank" style="text-decoration: none; color: blue">Data Science</a>. He is currently a Software Development Intern at Vitesco, a automotive part company based in Auburn Hills, Michigan. Below are the variety of programming languages and tools he is prepared to use to solve any problem he will face in his career. His ultimate goal in his career is to start a business. He doesn’t know what shape that aspiration will take, so he is trying to become knowledgeable in all aspects of development whether that be web development, <a href="https://en.wikipedia.org/wiki/Software_development" target="_blank" style="text-decoration: none; color: blue">software development</a>, or in data engineering. He is confident that as his arsenal of tools in the table below grows, he will be ready to succeed.</p>
              <div class="contents">
                <h4>Contents</h4>
                <ol>
                  <li class="content-item"><a href="#" v-scroll-to="'#skills'" style="text-decoration: none;">Skills</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#high-school'" style="text-decoration: none;">High School</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#college'" style="text-decoration: none;">College</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#career'" style="text-decoration: none;">Career</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#external-links'" style="text-decoration: none;">External Links</a></li>
                </ol>
              </div>
            </li>
            <li class="right-top-right">
              <h4>Josh Cunningham</h4>
              <img class="avatar" width="150px" height="150px" src="../assets/../assets/bluetie2.png" alt="pic">
              <p><span style="font-weight: bold">Name:</span>  Joshua Ryan Cunningham</p>
              <p><span style="font-weight: bold">Born:</span>  February 23</p>
              <p><span style="font-weight: bold">Education:</span>  University of Michigan</p>
              <p><span style="font-weight: bold">Occupation:</span>  Student, Intern, Future Engineer</p>
              <p><span style="font-weight: bold">Net Worth:</span>  -$30,000 in Student Loan Debt</p>
              <p><span style="font-weight: bold">Children:</span>  0</p>
            </li>
          </ul>
          <div class="pages">
            <div id="skills" class="skills">
              <h4>Skills</h4>
              <div class="skill-table">
                <p>Below are the variety of programming languages and tools he is prepared to use to solve any problem he will face in his career.</p>
                <table width="80%">
                <tr>
                <th>Requirement</th>
                <th>Solution</th>
                </tr>
                <tr>
                <td>Design</td>
                <td>Photoshop, Figma, After Effects</td>
                </tr>
                <tr>
                <td>Front-end</td>
                <td>Vue.js, HTML, CSS, JavaScript</td>
                </tr>
                <tr>
                <td>Back-end</td>
                <td>Node.js</td>
                </tr>
                <tr>
                <td>Software Dev.</td>
                <td>Python, C++, MATLab</td>
                </tr>
                </table></div>
            </div>
            <div id="high-school" class="page">
              <h4>High School</h4>
              <div class="words">
                <p>From a young age, he looked for ways to challenge himself academically. So when he heard about the magnet school in his area that uses the rigourous <a href="https://en.wikipedia.org/wiki/IB_Diploma_Programme" target="_blank" style="text-decoration: none; color: blue">IB Program</a>, the International Academy of Macomb, he knew that was the right place for him. While the program prepared him well for college, the most important takeaway from his high school experience was his development as a thinker. He was taught to think critically, not only looking at what happens in the world around him but also why and how those things happen. He thinks this will be an integral tool in both his higher education and his career as an engineer.</p>
                <img src="https://www.candgnews.com/storage/articles/66524/ParentGroup.jpg" alt="high-school">
              </div>
            </div>
            <div id="college" class="page">
              <h4>College</h4>
              <div class="words">
                <p>Continuing to pursue a challenging academic experience, he decided to attend the highly esteemed College of Engineering at the <a href="https://en.wikipedia.org/wiki/University_of_Michigan" target="_blank" style="text-decoration: none; color: blue">University of Michigan</a>. For the first time he is surrounded by people who truly share his passion for learning as well as engineering. So far, his time at college has taught him to take a more conceptual approach to engineering and push his limits as a student. His professors and superiors care more about how much he's learning rather than what his report card looks like. While this was an uncomfortable adjustment at first, it is a welcome one. He has also developed as an adult, with more responsibilities than ever.</p>
                <img src="https://arts.umich.edu/wp-content/uploads/sites/35/mc-image-cache/2015/11/library-law-2.jpg" alt="law-library">
              </div>
            </div>
            <div id="career" class="page">
              <h4>Career</h4>
              <div class="words">
                <p>At this point in his life he doesn't know what his career will look like exactly. He does know that he is actively working to prepare himself for whatever that career turns out to be. In college, he's taught software developement. On his own, he teaches himself <a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" style="text-decoration: none; color: blue">web development</a> and interns as a software developer to make himself a well-rounded engineer. He also intends to pursue Data Science and <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" style="text-decoration: none; color: blue">Artificial Inteliigence</a> in school as he knows that when he graduates being well-versed in these fields will be an invaluable resource for him as an employee. No matter what shape his future takes, he knows that he will be ready.</p>
                <img src="https://al.nd.edu/assets/380450/1000x562/bacs_code.jpg" alt="coding">
              </div>
            </div>
            <div id="external-links" class="external-links">
              <h4>External Links</h4>
              <div class="links">
                <p>LinkedIn: <a style="color: blue" href="https://www.linkedin.com/in/joshua-cunningham-923622193/">https://www.linkedin.com/in/joshua-cunningham-923622193/</a></p>
                <p>GitHub: <a style="color: blue" href="https://github.com/jcun-umich">https://github.com/jcun-umich</a></p>
                <p>Instagram: <a style="color: blue" href="https://www.instagram.com/jshcnnnghm/">https://www.instagram.com/jshcnnnghm/</a></p>
              </div></div>
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
        <li class="tab-small"><a style="text-decoration: none; color:  color: #4C90F6; border-bottom: 2px solid #4C90F6" href="/wiki">About</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/resume">Resume</a></li>
        <li class="tab-small"><a style="text-decoration: none; color: inherit" href="/portfolio">Portfolio</a></li>
      </ul>
    </div>
    <div class="body-small">
       <ul class="divs">
        <li class="left-side">
          <video width="50%" disableRemotePlayback preload="auto" poster="../assets/joshipedia.png" autoplay muted loop id="myVideo">
            <source src="../assets/joshipedia2.mp4" type="video/mp4">
            <img src="../assets/joshipedia.png" alt="logo">
          </video></li>
        <li class="right-side" style="margin-left: 10px">
          <div class="title-card"><h2>Josh Cunningham</h2></div>
          <div class="top-stuff">
          <p style="font-size: 12px; margin-top: 3px">From Joshipedia</p>
              <p>Josh Cunningham is a second year student at the College of Engineering at the <a href="https://en.wikipedia.org/wiki/University_of_Michigan" target="_blank" style="text-decoration: none; color: blue">University of Michigan</a>, intending to major in both <a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank" style="text-decoration: none; color: blue">Computer Science</a> and <a href="https://en.wikipedia.org/wiki/Data_science" target="_blank" style="text-decoration: none; color: blue">Data Science</a>. He is currently a Software Development Intern at Vitesco, a automotive part company based in Auburn Hills, Michigan. Below are the variety of programming languages and tools he is prepared to use to solve any problem he will face in his career. His ultimate goal in his career is to start a business. He doesn’t know what shape that aspiration will take, so he is trying to become knowledgeable in all aspects of development whether that be web development, <a href="https://en.wikipedia.org/wiki/Software_development" target="_blank" style="text-decoration: none; color: blue">software development</a>, or in data engineering. He is confident that as his arsenal of tools in the table below grows, he will be ready to succeed.</p>
              <img class="avatar" width="150px" height="150px" src="../assets/bluetie2.png" alt="pic">
              <h4>Josh Cunningham</h4>
              </div>
              <div class="contents">
                <h4>Contents</h4>
                <ol>
                  <li class="content-item"><a href="#" v-scroll-to="'#skills'" style="text-decoration: none;">Skills</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#high-school'" style="text-decoration: none;">High School</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#college'" style="text-decoration: none;">College</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#career'" style="text-decoration: none;">Career</a></li>
                  <li class="content-item"><a href="#" v-scroll-to="'#external-links'" style="text-decoration: none;">External Links</a></li>
                </ol>
              </div>
          <div class="pages">
            <div id="skills" class="skills">
              <h4>Skills</h4>
              <div class="skill-table">
                <p>Below are the variety of programming languages and tools he is prepared to use to solve any problem he will face in his career.</p>
                <table width="80%">
                <tr>
                <th>Requirement</th>
                <th>Solution</th>
                </tr>
                <tr>
                <td>Design</td>
                <td>Photoshop, Figma, After Effects</td>
                </tr>
                <tr>
                <td>Front-end</td>
                <td>Vue.js, HTML, CSS, JavaScript</td>
                </tr>
                <tr>
                <td>Back-end</td>
                <td>Node.js</td>
                </tr>
                <tr>
                <td>Software Dev.</td>
                <td>Python, C++, MATLab</td>
                </tr>
                </table></div>
            </div>
            <div id="high-school" class="page">
              <h4>High School</h4>
              <div class="words">
                <p>From a young age, he looked for ways to challenge himself academically. So when he heard about the magnet school in his area that uses the rigourous <a href="https://en.wikipedia.org/wiki/IB_Diploma_Programme" target="_blank" style="text-decoration: none; color: blue">IB Program</a>, the International Academy of Macomb, he knew that was the right place for him. While the program prepared him well for college, the most important takeaway from his high school experience was his development as a thinker. He was taught to think critically, not only looking at what happens in the world around him but also why and how those things happen. He thinks this will be an integral tool in both his higher education and his career as an engineer.</p>
                <img src="https://www.candgnews.com/storage/articles/66524/ParentGroup.jpg" alt="high-school">
              </div>
            </div>
            <div id="college" class="page">
              <h4>College</h4>
              <div class="words">
                <p>Continuing to pursue a challenging academic experience, he decided to attend the highly esteemed College of Engineering at the <a href="https://en.wikipedia.org/wiki/University_of_Michigan" target="_blank" style="text-decoration: none; color: blue">University of Michigan</a>. For the first time he is surrounded by people who truly share his passion for learning as well as engineering. So far, his time at college has taught him to take a more conceptual approach to engineering and push his limits as a student. His professors and superiors care more about how much he's learning rather than what his report card looks like. While this was an uncomfortable adjustment at first, it is a welcome one. He has also developed as an adult, with more responsibilities than ever.</p>
                <img src="https://arts.umich.edu/wp-content/uploads/sites/35/mc-image-cache/2015/11/library-law-2.jpg" alt="law-library">
              </div>
            </div>
            <div id="career" class="page">
              <h4>Career</h4>
              <div class="words">
                <p>At this point in his life he doesn't know what his career will look like exactly. He does know that he is actively working to prepare himself for whatever that career turns out to be. In college, he's taught software developement. On his own, he teaches himself <a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" style="text-decoration: none; color: blue">web development</a> and interns as a software developer to make himself a well-rounded engineer. He also intends to pursue Data Science and <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" style="text-decoration: none; color: blue">Artificial Inteliigence</a> in school as he knows that when he graduates being well-versed in these fields will be an invaluable resource for him as an employee. No matter what shape his future takes, he knows that he will be ready.</p>
                <img src="https://al.nd.edu/assets/380450/1000x562/bacs_code.jpg" alt="coding">
              </div>
            </div>
            <div id="external-links" class="external-links">
              <h4>External Links</h4>
              <div class="links">
                <p>LinkedIn: <a style="color: blue" href="https://www.linkedin.com/in/joshua-cunningham-923622193/">https://www.linkedin.com/in/joshua-cunningham-923622193/</a></p>
                <p>GitHub: <a style="color: blue" href="https://github.com/jcun-umich">https://github.com/jcun-umich</a></p>
                <p>Instagram: <a style="color: blue" href="https://www.instagram.com/jshcnnnghm/">https://www.instagram.com/jshcnnnghm/</a></p>
              </div></div>
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
  font-family: Times New Roman
  .divs
    list-style-type: none
    display: flex
    flex-direction: row
    .left-side
      width: 3%
      border-right: 0.5px solid #3DC5FF
      video
        position: absolute
        left: 5px
        width: 12vw
        height: 12vw
        min-width: 3vw
  .right-side
    display: flex
    flex-direction: column
    width: 100%
    .title-card
      margin-top: 0
      border-bottom: 1px solid #8D8D8D
      h2
        font-size: 18px
        margin-bottom: 0
    .top-stuff
      text-align: center
      margin-bottom: 1em
      p
        text-align: left
      img
        margin: 0 auto
        margin-bottom: -20px
    .contents
      width: 60%
      padding: 10px
      border: 1px solid #000000
      box-sizing: border-box
      text-align: center
      h4
        margin: 0 auto
        font-size: 18px
      .content-item
        text-align: left
        margin-top: 15px
    .pages
      display: flex
      flex-direction: column
      .skills
        h4
          font-size: 18px
          margin-bottom: 0
          font-weight: normal
      .skill-table
        border-top: 1px solid #838383
        p
          font-size: 16px
        table
          border-spacing: 0px
          margin: 50px auto
        tr th, tr td
          border: 1px solid #000000
          border-top: none
          padding: 10px
          text-align: center
          &:first-of-type
            border-left: none
          &:nth-of-type(2)
            border-right: none
      .page
        margin-top: 0
        h4
          font-size: 18px
          margin-bottom: 0
          font-weight: normal
        .words
          border-top: 1px solid #838383
          display: flex
          flex-direction: column
          width: 120%
          p
            font-size: 16px
          img
            margin-top: 10px
            margin-left: 10px
            width: 232px
            height: 180px
            background: gray
      .external-links
        h4
          font-size: 18px
          margin-bottom: 0
        .links
          font-size: 14px
          border-top: 1px solid #838383
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
        width: 475px
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
  font-family: Times
  .divs
    list-style-type: none
    display: flex
    flex-direction: row
  .left-side
    border-right: 0.5px solid #3DC5FF
    width: 5%
    margin-right: 5px
    align-items: center
    text-align: center
    video
      position: absolute
      left: 15px
      width: 6vw
      height: 6vw
      min-width: 3vw
  .right-side
    display: flex
    flex-direction: column
    width: 95%
    .title-card
      margin-top: 0
      border-bottom: 1px solid #8D8D8D
      h2
        font-size: 28px
        margin-bottom: 0
    .top-right
      position: relative
      left: -40px
      list-style-type: none
      display: flex
      flex-direction: row
      margin-left: 0
      .left-top-right
        width: 80%
        list-style-type: none
        display: flex
        flex-direction: column
        p
          font-size: 20px
          width: 95%
          margin-top: 0
        .contents
          width: 15%
          padding: 20px
          border: 1px solid #000000
          box-sizing: border-box
          text-align: center
          h4
            margin: 0 auto
            font-size: 18px
          .content-item
            text-align: left
            margin-top: 15px
      .right-top-right
        border: 1px solid #000000
        box-sizing: border-box
        padding: 5px
        margin: 0 auto
        align-items: center
        width: 20%
        text-align: center
        h4
          font-size: 18px
          margin: 0 auto
          text-align: center
        .avatar
          align-items: center
          margin: 0 auto
          text-align: center
        p
          text-align: left

    .pages
      display: flex
      flex-direction: column
      .skills
        h4
          font-size: 24px
          margin-bottom: 0
          font-weight: normal
      .skill-table
        border-top: 1px solid #838383
        p
          font-size: 18px
        table
          border-spacing: 0px
          margin: 50px auto
        tr th, tr td
          border: 1px solid #000000
          border-top: none
          padding: 10px
          text-align: center
          &:first-of-type
            border-left: none
          &:nth-of-type(2)
            border-right: none
      .page
        margin-top: 0
        h4
          font-size: 24px
          margin-bottom: 0
          font-weight: normal
        .words
          border-top: 1px solid #838383
          display: flex
          flex-direction: row
          p
            font-size: 20px
            width: 80%
          img
            margin-top: 10px
            margin-left: 10px
            width: 232px
            height: 180px
            background: gray
      .external-links
        h4
          font-size: 24px
          margin-bottom: 0
        .links
          font-size: 20px
          border-top: 1px solid #838383
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
