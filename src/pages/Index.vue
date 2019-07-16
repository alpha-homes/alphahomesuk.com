<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section class="hero is-medium is-primary is-bold is-fullheight has-carousel">
      <HeroCarousel size="fullheight" :heroes="heroes"/>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-12">
          <section class="container content">
            <h1>Welcome</h1>
            <p>Our World-Class Capability solution offers agile workflows a suite of immersive offerings. Mobile action points are becoming senior milestone experts. So we can hit the ground running, we will be iteratively synergising every industry leader in our space. Our Company-Wide Silo solution offers core competencies a suite of best-of-breed offerings.</p>
            <h2>Best Practices</h2>
            <p>Is your best practice prepared for end-to-end enterprise growth? Reliably integrating globally long-term stacks is crucial to our actionable cloud.</p>

            <h2>Stakeholders</h2>
            <p>Our core asset development lifecycle enables corporate, mission critical stakeholders.</p>
          </section>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import HeroCarousel from "~/components/hero-carousel.vue";

export default {
  metaInfo: {
    title: "Alpha Homes - London Property Specialists Since 2008"
  },
  components: {
    HeroCarousel
  },
  data: function() {
    return {
      heroes: [
        {
          title: "We are Alpha Homes",
          subtitle:
            "We have been serving London's landlords, tenants and agents since 2008",
          text:
            "Our World-Class Capability solution offers agile workflows a suite of immersive offerings.",
          href: "/services"
        },
        {
          title: "Lorem Ipsum",
          subtitle: "Dolor sit amet.",
          text:
            "Praesent finibus porta risus, quis lobortis felis cursus quis. Nam ut sapien.",
          href: "/lipsum"
        }
      ]
    };
  }
};
</script>

<style>
</style>
