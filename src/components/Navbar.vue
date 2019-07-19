<template>
  <nav
    class="navbar ah-navbar is-bold is-primary-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <g-link class="navbar-item navbar-logo-item" to="/">
        <g-image src="~/assets/img/logo/logo-full-transparent.svg" class="navbar-logo"/>
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
        <g-link to="/CHANGEME" class="navbar-item is-hidden-desktop">Home</g-link>

        <g-link to="/about" class="navbar-item">About</g-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <g-link to="/services" class="navbar-link">Services</g-link>

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
            <g-link to="/landlord-login" class="button is-twitter">
              <span class="icon">
                <i class="fas fa-key"></i>
              </span>
              <span>Landlord Login</span>
            </g-link>
            <g-link to="/contact" class="button is-success">
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
.navbar-logo {
  width: auto;
  height: 36px;
}
.ah-navbar {
  font-family: $ah-header;
  font-size: 0.9em;
}
</style>

