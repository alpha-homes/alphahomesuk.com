
<template>
  <section :class="computedClass">
    <div class="hero-body">
      <div class="body-content-padding"></div>
      <div class="body-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
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
  &.left {
    background-position: 55% 100%;
  }
  &.right {
    background-position: 45% 100%;
  }

  .hero-body {
    width: 100%;
    display: flex;
    .body-content-padding {
      flex-basis: 100%;
    }
  }
}
</style>