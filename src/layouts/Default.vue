<template>
  <div>
    <Navbar />
    <b-section>
      <slot />
    </b-section>
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
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/style.scss";
</style>
