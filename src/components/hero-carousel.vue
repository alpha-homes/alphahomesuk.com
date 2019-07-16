<template>
  <section
    id="homepage-hero"
    class="hero is-primary has-vector-illustration"
    :class="{ 'is-fullheight': size === 'fullheight', 'is-large' : size === 'large', 'is-small' : size === 'small'}"
  >
    <div class="hero-body">
      <div :key="index" class="content container">
        <h1 class="title">We are Alpha Homes</h1>
        <SubtitleCarousel :subtitles="[hero.subtitle, 'DJ KHALEEEEEED', 'Another one']"/>
        <p
          class="text hero-text"
        >We use our company-wide brands to globally manage our team player expectations. Key players will take ownership of their stand-ups by intelligently synergising knowledge transfer agile workflows.</p>
      </div>
    </div>

    <div class="hero-background"></div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
import bulmaCarousel from "../../node_modules/bulma-carousel/dist/js/bulma-carousel.js";
import SubtitleCarousel from "~/components/hero/subtitle-carousel.vue";

const carouselOptions = {
  autoplay: true,
  autoplaySpeed: 5000,
  //infinite: true,
  // loop: true,
  navigation: false
};

/**
 * schema:
 *    int id:
 *    string title:
 *    string subtitle:
 *    string text:
 *    string url:
 *    string linkText:
 *    string callToAction:
 *    boolean useButton:
 *    string imageUrl
 *    string color
 *    string textColor
 */
export default {
  name: "hero-carousel",
  props: ["heroes", "size"],
  components: {
    SubtitleCarousel
  },
  computed: {
    hero() {
      return this.heroes[this.currentHeroIndex];
    }
  },
  data() {
    return {
      currentHeroIndex: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      const carousels = bulmaCarousel.attach(
        this.$refs.carouselRef,
        carouselOptions
      );
    });
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma-carousel/src/sass/index.sass";
@import "./hero-carousel.scss";

.has-vector-illustration .hero-body {
  z-index: 2;
  // text-shadow: 0 2px 2px rgba(0, 0, 0, 0.75);
}

.has-vector-illustration .hero-background {
  background-image: url("../assets/img/home/house-illustration.svg");
  margin: 52px 0px 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: 40% auto;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  z-index: 0;
}

#homepage-hero .hero-text {
  position: relative;
  top: 36px;
}
</style>
