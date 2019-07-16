<template>
  <div>
    <h2 class="subtitle" v-for="(txt, index) in subtitles" :key="index">{{txt}}</h2>
  </div>
</template>

<script>
export default {
  name: "subtitle-carousel",
  props: ["subtitles"]
};
</script>

<style>
</style>
