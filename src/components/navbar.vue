<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img
          alt="logo"
          src="../assets/img/bbq.jpg"
          height="45"
        />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Catering' }" class="nav-link">
            Catering
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Menu' }" class="nav-link">
            Menu
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Events' }" class="nav-link">
            Schedule/Events
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Contact' }" class="nav-link">
            Contact Me
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: true
    })
    return {
      state

    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
.navbar-dark .navbar-nav .nav-link {
    color: black;
}
.navbar-toggler-icon{
  color: black;
  }
  .navbar-dark .navbar-toggler {
    background-color: black;
    border-color: black;
}
</style>
