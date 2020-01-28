<template>
  <div>
    <nav class="blue darken-4">
      <div class="container">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <a href="#" data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <nuxt-link to="/admin">Logout</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>