<template>
  <nav
    class="navbar ah-navbar is-primary-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item navbar-logo-item" href="/">
        <LogoLong class="navbar-logo"/>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{'is-active': menuActive }"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{'is-active': menuActive }">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <a class="navbar-item is-hidden-desktop">Home</a>

        <a class="navbar-item">About</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Services</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Property Management</a>
            <a class="navbar-item">Guaranteed Rent</a>
          </div>
        </div>
        <a class="navbar-item">Landlords</a>
        <a class="navbar-item">Tenants</a>
        <a class="navbar-item">Agents</a>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
              <span class="icon">
                <i class="fas fa-key"></i>
              </span>
              <span>Landlord Login</span>
            </a>
            <a class="button is-success" href="mailto:info@alphahomesuk.com">
              <span class="icon">
                <i class="fas fa-comments"></i>
              </span>
              <span>
                <strong>Contact Us</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoLong from "~/assets/img/logo/logo-full-transparent.svg";
export default {
  name: "Navbar",
  components: {
    LogoLong
  },
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    activateMenu() {
      this.menuActive = true;
    },
    resetMenu() {
      this.menuActive = false;
    },
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style lang="scss">
.navbar-item.navbar-logo-item {
  // padding: 0;
}
.navbar-logo {
  width: auto;
  height: 36px;
}
.ah-navbar {
  font-family: $ah-header;
  font-size: 0.9em;
}
</style>

