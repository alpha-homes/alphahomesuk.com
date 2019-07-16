<template>
  <section
    class="hero is-primary has-vector-illustration"
    :class="{ 'is-fullheight': size === 'fullheight', 'is-large' : size === 'large', 'is-small' : size === 'small'}"
  >
    <div class="hero-body">
      <div :key="index" class="container" :class="[`item-${index}`]">
        <h1 class="title is-size-1">{{hero.title || 'Missing Title'}}</h1>
        <h2 class="subtitle is-size-3">{{hero.subtitle}}</h2>
        <p class="text is-size-5">{{hero.text}}</p>
        <p>
          {{hero.linkText}}
          <a :href="hero.href">{{hero.callToAction}}</a>
        </p>
      </div>
    </div>

    <div class="hero-background"></div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
import bulmaCarousel from "../../node_modules/bulma-carousel/dist/js/bulma-carousel.js";
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
    // HouseIllustration
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

.has-vector-illustration .hero-body {
  z-index: 2;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
}

.has-vector-illustration .hero-background {
  margin: 52px 0px 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/img/home/house-illustration@3x.png");
  background-size: 40% auto;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  z-index: 0;
}
</style>
