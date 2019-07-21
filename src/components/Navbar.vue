<template>
  <nav
    id="ah-navbar"
    class="navbar ah-navbar is-primary is-fixed-top has-navbar-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <g-link class="navbar-item navbar-logo-item" to="/" exact>
        <img alt="Alpha Homes" src="../assets/img/logo/v2/logo-full.svg" class="navbar-logo">
      </g-link>

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
        <g-link to="/about" class="navbar-item">About</g-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <g-link to="/services" class="navbar-link" exact>Services</g-link>

          <div class="navbar-dropdown">
            <g-link to="/services/property-management" class="navbar-item">Property Management</g-link>
            <g-link to="/services/guaranteed-rent" class="navbar-item">Guaranteed Rent</g-link>
          </div>
        </div>
        <g-link to="/landlords" class="navbar-item">Landlords</g-link>
        <g-link to="/tenants" class="navbar-item">Tenants</g-link>
        <g-link to="/agents" class="navbar-item">Agents</g-link>
        <div class="navbar-item">
          <div class="buttons">
            <a href="/landlord-login" target="_blank" class="button is-dark is-inverted is-rounded">
              <!-- TODO: change landlord login link -->
              <span class="icon">
                <i class="fas fa-key has-text-brown"></i>
              </span>
              <span>Landlord Login</span>
            </a>
            <g-link to="/contact" class="button is-green is-rounded">
              <span class="icon">
                <i class="fas fa-comments"></i>
              </span>
              <span>
                <strong>Contact Us</strong>
              </span>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
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
img.navbar-logo {
  width: auto;
  height: 40px;
}
.ah-navbar {
  font-family: $ah-header;
  font-size: 0.9em;
}
.navbar.has-navbar-shadow {
  box-shadow: 0 2px 2px 2px #162d45;
}

nav#ah-navbar {
  a {
    font-weight: 300;
    letter-spacing: 0px;
  }
}
</style>

