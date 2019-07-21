<template>
  <section
    id="homepage-hero"
    class="hero is-info is-bold has-vector-illustration"
    :class="{ 'is-fullheight': size === 'fullheight', 'is-large' : size === 'large', 'is-small' : size === 'small'}"
  >
    <div class="hero-body">
      <div class="hero-body-content">
        <div class="content container">
          <h1 class="title">
            We are
            <span class="hero-logo">
              <img class="hero-logo-image" src="../../assets/img/logo/v2/emblem-light.svg">Alpha Homes
            </span>
          </h1>
          <SubtitleCarousel :subtitles="taglines"/>
          <p class="text hero-text">
            <slot name="text"/>
          </p>
        </div>
      </div>
      <div class="hero-background"></div>
    </div>

    <div class="hero-foot"></div>
  </section>
</template>

<script>
import SubtitleCarousel from "~/components/hero/subtitle-carousel.vue";
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
  name: "homepage-hero",
  props: ["size", "taglines"],
  components: {
    SubtitleCarousel
  }
};
</script>

<style lang="scss">
.hero.is-bold.has-vector-illustration {
  background: linear-gradient(141deg, #162d45 0%, #3287f5 71%, #3287f5 100%);
}

.has-vector-illustration .hero-body-content {
  z-index: 2;
  text-shadow: 0 0px 2px $primary;

  @media screen and (min-width: 600px) {
    max-width: 600px;
  }
  padding-left: 2vw;
  // text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

.has-vector-illustration .hero-background {
  background-image: url("../../assets/img/home/family-outside-home.svg");
  margin: 52px 0px 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: -3vh;
  @include mobile {
    top: -3vh;
  }
  right: 0;
  bottom: 0;
  background-size: 65% auto;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  z-index: 0;
}

#homepage-hero .hero-text {
  position: relative;
  top: 100px;

  @media screen and (max-width: 320px) {
    font-size: 0.8em;
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
    margin-top: -80px;
  }
  .hero-logo {
    font-weight: 700;
    font-size: 1.25em;
    letter-spacing: -2px;
  }

  .hero-logo-image {
    height: 53px;
    display: inline-block;
    position: relative;
    top: 12px;
    margin-right: 5px;
  }
}
</style>
