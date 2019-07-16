<template>
  <section
    class="hero has-carousel"
    :class="{ 'is-fullheight': size === 'fullheight', 'is-large' : size === 'large', 'is-small' : size === 'small'}"
  >
    <div ref="carouselRef" class="hero-carousel">
      <div v-for="(hero, index) in heroes" :key="index" class="content" :class="[`item-${index}`]">
        <h1 class="title">{{hero.title || 'Missing Title'}}</h1>
        <h2 class="subtitle">{{hero.subtitle}}</h2>
        <p>{{hero.text}}</p>
        <p>
          {{hero.linkText}}
          <a :href="hero.href">{{hero.callToAction}}</a>
        </p>
      </div>
    </div>

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
</style>
