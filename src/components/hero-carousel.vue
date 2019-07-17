<template>
  <section
    id="homepage-hero"
    class="hero is-primary has-vector-illustration"
    :class="{ 'is-fullheight': size === 'fullheight', 'is-large' : size === 'large', 'is-small' : size === 'small'}"
  >
    <div class="hero-body">
      <div class="hero-body-content">
        <div :key="index" class="content container">
          <h1 class="title">We are Alpha Homes</h1>
          <SubtitleCarousel :subtitles="[hero.subtitle, 'DJ KHALEEEEEED', 'Another one']" />
          <p
            class="text hero-text"
          >We use our company-wide brands to globally manage our team player expectations. Key players will take ownership of their stand-ups by intelligently synergising knowledge transfer agile workflows.</p>
        </div>
      </div>
      <div class="hero-background"></div>
    </div>

    <div class="hero-foot"></div>
  </section>
</template>

<script>
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
      // const carousels = bulmaCarousel.attach(
      //   this.$refs.carouselRef,
      //   carouselOptions
      // );
    });
  }
};
</script>

<style lang="scss">
@import "./hero-carousel.scss";

.has-vector-illustration .hero-body-content {
  z-index: 2;
  // text-shadow: 0 2px 2px rgba(0, 0, 0, 0.75);
  @media screen and (min-width: 600px) {
    max-width: 600px;
  }
  padding-left: 2vw;
  // text-shadow: 0 3px 4px rgba(0, 0, 0, 0.66);
}

.has-vector-illustration .hero-background {
  background-image: url("../assets/img/home/house-illustration.svg");
  margin: 52px 0px 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: -52px;
  right: 0;
  bottom: 0;
  background-size: 66% auto;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  z-index: 0;
}

#homepage-hero .hero-text {
  position: relative;
  top: 72px;
  @media screen and (max-width: 600px) {
    font-size: 0.8em;
    top: 72px;
  }
}

#homepage-hero {
  // background-image: url("../assets/img/photos/party.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  padding-top: 0px;
  margin-top: -52px;

  .hero-body {
    // background: rgba(0, 0, 0, 0.5);
    padding-top: 0px;
    // margin-top: -52px;
  }
}
</style>
