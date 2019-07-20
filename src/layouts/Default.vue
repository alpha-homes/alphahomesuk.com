<template>
  <div id="main-wrapper">
    <Navbar/>
    <transition name="quickfade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/style.scss";
.quickfade-enter-active {
  transition: opacity 0.33s ease-in-out;
}

.quickfade-enter {
  opacity: 0;
}
</style>
