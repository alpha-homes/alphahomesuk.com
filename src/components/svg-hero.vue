
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
.hero.has-svg-background {
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: row;
  &.left {
    background-position: 40% 100%;
  }
  &.right {
    background-position: 45% 100%;
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
    }
    .body-content-post {
      @include mobile {
        flex-basis: 0;
      }
      @include tablet {
        flex-basis: 10%;
      }
      @include desktop {
        flex-basis: 25%;
      }
    }
    .body-content {
      max-width: 55vw;

      // text-justify: distribute;
    }
  }
}
</style>