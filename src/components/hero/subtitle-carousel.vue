<template>
  <div class="subtitle-carousel-container">
    <h2 class="subtitle subtitle-carousel">
      <transition-group
        name="bounce"
        enter-active-class="bounceInLeft"
        leave-active-class="fadeOutRight"
      >
        <span
          v-for="(txt, i) in subtitles"
          :key="txt"
          v-show="index === i"
          class="carousel-item"
        >{{txt}}</span>
      </transition-group>
    </h2>
  </div>
</template>

<script>
import { interval } from "rxjs";
export default {
  name: "subtitle-carousel",
  props: ["subtitles"],
  mounted() {
    this.$subscribeTo(interval(5000), () => {
      this.next();
    });
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    next() {
      if (this.index === this.subtitles.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  }
};
</script>

<style lang="scss">
.subtitle-carousel-container {
  position: relative;
  display: block;
  width: 100%;
  height: 70px;
  padding: 0;
  font-size: 0.8em;
  top: 10px;
  // background: tomato;
}
.subtitle-carousel {
  .carousel-item {
    display: inline;
    position: absolute;
    left: 0;
    top: 0px;
    @include mobile {
      font-size: 0.8em;
    }
  }
}
</style>
