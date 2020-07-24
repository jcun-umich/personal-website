<template>
    <section class="nav">
        <div class="nav-logo">
            <img height="175px" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Michigan_Wolverines_Block_M.png" alt="logo">
        </div>
        <div class="nav-menu">
            <ul class="nav-menu-list">
               <li class="nav-list-item"><a href="/home" style="text-decoration: none; color: white;">Home</a></li>
                <li class="nav-list-item"><a href="/about" style="text-decoration: none; color: white;">About me</a></li>
                <li class="nav-list-item"><a href="/resume" style="text-decoration: none; color: white;">Resume</a></li>
                <li class="nav-list-item"><a href="https://github.com/jcun-umich/portfolio" target="_blank" style="text-decoration: none; color: white;">GitHub</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.nav
  position: fixed
  left: 0
  top: 0
  bottom: 0
  background: #021D3C
  display: flex
  flex-direction: column
  align-items: center
  width: 20vw

  .nav-logo
    margin: 100px auto

  .nav-menu
    font-style: none
    color: white
.nav-menu-list
  list-style: none
  padding: 0
  align-items: center
  .nav-list-item
    background: #222
    padding: 20px 50px
    text-align: center
    margin: 10px auto
    cursor: pointer
    &:hover
      width: 50%
      background: #111
</style>
