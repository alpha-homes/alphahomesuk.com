<template>
  <div id="main-wrapper">
    <Navbar/>
    <div id="content-container">
      <transition name="quickfade" appear>
        <main>
          <slot/>
        </main>
      </transition>
      <Footer/>
    </div>
  </div>
</template>

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
// body {
//   background-color: $ah-blue;
// }

// .hero {
//   background-color: white;
// }

// section.section {
//   background-color: #fff;
// }

.quickfade-enter-active {
  transition: opacity 0.33s ease-in;
}

.quickfade-enter {
  opacity: 0;
}
h1.secondary-h1,
.content h1.secondary-h1 {
  font-size: 2em;
  margin-bottom: 1.6em;
  text-align: center;
}

#generic-container .hero h1 {
  color: #fff;
}
#generic-container .hero h1.has-text-dark {
  // color:
}
</style>
