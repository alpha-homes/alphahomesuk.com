<template>
  <h2 class="subtitle subtitle-carousel">
    <transition-group name="bounce" enter-active-class="bounceInLeft" leave-active-class="fadeOut">
      <span
        v-for="(txt, i) in subtitles"
        :key="txt"
        v-show="index === i"
        class="carousel-item"
      >{{txt}}</span>
    </transition-group>
  </h2>
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
.subtitle-carousel {
  .carousel-item {
    display: inline;
    position: absolute;
    left: 0;
    top: 40px;
  }
}
</style>
