<page-query>
query {
    contentfulBasics (id: "6M3Fw83o4xqKJDHj0mNlc5") {
  	  name
      phone
      email
      boroughs
      tagline
      altTaglines
      addressLine1
      addressLine2
      addressLine3
      postcode
      companyNumber
      businessAddress
  }
}
</page-query>

<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <HomepageHero size="fullheight" :taglines="taglines">
      <template v-slot:title>We are Alpha Homes</template>
      <template v-slot:text>Lol</template>
    </HomepageHero>

    <section class="section">
      <div class="columns">
        <div class="column is-12">
          <section class="container content">
            <h1 id="information">Welcome</h1>
            <p>Our World-Class Capability solution offers agile workflows a suite of immersive offerings. Mobile action points are becoming senior milestone experts. So we can hit the ground running, we will be iteratively synergising every industry leader in our space. Our Company-Wide Silo solution offers core competencies a suite of best-of-breed offerings.</p>
            <h2>Best Practices</h2>
            <p>{{taglines}}</p>
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
import HomepageHero from "~/components/homepage-hero.vue";

export default {
  metaInfo: {
    title: "Alpha Homes - London Property Specialists Since 2008"
  },
  components: {
    HomepageHero
  },
  computed: {
    taglines() {
      console.error(
        "\n\n\n",
        this.$page.contentfulBasics.tagline,
        this.$page.contentfulBasics.altTaglines,
        "\n\n\n"
      );
      const result = [
        this.$page.contentfulBasics.tagline,
        ...this.$page.contentfulBasics.altTaglines
      ];

      console.log(result);
      return result;
    }
  }
};
</script>

<style>
</style>
