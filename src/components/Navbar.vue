<template>
  <nav
    class="navbar ah-navbar is-bold is-primary-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <g-link class="navbar-item navbar-logo-item" to="/" exact>
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
        <g-link to="/" class="navbar-item is-hidden-desktop" exact>Home</g-link>

        <g-link to="/about" class="navbar-item">About</g-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a href="/services" class="navbar-link" exact>Services</a>

          <div class="navbar-dropdown">
            <a href="/services/property-management" class="navbar-item">Property Management</a>
            <a href="/services/guaranteed-rent" class="navbar-item">Guaranteed Rent</a>
          </div>
        </div>
        <a href="/landlords" class="navbar-item">Landlords</a>
        <a href="/tenants" class="navbar-item">Tenants</a>
        <a href="/agents" class="navbar-item">Agents</a>
        <div class="navbar-item">
          <div class="buttons">
            <a href="/landlord-login" class="button is-outlined">
              <span class="icon">
                <i class="fas fa-key"></i>
              </span>
              <span>Landlord Login</span>
            </a>
            <g-link to="/contact" class="button is-success is-rounded">
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

