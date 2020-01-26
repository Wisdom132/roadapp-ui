<template>
  <div>
    <ul
      id="slide-out"
      class="sidenav sidenav-fixed blue darken-4 white-text collapsible"
    >
      <li>
        <div class="user-view">
          <div class="background">
            <img src="/images/admin-background.jpeg" class="responsive-img" />
          </div>
          <a href="#">
            <img
              class="circle responsive-img"
              height="50px"
              width="50px"
              src="/images/admin.jpeg"
            />
          </a>
          <a href="#">
            <span class="black-text name">John Doe</span>
          </a>
          <a href="#">
            <span class="white-text email">jdandturk@gmail.com</span>
          </a>
        </div>
      </li>

      <li>
        <nuxt-link to="/user/basicinfo" class="waves-effect white-text"
          >Basic Details</nuxt-link
        >
      </li>

      <li>
        <nuxt-link to="/" class="waves-effect white-text">Logout</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
<script>
export default {
  mounted() {
    var elems = document.querySelectorAll('.collapsible')
    var instances = M.Collapsible.init(elems)
  }
}
</script>
