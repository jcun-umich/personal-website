<template>
    <section class="nav">
        <div class="nav-logo">
            <img height="80px" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Michigan_Wolverines_Block_M.png" alt="logo">
        </div>
        <div class="nav-menu">
            <div class="nav"></div>
            <ul class="nav-menu-list">
               <li class="nav-list-item"><a href="/home" style="text-decoration: none; color: white;">Home</a></li>
                <li class="nav-list-item"><a href="/about" style="text-decoration: none; color: white;">About me</a></li>
                <li class="nav-list-item"><a href="/resume" style="text-decoration: none; color: white;">Resume</a></li>
                <li class="nav-list-item"><a href="/github" style="text-decoration: none; color: white;">GitHub</a></li>
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
   background: #021D3C
   display: flex
   flex-direction: column
   justify-content: space-around
   align-items: center
   z-index: 1
   .nav-logo
      margin: 20px auto
   .nav-menu
      width: 100%

.nav-menu-list
  list-style: none
  padding: 0
  display: flex
  margin: 0
  color: white
  li
    width: 50%
    text-align: center
    background: #555
    padding: 10px 0
    cursor: pointer
    transition: background 300ms ease-in-out
    &:hover
      background: #333

</style>
