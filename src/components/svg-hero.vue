
<template>
  <section :class="computedClass">
    <div class="hero-body">
      <div class="body-content-pre"></div>
      <div class="body-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
      <div class="body-content-post"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SVGHero",
  props: {
    page: String,
    background: String,
    side: String
  },
  computed: {
    computedClass() {
      let result = "hero is-fullheight has-svg-background";

      result += ` ${this.side}`;
      result += ` ${this.page}-page-hero`;
      return result;
    }
  }
};
</script>

<style lang="scss">
.hero.is-fullheight.has-svg-background {
  min-height: 75vh;
}

.hero.has-svg-background {
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: row;
  background-position-y: 85%;
  @include tablet {
    background-position-y: 100%;
  }

  @include desktop {
    background-position-y: 90%;
  }

  &.left {
    background-position-x: 40%;
    text-align: right;
  }
  &.right {
    background-position-x: 45%;
    text-align: left;
    .hero-body {
      flex-direction: row-reverse;
    }
  }

  .hero-body {
    width: 100%;
    display: flex;
    flex-direction: row;

    .body-content-pre {
      flex-basis: 100%;
      @include mobile {
        flex-basis: 30%;
      }
      @media screen and (min-width: 600px) {
        flex-basis: 100%;
      }
    }
    .body-content-post {
      @include mobile {
        flex-basis: 0;
      }
      @include tablet {
        flex-basis: 10%;
      }
      @include desktop {
        flex-basis: 10%;
      }
    }
    .body-content {
      max-width: 55vw;
      width: 100%;
      @include mobile {
        max-width: 90vw;
        h1 {
          font-size: 1.337em;
        }
        p {
          font-size: 0.8em;
        }
      }

      // text-justify: distribute;
    }
  }
}
</style>