<template>
  <div>
    <Navbar />
    <section>
      <slot />
    </section>
    <Footer />
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
</style>
