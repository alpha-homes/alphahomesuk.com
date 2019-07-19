<page-query>
query {
    basics: contentfulBasics (id: "6M3Fw83o4xqKJDHj0mNlc5") {
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
  pageContent: contentfulPage (id: "7B58Ku38VcZUaNpo6l9byT") {
    name
    fullTitle
    shortSummary
    content
  }
}
</page-query>

<template>
  <Layout>
    <div id="homepage-container">
      <HomepageHero size="fullheight" :taglines="taglines">
        <template v-slot:title>We are Alpha Homes</template>
        <template v-slot:text>{{$page.pageContent.shortSummary}}</template>
      </HomepageHero>

      <section class="section is-large">
        <div class="columns">
          <div class="column is-12">
            <section class="container content">
              <h1 id="information">{{$page.pageContent.fullTitle}}</h1>
              <p v-html="stringify($page.pageContent.content)"/>
            </section>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import HomepageHero from "~/components/home/homepage-hero.vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  metaInfo: {
    title: "London Property Specialists Since 2008"
  },
  components: {
    HomepageHero
  },
  methods: {
    stringify(input) {
      return documentToHtmlString(input);
    }
  },
  computed: {
    taglines() {
      const result = [
        this.$page.basics.tagline,
        ...this.$page.basics.altTaglines
      ];
      // console.log(result);
      return result;
    }
  }
};
</script>

<style>
</style>
