<template>
  <section
    id="homepage-hero"
    class="hero is-info is-bold has-vector-illustration"
    :class="{ 'is-fullheight': size === 'fullheight', 'is-large' : size === 'large', 'is-small' : size === 'small'}"
  >
    <div class="hero-body">
      <div class="hero-body-content">
        <div class="content container">
          <h1 class="title homepage-hero-title">
            We are
            <span class="hero-logo">
              <img class="hero-logo-image" src="../../assets/img/logo/v3/emblem-light.svg" />
              <span class="alpha">Alpha</span>
              <span class="homes">Homes</span>
            </span>
          </h1>

          <SubtitleCarousel :subtitles="taglines" />
          <p class="text hero-text">
            <slot name="text" />
          </p>
          <p id="learn-more" class="has-text-right">
            <a
              v-scroll-to="{el: '#welcome', offset: -170}"
              id="call-to-action"
              class="button is-dark is-inverted is-outlined"
            >Learn More</a>
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
#homepage-hero {
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
  margin: 0px 0px 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  // top: -3vh;
  // @include mobile {
  //   top: -50px;
  // }

  right: 0;
  bottom: -3vh;
  background-size: 70% auto;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  z-index: 0;
}

#homepage-hero .hero-text {
  @include mobile {
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
    // margin-top: -52px;
    @include mobile {
      // margin-top: -100px;
    }
  }
  .hero-logo {
    font-family: $ah-logo;
    text-transform: uppercase;
    margin-right: 0;
    font-weight: 700;
    font-size: 0.9em;
    letter-spacing: 10pt;
    .alpha {
      margin: 0 9pt 0 6pt;
    }

    .alpha,
    .homes {
      position: relative;
      top: 2px;
    }
    @include mobile {
      position: relative;
      top: -5px;
      display: block;
      letter-spacing: 3pt;
      .alpha,
      .homes {
        top: 0px;
      }
    }
  }

  .title.homepage-hero-title {
    overflow: visible;
    margin-right: 0;
    @include mobile {
      // font-size: 1.25em;
      letter-spacing: 0;
    }
    @media screen and (max-width: 320px) {
      font-size: 1.8em;
    }
    margin-bottom: 10px;
  }

  .hero-logo-image {
    height: 53px;
    width: auto;
    display: inline-block;
    position: relative;
    top: 16px;
    margin-right: 5px;
    @include mobile {
      height: 42px;
      top: 8px;
    }
  }
}
</style>
