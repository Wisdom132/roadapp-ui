<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed blue darken-4 white-text collapsible">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="/images/admin-background.jpeg" class="responsive-img" />
          </div>
          <a href="#">
            <img class="circle responsive-img" height="50px" width="50px" src="/images/admin.jpeg" />
          </a>
          <a href="#">
            <span class="black-text name">Abraham Ubit</span>
          </a>
          <a href="#">
            <span class="white-text email">ubitabraham@vpvs.com</span>
          </a>
        </div>
      </li>

      <li>
        <nuxt-link to="/admin/dashboard" class="waves-effect white-text">
          <i class="fas fa-bars text-light"></i> Dashboard
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/admin/register" class="waves-effect white-text">
          <i class="fas fa-plus text-light"></i>Register Vehicle
        </nuxt-link>
      </li>
      <li></li>

      <li>
        <nuxt-link to="/admin/vehicles" class="waves-effect white-text">
          <i class="fas fa-car text-light"></i>Vehicle
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/get-vehicle-details" class="waves-effect white-text">
          <i class="fas fa-search text-light"></i>Verify Vehicle Particulars
        </nuxt-link>
      </li>
      <li>
        <a herf="#" class="waves-effect white-text">
          <i class="fas fa-edit text-light"></i>Edit Vehicle
        </a>
      </li>
      <li>
        <nuxt-link to="/admin" class="waves-effect white-text">
          <i class="fas fa-lock text-light"></i>Logout
        </nuxt-link>
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
