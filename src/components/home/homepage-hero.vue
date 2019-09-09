<template>
  <section
    id="homepage-hero"
    class="hero is-bold has-vector-illustration"
    :class="{ 'is-fullheight': size === 'fullheight', 'is-large' : size === 'large', 'is-small' : size === 'small'}"
  >
    <div class="hero-body">
      <div class="hero-body-content">
        <div class="hero-body-content-inner">
          <div class="content container">
            <h1 class="title homepage-hero-title" style="color: #fff">
              Hello, we are
              <span class="hero-logo">
                <img class="hero-logo-image" src="../../assets/img/logo/v3/logo-full.svg" />
              </span>
            </h1>

            <SubtitleCarousel :subtitles="taglines" />
            <div class="short-summary-and-call-to-action">
              <p class="text hero-text">
                <slot name="text" />
              </p>

              <p id="learn-more" class="has-text-right">
                <a
                  v-scroll-to="{el: '#welcome', offset: -170}"
                  id="call-to-action"
                  class="button is-inverted"
                >Learn More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-background-wrapper">
      <div class="hero-background">
        <div class="hero-illustration">
          <img class="hero-illustration-image" src="../../assets/img/home/family-outside-home.svg" />
        </div>
      </div>
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
.has-vector-illustration .hero-body-content {
  display: flex;
  flex-direction: column;
  z-index: 3;
  .hero-body-content-inner {
    @include mobile {
      padding-left: 0;
    }
    @media screen and (min-width: 600px) {
      padding-left: 10vw;
    }
  }
}

.has-vector-illustration .hero-background {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0px 0px 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  // position: absolute;
  // right: 0;
  // bottom: 0;
  z-index: 0;
}

.short-summary-and-call-to-action {
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 55%;
    max-width: 60rem;
  }
}

.hero-illustration {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}

.hero-illustration-image {
  height: 35vh;
  @include desktop {
    width: 50%;
    height: auto;
  }
  margin-right: 15px;
}

#homepage-hero .hero-text {
  @include mobile {
    font-size: 0.8em;
  }
  font-size: 1.1em;
}

#homepage-hero .hero-background-gradient-overlay {
  margin: 0px 0px 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(
    141deg,
    rgba(22, 45, 69, 1) 0%,
    rgba(50, 135, 245, 0.1) 50%,
    rgba(50, 135, 245, 0) 71%,
    rgba(50, 135, 245, 0) 100%
  );
}

#homepage-hero {
  background-image: url("../../assets/img/home/Homepage-BG.svg");
  color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  padding-top: 0px;
  margin-top: -50px;

  .hero-body {
    align-items: center;
    @media screen and (max-width: 480px) {
      align-items: flex-start;
      padding-top: 5rem;
    }
    padding: 0 1.5rem;
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
    font-family: $ah-header;
    font-weight: 300;
    font-style: oblique;
    @include mobile {
      letter-spacing: 0;
    }
    @media screen and (max-width: 320px) {
      font-size: 1.2em;
    }
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .hero-logo-image {
    height: 64px;
    width: auto;
    display: inline-block;
    position: relative;
    top: 20px;
    @include mobile {
      height: 64px;
      top: 8px;
    }
  }

  .hero-background-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    // top: 52px;
    left: 0;
  }
}
</style>
